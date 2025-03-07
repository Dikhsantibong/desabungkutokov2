<template>
  <nav class="fixed top-0 left-0 right-0 z-50 py-4 bg-transparent">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <img src="/images/logo/logo.png" alt="Logo" class="h-24 mr-2">
        </div>
        <div class="flex items-center space-x-6">
          <router-link 
            to="/"
            class="text-white uppercase font-['Open_Sans'] text-[14px] tracking-wider transition-colors hover:text-[#0992d6]"
          >
            Home
          </router-link>
          
          <!-- Profile Dropdown -->
          <div class="relative" @mouseenter="isOpen = true" @mouseleave="isOpen = true">
            <button 
              @click="toggleDropdown"
              class="text-white uppercase font-['Open_Sans'] text-[14px] tracking-wider transition-colors hover:text-[#0992d6] flex items-center"
            >
              Profile
              <svg 
                class="w-4 h-4 ml-1 transform transition-transform duration-200" 
                :class="{ 'rotate-180': isOpen }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              v-show="isOpen"
              class="absolute right-0 mt-2 w-48 bg-white shadow-lg py-1 z-50"
              @click.stop
            >
              <router-link 
                to="/sejarah" 
                class="block px-4 py-2 text-[14px] text-gray-700 hover:bg-gray-100 hover:text-[#0992d6]"
                @click="isOpen = false"
              >
                SEJARAH DESA
              </router-link>
              <router-link 
                to="/visi-misi" 
                class="block px-4 py-2 text-[14px] text-gray-700 hover:bg-gray-100 hover:text-[#0992d6]"
                @click="isOpen = false"
              >
                VISI MISI 
              </router-link>
            </div>
          </div>

          <router-link 
            to="/dewatari"
            class="text-white uppercase font-['Open_Sans'] text-[14px] tracking-wider transition-colors hover:text-[#0992d6]"
          >
            Bungkutoko
          </router-link>
          <router-link 
            to="/produk-lokal"
            class="text-white uppercase font-['Open_Sans'] text-[14px] tracking-wider transition-colors hover:text-[#0992d6]"
          >
            Produk Lokal
          </router-link>
          <router-link 
            to="/paket-tour"
            class="text-white uppercase font-['Open_Sans'] text-[14px] tracking-wider transition-colors hover:text-[#0992d6]"
          >
            Paket Tour
          </router-link>
          <router-link 
            to="/informasi"
            class="text-white uppercase font-['Open_Sans'] text-[14px] tracking-wider transition-colors hover:text-[#0992d6]"
          >
            Informasi
          </router-link>
          <router-link 
            to="/pembelian-tiket"
            class="text-white uppercase font-['Open_Sans'] text-[14px] tracking-wider transition-colors hover:text-[#0992d6]"
          >
            Pembelian Tiket
          </router-link>

          <!-- Gallery Dropdown -->
          <div class="relative" @mouseenter="galleryOpen = true" @mouseleave="galleryOpen = false">
            <button 
              @click="toggleGalleryDropdown"
              class="text-white uppercase font-['Open_Sans'] text-[14px] tracking-wider transition-colors hover:text-[#0992d6] flex items-center"
            >
              Gallery
              <svg 
                class="w-4 h-4 ml-1 transform transition-transform duration-200" 
                :class="{ 'rotate-180': galleryOpen }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              v-show="galleryOpen"
              class="absolute right-0 mt-2 w-48 bg-white shadow-lg py-1 z-50"
              @click.stop
            >
              <router-link 
                to="/gallery-foto" 
                class="block px-4 py-2 text-[14px] text-gray-700 hover:bg-gray-100 hover:text-[#0992d6]"
                @click="galleryOpen = false"
              >
                GALLERY FOTO
              </router-link>
              <router-link 
                to="/gallery-video" 
                class="block px-4 py-2 text-[14px] text-gray-700 hover:bg-gray-100 hover:text-[#0992d6]"
                @click="galleryOpen = true"
              >
                GALLERY VIDEO
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isOpen: false,
      galleryOpen: false
    }
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
    toggleGalleryDropdown() {
      this.galleryOpen = !this.galleryOpen
    }
  },
  mounted() {
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      const dropdown = this.$el.querySelector('.relative')
      if (!dropdown.contains(e.target)) {
        this.isOpen = false
        this.galleryOpen = false
      }
    })
  }
}
</script>

<style scoped>
/* Add transition for dropdown */
.absolute {
  transition: opacity 0.2s ease-in-out;
}
</style>
