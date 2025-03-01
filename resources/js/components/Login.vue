<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
      <div>
        <h2 class="text-center text-3xl font-bold text-gray-900">Login</h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input 
            id="email" 
            type="email" 
            v-model="email"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          >
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input 
            id="password" 
            type="password"
            v-model="password" 
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          >
        </div>
        <div>
          <button 
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async handleLogin() {
      try {
        // Implement login logic here
        // If successful, redirect to dashboard
        this.$router.push('/dashboard')
      } catch (error) {
        console.error('Login failed:', error)
      }
    }
  }
}
</script> 