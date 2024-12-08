<template>
  <div id="app">
    <nav class="container mx-auto p-7 bg-white shadow-lg rounded-lg">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="text-2xl font-bold w-42">
          <a href="/" class="hover:text-white hover:bg-red-400 rounded text-gray-900"
            >CAR<span class="text-red-500">IN</span></a
          >
        </div>

        <!-- Navigation Links -->
        <div class="m-0 p-0 max-w-5xl w-5/6 hidden sm:text-sm md:grid md:grid-cols-6">
          <a
            href="#hero"
            class="text-black rounded-3xl hover:text-white hover:bg-red-500 text-center"
          >
            Home
          </a>
          <a
            href="#branches"
            class="text-black hover:text-white rounded-3xl hover:bg-red-500 text-center"
          >
            Branches
          </a>
          <a
            href="#explore"
            class="text-black hover:text-white rounded-3xl hover:bg-red-500 text-center"
          >
            Explore
          </a>

          <a
            href="#services"
            class="text-black hover:text-white rounded-3xl hover:bg-red-500 text-center"
          >
            Services
          </a>
          <a
            href="#testimonials"
            class="text-black hover:text-white rounded-3xl hover:bg-red-500 text-center"
          >
            Testimonials
          </a>

          <a
            href="#newsletter"
            class="text-black hover:text-white rounded-3xl hover:bg-red-500 text-center"
          >
            Subscribe
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-500 hover:text-red-500 hover:border-red-500"
          @click="toggleMenu"
        >
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="menuOpen"
        class="md:hidden mt-4 space-y-4 text-center bg-gray-50 py-4 rounded-lg shadow-inner"
      >
        <a href="#hero" class="block text-gray-700 hover:text-red-500">Home</a>
        <a href="#branches" class="block text-gray-700 hover:text-red-5a00">Branches</a>
        <a href="#explore" class="block text-gray-700 hover:text-red-500">Explore</a>
        <a href="#services" class="block text-gray-700 hover:text-red-500">Services</a>
        <a href="#testimonials" class="block text-gray-700 hover:text-red-500"
          >Testimonials</a
        >
        <a href="#newsletter" class="block text-gray-700 hover:text-red-500">Subscribe</a>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="relative text-center py-16 bg-gray-50">
      <h1 class="absolute inset-0 text-8xl font-bold text-gray-200 z-0 uppercase">
        AUDI
      </h1>
      <div class="relative">
        <img
          loading="lazy"
          src="/assets/images/home.jpg"
          alt="Audi Car"
          class="mx-auto w-full max-w-4xl rounded-md shadow-lg"
        />
      </div>
      <div class="relative z-30 mt-10">
        <button
          @click="scrollToSection('explore')"
          class="px-6 py-3 text-black rounded-lg text-lg hover:bg-red-500 hover:text-white shadow-lg transition"
        >
          Explore Featured Cars
        </button>
      </div>
    </section>

    <!-- Branch Selection Section -->
    <section class="py-12 bg-gray-50" id="branches">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-800">Select a Branch</h2>
        <p class="text-gray-600 mt-2 max-w-2xl mx-auto">
          Choose a branch to explore the cars available in stock.
        </p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
        <div
          v-for="branch in branches"
          :key="branch.id"
          class="p-6 bg-white shadow-md rounded-lg text-center hover:shadow-lg transition duration-300"
        >
          <img
            loading="lazy"
            :src="branch.image"
            alt="Branch Image"
            class="mx-auto w-full max-w-4xl h-1/2 object-cover rounded p-1 mb-3"
          />
          <h3 class="text-xl font-bold text-gray-800 mb-2">{{ branch.name }}</h3>
          <p class="text-gray-600 mb-4">{{ branch.description }}</p>
          <router-link
            :to="`/branch/${branch.id}`"
            class="inline-block px-4 py-2 hover:text-red-500 bg-red-500 hover:bg-white text-white rounded-full transition"
          >
            Explore {{ branch.name }}
          </router-link>
        </div>
      </div>
    </section>

    <!-- Explore Section -->
    <section id="explore" class="py-12 bg-white">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-800">Explore Our Cars</h2>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-10 max-w-7xl mx-auto gap-6"
        >
          <div
            v-for="car in limitedCars"
            :key="car.id"
            class="p-6 bg-gray-50 shadow-md rounded-lg"
          >
            <img
              loading="lazy"
              :src="car.image"
              alt="Car"
              class="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 class="text-xl font-bold text-gray-800">{{ car.model }}</h3>
            <p class="text-sm text-gray-600">
              {{ car.type }} | {{ car.year }} | {{ car.fuel }}
            </p>
            <p class="text-lg font-semibold text-gray-700 mt-2">${{ car.price }}</p>
            <router-link
              :to="`/cars/${car.id}`"
              class="block mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition text-center"
              >Show Details</router-link
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-12 bg-gray-50">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-800">Our Services</h2>
        <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
          We provide many of the best services for you, and you will get the best benefits
          here.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto">
        <div class="text-center p-6 bg-white shadow-md rounded-lg">
          <h3 class="text-lg font-bold text-gray-800">Buy & Sell Cars</h3>
          <p class="text-sm text-gray-600 mt-2">We provide you the best deals in town.</p>
        </div>
        <div class="text-center p-6 bg-white shadow-md rounded-lg">
          <h3 class="text-lg font-bold text-gray-800">Search & Filters For Cars</h3>
          <p class="text-sm text-gray-600 mt-2">
            We offer flexible Search and Filter options for all.
          </p>
        </div>
        <div class="text-center p-6 bg-white shadow-md rounded-lg">
          <h3 class="text-lg font-bold text-gray-800">Trusted Service</h3>
          <p class="text-sm text-gray-600 mt-2">We prioritize customer satisfaction.</p>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-12 bg-white">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-800">What Our Customers Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto">
          <div class="text-center p-6 bg-gray-50 shadow-md rounded-lg">
            <p class="italic text-gray-700">
              "Fantastic service and great cars! Highly recommended."
            </p>
            <h3 class="mt-4 font-bold text-gray-800">- John D.</h3>
          </div>
          <div class="text-center p-6 bg-gray-50 shadow-md rounded-lg">
            <p class="italic text-gray-700">
              "I found my dream car with ease. Amazing experience!"
            </p>
            <h3 class="mt-4 font-bold text-gray-800">- Sarah K.</h3>
          </div>
          <div class="text-center p-6 bg-gray-50 shadow-md rounded-lg">
            <p class="italic text-gray-700">
              "Highly professional staff and great prices!"
            </p>
            <h3 class="mt-4 font-bold text-gray-800">- Mike L.</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Advanced Search Filters Section -->
    <section class="py-12 bg-gray-50">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-800">Find Your Perfect Car</h2>
        <p class="text-gray-600 mt-2">
          Search and filter cars based on your preferences.
        </p>
      </div>
      <div class="flex gap-4 max-w-3xl mx-auto">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search by model..."
          class="border border-gray-300 px-4 py-2 rounded-lg w-full"
        />
        <select class="border border-gray-300 px-4 py-2 rounded-lg">
          <option value="">All Types</option>
          <option>Sedan</option>
          <option>SUV</option>
          <option>Truck</option>
        </select>
      </div>
    </section>

    <!-- Promotions Section -->
    <!-- <section class="py-12 bg-gray-50">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-800">Special Promotions</h2>
        <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
          Don't miss our exclusive deals and discounts!
        </p>
      </div>
    </section> -->

    <!-- Newsletter Section -->
    <section id="newsletter" class="py-20 bg-white">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-800">Stay Updated</h2>
        <p class="text-gray-600 mt-4 max-w-xl mx-auto">
          Subscribe to our newsletter to get the latest updates and offers.
        </p>
      </div>
      <div class="flex gap-4 max-w-md mx-auto mt-6">
        <input
          v-model="newsletterEmail"
          type="email"
          placeholder="Enter your email"
          class="border border-gray-300 px-4 py-2 rounded-lg w-full"
        />
        <button
          @click="subscribeNewsletter"
          class="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Subscribe
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-10">
      <div class="max-w-5xl mx-auto text-center">
        <div class="flex justify-center gap-4 mb-4">
          <div class="space-x-5 sm:text-sm md:grid sm:grid-cols-6">
            <a
              href="#hero"
              class="text-white hover:text-white hover:bg-red-500 text-center"
            >
              Home
            </a>
            <a
              href="#branches"
              class="text-white hover:text-white hover:bg-red-500 text-center"
            >
              Branches
            </a>
            <a
              href="#explore"
              class="text-white hover:text-white hover:bg-red-500 text-center"
            >
              Explore
            </a>

            <a
              href="#services"
              class="text-white hover:text-white hover:bg-red-500 text-center"
            >
              Services
            </a>
            <a
              href="#testimonials"
              class="text-white hover:text-white hover:bg-red-500 text-center"
            >
              Testimonials
            </a>

            <a
              href="#newsletter"
              class="text-white hover:text-white hover:bg-red-500 text-center"
            >
              Subscribe
            </a>
          </div>
        </div>
        <p>&copy; 2024 Car Leadership. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useStore } from "../stores/store.js";

const searchQuery = ref("");

const menuOpen = ref(false);

const limitedCars = computed(() => {
  return store.cars.slice(0, 4);
});
const store = useStore();

const toggleMenu = () => (menuOpen.value = !menuOpen.value);

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
// const cars = computed(() => store.cars)

const branches = computed(() => store.branches);

const subscribeNewsletter = () => {};

const newsletterEmail = ref("");

onMounted(() => {
  store.fetchCars();
  store.fetchBranches();
});
</script>

<style lang="scss" scoped>
nav {
  position: sticky;
  top: 0;
  z-index: 50;
}
</style>
