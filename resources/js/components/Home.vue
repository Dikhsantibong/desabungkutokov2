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

        <!-- Overlay Text -->
        <div class="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center text-white z-5 rounded-lg" style="transform: translateY(120px);">
          <h1 class="text-5xl font-bold mb-4">SELAMAT DATANG</h1>
          <p class="text-xl">DEWATARI sebagai wadah layanan untuk berwisata di Desai Taman Sari</p>
        </div>
      </div>
    </div>

    <!-- Berita dan Event Section -->
    <div class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Berita dan Event</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Event Card 1 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
            <img src="/images/berita/berita1.png" alt="Event 1" class="w-[400px] h-[446px] object-cover">
            <div class="p-4">
              <h3 class="font-bold text-xl mb-2">Lomba Foto & Reels</h3>
              <p>Yukk ikutan lombanya, buat karya semenarik mungkin...</p>
            </div>
          </div>

          <!-- Event Card 2 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
            <img src="/images/berita/berita2.png" alt="Event 2" class="w-[400px] h-[446px] object-cover">
            <div class="p-4">
              <h3 class="font-bold text-xl mb-2">Event Bulan November 2022</h3>
              <p>Rangkaian acara Kamandaka ciptarasa bulan November...</p>
            </div>
          </div>

          <!-- Event Card 3 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
            <img src="/images/berita/berita3.png" alt="Event 3" class="w-[400px] h-[446px] object-cover">
            <div class="p-4">
              <h3 class="font-bold text-xl mb-2">Pagelaran Wayang Kulit</h3>
              <p>Acara wayang kulit dengan lakon yang terkenal yaitu...</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Team Section -->
    <div class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Team</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
          <!-- Team Member Cards -->
          <div v-for="member in teamMembers" :key="member.name" class="text-center">
            <img :src="member.image" :alt="member.name" class="w-32 h-32 rounded-full mx-auto mb-4">
            <h3 class="font-bold">{{ member.name }}</h3>
          </div>
        </div>
      </div>
    </div>

    <!-- Tentang Kami Section -->
    <div class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Tentang Kami</h2>
        <p class="text-center max-w-3xl mx-auto">
          Website Dewatari memberikan layanan yang dapat digunakan wisatawan untuk mengetahui informasi pada objek wisata dengan mudah. Serta dan perangnya. Website ini bertujuan untuk memberikan informasi kepada masyarakat. Melalui Website Dewatari akan mempermudah wisatawan dalam merencanakan perjalanan berwisata, dan juga website ini menyediakan layanan untuk melakukan pemesanan tiket online sehingga wisatawan dapat memesan dari jauh-jauh hari.
        </p>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-[#1F1F1F] text-white py-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/path-to-logo.png" alt="Dewatari Logo" class="h-12 mb-4">
            <div class="flex space-x-4">
              <a href="#" class="text-white"><i class="fab fa-instagram"></i></a>
              <a href="#" class="text-white"><i class="fab fa-facebook"></i></a>
              <a href="#" class="text-white"><i class="fab fa-whatsapp"></i></a>
            </div>
          </div>
          <div>
            <h4 class="font-bold mb-4">Dewatari</h4>
            <ul>
              <li>Petilasan Curungandul</li>
              <li>Waduk Sempor</li>
              <li>Asrama Budha</li>
              <li>Embung Banasading</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4">Produk Wisata</h4>
            <ul>
              <li>Makanan Khas</li>
              <li>Souvenir</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4">Kontak</h4>
            <p>Tamansari, Karanglewas, Banyumas, Jawa Tengah, 53161</p>
            <p>dewatari@gmail.com</p>
            <p>+62 812 7275 5504</p>
          </div>
        </div>
      </div>
    </footer>
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
          src: '/images/herosection/bg-hero4.jpeg',
          alt: 'Hero Image 4'
        },
        {
          id: 5,
          src: '/images/herosection/bg-hero2.jpg',
          alt: 'Hero Image 5'
        }
      ],
      teamMembers: [
        { name: 'Asep Saefullah', image: '/path-to-asep-image.jpg' },
        { name: 'Aulia Naresti', image: '/path-to-aulia-image.jpg' },
        { name: 'Nabila Aminatun', image: '/path-to-nabila-image.jpg' },
        { name: 'Bintang Shallahuddin', image: '/path-to-bintang-image.jpg' },
        { name: 'David Aditya', image: '/path-to-david-image.jpg' },
        { name: 'Daffa Hafid', image: '/path-to-daffa-image.jpg' }
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
      setInterval(this.nextImage, 5000) // Change image every 5 seconds
    }
  },
  mounted() {
    this.startCarousel()
  }
}
</script>

<style scoped>
/* Tambahkan custom styles jika diperlukan */
.router-link-active {
  font-weight: bold;
}

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