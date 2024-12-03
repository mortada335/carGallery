<template>
  <div id="app">
    <!-- Header Section -->
    <header class=" bg-slate-50 shadow-md py-6">
      <div class="text-center">
        <h1 class="text-7xl font-bold text-gray-800">
          CAR<span class="text-red-500">IN</span>
        </h1>
        <p class="text-lg text-gray-600 mt-2">Find Your Dream Car Now!</p>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative text-center py-16 bg-gray-50">
      <h1 class="absolute inset-0 text-8xl font-bold text-gray-200 z-0 uppercase">
        AUDI
      </h1>
      <div class="relative z-20">
        <img loading="lazy" src="/assets/images/home.jpg" alt="Audi Car"
          class="mx-auto w-3/4 max-w-4xl rounded-md shadow-lg">
      </div>
      <div class="mt-10 flex flex-wrap justify-center gap-4">

      </div>
    </section>

    <!-- Explore Section -->
    <section class="py-12 bg-white">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-800">Explore Our Cars</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-10 justify-center gap-6">
          <div v-for="car in limitedCars" :key="car.id" class="p-6 bg-gray-50 shadow-md rounded-lg">
            <img loading="lazy" :src="car.image" alt="Car" class="w-full h-1/2 object-cover rounded-md mb-4">
            <h3 class="text-xl font-bold text-gray-800">{{ car.model }}</h3>
            <p class="text-sm text-gray-600">{{ car.type }} | {{ car.year }} | {{ car.fuel }}</p>
            <p class="text-lg font-semibold text-gray-700 mt-2">${{ car.price }}</p>
            <router-link :to="`/cars/${car.id}`"
              class="block mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition text-center">Show
              Details</router-link>
          </div>
        </div>
      </div>


      <!-- Branch Selection Section -->
      <section class="py-12 bg-gray-50">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-800">Select a Branch</h2>
          <p class="text-gray-600 mt-2 max-w-2xl mx-auto">
            Choose a branch to explore the cars available in stock.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div v-for="branch in branches" :key="branch.id"
            class="p-6 bg-white shadow-md rounded-lg text-center hover:shadow-lg transition duration-300">
            <h3 class="text-xl font-bold text-gray-800 mb-2">{{ branch.name }}</h3>
            <p class="text-gray-600 mb-4">{{ branch.description }}</p>
            <router-link :to="`/branch/${branch.id}`"
              class="inline-block px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
              Explore {{ branch.name }}
            </router-link>
          </div>
        </div>
      </section>



    </section>


    <!-- Services Section -->
    <section class="py-12 bg-gray-50">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-800">Our Services</h2>
        <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
          We provide many of the best services for you, and you will get the best benefits here.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto">
        <div class="text-center p-6 bg-white shadow-md rounded-lg">
          <h3 class="text-lg font-bold text-gray-800">Buy & Sell Cars</h3>
          <p class="text-sm text-gray-600 mt-2">We provide you the best deals in town.</p>
        </div>
        <div class="text-center p-6 bg-white shadow-md rounded-lg">
          <h3 class="text-lg font-bold text-gray-800">Easy Payment</h3>
          <p class="text-sm text-gray-600 mt-2">We offer flexible payment options for all.</p>
        </div>
        <div class="text-center p-6 bg-white shadow-md rounded-lg">
          <h3 class="text-lg font-bold text-gray-800">Trusted Service</h3>
          <p class="text-sm text-gray-600 mt-2">We prioritize customer satisfaction.</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-10">
      <div class="max-w-5xl mx-auto text-center">
        <p>&copy; 2024 Car Leadership. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useStore } from '../stores/store.js'


const limitedCars = computed(() => {
  return store.cars.slice(0, 4) // Limit the number of cars to 10
})
const store = useStore()

const cars = computed(() => store.cars)

const branches = ref([
  { id: 1, name: 'Branch A', description: 'Main Branch In Downtown.' },
  { id: 2, name: 'Branch B', description: 'Second Branch In Downtown.' },
  { id: 3, name: 'Branch C', description: 'Third Branch In uptown area.' },
])

onMounted(() => {
  store.fetchCars()
})


</script>

<style lang="scss" scoped></style>