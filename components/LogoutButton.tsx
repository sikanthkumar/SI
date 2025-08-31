"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleLogout = async () => {
        setLoading(true);
        try {
            await fetch("/api/logout", { method: "POST" });
            router.replace("/login");
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button className="btn" onClick={handleLogout} disabled={loading}>
            {loading ? "Logging out..." : "Logout"}
        </button>
    );
}
