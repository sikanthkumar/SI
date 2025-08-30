"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!/.+@.+\..+/.test(email) || password.length < 8) {
            setError("Enter a valid email and an 8+ character password.");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || "Login failed");
                return;
            }
            router.push("/dashboard");
        } catch (e) {
            console.error(e);
            setError("Server error. Try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="wallpaper">
            <div className="container">
                <div className="left">
                    <Image src="/Card.png" alt="Documents" width={400} height={500} className="doc-img" />
                </div>
                <div className="right">
                    <h1 className="title">Sign in</h1>

                    {error && <div className="message message--error">{error}</div>}

                    <form className="form" onSubmit={handleSubmit}>
                        <label className="label">Email</label>
                        <div className="input-container">
                            <Image src="/mail.png" alt="Mail Icon" width={18} height={18} className="input-icon" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="input"
                                required
                            />
                        </div>

                        <label className="label">Password</label>
                        <div className="input-container">
                            <Image src="/password.png" alt="Password Icon" width={18} height={18} className="input-icon" />
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                className="input"
                                required
                                minLength={8}
                            />
                            <button
                                type="button"
                                className="input-action"
                                onClick={() => setShowPassword((v: boolean) => !v)}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        <button type="submit" className="btn" disabled={loading}>
                            {loading ? "Signing in..." : "Sign in"}
                        </button>
                    </form>

                    <p className="signin">
                        New here? <a className="link" href="/register">Create an account</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
