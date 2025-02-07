<script setup>
import { useStore } from "@/stores/store";
import { onMounted, computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { mdiArrowLeft } from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const path = mdiArrowLeft;

const route = useRoute();
const router = useRouter();
const store = useStore();
const carId = route.params.id;

const car = computed(() => {
  return store.cars.find((c) => c.id === parseInt(carId));
});

const relatedCars = computed(() =>
  store.cars.filter((c) => c.type === car.value?.type && c.id !== carId)
);

onMounted(async () => {
  if (!store.cars.length) {
    await store.fetchCars();
  }
});

const mobileMenuOpen = ref(false);

const navigation = [
  { name: "Home", href: "/#home" },
  { name: "Branches", href: "/#branch" },
  { name: "Explore", href: "/#explore" },
  { name: "Testimonials", href: "/#testimonials" },
];
</script>

<template>
  <div id="app">
    <!-- Header and Nav -->
    <header class="relative inset-x-0 top-0 z-50">
      <nav
        class="flex items-center justify-between lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <button
            v-on:click="router.go(-1)"
            class="-m-1.5 p-1.5 hover:bg-gray-50"
          >
            <span class="sr-only">Your Company</span>
            <svg-icon type="mdi" :path="path"></svg-icon>
          </button>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 hover:bg-gray-50 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-sm/6 font-semibold text-gray-900"
            >{{ item.name }}</a
          >
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <div class="py-6">
            <a
              href="/search"
              class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >Search</a
            >
          </div>
        </div>
      </nav>
      <Dialog
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="/assets/images/logo.svg" alt="" />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >{{ item.name }}</a
                >
              </div>
              <div class="py-6">
                <a
                  href="/search"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >Search</a
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <!-- Car Details Section -->
    <section v-if="car" class="py-10 bg-white">
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          :src="car.image"
          :alt="car.model"
          class="rounded-lg shadow-md w-full"
        />

        <!-- Car Details -->
        <div>
          <h2 class="text-3xl font-bold text-gray-800">{{ car.model }}</h2>
          <p class="text-gray-600 mt-4">
            Discover the luxurious and performance-driven {{ car.model }}.
          </p>

          <!-- Car Specs Cards -->
          <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Spec Card: Year -->
            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p class="text-sm text-gray-500">Year</p>
              <p class="text-lg font-semibold text-gray-800">{{ car.year }}</p>
            </div>

            <!-- Spec Card: Fuel -->
            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p class="text-sm text-gray-500">Fuel</p>
              <p class="text-lg font-semibold text-gray-800">{{ car.fuel }}</p>
            </div>

            <!-- Spec Card: Price -->
            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p class="text-sm text-gray-500">Price</p>
              <p class="text-lg font-semibold text-gray-800">
                ${{ Math.trunc(car.price).toLocaleString() }}
              </p>
            </div>

            <!-- Spec Card: Type -->
            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p class="text-sm text-gray-500">Type</p>
              <p class="text-lg font-semibold text-gray-800">{{ car.type }}</p>
            </div>

            <!-- Spec Card: Transmission -->
            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p class="text-sm text-gray-500">Transmission</p>
              <p class="text-lg font-semibold text-gray-800">
                {{ car.transmission }}
              </p>
            </div>

            <!-- Spec Card: Drive Type -->
            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p class="text-sm text-gray-500">Drive Type</p>
              <p class="text-lg font-semibold text-gray-800">
                {{ car.driveType }}
              </p>
            </div>

            <!-- Spec Card: Performance -->
            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p class="text-sm text-gray-500">Performance</p>
              <p class="text-lg font-semibold text-gray-800">
                {{ car.performance }}
              </p>
            </div>

            <!-- Spec Card: Engine Size -->
            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p class="text-sm text-gray-500">Engine Size</p>
              <p class="text-lg font-semibold text-gray-800">
                {{ car.horsepower }} HP
              </p>
            </div>

            <!-- Spec Card: Torque -->
            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p class="text-sm text-gray-500">Torque</p>
              <p class="text-lg font-semibold text-gray-800">
                {{ car.torque }}
              </p>
            </div>

            <!-- Spec Card: Dimensions -->
            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p class="text-sm text-gray-500">Dimensions</p>
              <p class="text-lg font-semibold text-gray-800">
                {{ car.dimensions }}
              </p>
            </div>

            <!-- Spec Card: Seating -->
            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p class="text-sm text-gray-500">Seating</p>
              <p class="text-lg font-semibold text-gray-800">
                {{ car.seating }} passengers
              </p>
            </div>

            <!-- Spec Card: Safety -->
            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p class="text-sm text-gray-500">Safety</p>
              <p class="text-lg font-semibold text-gray-800">
                {{ car.safety }}
              </p>
            </div>
          </div>

          <!-- Call-to-Action Buttons -->
          <div class="mt-6 flex gap-4">
            <button
              class="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Buy Now
            </button>
            <button
              class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Book a Test Drive
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Cars Section -->
    <section v-if="relatedCars.length" class="py-5 mt-10 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <h3 class="text-2xl font-bold text-gray-800 text-center">
          Related Cars
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          <div
            v-for="relatedCar in relatedCars"
            class="transform hover:scale-105 hover:shadow-lg bg-white rounded-lg shadow-md overflow-hidden transition duration-200"
          >
            <img
              :src="relatedCar.image"
              alt="Related Car"
              class="w-full h-40 object-cover rounded-md"
            />
            <div class="p-2 flex flex-col">
              <h4 class="text-lg font-semibold">{{ relatedCar.model }}</h4>
              <p class="flex flex-col text-gray-600 mt-1">
                {{ relatedCar.type }} | {{ relatedCar.year }} |${{
                  Math.trunc(relatedCar.price).toLocaleString()
                }}
              </p>
              <router-link
                :to="`/cars/${relatedCar.id}`"
                class="px-6 py-2 mt-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition text-center"
                >Show Details</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
