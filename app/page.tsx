import { cookies } from "next/headers";
import { verifyAuthToken } from "@/lib/auth";
import HomeScreen from "@/components/HomeScreen";

export default function Home() {
  const token = cookies().get("auth_token")?.value;
  const payload = token ? verifyAuthToken(token) : null;

  if (payload) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <div className="right">
          <h1 className="title">Welcome back</h1>
          <p style={{ textAlign: "center", marginBottom: 16 }}>You are already logged in.</p>
          <a className="link" href="/dashboard">Go to dashboard</a>
        </div>
      </main>
    );
  }

  return <HomeScreen />;
}