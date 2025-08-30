import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyAuthToken } from "@/lib/auth";

export async function GET(req: NextRequest) {
    const token = cookies().get("auth_token")?.value;
    if (!token) return NextResponse.json({ authenticated: false }, { status: 200 });

    const payload = verifyAuthToken(token);
    if (!payload) return NextResponse.json({ authenticated: false }, { status: 200 });

    return NextResponse.json({ authenticated: true, user: payload }, { status: 200 });
}
