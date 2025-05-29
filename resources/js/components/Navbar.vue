<template>
    <nav class="absolute top-0 left-0 right-0 z-50 py-4 bg-transparent">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center">
                <!-- Logo -->
                <div class="flex items-center">
                    <img
                        src="/images/logo/logo.png"
                        alt="Logo"
                        class="h-16 mr-2"
                    />
                </div>

                <!-- Mobile Menu Button -->
                <button
                    @click="isMobileMenuOpen = !isMobileMenuOpen"
                    class="lg:hidden text-white focus:outline-none"
                >
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            v-if="!isMobileMenuOpen"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        <path
                            v-else
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <!-- Desktop Menu -->
                <div class="hidden lg:flex items-center space-x-6">
                    <router-link
                        to="/"
                        class="text-white uppercase font-['Open_Sans'] text-[14px] tracking-wider transition-colors hover:text-[#0992d6]"
                    >
                        Home
                    </router-link>

                    <!-- Profile Dropdown -->
                    <div
                        class="relative"
                        @mouseenter="isOpen = true"
                        @mouseleave="isOpen = false"
                    >
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
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 9l-7 7-7-7"
                                />
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
                    <div
                        class="relative"
                        @mouseenter="galleryOpen = true"
                        @mouseleave="galleryOpen = false"
                    >
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
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 9l-7 7-7-7"
                                />
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
                                @click="galleryOpen = false"
                            >
                                GALLERY VIDEO
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div
                v-show="isMobileMenuOpen"
                class="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                @click="isMobileMenuOpen = false"
            >
                <div
                    class="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl z-50"
                    :class="{ 'w-full max-w-full': isFullScreen }"
                    @click.stop
                >
                    <div class="flex flex-col h-full overflow-y-auto">
                        <div class="p-6">
                            <!-- Toggle Full Screen Button -->
                            <button
                                @click="toggleFullScreen"
                                class="w-full mb-4 py-2 px-4 bg-[#0992d6] text-white rounded-md flex items-center justify-center hover:bg-[#0882c1] transition-colors"
                            >
                                <svg
                                    class="w-5 h-5 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        v-if="!isFullScreen"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0 0l-5-5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                                    />
                                    <path
                                        v-else
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 4H5m0 0v4m14-4h-4m4 0v4M5 20h4m-4 0v-4m14 4h-4m4 0v-4"
                                    />
                                </svg>
                                {{
                                    isFullScreen
                                        ? "Exit Full Screen"
                                        : "Full Screen"
                                }}
                            </button>

                            <div class="border-b border-gray-200 mb-4"></div>

                            <router-link
                                to="/"
                                class="block py-2 text-gray-800 hover:text-[#0992d6]"
                                @click="isMobileMenuOpen = false"
                            >
                                Home
                            </router-link>

                            <!-- Mobile Profile Dropdown -->
                            <div class="py-2">
                                <button
                                    @click="
                                        isMobileProfileOpen =
                                            !isMobileProfileOpen
                                    "
                                    class="flex items-center justify-between w-full text-gray-800 hover:text-[#0992d6]"
                                >
                                    Profile
                                    <svg
                                        class="w-4 h-4 transform transition-transform duration-200"
                                        :class="{
                                            'rotate-180': isMobileProfileOpen,
                                        }"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                <div
                                    v-show="isMobileProfileOpen"
                                    class="pl-4 mt-2 space-y-2"
                                >
                                    <router-link
                                        to="/sejarah"
                                        class="block py-2 text-gray-600 hover:text-[#0992d6]"
                                        @click="isMobileMenuOpen = false"
                                    >
                                        SEJARAH DESA
                                    </router-link>
                                    <router-link
                                        to="/visi-misi"
                                        class="block py-2 text-gray-600 hover:text-[#0992d6]"
                                        @click="isMobileMenuOpen = false"
                                    >
                                        VISI MISI
                                    </router-link>
                                </div>
                            </div>

                            <router-link
                                to="/dewatari"
                                class="block py-2 text-gray-800 hover:text-[#0992d6]"
                                @click="isMobileMenuOpen = false"
                            >
                                Bungkutoko
                            </router-link>
                            <router-link
                                to="/produk-lokal"
                                class="block py-2 text-gray-800 hover:text-[#0992d6]"
                                @click="isMobileMenuOpen = false"
                            >
                                Produk Lokal
                            </router-link>
                            <router-link
                                to="/paket-tour"
                                class="block py-2 text-gray-800 hover:text-[#0992d6]"
                                @click="isMobileMenuOpen = false"
                            >
                                Paket Tour
                            </router-link>
                            <router-link
                                to="/informasi"
                                class="block py-2 text-gray-800 hover:text-[#0992d6]"
                                @click="isMobileMenuOpen = false"
                            >
                                Informasi
                            </router-link>
                            <router-link
                                to="/pembelian-tiket"
                                class="block py-2 text-gray-800 hover:text-[#0992d6]"
                                @click="isMobileMenuOpen = false"
                            >
                                Pembelian Tiket
                            </router-link>

                            <!-- Mobile Gallery Dropdown -->
                            <div class="py-2">
                                <button
                                    @click="
                                        isMobileGalleryOpen =
                                            !isMobileGalleryOpen
                                    "
                                    class="flex items-center justify-between w-full text-gray-800 hover:text-[#0992d6]"
                                >
                                    Gallery
                                    <svg
                                        class="w-4 h-4 transform transition-transform duration-200"
                                        :class="{
                                            'rotate-180': isMobileGalleryOpen,
                                        }"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                <div
                                    v-show="isMobileGalleryOpen"
                                    class="pl-4 mt-2 space-y-2"
                                >
                                    <router-link
                                        to="/gallery-foto"
                                        class="block py-2 text-gray-600 hover:text-[#0992d6]"
                                        @click="isMobileMenuOpen = false"
                                    >
                                        GALLERY FOTO
                                    </router-link>
                                    <router-link
                                        to="/gallery-video"
                                        class="block py-2 text-gray-600 hover:text-[#0992d6]"
                                        @click="isMobileMenuOpen = false"
                                    >
                                        GALLERY VIDEO
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            isOpen: false,
            galleryOpen: false,
            isMobileMenuOpen: false,
            isMobileProfileOpen: false,
            isMobileGalleryOpen: false,
            isFullScreen: false,
        };
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        toggleGalleryDropdown() {
            this.galleryOpen = !this.galleryOpen;
        },
        toggleFullScreen() {
            this.isFullScreen = !this.isFullScreen;
        },
    },
    mounted() {
        // Close dropdown when clicking outside
        document.addEventListener("click", (e) => {
            const dropdown = this.$el.querySelector(".relative");
            if (!dropdown?.contains(e.target)) {
                this.isOpen = false;
                this.galleryOpen = false;
            }
        });

        // Close mobile menu on route change
        this.$router.afterEach(() => {
            this.isMobileMenuOpen = false;
            this.isMobileProfileOpen = false;
            this.isMobileGalleryOpen = false;
        });
    },
};
</script>

<style scoped>
/* Add transitions */
.absolute {
    transition: opacity 0.2s ease-in-out;
}

/* Mobile menu transition */
.fixed {
    transition: all 0.3s ease-in-out;
}
</style>
