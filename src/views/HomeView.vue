<template>

  <div>

    <!-- Header Section -->
    <header class="bg-white shadow-md py-6">
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
        <!-- <select class="px-4 py-2 border border-gray-300 rounded-full text-gray-600 focus:outline-none">
          <option>New & Used</option>
          <option>New</option>
          <option>Used</option>
        </select>
        <select class="px-4 py-2 border border-gray-300 rounded-full text-gray-600 focus:outline-none">
          <option>INFINITI</option>
          <option>Toyota</option>
          <option>Honda</option>
        </select>
        <select class="px-4 py-2 border border-gray-300 rounded-full text-gray-600 focus:outline-none">
          <option>All Models</option>
          <option>Model A</option>
          <option>Model B</option>
        </select>
        <button class="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
          Search
        </button> -->
      </div>
    </section>

    <!-- Brands Section -->
    <!-- <section class="py-10 bg-gray-100 text-center">
      <h2 class="text-2xl font-bold text-gray-700">Models</h2>
      <div class="mt-6 flex justify-center gap-6 flex-wrap">
        <img src="https://via.placeholder.com/100x50?text=Honda" alt="Honda" class="h-12">
        <img src="https://via.placeholder.com/100x50?text=Ferrari" alt="Ferrari" class="h-12">
        <img src="https://via.placeholder.com/100x50?text=Toyota" alt="Toyota" class="h-12">
        <img src="https://via.placeholder.com/100x50?text=Audi" alt="Audi" class="h-12">
        <img src="https://via.placeholder.com/100x50?text=Tesla" alt="Tesla" class="h-12">
      </div>
    </section> -->

    <!-- Explore Section -->
    <section class="py-12 bg-white">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-800">Explore</h2>
        <div class="mt-4 flex justify-center gap-6">
          <button v-for="car in cars" :key="car.id"
            class="px-4 py-2 text-black hover:bg-red-500  hover:shadow-xl transition-shadow hover:text-white  bg-gray-200 rounded-full">{{
              car.model
            }}</button>
        </div>
      </div>
      <div class="mt-10 mx-auto max-w-5xl" v-for="car in cars" :key="car.id">
        <div class="p-6 bg-gray-50 shadow-md rounded-lg">
          <img :src="car.image" alt="Car" class="w-full h-1/2 object-cover rounded-md mb-4">
          <h3 class="text-xl font-bold text-gray-800">{{ car.model }}</h3>
          <p class="text-sm text-gray-600">{{ selectedCar.type }} | {{ selectedCar.year }} | {{ selectedCar.fuel }}</p>
          <p class="text-lg font-semibold text-gray-700 mt-2">${{ selectedCar.price }}</p>

          <router-link :to="`/cars/` + id" class="outline-none text-white"> <button
              class="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">Show Details
            </button>
          </router-link>
        </div>
      </div>
      <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 mx-auto max-w-5xl">
        <div class="p-6 bg-gray-50 shadow-md rounded-lg">
          <img src="../assets/1.jpg" alt="Car" class="w-full h-1/2 object-cover rounded-md mb-4">
          <h3 class="text-xl font-bold text-gray-800">Audi A4</h3>
          <p class="text-sm text-gray-600"> 2023 | Petrol</p>
          <p class="text-lg font-semibold text-gray-700 mt-2">$36,620</p>
          <button class="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
            Order Now
          </button>
        </div>
        <div class="p-6 bg-gray-50 shadow-md rounded-lg">
          <img src="../assets/2.jpg" alt="Car" class="w-full h-1/2 object-cover rounded-md mb-4">
          <h3 class="text-xl font-bold text-gray-800">Audi Q7</h3>
          <p class="text-sm text-gray-600">2022 | Electric</p>
          <p class="text-lg font-semibold text-gray-700 mt-2">$88,620</p>
          <button class="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
            Order Now
          </button>
        </div>
      </div> -->
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

<script setup>
import { ref } from 'vue'
const cars = ref([
  {
    id: 1,
    model: 'Audi A8',
    type: 'New',
    year: 2023,
    fuel: 'Petrol',
    price: 36620,
    image: 'assets/images/1.jpg',
  },
  {
    id: 2,
    model: 'Audi A4',
    type: 'New',
    year: 2022,
    fuel: 'Electric',
    price: 88620,
    image: 'assets/images/2.jpg',
  }, {
    id: 3,
    model: 'Audi Q7',
    type: "new",
    year: 2021,
    fuel: "Electric",
    price: 120000,
    image: 'assets/images/3.jpg',

  }
  // Add more cars as needed
]);

const selectedCar = ref(cars.value[0]);
function showCarDetails(car) {
  selectedCar.value = {
    id: car.id,
    model: car.model,
    type: car.type,
    year: car.year,
    fuel: car.fuel,
    price: car.price,
    image: car.image,
  };
}

// const cars = [
//   {
//     image: 'https://source.unsplash.com/400x300/?car',
//     title: 'Tesla Model 3',
//     price: '$36,620',
//     year: '2023',
//     fuel: 'Petrol',
//     description: 'This is a great car for a good price.',
//   },
//   {
//     image: 'https://source.unsplash.com/400x300/?car,suv',
//     title: 'Tesla Model X',
//     price: '$88,620',
//     year: '2022',
//     fuel: 'Electric',
//     description: 'This is a great SUV for a good price.',
//   }, {
//     image: 'https://source.unsplash.com/400x300/?car,minivan',
//     title: 'Tesla Model Y',
//     price: '$120,000',
//     year: '2021',
//     fuel: 'Electric',
//     description: 'This is a great minivan for a good price.',
//   }, {
//     image: 'https://source.unsplash.com/400x300/?car,truck',
//     title: 'Tesla Model S',
//     price: '$150,000',
//     year: '2020',
//     fuel: 'Electric',
//     description: 'This is a great truck for a good price.',
//   }, {
//     image: 'https://source.unsplash.com/400x300/?car,motorcycle',
//     title: 'Tesla Model 3',
//     price: '$25,000',
//     year: '2024',
//     fuel: 'Electric',
//     description: 'This is a great motorcycle for a good price.',
//   }, {
//     image: 'https://source.unsplash.com/400x300/?car,bus',
//     title: 'Tesla Model X',
//     price: '$40,000',
//     year: '2025',
//     fuel: 'Electric',
//     description: 'This is a great bus for a good price.',
//   }
// ]
</script>

<style lang="scss" scoped></style>