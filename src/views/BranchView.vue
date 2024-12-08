<template>
  <div>
    <nav class="container mx-auto p-7 bg-white shadow-lg rounded-lg">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="text-2xl font-bold w-42 ">
          <a href="/" class="hover:text-white hover:bg-red-400 rounded text-gray-900 ">CAR<span
              class="text-red-500">IN</span></a>
        </div>

        <!-- Navigation Links -->
        <div class="m-0 p-0 max-w-2xl w-full hidden sm:text-sm md:grid md:grid-cols-6">

          <a href="/#hero" class="text-black hover:text-white hover:bg-red-500  text-center">
            Home
          </a> <a href="/#branches" class="text-black hover:text-white hover:bg-red-500  text-center">
            Branches
          </a>
          <a href="/#explore" class="text-black hover:text-white hover:bg-red-500  text-center">
            Explore
          </a>

          <a href="/#services" class="text-black hover:text-white hover:bg-red-500  text-center">
            Services
          </a>
          <a href="/#testimonials" class="text-black hover:text-white hover:bg-red-500  text-center">
            Testimonials
          </a>

          <a href="/#newsletter" class="text-black hover:text-white hover:bg-red-500 text-center">
            Subscribe
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-500 hover:text-red-500 hover:border-red-500"
          @click="toggleMenu">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="menuOpen" class="md:hidden mt-4 space-y-4 text-center bg-gray-50 py-4 rounded-lg shadow-inner">
        <a href="/#hero" class="block text-gray-700 hover:text-red-500">Home</a>
        <a href="/#branches" class="block text-gray-700 hover:text-red-5a00">Branches</a>
        <a href="/#explore" class="block text-gray-700 hover:text-red-500">Explore</a>
        <a href="/#services" class="block text-gray-700 hover:text-red-500">Services</a>
        <a href="/#testimonials" class="block text-gray-700 hover:text-red-500">Testimonials</a>
        <a href="/#newsletter" class="block text-gray-700 hover:text-red-500">Subscribe</a>
      </div>
    </nav>
    <!-- Header -->
    <header class="bg-white shadow p-6 text-center">
      <h1 class="text-4xl font-bold">
        {{ branch.name }}
      </h1>
      <p class="text-gray-600">{{ branch.description }}</p>
    </header>

    <!-- Cars in Branch -->
    <section class="py-12 bg-gray-50">
      <div v-if="filteredCars.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <div v-for="car in filteredCars" :key="car.id" class="p-4 bg-white shadow-md rounded-lg">
          <img :src="car.image" alt="Car" class="w-full h-40 object-cover rounded mb-4">
          <h3 class="text-xl font-bold">{{ car.model }}</h3>
          <p class="text-gray-600">{{ car.type }} | {{ car.year }}</p>
          <router-link :to="`/cars/${car.id}`" class="block mt-4 text-center bg-red-500 text-white py-2 rounded">
            View Details
          </router-link>
        </div>
      </div>
      <p v-else class="text-center text-gray-600 mt-10">No cars available in this branch.</p>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from '@/stores/store';

const route = useRoute();
const store = useStore();

const branchId = Number(route.params.id);
const branch = computed(() => store.branches.find((b) => b.id === branchId));
const filteredCars = computed(() => store.cars.filter((car) => car.branchId === branchId));
</script>
