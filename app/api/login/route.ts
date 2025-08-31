import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { User } from "@/models/User";
import bcrypt from "bcrypt";
import { signAuthToken, setAuthCookie } from "@/lib/auth";

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
        }

        await connectToDatabase();

        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        if (!user.isVerified) {
            return NextResponse.json({ error: "Please verify your email before logging in" }, { status: 403 });
        }

        const match = await bcrypt.compare(password, user.passwordHash);
        if (!match) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        const token = signAuthToken({ sub: String(user._id), email: user.email, name: user.name });
        setAuthCookie(token);

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Login error", err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
