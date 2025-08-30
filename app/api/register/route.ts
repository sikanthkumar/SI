import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { User } from "@/models/User";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { sendVerificationEmail } from "@/lib/email";

function getBaseUrl(req: NextRequest): string {
    const proto = req.headers.get("x-forwarded-proto") || "http";
    const host = req.headers.get("x-forwarded-host") || req.headers.get("host") || "localhost:3000";
    return `${proto}://${host}`;
}

export async function POST(req: NextRequest) {
    try {
        const { name, email, password } = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        if (password.length < 8) {
            return NextResponse.json({ error: "Password must be at least 8 characters" }, { status: 400 });
        }

        await connectToDatabase();

        const existing = await User.findOne({ email: email.toLowerCase() });
        if (existing) {
            return NextResponse.json({ error: "Email already registered" }, { status: 409 });
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const verificationToken = uuid();
        const verificationTokenExpires = new Date(Date.now() + 1000 * 60 * 60 * 24); // 24h

        const user = await User.create({
            name,
            email: email.toLowerCase(),
            passwordHash,
            isVerified: false,
            verificationToken,
            verificationTokenExpires,
        });

        const baseUrl = getBaseUrl(req);
        const verifyUrl = `${baseUrl}/verify?token=${verificationToken}&email=${encodeURIComponent(
            email.toLowerCase()
        )}`;

        await sendVerificationEmail({ to: user.email, verifyUrl, name: user.name });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Register error", err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
