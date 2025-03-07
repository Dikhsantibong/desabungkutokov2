<template>
  <div class="min-h-screen animate-fade-in">
    <Navbar />
    <!-- Navbar -->
    

    <!-- Hero Section -->
    <div class="relative h-screen">
      <!-- Full-width background image -->
      <div class="absolute inset-0">
        <img 
          :src="carouselImages[currentImage].src" 
          :alt="carouselImages[currentImage].alt"
          class="w-full h-full object-cover"
        >
        <!-- Dark overlay -->
        <div class="absolute inset-0 bg-black/30"></div>
      </div>

      <!-- Hero Content -->
      <div class="absolute z-10 h-full flex flex-col justify-center items-start px-20 max-w-7xl mx-auto">
        <h1 class="text-6xl font-bold text-white mb-4" style="font-family: 'Poppins', sans-serif;">
          Pesona Bungkutoko
        </h1>
        <p class="text-xl text-white mb-8" style="font-family: 'Poppins', sans-serif;">
          Wisata Bahari yang Indah dan Mempesona
        </p>
        <button class="bg-white bg-opacity-50 text-[#0992d6] px-8 py-3 rounded-md font-semibold hover:bg-[#0992d6] hover:text-white transition-colors duration-300">
          RESERVASI SEKARANG
        </button>
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

     
    </div>

    <!-- Tentang Kami Section -->
    <div class="py-16 bg-gray-100 invisible opacity-0 transition-all duration-1000" 
         ref="tentangKami"
         style="transform: translateY(20px);">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div class="w-full md:w-1/2 pr-4">
          <h2 class="text-3xl font-bold text-left mb-2" style="font-family: 'Inter', sans-serif; color: #323233; max-width: 80%;">Desa Wisata Bungkutoko</h2>
          <span class="block w-1/9 h-1 bg-[#0992d6] my-1 mb-7"></span>
          <p class="text-left max-w-3xl mx-auto mb-4" style="font-family: 'Noto Sans', sans-serif; color: #929394; font-size: 14px;">
            Desa Bungkutoko, yang terletak di Kecamatan Nambo, Kota Kendari, merupakan wilayah pesisir dengan potensi ekonomi dan wisata yang khas. Wilayah ini dikelilingi oleh perairan yang menjadi jalur utama aktivitas masyarakat, Bungkutoko memiliki sektor kelautan yang terus bertumbuh, terutama dalam bidang perikanan dan UMKM berbasis hasil laut. Keberadaan Jembatan Kuning Bungkutoko semakin meningkatkan mobilitas masyarakat dan mendukung pertumbuhan ekonomi lokal. 
          </p>
          <p class="text-left max-w-3xl mx-auto" style="font-family: 'Noto Sans', sans-serif; color: #929394; font-size: 14px;">
            Masyarakatnya memiliki keterikatan kuat dengan budaya maritim, di mana pelaku UMKM, terutama perempuan pesisir, mengolah hasil laut menjadi produk bernilai tambah. Selain itu, Bungkutoko juga memiliki transportasi khas berupa taksi boat, yang tidak hanya berfungsi sebagai sarana mobilitas tetapi juga memiliki potensi besar dalam sektor pariwisata. Dengan berbagai keunggulan ini, Bungkutoko terus berkembang melalui program pemberdayaan masyarakat yang mendorong inovasi UMKM dan ekowisata, menjadikannya destinasi yang kaya akan budaya serta peluang ekonomi.
          </p>
        </div>
        <div class="w-full md:w-1/2">
          <img src="/images/tentang-kami/image1.jpg" alt="Desa Wisata Wanurejo" class="w-full h-auto rounded-lg shadow-md">
        </div>
      </div>
    </div>

    <!-- Berita dan Event Section -->
    <div class="py-16 bg-gray-100 invisible opacity-0 transition-all duration-1000" 
         ref="beritaEvent"
         style="transform: translateX(-100px);">
      <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-4" style="color: #1a1a1a;">Berita dan Event</h2>
        <div class="flex justify-end items-center mb-12">
          <router-link to="/informasi" class="text-[#0992d6] hover:text-[#0882c0] font-semibold flex items-center">
            Lihat Semua
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </router-link>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Event Card 1 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
            <img src="/images/berita/berita1.png" alt="Event 1" class="w-[400px] h-[446px] object-cover">
            <div class="p-4">
              <h3 class="font-bold text-xl mb-2">Lomba Foto & Reels</h3>
              <p>Yukk ikutan lombanya, buat karya semenarik mungkin...</p>
              <button class="mt-4 bg-[#0992d6] text-white px-4 py-2 rounded hover:bg-[#0882c0]">Lihat Selengkapnya</button>
            </div>
          </div>

          <!-- Event Card 2 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
            <img src="/images/berita/berita2.png" alt="Event 2" class="w-[400px] h-[446px] object-cover">
            <div class="p-4">
              <h3 class="font-bold text-xl mb-2">Event Bulan November 2022</h3>
              <p>Rangkaian acara Kamandaka ciptarasa bulan November...</p>
              <button class="mt-4 bg-[#0992d6] text-white px-4 py-2 rounded hover:bg-[#0882c0]">Lihat Selengkapnya</button>
            </div>
          </div>

          <!-- Event Card 3 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
            <img src="/images/berita/berita3.png" alt="Event 3" class="w-[400px] h-[446px] object-cover">
            <div class="p-4">
              <h3 class="font-bold text-xl mb-2">Pagelaran Wayang Kulit</h3>
              <p>Acara wayang kulit dengan lakon yang terkenal yaitu...</p>
              <button class="mt-4 bg-[#0992d6] text-white px-4 py-2 rounded hover:bg-[#0882c0]">Lihat Selengkapnya</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tour Packages Section -->
    <div class="py-16 bg-white invisible opacity-0 transition-all duration-1000" 
         ref="tourPackages"
         style="transform: translateY(50px);">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-4" style="color: #1a1a1a;">Pesona Bungkutoko Tour Packages</h2>
        <p class="text-center mb-12" style="font-family: 'Noto Sans', sans-serif; color: #929394;">~Kenangan Indah yang Tak Terlupakan Bersama Kami~</p>
        
        <div class="flex justify-end mb-4">
          <router-link to="/paket-tour" class="text-[#0992d6] hover:text-[#0882c0] flex items-center">
            Lihat Semua
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Package Card 1 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <img src="/images/packages/package1.jpg" alt="Package 1" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="font-bold text-xl mb-2">Paket Wisata Keluarga</h3>
              <p class="text-gray-600 mb-4">3 Hari 2 Malam</p>
              <ul class="text-sm text-gray-600 mb-4">
                <li class="mb-1">✓ Penginapan</li>
                <li class="mb-1">✓ Makan 3x sehari</li>
                <li class="mb-1">✓ Tour guide lokal</li>
                <li class="mb-1">✓ Transportasi</li>
              </ul>
              <div class="flex justify-between items-center">
                <span class="text-xl font-bold text-[#0992d6]">Rp 1.500.000</span>
                <button class="bg-[#0992d6] text-white px-4 py-2 rounded hover:bg-[#0882c0]">Pesan Sekarang</button>
              </div>
            </div>
          </div>

          <!-- Package Card 2 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <img src="/images/packages/package2.jpg" alt="Package 2" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="font-bold text-xl mb-2">Paket Honeymoon</h3>
              <p class="text-gray-600 mb-4">2 Hari 1 Malam</p>
              <ul class="text-sm text-gray-600 mb-4">
                <li class="mb-1">✓ Villa romantis</li>
                <li class="mb-1">✓ Candle light dinner</li>
                <li class="mb-1">✓ Spa treatment</li>
                <li class="mb-1">✓ Fotografi</li>
              </ul>
              <div class="flex justify-between items-center">
                <span class="text-xl font-bold text-[#0992d6]">Rp 2.500.000</span>
                <button class="bg-[#0992d6] text-white px-4 py-2 rounded hover:bg-[#0882c0]">Pesan Sekarang</button>
              </div>
            </div>
          </div>

          <!-- Package Card 3 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <img src="/images/packages/package3.jpg" alt="Package 3" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="font-bold text-xl mb-2">Paket Petualangan</h3>
              <p class="text-gray-600 mb-4">4 Hari 3 Malam</p>
              <ul class="text-sm text-gray-600 mb-4">
                <li class="mb-1">✓ Camping</li>
                <li class="mb-1">✓ Hiking</li>
                <li class="mb-1">✓ Rafting</li>
                <li class="mb-1">✓ Peralatan lengkap</li>
              </ul>
              <div class="flex justify-between items-center">
                <span class="text-xl font-bold text-[#0992d6]">Rp 3.000.000</span>
                <button class="bg-[#0992d6] text-white px-4 py-2 rounded hover:bg-[#0882c0]">Pesan Sekarang</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Galery Section -->
    <div class="bg-100 py-3 invisible opacity-0 transition-all duration-1000" 
         ref="gallery"
         style="transform: scale(0.95);">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-4" style="color: #1a1a1a;">Foto Desa Kami</h2>
        <div class="flex justify-end mb-4">
          <router-link to="/paket-tour" class="text-[#0992d6] hover:text-[#0882c0] flex items-center">
            
            Lihat Semua
            <font-awesome-icon icon="fas fa-arrow-right" class="h-5 w-5 ml-1" />
          </router-link>
        </div>
        <p class="text-center mb-12" style="font-family: 'Noto Sans', sans-serif; color: #1a1a1a;">Lihatlah beberapa foto cantik yang diambil di desa indah kami, yang menggambarkan keindahan alam dan budaya yang kaya.</p>
        <div class="grid grid-cols-12 gap-4">
          <!-- Large image spanning 8 columns -->
          <div class="col-span-8 bg-white rounded-lg overflow-hidden shadow-md relative group">
            <img src="/images/galery/galeri1.jpg" alt="Desa Foto 1" class="w-full h-[400px] object-cover">
            <div class="absolute bottom-0 left-0 right-0 h-1/4 bg-black/30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p class="text-white/100 p-4">Pemandangan indah dari puncak bukit desa kami yang menakjubkan dengan hamparan sawah yang hijau, menciptakan suasana yang damai dan menenangkan.</p>
            </div>
          </div>
          
          <!-- Two smaller images stacked vertically -->
          <div class="col-span-4 grid grid-rows-2 gap-4">
            <div class="bg-white rounded-lg overflow-hidden shadow-md relative group">
              <img src="/images/galery/galeri2.jpg" alt="Desa Foto 2" class="w-full h-[190px] object-cover">
              <div class="absolute bottom-0 left-0 right-0 h-1/4 bg-black/30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p class="text-white/100 p-4">Kegiatan gotong royong warga dalam membangun jembatan desa, yang menunjukkan semangat kebersamaan dan solidaritas masyarakat kami.</p>
              </div>
            </div>
            <div class="bg-white rounded-lg overflow-hidden shadow-md relative group">
              <img src="/images/galery/galeri3.jpg" alt="Desa Foto 3" class="w-full h-[190px] object-cover">
              <div class="absolute bottom-0 left-0 right-0 h-1/4 bg-black/30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p class="text-white/100 p-4">Festival budaya tahunan yang menampilkan kesenian tradisional, di mana warga desa berkumpul untuk merayakan warisan budaya yang kaya.</p>
              </div>
            </div>
          </div>

          <!-- Large image spanning 6 columns -->
          <div class="col-span-6 bg-white rounded-lg overflow-hidden shadow-md relative group">
            <img src="/images/galery/galeri4.jpg" alt="Desa Foto 4" class="w-full h-[300px] object-cover">
            <div class="absolute bottom-0 left-0 right-0 h-1/4 bg-black/30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p class="text-white/100 p-4">Keindahan air terjun tersembunyi di sudut desa, yang menjadi tempat favorit bagi para pengunjung untuk bersantai dan menikmati alam.</p>
            </div>
          </div>

          <!-- Two smaller images side by side -->
          <div class="col-span-3 bg-white rounded-lg overflow-hidden shadow-md relative group">
            <img src="/images/galery/galeri5.jpg" alt="Desa Foto 5" class="w-full h-[300px] object-cover">
            <div class="absolute bottom-0 left-0 right-0 h-1/4 bg-black/30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p class="text-white/100 p-4">Produk kerajinan tangan khas desa kami, yang dibuat dengan cinta dan keterampilan oleh para pengrajin lokal.</p>
            </div>
          </div>
          <div class="col-span-3 bg-white rounded-lg overflow-hidden shadow-md relative group">
            <img src="/images/galery/galeri6.jpg" alt="Desa Foto 6" class="w-full h-[300px] object-cover">
            <div class="absolute bottom-0 left-0 right-0 h-1/4 bg-black/30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p class="text-white/100 p-4">Suasana pagi yang damai di desa kami, di mana sinar matahari pertama menyinari jalanan yang tenang dan sejuk.</p>
            </div>
          </div>
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
import Navbar from './Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  },
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
          src: '/images/herosection/bg-hero5.jpeg',
          alt: 'Hero Image 5'
        }
      ],
      navItems: [
        { name: 'Home', path: '/' },
        { name: 'Bungkutoko', path: '/dewatari' },
        { name: 'Produk Lokal', path: '/produk-lokal' },
        { name: 'Paket Tour', path: '/paket-tour' },
        { name: 'Informasi', path: '/informasi' },
        { name: 'Pembelian Tiket', path: '/pembelian-tiket' }
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
    },
    initScrollAnimations() {
      const sections = ['tentangKami', 'beritaEvent', 'tourPackages', 'gallery']
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target;
            element.classList.remove('invisible');
            element.classList.add('opacity-100');
            element.style.transform = 'none';
          }
        })
      }, {
        threshold: 0.1,
        rootMargin: '50px'
      })

      // Observe all sections
      sections.forEach(section => {
        const element = this.$refs[section]
        if (element) {
          observer.observe(element)
        }
      })
    }
  },
  mounted() {
    this.startCarousel()
    // Slight delay to ensure DOM is ready
    setTimeout(() => {
      this.initScrollAnimations()
    }, 100)
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

.router-link-active {
  font-weight: 600;
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

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

/* Additional animation classes */
.invisible {
  visibility: hidden;
}

.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
  visibility: visible;
}

.transition-all {
  transition: all 1s ease-out;
}

.duration-1000 {
  transition-duration: 1000ms;
}
</style> 