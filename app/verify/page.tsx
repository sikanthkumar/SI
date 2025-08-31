"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function VerifyPage() {
    const params = useSearchParams();
    const router = useRouter();
    const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
    const [message, setMessage] = useState("Verifying your email...");

    useEffect(() => {
        const token = params.get("token");
        const email = params.get("email");
        if (!token || !email) {
            setStatus("error");
            setMessage("Invalid verification link.");
            return;
        }
        const run = async () => {
            try {
                const res = await fetch(`/api/verify?token=${encodeURIComponent(token)}&email=${encodeURIComponent(email)}`);
                const data = await res.json();
                if (!res.ok) {
                    setStatus("error");
                    setMessage(data.error || "Verification failed.");
                    return;
                }
                setStatus("success");
                setMessage("Email verified! Redirecting to sign in...");
                setTimeout(() => router.push("/login"), 1500);
            } catch (e) {
                setStatus("error");
                setMessage("Server error.");
            }
        };
        run();
    }, [params, router]);

    return (
        <main className="flex items-center justify-center min-h-screen">
            <div className="right">
                <h1 className="title">Verify Email</h1>
                <div className={`message ${status === "success" ? "message--success" : status === "error" ? "message--error" : "message--info"}`}>
                    {message}
                </div>
            </div>
        </main>
    );
}
