import { cookies } from "next/headers";
import { verifyAuthToken } from "@/lib/auth";
import { redirect } from "next/navigation";

export default function Home() {
  const token = cookies().get("auth_token")?.value;
  const payload = token ? verifyAuthToken(token) : null;

  if (payload) {
    redirect("/dashboard");
  }

  redirect("/login");
}