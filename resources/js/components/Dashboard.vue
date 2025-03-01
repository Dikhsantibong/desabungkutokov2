<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-xl font-bold">Dashboard</h1>
          </div>
          <div class="flex items-center">
            <button 
              @click="handleLogout"
              class="text-gray-600 hover:text-gray-900"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
    
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <h2 class="text-2xl font-bold">Welcome to your Dashboard</h2>
        <!-- Add your dashboard content here -->
      </div>
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogout() {
      // Implement logout logic here
      this.$router.push('/login')
    }
  }
}
</script> 