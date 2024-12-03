<template>
  <div class="bg-gray-100 min-h-screen">
    <!-- Header -->
    <header class="bg-white shadow-md py-6">
      <div class="text-center">
        <router-link to="/">
          <h1 class="text-4xl font-bold text-gray-800">
            CAR<span class="text-red-500">IN</span>
          </h1>
        </router-link>
      </div>
    </header>

    <!-- Branch Details -->
    <section class="py-8 bg-white">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-800">Branch A</h2>
        <p class="text-gray-600 mt-2 text-lg">
          Discover the best cars available at our Branch A location.
        </p>
      </div>
    </section>

    <!-- Cars in Stock -->
    <section class="py-10 bg-gray-50 ">
      <div class="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 card">
        <div v-for="(car, index) in cars" :key="index"
          class="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <img :src="car.image" alt="Car" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800">{{ car.name }}</h3>
            <p class="text-gray-600 text-sm">
              {{ car.type }} | {{ car.year }} | {{ car.fuel }}
            </p>
            <p class="text-lg font-semibold text-gray-700 mt-4">
              ${{ car.price }}
            </p>
            <router-link :to="`/cars/${car.id}`"
              class="inline-block mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
              View Details
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Branches Section -->
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-8">
          Branches
        </h2>
        <div v-for="branch in branches" :key="branch.id" class="mb-12">
          <h3 class="text-2xl font-semibold text-gray-700 mb-4">
            {{ branch.name }}
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="car in cars" :key="car.id" class="bg-white shadow-md rounded-lg p-6 border"
              :class="{ 'border-red-500': !car.stock[branch.name.toLowerCase()] }">
              <img :src="car.image" alt="Car" class="w-full h-40 object-cover rounded-lg" />
              <h4 class="text-lg font-bold mt-4">{{ car.model }}</h4>
              <p class="text-gray-600 mt-2">Price: ${{ car.price }}</p>
              <p class="text-sm mt-2" :class="car.stock[branch.name.toLowerCase()] ? 'text-green-500' : 'text-red-500'">
                {{ car.stock[branch.name.toLowerCase()] ? 'In Stock' : 'Out of Stock' }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue';
import { useStore } from '@/stores/store';

const store = useStore();

// Fetch data when component is mounted
store.fetchCars();

const cars = computed(() => store.cars);

// Define branches
const branches = ref([
  { id: 1, name: 'Branch1' },
  { id: 2, name: 'Branch2' },
  { id: 3, name: 'Branch3' },
]);
</script>

<style scoped>
header {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

section {
  padding: 2rem 0;
}

.card:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}
</style>