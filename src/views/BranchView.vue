<template>
  <div class="bg-gray-100">
    <!-- Header -->
    <header class="bg-white shadow-md py-6">
      <div class="text-center">
        <router-link to="/">
          <h1 class="text-4xl font-bold text-gray-800">CAR<span class="text-red-500">IN</span></h1>
        </router-link>
      </div>
    </header>

    <!-- Branch Details -->
    <section class="py-6 bg-white">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-2xl font-bold text-gray-800">Branch A</h2>
        <p class="text-gray-600 mt-2">Find the best cars in stock at our Branch A location.</p>
      </div>
    </section>

    <!-- Cars in Stock -->
    <section class="py-10 bg-gray-50">
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Car Card -->
        <div v-for="(car, index) in cars" :key="index" class="bg-white shadow-md rounded-lg p-6">
          <img :src="car.image" alt="Car" class="w-full rounded-lg mb-4" />
          <h3 class="text-xl font-bold text-gray-800">{{ car.name }}</h3>
          <p class="text-sm text-gray-600">{{ car.type }} | {{ car.year }} | {{ car.fuel }}</p>
          <p class="text-lg font-semibold text-gray-700 mt-2">${{ car.price }}</p>
          <router-link :to="`/car-details/${car.id}`"
            class="mt-4 inline-block px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            View Details
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Mock data for cars
const cars = ref([
  {
    id: 1,
    name: "Tesla Model 3",
    type: "Used",
    year: 2023,
    fuel: "Electric",
    price: 45000,
    image: "https://source.unsplash.com/400x300/?car,suv",
  },
  {
    id: 2,
    name: "BMW X5",
    type: "New",
    year: 2024,
    fuel: "Petrol",
    price: 60000,
    image: "https://source.unsplash.com/400x300/?car,luxury",
  },
  {
    id: 3,
    name: "Audi R8",
    type: "Used",
    year: 2022,
    fuel: "Petrol",
    price: 120000,
    image: "https://source.unsplash.com/400x300/?car,sports",
  },
]);
</script>

<style scoped>
/* Add scoped styles if needed */
</style>