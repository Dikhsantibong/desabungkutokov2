<template>
  <div class="min-h-screen">
    <!-- Navbar -->
    <nav class="bg-[#E49B0F] py-4">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
          <div class="text-2xl font-bold text-white">DEWATARI</div>
          <div class="space-x-6">
            <router-link to="/" class="text-white">Home</router-link>
            <router-link to="/dewatari" class="text-white">Dewatari</router-link>
            <router-link to="/produk-lokal" class="text-white">Produk Lokal</router-link>
            <router-link to="/paket-tour" class="text-white">Paket Tour</router-link>
            <router-link to="/informasi" class="text-white">Informasi</router-link>
            <router-link to="/pembelian-tiket" class="text-white">Pembelian Tiket</router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="relative h-[700px] p-10">
      <div class="relative h-full max-w-[1300px] mx-auto">
        <transition-group name="fade">
          <img 
            v-for="(image, index) in carouselImages" 
            :key="image.id"
            :src="image.src"
            :alt="image.alt"
            v-show="currentImage === index"
            class="absolute w-full h-full object-cover transition-opacity duration-500 rounded-lg"
            style="width: 1300px; height: 625px;"
          >
        </transition-group>

        <!-- Overlay Text -->
        <div class="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center text-white z-5 rounded-lg" style="transform: translateY(120px);">
          <h1 class="text-5xl font-bold mb-4">INFORMASI</h1>
          <p class="text-xl">Informasi terkini seputar Desa Taman Sari</p>
        </div>

        <!-- Carousel Navigation -->
        <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          <button 
            v-for="(image, index) in carouselImages" 
            :key="index"
            @click="currentImage = index"
            class="w-3 h-3 rounded-full transition-all duration-300"
            :class="currentImage === index ? 'bg-white' : 'bg-white/50'"
          ></button>
        </div>

        <!-- Carousel Arrows -->
        <button 
          @click="prevImage" 
          class="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          @click="nextImage" 
          class="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Content Section -->
    <div class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Informasi Terkini</h2>
        <!-- Add your information content here -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentImage: 0,
      carouselImages: [
        {
          id: 1,
          src: '/images/herosection/bg-hero.jpg',
          alt: 'Hero Image 1'
        },
        {
          id: 2,
          src: '/images/herosection/bg-hero2.jpg',
          alt: 'Hero Image 2'
        },
        {
          id: 3,
          src: '/images/herosection/bg-hero3.jpg',
          alt: 'Hero Image 3'
        },
        {
          id: 4,
          src: '/images/herosection/bg-hero4.jpg',
          alt: 'Hero Image 4'
        },
        {
          id: 5,
          src: '/images/herosection/bg-hero5.jpg',
          alt: 'Hero Image 5'
        }
      ]
    }
  },
  methods: {
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.carouselImages.length
    },
    prevImage() {
      this.currentImage = this.currentImage === 0 
        ? this.carouselImages.length - 1 
        : this.currentImage - 1
    },
    startCarousel() {
      setInterval(this.nextImage, 5000)
    }
  },
  mounted() {
    this.startCarousel()
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style> 