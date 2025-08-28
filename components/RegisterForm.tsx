"use client";

import Image from "next/image";
import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Verification email sent! Please check your inbox.");
        setName("");
        setEmail("");
        setPassword("");
      } else {
        alert(`❌ ${data.error || "Something went wrong"}`);
      }
    } catch (error) {
      console.error(error);
      alert("❌ Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wallpaper">
      <div className="container">
        {/* Left side image */}
        <div className="left">
          <Image
            src="/Card.png"
            alt="Documents"
            width={400}
            height={500}
            className="doc-img"
          />
        </div>

        {/* Right side Register Form */}
        <div className="right">
          <h1 className="title">Register</h1>
          <form className="form" onSubmit={handleSubmit}>
            {/* Name Field */}
            <label className="label">Name</label>
            <div className="input-container">
              <Image
                src="/user.png"
                alt="User Icon"
                width={18}
                height={18}
                className="input-icon"
              />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="input"
                required
              />
            </div>

            {/* Email Field */}
            <label className="label">Email</label>
            <div className="input-container">
              <Image
                src="/mail.png"
                alt="Mail Icon"
                width={18}
                height={18}
                className="input-icon"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input"
                required
              />
            </div>

            {/* Password Field (no toggle) */}
            <label className="label">Set Password</label>
            <div className="input-container">
              <Image
                src="/password.png"
                alt="Password Icon"
                width={18}
                height={18}
                className="input-icon"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="input"
                required
              />
            </div>

            {/* Terms */}
            <div className="terms">
              <input type="checkbox" required /> I agree to{" "}
              <a href="#">Terms and Privacy</a>
            </div>

            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <p className="signin">
            Already have an account? <a href="/login">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
}
