<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useStore } from "../stores/store.js";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const limitedCars = computed(() => {
  return store.cars.slice(2, 6);
});

const branches = computed(() => store.branches);
const mobileMenuOpen = ref(false);
const newsletterEmail = ref("");

const subscribeNewsletter = () => {
  alert(`Subscribed with email: ${newsletterEmail.value}`);
  newsletterEmail.value = "";
};

onMounted(() => {
  store.fetchBranches();
  store.fetchCars();
});

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Branch", href: "#branch" },
  { name: "Explore", href: "#explore" },
  { name: "Testimonials", href: "#testimonials" },
];

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
</script>
<template>
  <div id="app">
    <!-- header and nav -->
    <header class="sticky inset-x-0 top-0 z-50 bg-slate-50">
      <nav
        class="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              loading="lazy"
              class="h-8 w-auto"
              src="/assets/images/logo.svg"
              alt="logo"
            />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a
            v-for="item in navigation"
            @click.prevent="navigateTo(item)"
            :key="item.name"
            class="cursor-pointer text-sm/6 font-semibold text-gray-900"
            >{{ item.name }}</a
          >
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <router-link
            to="/search"
            class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
            >Search</router-link
          >
        </div>
      </nav>
      <!-- mobile menu -->
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
              <img loading="lazy" class="h-8 w-auto" src="" alt="" />
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
                  @click.prevent="navigateTo(item)"
                  class="cursor-pointer -mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
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

    <!-- home -->
    <section
      class="relative h-screen mb-5 flex items-center justify-center text-center bg-cover bg-center"
      style="background-image: url('/assets/img/car2.jpg')"
    >
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative z-10 max-w-3xl">
        <h1 class="text-5xl font-bold text-white sm:text-7xl">
          Find Your Dream Car
        </h1>
        <p class="mt-4 text-lg text-gray-300 sm:text-xl">
          Discover the best collection of new and pre-owned vehicles at
          unbeatable prices. Whether you need a luxury ride or a budget-friendly
          car, we have it all!
        </p>
        <div
          class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <router-link to="/car-types">
            <button
              class="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Explore Car Types
            </button>
          </router-link>
          <a href="#subscribe">
            <button
              class="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-indigo-600"
            >
              Subscribe
            </button>
          </a>
        </div>
      </div>
    </section>

    <!-- branch -->
    <section id="branch" class="py-24">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800">Our Branches</h2>
        <p class="text-gray-600 mt-4 max-w-xl mx-auto">
          Find a branch near you to explore our latest collections, test drive
          vehicles, or consult with our expert team.
        </p>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        <div
          v-for="branch in branches"
          :key="branch.id"
          class="relative group overflow-hidden bg-white shadow-md rounded-xl hover:shadow-lg transition duration-300 transform hover:scale-105"
        >
          <div
            class="relative h-48 w-full bg-gray-200 bg-cover bg-center rounded-t-xl"
            :style="{ backgroundImage: `url(${branch.image})` }"
          >
            <div
              class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"
            ></div>
          </div>
          <div class="p-6 text-center">
            <h3
              class="text-2xl font-semibold text-gray-800 group-hover:text-indigo-600 transition"
            >
              {{ branch.name }}
            </h3>
            <p class="text-gray-600 mt-2">{{ branch.description }}</p>
            <ul class="mt-4 text-gray-600">
              <li>✔️ Showroom Available</li>
              <li>✔️ Test Drive Services</li>
              <li>✔️ Financing Options</li>
            </ul>
            <router-link
              :to="`/branch/${branch.id}`"
              class="inline-block mt-6 px-6 py-2 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition"
            >
              Visit Us In {{ branch.name }}
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Explore cars Section -->
    <section id="explore" class="py-24 bg-white">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-800">
          Explore Our Best Selling Cars
        </h2>
        <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
          Browse our top-rated vehicles, handpicked for quality, performance,
          and customer satisfaction.
        </p>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-10 max-w-7xl mx-auto gap-6"
      >
        <div
          v-for="car in limitedCars"
          :key="car.id"
          class="p-6 bg-gray-50 shadow-md rounded-lg"
        >
          <img
            loading="lazy"
            :src="car.image"
            alt="Car"
            class="w-full h-40 object-cover rounded-md mb-4 hover:scale-110 transition duration-300"
          />
          <h3 class="text-xl font-bold text-gray-800">{{ car.model }}</h3>
          <p class="text-sm text-gray-600">
            {{ car.type }} | {{ car.year }} | {{ car.fuel }} |
            {{ car.mileage }} miles
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
      <!-- <div class="text-center mt-10">
        <button @click="viewAll" class="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
          View All Cars
        </button>
      </div> -->
    </section>

    <!-- Services Section -->
    <section id="services" class="py-24 bg-gray-50">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-800">Our Services</h2>
        <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
          We provide a comprehensive set of services to make your car buying and
          selling experience seamless.
        </p>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto"
      >
        <div class="text-center p-6 bg-white shadow-md rounded-lg">
          <h3 class="text-lg font-bold text-gray-800">Buy &amp; Sell Cars</h3>
          <p class="text-sm text-gray-600 mt-2">
            Get the best deals on high-quality vehicles, whether you're buying
            or selling.
          </p>
        </div>
        <div class="text-center p-6 bg-white shadow-md rounded-lg">
          <h3 class="text-lg font-bold text-gray-800">
            Search &amp; Filter Options
          </h3>
          <p class="text-sm text-gray-600 mt-2">
            Easily find your perfect car with advanced search and filter tools.
          </p>
        </div>
        <div class="text-center p-6 bg-white shadow-md rounded-lg">
          <h3 class="text-lg font-bold text-gray-800">
            Trusted & Verified Dealers
          </h3>
          <p class="text-sm text-gray-600 mt-2">
            Our network includes only the most reputable car dealers.
          </p>
        </div>
      </div>
    </section>

    <!-- newsletters -->
    <section id="subscribe" class="bg-gray-100 py-24">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-800">
          Subscribe to Our Newsletter
        </h2>
        <p class="mt-4 text-gray-600">
          Get the latest updates on new arrivals, exclusive deals, and more.
        </p>
        <div class="mt-8">
          <input
            v-model="newsletterEmail"
            type="email"
            placeholder="Enter your email"
            class="w-full max-w-md px-4 py-3 rounded-lg border border-gray-300 focus:outline-none"
          />
          <button
            @click="subscribeNewsletter"
            class="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section
      id="testimonials"
      class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8"
    >
      <div
        class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"
      />
      <div
        class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
      />

      <div
        class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
      />
      <div class="mx-auto max-w-2xl lg:max-w-4xl">
        <img
          class="mx-auto h-12"
          src="https://tailwindui.com/plus/img/logos/workcation-logo-indigo-600.svg"
          alt=""
        />
        <figure class="mt-10">
          <blockquote
            class="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9"
          >
            <p>
              “It’s not about the destination; it’s about the journey and the
              car that takes you there.”
            </p>
          </blockquote>
          <figcaption class="mt-10">
            <img
              class="mx-auto size-10 rounded-full"
              src="/assets/images/ceo.jpg"
              alt=""
            />
            <div
              class="mt-4 flex items-center justify-center space-x-3 text-base"
            >
              <div class="font-semibold text-gray-900">Zain Al-Abideen</div>
              <svg
                viewBox="0 0 2 2"
                width="3"
                height="3"
                aria-hidden="true"
                class="fill-gray-900"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div class="text-gray-600">CEO of UOT</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
    <!-- component -->
    <link
      rel="stylesheet"
      href="https://cdn.tailgrids.com/tailgrids-fallback.css"
    />

    <!-- footer -->
    <footer
      class="bg-gradient-to-r from-indigo-100 via-indigo-100 to-slate-300"
    >
      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img
              loading="lazy"
              src="/assets/images/logo.svg"
              class="mr-5 h-6 sm:h-9"
              alt="logo"
            />
            <p class="max-w-xs mt-4 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              accusantium.
            </p>
            <div class="flex mt-8 space-x-6 text-gray-600">
              <a
                class="hover:opacity-75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span class="sr-only"> Facebook </span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                class="hover:opacity-75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span class="sr-only"> Instagram </span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                class="hover:opacity-75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span class="sr-only"> Twitter </span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </a>
              <a
                class="hover:opacity-75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span class="sr-only"> GitHub </span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                class="hover:opacity-75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span class="sr-only"> Dribbble </span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div
            class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div>
              <p class="font-medium">Company</p>
              <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a class="hover:opacity-75" href="#"> About </a>
                <a class="hover:opacity-75" href="#"> Meet the Team </a>
                <a class="hover:opacity-75" href="#"> History </a>
                <a class="hover:opacity-75" href="#"> Careers </a>
              </nav>
            </div>
            <div>
              <p class="font-medium">Services</p>
              <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a class="hover:opacity-75" href=""> 1on1 Coaching </a>
                <a class="hover:opacity-75" href=""> Company Review </a>
                <a class="hover:opacity-75" href=""> Accounts Review </a>
                <a class="hover:opacity-75" href=""> HR Consulting </a>
                <a class="hover:opacity-75" href=""> SEO Optimisation </a>
              </nav>
            </div>
            <div>
              <p class="font-medium">Helpful Links</p>
              <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a class="hover:opacity-75" href=""> Contact </a>
                <a class="hover:opacity-75" href=""> FAQs </a>
                <a class="hover:opacity-75" href=""> Live Chat </a>
              </nav>
            </div>
            <div>
              <p class="font-medium">Legal</p>
              <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a class="hover:opacity-75" href=""> Privacy Policy </a>
                <a class="hover:opacity-75" href=""> Terms &amp; Conditions </a>
                <a class="hover:opacity-75" href=""> Returns Policy </a>
                <a class="hover:opacity-75" href=""> Accessibility </a>
              </nav>
            </div>
          </div>
        </div>
        <p class="mt-8 font-bold text-gray-800">
          © 2025 Car<span class="text-indigo-600">Point</span>
        </p>
      </div>
    </footer>
  </div>
</template>
