<template>
    <div class="min-h-screen bg-gray-100 flex">
        <!-- Sidebar -->
        <Sidebar />

        <!-- Main Content -->
        <div class="flex-1 ml-64">
            <nav class="bg-white shadow">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex items-center">
                            <h1 class="text-xl font-bold">Admin Dashboard</h1>
                        </div>
                        <div class="flex items-center">
                            <button
                                @click="handleLogout"
                                class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                    <h2 class="text-2xl font-bold mb-6">Welcome, Admin</h2>

                    <!-- Statistik Cards -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div class="bg-white rounded-lg shadow p-6">
                            <h3 class="text-lg font-semibold text-gray-700">
                                Total Users
                            </h3>
                            <p class="text-3xl font-bold text-blue-600">
                                1,234
                            </p>
                        </div>
                        <div class="bg-white rounded-lg shadow p-6">
                            <h3 class="text-lg font-semibold text-gray-700">
                                Total Orders
                            </h3>
                            <p class="text-3xl font-bold text-green-600">856</p>
                        </div>
                        <div class="bg-white rounded-lg shadow p-6">
                            <h3 class="text-lg font-semibold text-gray-700">
                                Revenue
                            </h3>
                            <p class="text-3xl font-bold text-purple-600">
                                $12,345
                            </p>
                        </div>
                    </div>

                    <!-- Recent Activity -->
                    <div class="bg-white rounded-lg shadow">
                        <div class="p-6">
                            <h3
                                class="text-lg font-semibold text-gray-700 mb-4"
                            >
                                Recent Activity
                            </h3>
                            <div class="space-y-4">
                                <div
                                    v-for="(
                                        activity, index
                                    ) in recentActivities"
                                    :key="index"
                                    class="flex items-center py-3 border-b border-gray-200"
                                >
                                    <div class="flex-1">
                                        <p
                                            class="text-sm font-medium text-gray-900"
                                        >
                                            {{ activity.title }}
                                        </p>
                                        <p class="text-sm text-gray-500">
                                            {{ activity.time }}
                                        </p>
                                    </div>
                                    <span
                                        :class="activity.statusColor"
                                        class="px-3 py-1 rounded-full text-sm"
                                    >
                                        {{ activity.status }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";

export default {
    components: {
        Sidebar,
    },
    data() {
        return {
            recentActivities: [
                {
                    title: "New order received",
                    time: "5 minutes ago",
                    status: "Pending",
                    statusColor: "bg-yellow-100 text-yellow-800",
                },
                {
                    title: "Payment confirmed",
                    time: "2 hours ago",
                    status: "Completed",
                    statusColor: "bg-green-100 text-green-800",
                },
                {
                    title: "New user registration",
                    time: "4 hours ago",
                    status: "New",
                    statusColor: "bg-blue-100 text-blue-800",
                },
            ],
        };
    },
    created() {
        // Check if admin is logged in
        if (!localStorage.getItem("isAdminLoggedIn")) {
            this.$router.push("/login");
        }
    },
    methods: {
        handleLogout() {
            // Clear admin session
            localStorage.removeItem("isAdminLoggedIn");
            // Redirect to login
            this.$router.push("/login");
        },
    },
};
</script>
