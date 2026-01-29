export default function DashboardPage() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    <h3 className="text-gray-500 text-sm font-medium">Total Projects</h3>
                    <p className="text-3xl font-bold mt-2">--</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    <h3 className="text-gray-500 text-sm font-medium">Events Processed</h3>
                    <p className="text-3xl font-bold mt-2">--</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    <h3 className="text-gray-500 text-sm font-medium">System Health</h3>
                    <p className="text-3xl font-bold mt-2 text-green-500">Operational</p>
                </div>
            </div>
        </div>
    )
}
