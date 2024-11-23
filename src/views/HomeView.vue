<template>

  <div>

    <!-- Header Section -->
    <header class="bg-white shadow-md py-6">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-800">
          CAR<span class="text-red-500">IN</span>
        </h1>
        <p class="text-lg text-gray-600 mt-2">اعثر على سيارة أحلامك الآن</p>
        <button class="mt-4 px-6 py-2 bg-blue-800 text-white rounded-full hover:bg-red-500 transition">
          تفاصيل
        </button>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative text-center py-16 bg-gray-50">
      <h1 class="absolute inset-0 text-8xl font-bold text-gray-200 z-0 uppercase">
        AUDI
      </h1>
      <div class="relative z-20">
        <img loading="lazy"
          src="https://images.unsplash.com/photo-1655284764117-9711c428199b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Red Audi Car" class="mx-auto w-3/4 max-w-4xl rounded-md shadow-lg">
      </div>
      <div class="mt-10 flex flex-wrap justify-center gap-4">
        <select class="px-4 py-2 border border-gray-300 rounded-full text-gray-600 focus:outline-none">
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
        </button>
      </div>
    </section>

    <!-- Brands Section -->
    <section class="py-10 bg-gray-100 text-center">
      <h2 class="text-2xl font-bold text-gray-700">Brands</h2>
      <div class="mt-6 flex justify-center gap-6 flex-wrap">
        <img src="https://via.placeholder.com/100x50?text=Honda" alt="Honda" class="h-12">
        <img src="https://via.placeholder.com/100x50?text=Ferrari" alt="Ferrari" class="h-12">
        <img src="https://via.placeholder.com/100x50?text=Toyota" alt="Toyota" class="h-12">
        <img src="https://via.placeholder.com/100x50?text=Audi" alt="Audi" class="h-12">
        <img src="https://via.placeholder.com/100x50?text=Tesla" alt="Tesla" class="h-12">
      </div>
    </section>

    <!-- Explore Section -->
    <section class="py-12 bg-white">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-800">Explore</h2>
        <div class="mt-4 flex justify-center gap-6">
          <button class="px-4 py-2 text-white bg-red-500 rounded-full">Cars & Minivan</button>
          <button class="px-4 py-2 text-gray-600 bg-gray-200 rounded-full">Trucks</button>
          <button class="px-4 py-2 text-gray-600 bg-gray-200 rounded-full">SUVs</button>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 mx-auto max-w-5xl">
        <div class="p-6 bg-gray-50 shadow-md rounded-lg">
          <img src="https://source.unsplash.com/400x300/?car" alt="Car" class="w-full rounded-md mb-4">
          <h3 class="text-xl font-bold text-gray-800">Tesla Model 3</h3>
          <p class="text-sm text-gray-600">Used | 2023 | Petrol</p>
          <p class="text-lg font-semibold text-gray-700 mt-2">$36,620</p>
          <button class="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
            Order Now
          </button>
        </div>
        <div class="p-6 bg-gray-50 shadow-md rounded-lg">
          <img src="https://source.unsplash.com/400x300/?car,suv" alt="Car" class="w-full rounded-md mb-4">
          <h3 class="text-xl font-bold text-gray-800">Tesla Model X</h3>
          <p class="text-sm text-gray-600">Used | 2022 | Electric</p>
          <p class="text-lg font-semibold text-gray-700 mt-2">$88,620</p>
          <button class="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
            Order Now
          </button>
        </div>
      </div>
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

</script>

<style lang="scss" scoped></style>