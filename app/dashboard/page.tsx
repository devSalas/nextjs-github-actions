import { auth } from "@/auth";

async function Dashboard() {
    const session = await auth()
    if (!session) return <div>No estas autenticado.</div>

    return (
        <div>
            <div>
                <pre>{JSON.stringify(session, null, 2)}</pre>
            </div>
        </div>
    );
}

export default Dashboard;