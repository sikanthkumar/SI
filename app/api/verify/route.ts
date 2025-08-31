import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { User } from "@/models/User";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const token = searchParams.get("token");
        const email = searchParams.get("email");

        if (!token || !email) {
            return NextResponse.json({ error: "Invalid verification link" }, { status: 400 });
        }

        await connectToDatabase();

        const user = await User.findOne({ email: email.toLowerCase(), verificationToken: token });

        if (!user) {
            return NextResponse.json({ error: "Invalid or expired token" }, { status: 400 });
        }

        if (!user.verificationTokenExpires || user.verificationTokenExpires.getTime() < Date.now()) {
            return NextResponse.json({ error: "Token expired" }, { status: 400 });
        }

        user.isVerified = true;
        user.verificationToken = null;
        user.verificationTokenExpires = null;
        await user.save();

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Verify error", err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
