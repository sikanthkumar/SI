import CareerGuidance from "@/components/CareerGuidance";
import { cookies } from "next/headers";
import { verifyAuthToken } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function CareerGuidancePage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;
    const payload = token ? verifyAuthToken(token) : null;
    if (!payload) {
        redirect("/login?next=/career-guidance");
    }
    return (
        <main className="flex items-center justify-center min-h-screen">
            <CareerGuidance />
        </main>
    );
}


