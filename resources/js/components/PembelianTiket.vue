<template>
  <div class="min-h-screen">
    <!-- Navbar -->
    <nav class="bg-[#0992d6] py-4">
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
        <div class="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center text-white z-5 rounded-lg" style="transform: translateY(180px);">
          <h1 class="text-5xl font-bold mb-4">PEMBELIAN TIKET</h1>
          <p class="text-xl">Pesan tiket wisata Anda dengan mudah</p>
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
    <div class="w-full mb-5">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Pembelian Tiket</h2>
        <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
          <form class="space-y-6">
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2" for="nama">
                Nama Lengkap
              </label>
              <input 
                type="text"
                id="nama"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0992d6]"
                placeholder="Masukkan nama lengkap"
              >
            </div>

            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                Email
              </label>
              <input 
                type="email"
                id="email"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0992d6]"
                placeholder="Masukkan email"
              >
            </div>

            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2" for="nohp">
                Nomor HP
              </label>
              <input 
                type="tel"
                id="nohp"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0992d6]"
                placeholder="Masukkan nomor HP"
              >
            </div>

            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2" for="tanggal">
                Tanggal Kunjungan
              </label>
              <input 
                type="date"
                id="tanggal"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0992d6]"
              >
            </div>

            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2" for="objek">
                Objek Wisata
              </label>
              <select 
                id="objek"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0992d6]"
              >
                <option value="">Pilih objek wisata</option>
                <option value="petilasan">Petilasan Curungandul</option>
                <option value="waduk">Waduk Sempor</option>
                <option value="asrama">Asrama Budha</option>
                <option value="embung">Embung Banasading</option>
              </select>
            </div>

            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2" for="jenis">
                Jenis Tiket
              </label>
              <select 
                id="jenis"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0992d6]"
              >
                <option value="">Pilih jenis tiket</option>
                <option value="dewasa">Tiket Dewasa</option>
                <option value="anak">Tiket Anak-anak</option>
                <option value="group">Tiket Rombongan</option>
              </select>
            </div>

            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2" for="jumlah">
                Jumlah Tiket
              </label>
              <input 
                type="number"
                id="jumlah"
                min="1"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0992d6]"
                placeholder="Masukkan jumlah tiket"
              >
            </div>

            <button
              type="submit"
              class="w-full bg-[#0992d6] text-white font-bold py-2 px-4 rounded-md hover:bg-[#0882c0] transition-colors"
            >
              Pesan Tiket
            </button>
          </form>
        </div>
      </div>
    </div>

     <!-- Footer -->
     <footer class="bg-[#1F1F1F] text-white py-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="w-full h-[300px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.4728374253684!2d109.2231493!3d-7.4169397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655e9bf2ba7c15%3A0x6e1c06c86459f22a!2sTamansari%2C%20Kec.%20Karanglewas%2C%20Kabupaten%20Banyumas%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1634567890123!5m2!1sid!2sid"
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="rounded-lg"
            ></iframe>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src="/path-to-logo.png" alt="Dewatari Logo" class="h-12 mb-4">
              <div class="flex space-x-4">
                <a href="#" class="text-white hover:text-[#0891d7] transition-colors">
                    <i class="fab fa-instagram fa-lg"></i>
                </a>
                <a href="#" class="text-white hover:text-[#0891d7] transition-colors">
                    <i class="fab fa-facebook fa-lg"></i>
                </a>
                <a href="#" class="text-white hover:text-[#0891d7] transition-colors">
                    <i class="fab fa-whatsapp fa-lg"></i>
                </a>
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
            <div class="md:col-span-3">
              <h4 class="font-bold mb-4">Kontak</h4>
              <p>Tamansari, Karanglewas, Banyumas, Jawa Tengah, 53161</p>
              <p>dewatari@gmail.com</p>
              <p>+62 812 7275 5504</p>
            </div>
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