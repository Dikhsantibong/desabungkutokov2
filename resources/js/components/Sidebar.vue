<template>
    <div class="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div class="flex flex-col h-full">
            <!-- Logo/Brand -->
            <div class="flex items-center justify-center h-16 bg-blue-600">
                <span class="text-white text-xl font-bold">Admin Panel</span>
            </div>

            <!-- Navigation Menu -->
            <nav class="flex-1 px-4 py-6">
                <router-link
                    to="/dashboard"
                    class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                    Dashboard
                </router-link>
                <!-- Add more menu items here later -->
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: "Sidebar",
};
</script>

<style scoped>
.router-link-active {
    background-color: #f3f4f6;
    font-weight: 600;
}
</style>
