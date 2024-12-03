<template>
        <!-- <div class="bg-gray-100">
                <div class="bg-gray-100">
                        <!-- Header 
                        <header class="bg-white shadow-md py-6">
                                <div class="text-center">
                                        <router-link to="/">
                                                <h1 class="text-4xl font-bold text-gray-800">CAR<span
                                                                class="text-red-500">IN</span></h1>
                                        </router-link>
                                </div>
                        </header>

                        <!-- Car Details Section 
                        <section v-if="car" class="py-10 bg-white">
                                <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <!-- Car Image 
                                        <div>
                                                <img :src="car.image" alt="Car Details"
                                                        class="w-full rounded-lg shadow-md" />
                                        </div>

                                        <!-- Car Info 
                                        <div>
                                                <h2 class="text-3xl font-bold text-gray-800">{{ car.model }}</h2>
                                                <p class="text-gray-600 mt-4">
                                                        This {{ car.model }} offers state-of-the-art features and
                                                        design.
                                                </p>
                                                <div class="mt-6 space-y-4">
                                                        <p class="text-lg text-gray-700"><strong>Year:</strong> {{
                                                                car.year }}</p>
                                                        <p class="text-lg text-gray-700"><strong>Fuel:</strong> {{
                                                                car.fuel }}</p>
                                                        <p class="text-lg text-gray-700"><strong>Price:</strong> ${{
                                                                car.price }}</p>
                                                </div>
                                                <button
                                                        class="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                                                        Buy Now
                                                </button>
                                        </div>
                                </div>
                        </section>
                        <section v-else class="py-10 text-center">
                                <p class="text-gray-700">Car details not found. Please try again.</p>
                        </section>
                </div>

                <!-- Features Section 
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

        </div> -->

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
                <section v-if="car" class="py-10 bg-white">
                        <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                                <!-- Car Image -->
                                <div>
                                        <img :src="car.image" alt="Car Details" class="w-full rounded-lg shadow-md" />
                                </div>

                                <!-- Car Info -->
                                <div>
                                        <h2 class="text-3xl font-bold text-gray-800">{{ car.model }}</h2>
                                        <p class="text-gray-600 mt-4">
                                                Discover the luxurious and performance-driven {{ car.model }}.
                                        </p>
                                        <div class="mt-6 space-y-4">
                                                <p class="text-lg text-gray-700"><strong>Year:</strong> {{ car.year }}
                                                </p>
                                                <p class="text-lg text-gray-700"><strong>Fuel:</strong> {{ car.fuel }}
                                                </p>
                                                <p class="text-lg text-gray-700"><strong>Price:</strong> ${{ car.price
                                                        }}</p>
                                                <p class="text-lg text-gray-700"><strong>Performance:</strong> {{
                                                        car.performance }}</p>
                                                <p class="text-lg text-gray-700"><strong>Dimensions:</strong> {{
                                                        car.dimensions }}</p>
                                                <p class="text-lg text-gray-700"><strong>Seating:</strong> {{
                                                        car.seating }} passengers</p>
                                                <p class="text-lg text-gray-700"><strong>Safety:</strong> {{ car.safety
                                                        }}</p>
                                        </div>
                                        <button
                                                class="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                                                Buy Now
                                        </button>
                                </div>
                        </div>
                </section>

                <section v-else class="py-10 text-center">
                        <p class="text-gray-700">Car details not found. Please try again.</p>
                </section>
        </div>
</template>

<script setup>

import { useStore } from '@/stores/store';
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()

const store = useStore()

const carId = route.params.id
const car = computed(() => store.cars.find(c => c.id === parseInt(carId)))
onMounted(() => {
        if (!store.cars.length) {
                store.fetchCars()
        }
})
</script>

<style scoped></style>