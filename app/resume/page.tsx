import ResumePage from "@/components/ResumePage";
import { cookies } from "next/headers";
import { verifyAuthToken } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ResumeRoute() {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;
    const payload = token ? verifyAuthToken(token) : null;
    if (!payload) {
        redirect("/login?next=/resume");
    }
    return <ResumePage />;
}


