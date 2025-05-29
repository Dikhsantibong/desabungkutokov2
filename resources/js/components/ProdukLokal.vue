<template>
    <div class="min-h-screen">
        <Navbar />
        <!-- Hero Section -->
        <div class="relative h-screen">
            <div class="absolute inset-0">
                <img
                    :src="carouselImages[currentImage].src"
                    :alt="carouselImages[currentImage].alt"
                    class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-black/30"></div>
            </div>

            <div
                class="absolute z-10 h-full flex flex-col justify-center items-start px-20 max-w-7xl mx-auto"
            >
                <h1
                    class="text-6xl font-bold text-white mb-4"
                    style="font-family: 'Poppins', sans-serif"
                >
                    Produk Lokal
                </h1>
                <p
                    class="text-xl text-white mb-8"
                    style="font-family: 'Poppins', sans-serif"
                >
                    Temukan keunikan produk lokal Desa Bungkutoko
                </p>
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

        <!-- Content Section -->
        <div class="py-16 bg-gray-50">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-4">
                    Produk Lokal Unggulan
                </h2>
                <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    Nikmati berbagai produk lokal berkualitas dari Desa
                    Bungkutoko. Setiap pembelian membantu mendukung pengrajin
                    lokal kami.
                </p>

                <!-- Filter and Sort Section -->
                <div class="flex justify-between items-center mb-8">
                    <div class="flex space-x-4">
                        <select
                            class="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Semua Kategori</option>
                            <option value="makanan">Makanan</option>
                            <option value="kerajinan">Kerajinan</option>
                            <option value="fashion">Fashion</option>
                        </select>
                    </div>
                    <div>
                        <select
                            class="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="terbaru">Terbaru</option>
                            <option value="termurah">
                                Harga: Rendah ke Tinggi
                            </option>
                            <option value="termahal">
                                Harga: Tinggi ke Rendah
                            </option>
                        </select>
                    </div>
                </div>

                <!-- Products Grid -->
                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    <!-- Product Card -->
                    <div
                        v-for="product in products"
                        :key="product.id"
                        class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <div class="relative">
                            <!-- Placeholder Image Container -->
                            <div
                                class="w-full h-64 bg-gray-200 flex items-center justify-center"
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
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <p class="text-gray-500 text-sm">
                                        {{ product.name }}
                                    </p>
                                    <p class="text-gray-400 text-xs">
                                        Gambar produk akan ditambahkan
                                    </p>
                                </div>
                            </div>
                            <div
                                v-if="product.badge"
                                class="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm"
                            >
                                {{ product.badge }}
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="text-sm text-blue-600 font-medium mb-2">
                                {{ product.category }}
                            </div>
                            <h3
                                class="text-lg font-semibold text-gray-800 mb-2"
                            >
                                {{ product.name }}
                            </h3>
                            <p class="text-gray-600 text-sm mb-4">
                                {{ product.description }}
                            </p>
                            <div class="flex justify-between items-center mb-4">
                                <span class="text-2xl font-bold text-gray-900"
                                    >Rp
                                    {{ product.price.toLocaleString() }}</span
                                >
                                <span class="text-sm text-gray-500"
                                    >Stok: {{ product.stock }}</span
                                >
                            </div>
                            <div class="flex space-x-3">
                                <button
                                    @click="addToCart(product)"
                                    class="flex-1 bg-gray-100 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                                >
                                    + Keranjang
                                </button>
                                <button
                                    @click="buyNow(product)"
                                    class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                >
                                    Beli Sekarang
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Shopping Cart Popup -->
                <div
                    v-if="showCart"
                    class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
                >
                    <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                        <div class="flex justify-between items-center mb-4">
                            <h3 class="text-lg font-semibold">
                                Keranjang Belanja
                            </h3>
                            <button
                                @click="showCart = false"
                                class="text-gray-500 hover:text-gray-700"
                            >
                                <span class="sr-only">Close</span>
                                <svg
                                    class="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div class="max-h-96 overflow-y-auto">
                            <div
                                v-for="item in cart"
                                :key="item.id"
                                class="flex items-center py-4 border-b"
                            >
                                <!-- Placeholder Image in Cart -->
                                <div
                                    class="w-16 h-16 bg-gray-200 rounded flex items-center justify-center"
                                >
                                    <svg
                                        class="w-8 h-8 text-gray-400"
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
                                </div>
                                <div class="ml-4 flex-1">
                                    <h4 class="text-sm font-medium">
                                        {{ item.name }}
                                    </h4>
                                    <p class="text-sm text-gray-500">
                                        Rp {{ item.price.toLocaleString() }}
                                    </p>
                                </div>
                                <div class="flex items-center">
                                    <button
                                        @click="decreaseQuantity(item)"
                                        class="text-gray-500 hover:text-gray-700"
                                    >
                                        -
                                    </button>
                                    <span class="mx-2 w-8 text-center">{{
                                        item.quantity
                                    }}</span>
                                    <button
                                        @click="increaseQuantity(item)"
                                        class="text-gray-500 hover:text-gray-700"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 border-t pt-4">
                            <div class="flex justify-between mb-4">
                                <span class="font-medium">Total:</span>
                                <span class="font-bold"
                                    >Rp {{ cartTotal.toLocaleString() }}</span
                                >
                            </div>
                            <button
                                class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

export default {
    name: "ProdukLokal",
    components: {
        Navbar,
        Footer,
    },
    data() {
        return {
            currentImage: 0,
            showCart: false,
            cart: [],
            products: [
                {
                    id: 1,
                    name: "Kain Tenun Tradisional",
                    description:
                        "Kain tenun berkualitas tinggi dengan motif khas Desa Bungkutoko",
                    price: 450000,
                    image: "/images/products/tenun.jpg",
                    category: "Kerajinan",
                    stock: 15,
                    badge: "Best Seller",
                },
                {
                    id: 2,
                    name: "Keripik Pisang",
                    description:
                        "Keripik pisang renyah dengan berbagai varian rasa",
                    price: 25000,
                    image: "/images/products/keripik.jpg",
                    category: "Makanan",
                    stock: 50,
                },
                {
                    id: 3,
                    name: "Tas Anyaman Bambu",
                    description:
                        "Tas anyaman bambu handmade dengan desain modern",
                    price: 175000,
                    image: "/images/products/tas-bambu.jpg",
                    category: "Fashion",
                    stock: 8,
                    badge: "Limited",
                },
                {
                    id: 4,
                    name: "Madu Hutan",
                    description: "Madu murni dari hutan Desa Bungkutoko",
                    price: 85000,
                    image: "/images/products/madu.jpg",
                    category: "Makanan",
                    stock: 20,
                },
                {
                    id: 5,
                    name: "Gelang Etnik",
                    description: "Gelang tangan dengan motif etnik khas daerah",
                    price: 45000,
                    image: "/images/products/gelang.jpg",
                    category: "Fashion",
                    stock: 30,
                },
                {
                    id: 6,
                    name: "Kopi Lokal",
                    description: "Kopi arabika premium hasil panen lokal",
                    price: 65000,
                    image: "/images/products/kopi.jpg",
                    category: "Makanan",
                    stock: 25,
                    badge: "New",
                },
                {
                    id: 7,
                    name: "Kue Seri",
                    description: "Kue seri khas Desa Bungkutoko",
                    price: 35000,
                    image: "/images/products/kue-seri.jpg",
                    category: "Makanan",
                    stock: 10,
                    badge: "Limited",
                },
                {
                    id: 8,
                    name: "Kue Seri",
                    description: "Kue seri khas Desa Bungkutoko",
                    price: 35000,
                    image: "/images/products/kue-seri.jpg",
                    category: "Makanan",
                    stock: 10,
                    badge: "Limited",
                },
            ],
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
                    src: "/images/herosection/bg-hero4.jpg",
                    alt: "Hero Image 4",
                },
                {
                    id: 5,
                    src: "/images/herosection/bg-hero5.jpg",
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
        };
    },
    computed: {
        cartTotal() {
            return this.cart.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            );
        },
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
            setInterval(this.nextImage, 5000);
        },
        addToCart(product) {
            const existingItem = this.cart.find(
                (item) => item.id === product.id
            );
            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.cart.push({
                    ...product,
                    quantity: 1,
                });
            }
            this.showCart = true;
        },
        buyNow(product) {
            this.cart = [
                {
                    ...product,
                    quantity: 1,
                },
            ];
            this.showCart = true;
        },
        increaseQuantity(item) {
            if (item.quantity < item.stock) {
                item.quantity++;
            }
        },
        decreaseQuantity(item) {
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                this.cart = this.cart.filter(
                    (cartItem) => cartItem.id !== item.id
                );
            }
        },
    },
    mounted() {
        this.startCarousel();
    },
};
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
