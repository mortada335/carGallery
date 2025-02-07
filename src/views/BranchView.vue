<script setup lang="ts">
import { computed, ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { useStore } from "@/stores/store";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/vue/20/solid";
import Header from "@/components/Header.vue";

const navigation = [
  { name: "Home", href: "/#home" },
  { name: "Branches", href: "/#branch" },
  { name: "Explore", href: "/#explore" },
  { name: "Testimonials", href: "/#testimonials" },
];

const logoLink = "/";
const mobileMenuOpen = ref(false);
const store = useStore();
const route = useRoute();
const router = useRouter();
const branchId = ref(Number(route.params.id));

const isLoading = ref(true);
const errorMessage = ref("");

const branch = computed(() => {
  return store.branches.find((b) => b.id === branchId.value);
});

const filteredCars = computed(() => {
  return store.cars.filter((car) => branch.value?.cars.includes(car.id));
});

const fetchData = async () => {
  try {
    if (!store.branches.length) await store.fetchBranches();
    if (!store.cars.length) await store.fetchCars();
  } catch (error) {
    errorMessage.value = "Failed to load data. Please try again later.";
    console.error("Error fetching data:", error);
  } finally {
    isLoading.value = false;
  }
};

const navigateTo = (item: { name: string; href: string }) => {
  if (item.href.startsWith("#")) {
    const targetSection = document.querySelector(item.href);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    router.push(item.href);
  }
  mobileMenuOpen.value = false;
};

watch(branchId, (newId) => {
  if (newId && newId !== Number(route.params.id)) {
    router.push({ params: { id: newId } });
  }
});

onMounted(fetchData);
</script>

<template>
  <div>
    <Header :logo="logoLink" :is-transparent="true" :navigation="navigation" />
    <!-- Error Message -->
    <div v-if="errorMessage" class="bg-red-100 text-red-600 p-4 text-center">
      {{ errorMessage }}
    </div>

    <!-- Branch Header -->
    <header
      v-if="branch"
      class="bg-gradient-to-r from-purple-500 to-purple-700 shadow p-6 my-16 text-center"
    >
      <h1 class="text-4xl font-bold text-white">{{ branch.name }}</h1>
      <p class="text-gray-100 mt-2">{{ branch.description }}</p>
    </header>

    <!-- Branch Selector -->
    <div class="container mx-auto p-6">
      <Listbox as="div" v-model="branchId">
        <ListboxLabel class="block text-sm font-medium text-gray-900">
          Can't find your needs? Try checking other branches:
        </ListboxLabel>
        <div class="relative mt-2">
          <ListboxButton
            class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-sm"
          >
            <span class="block truncate">{{
              branch?.name || "Select a branch"
            }}</span>
            <span
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
            >
              <ChevronUpDownIcon
                class="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </ListboxButton>
          <ListboxOptions
            class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <ListboxOption
              v-for="branch in store.branches"
              :key="branch.id"
              :value="branch.id"
              v-slot="{ active, selected }"
            >
              <li
                :class="[
                  active ? 'bg-purple-100' : '',
                  'relative cursor-default py-2 pl-10 pr-4',
                ]"
              >
                <span :class="[selected ? 'font-medium' : 'font-normal']">
                  {{ branch.name }}
                </span>
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-purple-600"
                >
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </div>
      </Listbox>
    </div>

    <!-- Cars Section -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <div v-if="isLoading" class="text-center text-lg text-gray-600">
          Loading cars...
        </div>
        <div v-else>
          <div
            v-for="car in filteredCars"
            :key="car.id"
            class="p-5 mb-5 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <!-- Car Image -->
            <div class="relative">
              <img
                :src="car.image"
                alt="Car"
                class="w-full object-cover rounded-t-lg"
              />
              <div
                class="absolute top-3 left-3 bg-purple-600 text-white text-sm px-2 py-1 rounded"
              >
                New
              </div>
            </div>

            <!-- Car Details -->
            <div class="p-4">
              <h3 class="text-2xl font-bold text-gray-800">{{ car.model }}</h3>
              <p class="text-gray-600 mt-2">{{ car.type }} | {{ car.year }}</p>
              <ul class="mt-3 text-gray-500 text-sm space-y-1">
                <li>
                  <strong>Price:</strong> ${{
                    car.price || "Contact for price"
                  }}
                </li>
                <li><strong>Fuel:</strong> {{ car.fuel || "N/A" }}</li>
              </ul>
            </div>

            <!-- Action Button -->
            <router-link
              :to="`/cars/${car.id}`"
              class="block mt-4 bg-purple-500 text-white text-center py-3 rounded-md hover:bg-purple-600 transition"
            >
              View Details <span class="ml-2">&rarr;</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
