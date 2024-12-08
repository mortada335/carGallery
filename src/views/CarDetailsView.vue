<template>
  <div id="app" class="bg-gray-100 min-h-screen">
    <nav class="container mx-auto p-7 bg-white shadow-lg rounded-lg">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="text-2xl font-bold w-42">
          <a href="/" class="hover:text-white hover:bg-red-400 rounded text-gray-900"
            >CAR<span class="text-red-500">IN</span></a
          >
        </div>

        <!-- Navigation Links -->
        <div class="m-0 p-0 max-w-2xl w-full hidden sm:text-sm md:grid md:grid-cols-6">
          <a
            href="/#hero"
            class="text-black hover:text-white hover:bg-red-500 text-center"
          >
            Home
          </a>
          <a
            href="/#branches"
            class="text-black hover:text-white hover:bg-red-500 text-center"
          >
            Branches
          </a>
          <a
            href="/#explore"
            class="text-black hover:text-white hover:bg-red-500 text-center"
          >
            Explore
          </a>

          <a
            href="/#services"
            class="text-black hover:text-white hover:bg-red-500 text-center"
          >
            Services
          </a>
          <a
            href="/#testimonials"
            class="text-black hover:text-white hover:bg-red-500 text-center"
          >
            Testimonials
          </a>

          <a
            href="/#newsletter"
            class="text-black hover:text-white hover:bg-red-500 text-center"
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
        <a href="/#hero" class="block text-gray-700 hover:text-red-500">Home</a>
        <a href="/#branches" class="block text-gray-700 hover:text-red-5a00">Branches</a>
        <a href="/#explore" class="block text-gray-700 hover:text-red-500">Explore</a>
        <a href="/#services" class="block text-gray-700 hover:text-red-500">Services</a>
        <a href="/#testimonials" class="block text-gray-700 hover:text-red-500"
          >Testimonials</a
        >
        <a href="/#newsletter" class="block text-gray-700 hover:text-red-500"
          >Subscribe</a
        >
      </div>
    </nav>

    <!-- Car Details Section -->
    <section v-if="car" class="py-10 bg-white">
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Car Image -->
        <div>
          <img
            loading="lazy"
            :src="car.image"
            alt="Car Details"
            class="w-full rounded-lg shadow-md"
          />
        </div>

        <!-- Car Info -->
        <div>
          <h2 class="text-3xl font-bold text-gray-800">{{ car.model }}</h2>
          <p class="text-gray-600 mt-4">
            Discover the luxurious and performance-driven {{ car.model }}.
          </p>
          <div class="mt-6 space-y-4">
            <p class="text-lg text-gray-700"><strong>Year:</strong> {{ car.year }}</p>
            <p class="text-lg text-gray-700"><strong>Fuel:</strong> {{ car.fuel }}</p>
            <p class="text-lg text-gray-700"><strong>Price:</strong> ${{ car.price }}</p>
            <p class="text-lg text-gray-700"><strong>Type:</strong> {{ car.type }}</p>
            <p class="text-lg text-gray-700">
              <strong>Performance:</strong> {{ car.performance }}
            </p>
            <p class="text-lg text-gray-700">
              <strong>Dimensions:</strong> {{ car.dimensions }}
            </p>
            <p class="text-lg text-gray-700">
              <strong>Seating:</strong> {{ car.seating }} passengers
            </p>
            <p class="text-lg text-gray-700"><strong>Safety:</strong> {{ car.safety }}</p>
          </div>
          <button
            @click=""
            class="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
    <section v-else class="py-10 text-center">
      <p class="text-gray-700">Car details not found. Please try again.</p>
    </section>
    <section class="py-10 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <h3 class="text-2xl font-bold text-gray-800 text-center">Features</h3>
        <ul class="mt-6 space-y-4 text-gray-700">
          <li>✔ Long-range battery with up to 358 miles per charge</li>
          <li>✔ Dual motor all-wheel drive for superior handling</li>
          <li>✔ Autopilot advanced safety and convenience features</li>
          <li>✔ Premium audio system with immersive sound</li>
          <li>✔ Touchscreen interface with built-in navigation</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useStore } from "@/stores/store";
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const store = useStore();

const carId = route.params.id;
const car = computed(() => store.cars.find((c) => c.id === parseInt(carId)));
onMounted(() => {
  if (!store.cars.length) {
    store.fetchCars();
  }
});
</script>

<style scoped></style>
