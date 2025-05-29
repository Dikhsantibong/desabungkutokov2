<template>
    <div class="min-h-screen animate-fade-in">
        <Navbar />
        <WhatsAppButton />
        <!-- Navbar -->

        <!-- Hero Section -->
        <div class="relative h-screen">
            <!-- Full-width background image -->
            <div class="absolute inset-0">
                <img
                    :src="carouselImages[currentImage].src"
                    :alt="carouselImages[currentImage].alt"
                    class="w-full h-full object-cover"
                />
                <!-- Dark overlay -->
                <div class="absolute inset-0 bg-black/30"></div>
            </div>

            <!-- Hero Content -->
            <div
                class="absolute z-10 h-full w-full flex flex-col justify-center px-6 md:px-20"
            >
                <div class="max-w-7xl mx-auto w-full">
                    <h1
                        class="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
                        style="font-family: 'Poppins', sans-serif"
                    >
                        Pesona<br class="md:hidden" />
                        Bungkutoko
                    </h1>
                    <p
                        class="text-lg md:text-xl text-white mb-8 max-w-lg"
                        style="font-family: 'Poppins', sans-serif"
                    >
                        Wisata Bahari yang Indah dan Mempesona
                    </p>
                    <button
                        class="w-full md:w-auto bg-white bg-opacity-50 text-[#0992d6] px-8 py-3 rounded-md font-semibold hover:bg-[#0992d6] hover:text-white transition-colors duration-300"
                    >
                        RESERVASI SEKARANG
                    </button>
                </div>
            </div>

            <!-- Carousel Navigation -->
            <div
                class="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10"
            >
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
        <div
            class="py-16 bg-gray-100 invisible opacity-0 transition-all duration-1000"
            ref="tentangKami"
            style="transform: translateY(20px)"
        >
            <div
                class="container mx-auto px-4 flex flex-col md:flex-row items-center"
            >
                <div class="w-full md:w-1/2 pr-4">
                    <h2
                        class="text-3xl font-bold text-left mb-2"
                        style="
                            font-family: 'Inter', sans-serif;
                            color: #323233;
                            max-width: 80%;
                        "
                    >
                        Desa Wisata Bungkutoko
                    </h2>
                    <span class="block w-1/9 h-1 bg-[#0992d6] my-1 mb-7"></span>
                    <p
                        class="text-left max-w-3xl mx-auto mb-4"
                        style="
                            font-family: 'Noto Sans', sans-serif;
                            color: #929394;
                            font-size: 14px;
                        "
                    >
                        Desa Bungkutoko, yang terletak di Kecamatan Nambo, Kota
                        Kendari, merupakan wilayah pesisir dengan potensi
                        ekonomi dan wisata yang khas. Wilayah ini dikelilingi
                        oleh perairan yang menjadi jalur utama aktivitas
                        masyarakat, Bungkutoko memiliki sektor kelautan yang
                        terus bertumbuh, terutama dalam bidang perikanan dan
                        UMKM berbasis hasil laut. Keberadaan Jembatan Kuning
                        Bungkutoko semakin meningkatkan mobilitas masyarakat dan
                        mendukung pertumbuhan ekonomi lokal.
                    </p>
                    <p
                        class="text-left max-w-3xl mx-auto"
                        style="
                            font-family: 'Noto Sans', sans-serif;
                            color: #929394;
                            font-size: 14px;
                        "
                    >
                        Masyarakatnya memiliki keterikatan kuat dengan budaya
                        maritim, di mana pelaku UMKM, terutama perempuan
                        pesisir, mengolah hasil laut menjadi produk bernilai
                        tambah. Selain itu, Bungkutoko juga memiliki
                        transportasi khas berupa taksi boat, yang tidak hanya
                        berfungsi sebagai sarana mobilitas tetapi juga memiliki
                        potensi besar dalam sektor pariwisata. Dengan berbagai
                        keunggulan ini, Bungkutoko terus berkembang melalui
                        program pemberdayaan masyarakat yang mendorong inovasi
                        UMKM dan ekowisata, menjadikannya destinasi yang kaya
                        akan budaya serta peluang ekonomi.
                    </p>
                </div>
                <div class="w-full md:w-1/2">
                    <img
                        src="/images/tentang-kami/image1.jpg"
                        alt="Desa Wisata Wanurejo"
                        class="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>

        <!-- Berita dan Event Section -->
        <div
            class="py-16 bg-gray-100 invisible opacity-0 transition-all duration-1000"
            ref="beritaEvent"
            style="transform: translateX(-100px)"
        >
            <div class="container mx-auto px-4">
                <h2
                    class="text-3xl font-bold text-center mb-4"
                    style="color: #1a1a1a"
                >
                    Berita dan Event
                </h2>
                <div class="flex justify-end items-center mb-12">
                    <router-link
                        to="/informasi"
                        class="text-[#0992d6] hover:text-[#0882c0] font-semibold flex items-center"
                    >
                        Lihat Semua
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 ml-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </router-link>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Event Card 1 -->
                    <div
                        class="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
                    >
                        <div
                            class="w-[400px] h-[446px] bg-gray-200 flex items-center justify-center"
                        >
                            <div class="text-center p-4">
                                <svg
                                    class="w-20 h-20 text-gray-400 mx-auto mb-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1"
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                <p class="text-gray-500">Lomba Foto & Reels</p>
                                <p class="text-gray-400 text-sm">
                                    Gambar event akan ditambahkan
                                </p>
                            </div>
                        </div>
                        <div class="p-4">
                            <h3 class="font-bold text-xl mb-2">
                                Lomba Foto & Reels
                            </h3>
                            <p>
                                Yukk ikutan lombanya, buat karya semenarik
                                mungkin...
                            </p>
                            <button
                                class="mt-4 bg-[#0992d6] text-white px-4 py-2 rounded hover:bg-[#0882c0]"
                            >
                                Lihat Selengkapnya
                            </button>
                        </div>
                    </div>

                    <!-- Event Card 2 -->
                    <div
                        class="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
                    >
                        <div
                            class="w-[400px] h-[446px] bg-gray-200 flex items-center justify-center"
                        >
                            <div class="text-center p-4">
                                <svg
                                    class="w-20 h-20 text-gray-400 mx-auto mb-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1"
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                <p class="text-gray-500">
                                    Event Bulan November 2022
                                </p>
                                <p class="text-gray-400 text-sm">
                                    Gambar event akan ditambahkan
                                </p>
                            </div>
                        </div>
                        <div class="p-4">
                            <h3 class="font-bold text-xl mb-2">
                                Event Bulan November 2022
                            </h3>
                            <p>
                                Rangkaian acara Kamandaka ciptarasa bulan
                                November...
                            </p>
                            <button
                                class="mt-4 bg-[#0992d6] text-white px-4 py-2 rounded hover:bg-[#0882c0]"
                            >
                                Lihat Selengkapnya
                            </button>
                        </div>
                    </div>

                    <!-- Event Card 3 -->
                    <div
                        class="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
                    >
                        <div
                            class="w-[400px] h-[446px] bg-gray-200 flex items-center justify-center"
                        >
                            <div class="text-center p-4">
                                <svg
                                    class="w-20 h-20 text-gray-400 mx-auto mb-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1"
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                <p class="text-gray-500">Pagelaran Seni</p>
                                <p class="text-gray-400 text-sm">
                                    Gambar event akan ditambahkan
                                </p>
                            </div>
                        </div>
                        <div class="p-4">
                            <h3 class="font-bold text-xl mb-2">
                                Pagelaran Seni
                            </h3>
                            <p>
                                Acara Seni dengan lakon yang terkenal yaitu...
                            </p>
                            <button
                                class="mt-4 bg-[#0992d6] text-white px-4 py-2 rounded hover:bg-[#0882c0]"
                            >
                                Lihat Selengkapnya
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tour Packages Section -->
        <div
            class="py-16 bg-white invisible opacity-0 transition-all duration-1000"
            ref="tourPackages"
            style="transform: translateY(50px)"
        >
            <div class="container mx-auto px-4">
                <h2
                    class="text-3xl font-bold text-center mb-4"
                    style="color: #1a1a1a"
                >
                    Paket Wisata Bahari Bungkutoko
                </h2>
                <p
                    class="text-center mb-12"
                    style="font-family: 'Noto Sans', sans-serif; color: #929394"
                >
                    Jelajahi keindahan pesisir Bungkutoko dengan wisata bahari
                    yang menyuguhkan pemandangan eksotis! Rute perjalanan ini
                    akan membawa Anda berkeliling dengan taksi boat, melewati
                    berbagai destinasi menarik
                </p>

                <div class="flex justify-end mb-4">
                    <router-link
                        to="/paket-tour"
                        class="text-[#0992d6] hover:text-[#0882c0] flex items-center"
                    >
                        Lihat Semua
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 ml-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </router-link>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <!-- Package Card 1 -->
                    <div
                        class="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200"
                    >
                        <div
                            class="w-full h-48 bg-gray-200 flex items-center justify-center"
                        >
                            <div class="text-center p-4">
                                <svg
                                    class="w-16 h-16 text-gray-400 mx-auto mb-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                                <p class="text-gray-500 text-sm">
                                    Paket Personal
                                </p>
                                <p class="text-gray-400 text-xs">
                                    Gambar paket akan ditambahkan
                                </p>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="font-bold text-xl mb-2">
                                Paket Personal
                            </h3>
                            <p class="text-gray-600 mb-4">1 Orang</p>
                            <p class="text-sm text-gray-600 mb-4">
                                Cocok untuk solo traveler yang ingin menikmati
                                ketenangan laut Bungkutoko dengan lebih leluasa.
                            </p>
                            <div class="flex justify-between items-center">
                                <span class="text-xl font-bold text-[#0992d6]"
                                    >Rp 15.000/orang</span
                                >
                                <button
                                    class="bg-[#0992d6] text-white px-4 py-2 rounded hover:bg-[#0882c0]"
                                >
                                    Pesan Sekarang
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Package Card 2 -->
                    <div
                        class="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200"
                    >
                        <div
                            class="w-full h-48 bg-gray-200 flex items-center justify-center"
                        >
                            <div class="text-center p-4">
                                <svg
                                    class="w-16 h-16 text-gray-400 mx-auto mb-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                <p class="text-gray-500 text-sm">
                                    Paket Rombongan
                                </p>
                                <p class="text-gray-400 text-xs">
                                    Gambar paket akan ditambahkan
                                </p>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="font-bold text-xl mb-2">
                                Paket Rombongan
                            </h3>
                            <p class="text-gray-600 mb-4">4-5 Orang</p>
                            <p class="text-sm text-gray-600 mb-4">
                                Hemat dan seru untuk dinikmati bersama
                                teman-teman. Semakin banyak peserta, semakin
                                ringan biayanya.
                            </p>
                            <div class="flex justify-between items-center">
                                <span class="text-xl font-bold text-[#0992d6]"
                                    >Rp 50.000/boat</span
                                >
                                <button
                                    class="bg-[#0992d6] text-white px-4 py-2 rounded hover:bg-[#0882c0]"
                                >
                                    Pesan Sekarang
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Package Card 3 -->
                    <div
                        class="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200"
                    >
                        <div
                            class="w-full h-48 bg-gray-200 flex items-center justify-center"
                        >
                            <div class="text-center p-4">
                                <svg
                                    class="w-16 h-16 text-gray-400 mx-auto mb-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>
                                <p class="text-gray-500 text-sm">
                                    Paket Keluarga
                                </p>
                                <p class="text-gray-400 text-xs">
                                    Gambar paket akan ditambahkan
                                </p>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="font-bold text-xl mb-2">
                                Paket Keluarga
                            </h3>
                            <p class="text-gray-600 mb-4">8-10 Orang</p>
                            <p class="text-sm text-gray-600 mb-4">
                                Ideal untuk keluarga besar atau rombongan yang
                                ingin menikmati perjalanan dengan suasana lebih
                                nyaman dan eksklusif.
                            </p>
                            <div class="flex justify-between items-center">
                                <span class="text-xl font-bold text-[#0992d6]"
                                    >Rp 80.000/boat</span
                                >
                                <button
                                    class="bg-[#0992d6] text-white px-4 py-2 rounded hover:bg-[#0882c0]"
                                >
                                    Pesan Sekarang
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Additional Information -->
                <div class="bg-gray-50 rounded-lg p-8 mb-8">
                    <h3 class="text-xl font-semibold mb-4">
                        Informasi Tambahan
                    </h3>
                    <p class="text-gray-600 mb-4">
                        Semakin banyak peserta, semakin hemat per orangnya.
                        Dengan kapasitas taksi boat yang menyesuaikan jumlah
                        penumpang, perjalanan tetap nyaman dan menyenangkan.
                        Perjalanan ini juga dipandu oleh pengemudi perahu yang
                        berpengalaman, sehingga Anda bisa bersantai sambil
                        menikmati keindahan alam pesisir Bungkutoko.
                    </p>
                </div>

                <!-- Route Information -->
                <div class="bg-white rounded-lg shadow-lg p-8">
                    <h3 class="text-xl font-semibold mb-4">Rute Perjalanan</h3>
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 mt-2">
                            <svg
                                class="w-6 h-6 text-[#0992d6]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                                />
                            </svg>
                        </div>
                        <div class="flex-grow">
                            <ul class="space-y-2 text-gray-600">
                                <li class="flex items-center">
                                    <span
                                        class="w-2 h-2 bg-[#0992d6] rounded-full mr-2"
                                    ></span>
                                    Tumpuan Kapal (Water Front City)
                                </li>
                                <li class="flex items-center">
                                    <span
                                        class="w-2 h-2 bg-[#0992d6] rounded-full mr-2"
                                    ></span>
                                    Berkeliling di bawah Jembatan Kuning
                                </li>
                                <li class="flex items-center">
                                    <span
                                        class="w-2 h-2 bg-[#0992d6] rounded-full mr-2"
                                    ></span>
                                    Pantai Muna-Muna
                                </li>
                                <li class="flex items-center">
                                    <span
                                        class="w-2 h-2 bg-[#0992d6] rounded-full mr-2"
                                    ></span>
                                    Pelabuhan
                                </li>
                                <li class="flex items-center">
                                    <span
                                        class="w-2 h-2 bg-[#0992d6] rounded-full mr-2"
                                    ></span>
                                    Kali Biru
                                </li>
                                <li class="flex items-center">
                                    <span
                                        class="w-2 h-2 bg-[#0992d6] rounded-full mr-2"
                                    ></span>
                                    Jembatan Penghubung Pantai Nambo
                                </li>
                                <li class="flex items-center">
                                    <span
                                        class="w-2 h-2 bg-[#0992d6] rounded-full mr-2"
                                    ></span>
                                    Kembali ke titik awal
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Galery Section -->
        <div
            class="bg-100 py-3 invisible opacity-0 transition-all duration-1000"
            ref="gallery"
            style="transform: scale(0.95)"
        >
            <div class="container mx-auto px-4">
                <h2
                    class="text-3xl font-bold text-center mb-4"
                    style="color: #1a1a1a"
                >
                    Foto Desa Kami
                </h2>
                <div class="flex justify-end mb-4">
                    <router-link
                        to="/paket-tour"
                        class="text-[#0992d6] hover:text-[#0882c0] flex items-center"
                    >
                        Lihat Semua
                        <font-awesome-icon
                            icon="fas fa-arrow-right"
                            class="h-5 w-5 ml-1"
                        />
                    </router-link>
                </div>
                <p
                    class="text-center mb-12"
                    style="font-family: 'Noto Sans', sans-serif; color: #1a1a1a"
                >
                    Lihatlah beberapa foto cantik yang diambil di desa indah
                    kami, yang menggambarkan keindahan alam dan budaya yang
                    kaya.
                </p>
                <div class="grid grid-cols-12 gap-4">
                    <!-- Large image spanning 8 columns -->
                    <div
                        class="col-span-8 bg-white rounded-lg overflow-hidden shadow-md relative group"
                    >
                        <img
                            src="/images/galery/galeri1.jpg"
                            alt="Desa Foto 1"
                            class="w-full h-[400px] object-cover"
                        />
                        <div
                            class="absolute bottom-0 left-0 right-0 h-1/4 bg-black/30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                        >
                            <p class="text-white/100 p-4">
                                Pemandangan indah dari puncak bukit desa kami
                                yang menakjubkan dengan hamparan sawah yang
                                hijau, menciptakan suasana yang damai dan
                                menenangkan.
                            </p>
                        </div>
                    </div>

                    <!-- Two smaller images stacked vertically -->
                    <div class="col-span-4 grid grid-rows-2 gap-4">
                        <div
                            class="bg-white rounded-lg overflow-hidden shadow-md relative group"
                        >
                            <img
                                src="/images/galery/galeri2.jpg"
                                alt="Desa Foto 2"
                                class="w-full h-[190px] object-cover"
                            />
                            <div
                                class="absolute bottom-0 left-0 right-0 h-1/4 bg-black/30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                            >
                                <p class="text-white/100 p-4">
                                    Kegiatan gotong royong warga dalam membangun
                                    jembatan desa, yang menunjukkan semangat
                                    kebersamaan dan solidaritas masyarakat kami.
                                </p>
                            </div>
                        </div>
                        <div
                            class="bg-white rounded-lg overflow-hidden shadow-md relative group"
                        >
                            <img
                                src="/images/galery/galeri3.jpg"
                                alt="Desa Foto 3"
                                class="w-full h-[190px] object-cover"
                            />
                            <div
                                class="absolute bottom-0 left-0 right-0 h-1/4 bg-black/30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                            >
                                <p class="text-white/100 p-4">
                                    Festival budaya tahunan yang menampilkan
                                    kesenian tradisional, di mana warga desa
                                    berkumpul untuk merayakan warisan budaya
                                    yang kaya.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Large image spanning 6 columns -->
                    <div
                        class="col-span-6 bg-white rounded-lg overflow-hidden shadow-md relative group"
                    >
                        <img
                            src="/images/galery/galeri4.jpg"
                            alt="Desa Foto 4"
                            class="w-full h-[300px] object-cover"
                        />
                        <div
                            class="absolute bottom-0 left-0 right-0 h-1/4 bg-black/30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                        >
                            <p class="text-white/100 p-4">
                                Keindahan air terjun tersembunyi di sudut desa,
                                yang menjadi tempat favorit bagi para pengunjung
                                untuk bersantai dan menikmati alam.
                            </p>
                        </div>
                    </div>

                    <!-- Two smaller images side by side -->
                    <div
                        class="col-span-3 bg-white rounded-lg overflow-hidden shadow-md relative group"
                    >
                        <img
                            src="/images/galery/galeri5.jpg"
                            alt="Desa Foto 5"
                            class="w-full h-[300px] object-cover"
                        />
                        <div
                            class="absolute bottom-0 left-0 right-0 h-1/4 bg-black/30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                        >
                            <p class="text-white/100 p-4">
                                Produk kerajinan tangan khas desa kami, yang
                                dibuat dengan cinta dan keterampilan oleh para
                                pengrajin lokal.
                            </p>
                        </div>
                    </div>
                    <div
                        class="col-span-3 bg-white rounded-lg overflow-hidden shadow-md relative group"
                    >
                        <img
                            src="/images/galery/galeri6.jpg"
                            alt="Desa Foto 6"
                            class="w-full h-[300px] object-cover"
                        />
                        <div
                            class="absolute bottom-0 left-0 right-0 h-1/4 bg-black/30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                        >
                            <p class="text-white/100 p-4">
                                Suasana pagi yang damai di desa kami, di mana
                                sinar matahari pertama menyinari jalanan yang
                                tenang dan sejuk.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer
            class="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white py-16"
        >
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <!-- Contact & Social Media -->
                    <div class="md:col-span-4">
                        <img
                            src="/images/logo/logo.png"
                            alt="Logo Bungkutoko"
                            class="h-16 mb-6"
                        />
                        <p class="text-gray-300 mb-6">
                            Jelajahi keindahan wisata bahari Bungkutoko, nikmati
                            pengalaman tak terlupakan bersama kami.
                        </p>
                        <div class="flex space-x-4">
                            <a
                                href="#"
                                class="bg-white/10 hover:bg-[#0992d6] p-3 rounded-full transition-colors"
                            >
                                <i class="fab fa-instagram text-xl"></i>
                            </a>
                            <a
                                href="#"
                                class="bg-white/10 hover:bg-[#0992d6] p-3 rounded-full transition-colors"
                            >
                                <i class="fab fa-facebook text-xl"></i>
                            </a>
                            <a
                                href="#"
                                class="bg-white/10 hover:bg-[#0992d6] p-3 rounded-full transition-colors"
                            >
                                <i class="fab fa-youtube text-xl"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div class="md:col-span-2">
                        <h4 class="text-lg font-semibold mb-4">Menu</h4>
                        <ul class="space-y-2">
                            <li>
                                <router-link
                                    to="/"
                                    class="text-gray-300 hover:text-[#0992d6] transition-colors"
                                    >Beranda</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/sejarah"
                                    class="text-gray-300 hover:text-[#0992d6] transition-colors"
                                    >Sejarah</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/visi-misi"
                                    class="text-gray-300 hover:text-[#0992d6] transition-colors"
                                    >Visi Misi</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/gallery"
                                    class="text-gray-300 hover:text-[#0992d6] transition-colors"
                                    >Galeri</router-link
                                >
                            </li>
                        </ul>
                    </div>

                    <!-- Wisata -->
                    <div class="md:col-span-3">
                        <h4 class="text-lg font-semibold mb-4">
                            Wisata Bahari
                        </h4>
                        <ul class="space-y-2">
                            <li class="text-gray-300">Water Front City</li>
                            <li class="text-gray-300">Jembatan Kuning</li>
                            <li class="text-gray-300">Pantai Muna-Muna</li>
                            <li class="text-gray-300">Kali Biru</li>
                        </ul>
                    </div>

                    <!-- Contact Info -->
                    <div class="md:col-span-3">
                        <h4 class="text-lg font-semibold mb-4">Hubungi Kami</h4>
                        <div class="space-y-4">
                            <div class="flex items-start space-x-3">
                                <i
                                    class="fas fa-map-marker-alt mt-1 text-[#0992d6]"
                                ></i>
                                <p class="text-gray-300">
                                    Kelurahan Bungkutoko, Kec. Nambo, Kota
                                    Kendari, Sulawesi Tenggara
                                </p>
                            </div>
                            <div class="flex items-center space-x-3">
                                <i class="fas fa-phone text-[#0992d6]"></i>
                                <p class="text-gray-300">+62 857-5652-9587</p>
                            </div>
                            <div class="flex items-center space-x-3">
                                <i class="fas fa-envelope text-[#0992d6]"></i>
                                <p class="text-gray-300">info@bungkutoko.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Copyright -->
                <div
                    class="border-t border-white/10 mt-12 pt-8 text-center text-gray-400"
                >
                    <p>
                        &copy; 2024 Desa Wisata Bungkutoko. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import WhatsAppButton from "./WhatsAppButton.vue";

export default {
    name: "Home",
    components: {
        Navbar,
        WhatsAppButton,
    },
    data() {
        return {
            currentImage: 0,
            carouselImages: [
                {
                    id: 1,
                    src: "/images/herosection/bg-hero.jpg",
                    alt: "Hero Image 1",
                },
                {
                    id: 2,
                    src: "/images/herosection/bg-hero2.jpg",
                    alt: "Hero Image 2",
                },
                {
                    id: 3,
                    src: "/images/herosection/bg-hero3.jpg",
                    alt: "Hero Image 3",
                },
                {
                    id: 4,
                    src: "/images/herosection/bg-hero4.jpeg",
                    alt: "Hero Image 4",
                },
                {
                    id: 5,
                    src: "/images/herosection/bg-hero5.jpeg",
                    alt: "Hero Image 5",
                },
            ],
            navItems: [
                { name: "Home", path: "/" },
                { name: "Bungkutoko", path: "/dewatari" },
                { name: "Produk Lokal", path: "/produk-lokal" },
                { name: "Paket Tour", path: "/paket-tour" },
                { name: "Informasi", path: "/informasi" },
                { name: "Pembelian Tiket", path: "/pembelian-tiket" },
            ],
            teamMembers: [
                { name: "Asep Saefullah", image: "/path-to-asep-image.jpg" },
                { name: "Aulia Naresti", image: "/path-to-aulia-image.jpg" },
                { name: "Nabila Aminatun", image: "/path-to-nabila-image.jpg" },
                {
                    name: "Bintang Shallahuddin",
                    image: "/path-to-bintang-image.jpg",
                },
                { name: "David Aditya", image: "/path-to-david-image.jpg" },
                { name: "Daffa Hafid", image: "/path-to-daffa-image.jpg" },
            ],
        };
    },
    methods: {
        nextImage() {
            this.currentImage =
                (this.currentImage + 1) % this.carouselImages.length;
        },
        prevImage() {
            this.currentImage =
                this.currentImage === 0
                    ? this.carouselImages.length - 1
                    : this.currentImage - 1;
        },
        startCarousel() {
            setInterval(this.nextImage, 5000); // Change image every 5 seconds
        },
        initScrollAnimations() {
            const sections = [
                "tentangKami",
                "beritaEvent",
                "tourPackages",
                "gallery",
            ];

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const element = entry.target;
                            element.classList.remove("invisible");
                            element.classList.add("opacity-100");
                            element.style.transform = "none";
                        }
                    });
                },
                {
                    threshold: 0.1,
                    rootMargin: "50px",
                }
            );

            // Observe all sections
            sections.forEach((section) => {
                const element = this.$refs[section];
                if (element) {
                    observer.observe(element);
                }
            });
        },
    },
    mounted() {
        this.startCarousel();
        // Slight delay to ensure DOM is ready
        setTimeout(() => {
            this.initScrollAnimations();
        }, 100);
    },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");

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
