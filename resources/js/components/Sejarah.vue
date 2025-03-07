<template>
  <div>
    <Navbar />
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
      <div class="relative z-10 h-full flex flex-col justify-start items-center px-20 max-w-7xl mx-auto pt-42">
        <h1 class="text-6xl font-bold text-white mb-4" style="font-family: 'Poppins', sans-serif;">
          Sejarah Desa Bungkutoko
        </h1>
        <p class="text-sm text-white mb-8 text-center" style="font-family: 'Poppins', sans-serif;">
          Sejarah singkat Bungkutoko, arti nama Bungkutoko berasal dari kata "Bunggudoko". Kata ini berasal dari Bahasa Tolaki, yang terbagi dari dua kata, "Bunggu" dan "Doko: yang arti harfiah nya "di belakang pulau". Awal mula cerita mencari ikan di wilayah, ada Orang Tolaki yang ini, lalu ada seorang Bugis yang datang menghampirinya dan menanyakan nama wilayah tersebut, "aga sennaeye puloe?" yang artinya: "apa nama pulau ini?" Kemudian orang Tolaki tersebut menjawab "Bunggudoko". Orang-orang Bugis yang 'terdampar' di Pulau Bungkutoko pada akhirnya mengenal kata Bunggudoko, yang seiring perjalanan waktu kata Bunggudoko berubah menjadi Bungkutoko. Anggapan ini dikaitkan dengan keberadaan toko besar yang dibangun di dekat Kelurahan Talia oleh Orang Belanda, sehingga sebagian masyarakat menduga nama pulau ini Bungkutoko, yang berarti di belakang toko tersebut. Sampai saat ini penduduk Bungkutoko memahami bahwa pertama kali Bungkutoko dijadikan pemukiman Orang Bugis Bone pada masa Belanda menjajah di wilayah Sulawesi Tenggara. Orang Bugis yang datang ke Bungkutoko bukan karena dengan sengaja menuju ke pulau tersebut, namun karena mereka terdampar.
        </p>
        <p class="text-sm text-white mb-8 text-center" style="font-family: 'Poppins', sans-serif;">
          Berbeda dengan cerita di sebelumnya. Dalam sejarah yang dituliskan Rabani (2010), awal kota-kota pantai di Sulawesi Tenggara menyebutkan ada tiga kota: Kota Buton, Kota Muna dan Kota Kendari. Rabani mengacu pada arsip Belanda, yang menceritakan awal mula Kota Kendari berkembang pada zaman Vosmaer menjadikan Kota Kendari sebagai pusat aktivitas dagang dan militer. Dalam penelusuran Rabani, Vosmaer membangun loji di sekitar Kerajaan Laiwui, ini merupakan upaya untuk meyakinkan Pemerintah Hindia Belanda agar kawasan Kendari sebagai pusat ekonomi dan militer wilayah Sulawesi Timur (Oost Celebes). Singkat kata, orang-orang Bugis berdatangan ke Kota Kendari. Namun, Rabani mengatakan bahwa mereka menggunakan jalur darat, Luwu-Kolaka-Kendari. Bukan seperti yang diceritakan di atas, dan nama Bungkutoko pun tidak masuk dalam Vosmaer. Hingga saat ini, penduduk Bungkutoko populasi terbanyak orang Bugis terdiri dari 929 jiwa. Orang Buton berkisar 425 jiwa dan Muna 337 jiwa disatukan dalam perkampungan yang berbeda oleh pemerintah. Adapun orang Bajo dan Mandar kurang lebih berkisar 60 jiwa, tidak terlampau banyak jumlahnya. Bentuk pemukiman awal di Bungkutoko adalah rumah-rumah panggung milik orang Bugis yang menghadap ke laut sepanjang pesisir pantai. Namun demikian, dalam perkembangannya kebijakan pemerintah membuat pemukiman orang-orang Bugis tidak lagi menampakkan budaya maritimnya, sebab rumah tidak lagi berada di pesisir pantai dan tidak lagi menghadap ke laut. Rumah bergeser lebih ke dalam daratan atau sedikit menjauh dari pesisir pantai dan rumah sebagian sudah membelakangi laut. Rumah-rumah searah berjejer, berhadapan mengikuti badan jalan. Dari perubahan pola pemukiman ini, sudah tampak adanya pergeseran orientasi dari laut ke darat.
        </p>
      </div>
    </div>

    <div class="container mt-4">
      <h2>Sejarah Desa Bungkutoko</h2>
      <!-- Tambahkan konten sejarah desa di sini -->
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'

export default {
  name: 'Sejarah',
  components: {
    Navbar,
    Footer
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
      ]
    }
  },
  methods: {
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.carouselImages.length
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.relative {
  position: relative;
}

.h-screen {
  height: 100vh;
}

.object-cover {
  object-fit: cover;
}

.bg-black\/30 {
  background-color: rgba(0, 0, 0, 0.3);
}
</style> 