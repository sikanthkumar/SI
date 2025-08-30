import LogoutButton from "@/components/LogoutButton";

export default function DashboardPage() {
    return (
        <main className="flex items-center justify-center min-h-screen">
            <div className="right">
                <h1 className="title">Dashboard</h1>
                <p style={{ textAlign: "center", marginBottom: 16 }}>You are logged in.</p>
                <LogoutButton />
            </div>
        </main>
    );
}
