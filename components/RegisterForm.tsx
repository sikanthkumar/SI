"use client";

import Image from "next/image";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <form className="form">
            {/* Name Field */}
            <label className="label">Name</label>
            <div className="input-container">
              <Image
                src="/user.png"
                alt="User Icon"
                width={20}
                height={20}
                className="input-icon"
              />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="input"
              />
            </div>

            {/* Email Field */}
            <label className="label">Email</label>
            <div className="input-container">
              <Image
                src="/mail.png"
                alt="Mail Icon"
                width={20}
                height={20}
                className="input-icon"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input"
              />
            </div>

            {/* Password Field */}
            <label className="label">Set Password</label>
            <div className="input-container">
              <Image
                src="/password.png"
                alt="Password Icon"
                width={20}
                height={20}
                className="input-icon"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="input"
              />
            </div>

            {/* Terms */}
            <div className="terms">
              <input type="checkbox" /> I agree to{" "}
              <a href="#">Terms and Privacy</a>
            </div>

            <button type="submit" className="btn">
              Register
            </button>
          </form>

          {/* Social Login */}
          <div className="social">
            <p>or continue with</p>
            <div className="icons">
              <Image src="/google.png" alt="Google" width={30} height={30} />
              <Image src="/facebook.png" alt="Facebook" width={30} height={30} />
              <Image src="/linkedIn.png" alt="LinkedIn" width={30} height={30} />
            </div>
          </div>

          <p className="signin">
            Already have an account? <a href="/login">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
}
