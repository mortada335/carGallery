<template>
        <div class="bg-gray-100">
                <!-- Header -->
                <header class="bg-white shadow-md py-6">
                        <div class="text-center">
                                <router-link to="/">
                                        <h1 class="text-4xl font-bold text-gray-800">CAR<span
                                                        class="text-red-500">IN</span></h1>
                                </router-link>
                        </div>
                </header>

                <!-- Car Details Section -->
                <section class="py-10 bg-white">
                        <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                                <!-- Car Image -->
                                <div>
                                        <img src="https://source.unsplash.com/800x600/?car,details" alt="Car Details"
                                                class="w-full rounded-lg shadow-md" />
                                </div>

                                <!-- Car Info -->
                                <div>
                                        <h2 class="text-3xl font-bold text-gray-800">Tesla Model 3</h2>
                                        <p class="text-gray-600 mt-4">
                                                This Tesla Model 3 offers cutting-edge electric vehicle technology with
                                                a sleek
                                                design, exceptional range, and advanced safety features.
                                        </p>
                                        <div class="mt-6 space-y-4">
                                                <p class="text-lg text-gray-700"><strong>Year:</strong> 2023</p>
                                                <p class="text-lg text-gray-700"><strong>Fuel:</strong> Electric</p>
                                                <p class="text-lg text-gray-700"><strong>Mileage:</strong> 10,000 miles
                                                </p>
                                                <p class="text-lg text-gray-700"><strong>Price:</strong> $45,000</p>
                                        </div>
                                        <button
                                                class="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                                                Buy Now
                                        </button>
                                </div>
                        </div>
                </section>

                <!-- Features Section -->
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
// No specific logic is required for static content.
// You can use props or Vue Router params to fetch dynamic data.
</script>

<style scoped>
/* Add scoped styles if needed */
</style>