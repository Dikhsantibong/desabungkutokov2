<template>
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
            <img src="/images/logo/logo.png" alt="Dewatari Logo" class="h-12 mb-4">
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
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
/* Add any additional styles here if needed */
</style> 