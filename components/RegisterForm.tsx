"use client";

import { useMemo, useState, type FormEvent, type ChangeEvent } from "react";
import { User, Mail, Lock } from "lucide-react"; // ✅ default icons

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const isValid = useMemo(() => {
    const emailOk = /.+@.+\..+/.test(email);
    const nameOk = name.trim().length >= 2;
    const passOk = password.length >= 8;
    return emailOk && nameOk && passOk;
  }, [name, email, password]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!isValid) {
      setError("Please fill all fields correctly (min 2-char name, valid email, 8+ char password).");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Verification email sent! Please check your inbox.");
        setName("");
        setEmail("");
        setPassword("");
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wallpaper">
      <div className="container">
        <div className="left">
          <img
            src="/Card.png"
            alt="Documents"
            width={400}
            height={500}
            className="doc-img"
          />
        </div>

        <div className="right">
          <h1 className="title">Create account</h1>

          {success && <div className="message message--success">{success}</div>}
          {error && <div className="message message--error">{error}</div>}

          <form className="form" onSubmit={handleSubmit}>
            {/* Name */}
            <label className="label">Name</label>
            <div className="input-container">
              <User className="input-icon" size={18} />
              <input
                type="text"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                placeholder="Enter your name"
                className="input"
                required
              />
            </div>

            {/* Email */}
            <label className="label">Email</label>
            <div className="input-container">
              <Mail className="input-icon" size={18} />
              <input
                type="email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input"
                required
              />
            </div>

            {/* Password */}
            <label className="label">Set Password</label>
            <div className="input-container">
              <Lock className="input-icon" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                placeholder="At least 8 characters"
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

            <div className="terms">
              <input type="checkbox" required /> I agree to{" "}
              <a className="link" href="#">
                Terms and Privacy
              </a>
            </div>

            <button type="submit" className="btn" disabled={loading || !isValid}>
              {loading ? "Registering..." : "Create account"}
            </button>
          </form>

          <p className="signin">
            Already have an account?{" "}
            <a className="link" href="/login">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
