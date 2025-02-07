<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useStore } from "../stores/store.js";
import { useRouter } from "vue-router";
import Header from "@/components/Header.vue";
const store = useStore();
const router = useRouter();

// Track selected car type
const selectedType = ref("all");
const logoLink = "/";
const navigation = [
  { name: "Home", href: "/#home" },
  { name: "Branches", href: "/#branch" },
  { name: "Explore", href: "/#explore" },
  { name: "Testimonials", href: "/#testimonials" },
];
// Fetch cars on component mount
onMounted(() => {
  store.fetchBranches();
  store.fetchCars();
});

// Get unique car types for the dropdown
const carTypes = computed(() => {
  const types = new Set(store.cars.map((car) => car.type));
  return ["all", ...Array.from(types)];
});

// Filter cars based on selected type
const filteredCars = computed(() => {
  if (selectedType.value === "all") {
    return store.cars; // Show all cars if "all" is selected
  }
  return store.cars.filter((car) => car.type === selectedType.value); // Filter by selected type
});
</script>

<template>
  <Header :logo="logoLink" :is-transparent="true" :navigation="navigation" />
  <div class="py-16 bg-gray-50">
    <div class="text-center">
      <h2 class="text-3xl font-bold text-gray-800">Cars by Type</h2>
      <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
        Explore our wide range of cars categorized by their type.
      </p>

      <!-- Car Type Selection Dropdown -->
      <div class="mt-8">
        <label for="car-type" class="sr-only">Select Car Type</label>
        <select
          id="car-type"
          v-model="selectedType"
          class="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option v-for="type in carTypes" :key="type" :value="type">
            {{ type === "all" ? "All Types" : type }}
          </option>
        </select>
      </div>
    </div>

    <!-- Filtered Cars -->
    <div class="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <div
          v-for="car in filteredCars"
          :key="car.id"
          class="p-6 bg-white shadow-md rounded-lg"
        >
          <img
            loading="lazy"
            :src="car.image"
            alt="Car"
            class="w-full h-40 object-cover rounded-md mb-4 hover:scale-110 transition duration-300"
          />
          <h3 class="text-xl font-bold text-gray-800">{{ car.model }}</h3>
          <p class="text-sm text-gray-600">
            {{ car.type }} | {{ car.year }} | {{ car.fuel }}
          </p>
          <p class="text-lg font-semibold text-gray-700 mt-2">
            ${{ Math.trunc(car.price).toLocaleString() }}
          </p>
          <router-link
            :to="`/cars/${car.id}`"
            class="block mt-4 px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition text-center"
          >
            Show Details
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
