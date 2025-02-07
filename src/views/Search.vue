<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "@/stores/store";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiArrowLeft } from "@mdi/js";
import { useRouter } from "vue-router";

const path = mdiArrowLeft;
const store = useStore();
const router = useRouter();

const searchQuery = ref("");
const selectedBranch = ref("");
const mobileMenuOpen = ref(false);
onMounted(async () => {
  if (!store.branches.length) await store.fetchBranches();
  if (!store.cars.length) await store.fetchCars();
});

const filteredCars = computed(() => {
  let cars = store.cars;

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    cars = cars.filter(
      (car) =>
        car.model.toLowerCase().includes(query) ||
        car.type.toLowerCase().includes(query) ||
        car.fuel.toLowerCase().includes(query)
    );
  }

  if (selectedBranch.value) {
    const branch = store.branches.find(
      (b) => b.id === Number(selectedBranch.value)
    );
    if (branch) {
      cars = cars.filter((car) => branch.cars.includes(car.id));
    } else {
      cars = [];
    }
  }
  return cars;
});

const getBranchName = (branchId) => {
  if (store.branches.length === 0) {
    console.log("branches not loaded yet.");
    return "unknown";
  }
  const branch = store.branches.find((b) => b.id === branchId);
  return branch ? branch.name : "Unknown";
};

const navigation = [
  { name: "Home", href: "/#home" },
  { name: "Explore", href: "/#explore" },
  { name: "Branches", href: "/#branch" },
  { name: "Testimonials", href: "/#testimonials" },
];
</script>

<template>
  <div>
    <!-- header and nav -->
    <header class="relative inset-x-0 top-0 z-50">
      <nav
        class="flex items-center justify-between lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <RouterLink to="/" class="flex items-center">
            <img
              loading="lazy"
              src="/assets/images/logo.svg"
              class="mr-5 h-6 sm:h-9"
              alt="logo"
            />
          </RouterLink>
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
          <div class="">
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

    <!-- search and result cars -->
    <div class="mt-5 w-full bg-gray-50 min-h-screen">
      <h1 class="text-2xl font-bold mb-6 text-gray-800">Search Cars</h1>
      <!-- Search Filters -->
      <div class="flex flex-col md:flex-row gap-4 mb-8">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search by model, type, fuel..."
          class="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          v-model="selectedBranch"
          class="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Branches</option>
          <option
            v-for="branch in store.branches"
            :key="branch.id"
            :value="branch.id"
          >
            {{ branch.name }}
          </option>
        </select>
      </div>

      <!-- Search Results -->
      <div
        v-if="filteredCars.length > 0"
        class="grid grid-cols-1 sm:grid-cols-2 gap-5"
      >
        <div
          v-for="car in filteredCars"
          :key="car.id"
          class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
            :src="car.image"
            :alt="car.model"
            class="w-full h-60 object-cover"
          />
          <div class="p-4">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-gray-700">
                {{ car.model }}
              </h3>
              <router-link
                :to="`/cars/${car.id}`"
                class="px-3 py-2 text-white bg-indigo-500 hover:bg-white hover:text-black rounded transition duration-300"
                >Show Details</router-link
              >
            </div>
            <p class="text-sm text-gray-500">Type: {{ car.type }}</p>
            <p class="text-sm text-gray-500">Year: {{ car.year }}</p>
            <p class="text-sm text-gray-500">Fuel: {{ car.fuel }}</p>
            <p class="text-sm text-gray-500">
              Price: ${{ Math.trunc(car.price).toLocaleString() }}
            </p>
            <p class="text-sm text-gray-500">
              Branch: {{ getBranchName(car.branchId) }}
            </p>
          </div>
        </div>
      </div>
      <p v-else class="text-center text-lg text-gray-600 mt-12">
        No cars match your search criteria.
      </p>
    </div>

    <!-- blogs -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
      <article>
        <h2 class="text-2xl font-extrabold text-gray-900">BLOG</h2>
        <section
          class="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8"
        >
          <article
            class="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
            style="
              background-image: url('https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80');
            "
          >
            <div
              class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"
            ></div>
            <div
              class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center"
            >
              <h3 class="text-center">
                <a class="text-white text-2xl font-bold text-center" href="#">
                  <span class="absolute inset-0"></span>
                  Top 10 highest paid programming languages of 2021
                </a>
              </h3>
            </div>
          </article>
          <article
            class="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
            style="
              background-image: url('https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
            "
          >
            <div
              class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"
            ></div>
            <div
              class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center"
            >
              <h3 class="text-center">
                <a class="text-white text-2xl font-bold text-center" href="#">
                  <span class="absolute inset-0"></span>
                  Python Frameworks
                </a>
              </h3>
            </div>
          </article>
          <article
            class="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
            style="
              background-image: url('https://images.unsplash.com/photo-1511376777868-611b54f68947?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80');
            "
          >
            <div
              class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"
            ></div>
            <div
              class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center"
            >
              <h3 class="text-center">
                <a class="text-white text-2xl font-bold text-center" href="#">
                  <span class="absolute inset-0"></span>
                  The best plugins for Visual Studio Code
                </a>
              </h3>
            </div>
          </article>
        </section>
      </article>
    </section>

    <!-- component -->
    <div
      class="relative flex items-top justify-center min-h-screen text-gray-900 sm:items-center sm:pt-0"
    >
      <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div class="mt-8 overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="p-6 mr-2 bg-gray-100 sm:rounded-lg">
              <h1
                class="text-4xl sm:text-5xl text-gray-800 font-extrabold tracking-tight"
              >
                Get in touch
              </h1>
              <p
                class="text-normal text-lg sm:text-2xl font-medium text-gray-600 mt-2"
              >
                Fill in the form to start a conversation
              </p>

              <div class="flex items-center mt-8 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  class="w-8 h-8 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div class="ml-4 text-md tracking-wide font-semibold w-40">
                  Acme Inc, Street, State, Postal Code
                </div>
              </div>

              <div class="flex items-center mt-4 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  class="w-8 h-8 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div class="ml-4 text-md tracking-wide font-semibold w-40">
                  +44 1234567890
                </div>
              </div>

              <div class="flex items-center mt-2 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  class="w-8 h-8 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div class="ml-4 text-md tracking-wide font-semibold w-40">
                  info@acme.org
                </div>
              </div>
            </div>

            <form class="p-6 flex flex-col justify-center">
              <div class="flex flex-col">
                <label for="name" class="hidden">Full Name</label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  class="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div class="flex flex-col mt-2">
                <label for="email" class="hidden">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  class="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div class="flex flex-col mt-2">
                <label for="tel" class="hidden">Number</label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Telephone Number"
                  class="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                class="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
