<template>
  <div>
    <!-- <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view> -->


    <!-- Navbar -->
    <header :class="{ shadow: isHeaderShadow }">
      <!-- Nav Container -->
      <nav class="nav container">
        <!-- Menu Icon -->
        <i class='bx bx-menu' id="menu-icon" @click="toggleMenu"></i>
        <!-- Logo -->
        <a href="#" class="logo">Car<span>Point</span></a>
        <!-- Nav List -->
        <ul :class="{ 'navbar': true, 'active': menuActive }">
          <li><a href="#home">Home</a></li>
          <li><a href="#cars">Cars</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#parts">Parts</a></li>
          <li><a href="#blog">Our Blog</a></li>
        </ul>
        <!-- Search Icon -->
        <i class='bx bx-search' id="search-icon" @click="toggleSearch"></i>
        <!-- Search Box -->
        <div :class="{ 'search-box container': true, 'active': searchActive }"> <input type="search"
            placeholder="Search here..."> </div>
      </nav>
    </header>
    <!-- Home -->
    <section class="home" id="home">
      <div class="home-text">
        <h1>We Have Everything <br>Your <span>Car</span> Need</h1>
        <p>Lorem ipsum dolor sit amet consectetur <br> adipisicing elit. Nulla, corporis.</p> <!-- Home Button --> <a
          href="#" class="btn">Discover Now</a>
      </div>
    </section>

    <!-- Cars Section -->
    <section class="cars" id="cars">
      <div class="heading">
        <span>All Cars</span>
        <h2>We have all types cars</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, aperiam!</p>
      </div>
      <!-- Cars Container -->
      <div class="cars-container container">
        <!-- Box 1 -->
        <div class="box">
          <img src="/assets/img/car1.jpg" alt="">
          <h2>Porche Car</h2>
        </div>
        <!-- Box 2 -->
        <div class="box">
          <img src="/assets/img/car2.jpg" alt="">
          <h2>Porche Car</h2>
        </div>
        <!-- Box 3 -->
        <div class="box">
          <img src="/assets/img/car3.jpg" alt="">
          <h2>Porche Car</h2>
        </div>
        <!-- Box 4 -->
        <div class="box">
          <img src="/assets/img/car4.jpg" alt="">
          <h2>Porche Car</h2>
        </div>
        <!-- Box 5 -->
        <div class="box">
          <img src="/assets/img/car5.jpg" alt="">
          <h2>Porche Car</h2>
        </div>
        <!-- Box 6 -->
        <div class="box">
          <img src="/assets/img/car6.jpg" alt="">
          <h2>Porche Car</h2>
        </div>
      </div>
    </section>
    <!-- About -->
    <section class="about container" id="about">
      <div class="about-img">
        <img src="/assets/img/about.png" alt="">
      </div>
      <div class="about-text">
        <span>About Us</span>
        <h2>Cheap Prices With <br>Quality Cars</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laborum blanditiis ratione numquam odio ea!</p>
        <!-- About Button -->
        <a href="#" class="btn">Learn More</a>
      </div>
    </section>
    <!-- Parts Section -->
    <section class="parts" id="parts">
      <div class="heading">
        <span>What We Offer</span>
        <h2>Our Car Is Always Excellent</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, doloremque.</p>
      </div>
      <!-- Parts Container -->
      <div class="parts-container container">
        <!-- Box 1 -->
        <div class="box">
          <img src="/assets/img/part1.png" alt="">
          <h3>Auto Spare Parts</h3>
          <span>$120.99</span>
          <i class='bx bxs-star'>(6 Reviews)</i>
          <a href="#" class="btn">Buy Now</a>
          <a href="#" class="details">View Details</a>
        </div>
        <!-- Box 2 -->
        <div class="box">
          <img src="/assets/img/part2.png" alt="">
          <h3>Auto Spare Parts</h3>
          <span>$120.99</span>
          <i class='bx bxs-star'>(6 Reviews)</i>
          <a href="#" class="btn">Buy Now</a>
          <a href="#" class="details">View Details</a>
        </div>
        <!-- Box 3 -->
        <div class="box">
          <img src="/assets/img/part3.png" alt="">
          <h3>Auto Spare Parts</h3>
          <span>$120.99</span>
          <i class='bx bxs-star'>(6 Reviews)</i>
          <a href="#" class="btn">Buy Now</a>
          <a href="#" class="details">View Details</a>
        </div>
        <!-- Box 4 -->
        <div class="box">
          <img src="/assets/img/part4.png" alt="">
          <h3>Auto Spare Parts</h3>
          <span>$120.99</span>
          <i class='bx bxs-star'>(6 Reviews)</i>
          <a href="#" class="btn">Buy Now</a>
          <a href="#" class="details">View Details</a>
        </div>
        <!-- Box 5 -->
        <div class="box">
          <img src="/assets/img/part5.png" alt="">
          <h3>Auto Spare Parts</h3>
          <span>$120.99</span>
          <i class='bx bxs-star'>(6 Reviews)</i>
          <a href="#" class="btn">Buy Now</a>
          <a href="#" class="details">View Details</a>
        </div>
        <!-- Box 6 -->
        <div class="box">
          <img src="/assets/img/part6.png" alt="">
          <h3>Auto Spare Parts</h3>
          <span>$120.99</span>
          <i class='bx bxs-star'>(6 Reviews)</i>
          <a href="#" class="btn">Buy Now</a>
          <a href="#" class="details">View Details</a>
        </div>
      </div>
    </section>
    <!-- Blog Container -->
    <section class="blog" id="blog">
      <div class="heading">
        <span>Blog And News</span>
        <h2>Our Blog Content</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, doloremque.</p>
      </div>
      <!-- Blog Container -->
      <div class="blog-container container">
        <!-- Box 1 -->
        <div class="box">
          <img src="/assets/img/car1.jpg" alt="">
          <span>Feb 14 2021</span>
          <h3>How To Get Perfect Car At Low Price</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, veniam.</p>
          <a href="#" class="blog-btn">Read More<i class='bx bx-right-arrow-alt'></i></a>
        </div>
        <!-- Box 2 -->
        <div class="box">
          <img src="/assets/img/car6.jpg" alt="">
          <span>Feb 14 2021</span>
          <h3>How To Get Perfect Car At Low Price</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, veniam.</p>
          <a href="#" class="blog-btn">Read More<i class='bx bx-right-arrow-alt'></i></a>
        </div>
        <!-- Box 3 -->
        <div class="box">
          <img src="/assets/img/car3.jpg" alt="">
          <span>Feb 14 2021</span>
          <h3>How To Get Perfect Car At Low Price</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, veniam.</p>
          <a href="#" class="blog-btn">Read More<i class='bx bx-right-arrow-alt'></i></a>
        </div>
      </div>
    </section>
    <!-- Footer -->
    <section class="footer">
      <div class="footer-container container">
        <div class="footer-box">
          <a href="#" class="logo">Car<span>Point</span></a>
          <div class="social">
            <a href="#"><i class='bx bxl-facebook'></i></a>
            <a href="#"><i class='bx bxl-twitter'></i></a>
            <a href="#"><i class='bx bxl-instagram'></i></a>
            <a href="#"><i class='bx bxl-youtube'></i></a>
          </div>
        </div>
        <div class="footer-box">
          <h3>Page</h3>
          <a href="#">Home</a>
          <a href="#">Cars</a>
          <a href="#">Parts</a>
          <a href="#">Sales</a>
        </div>
        <div class="footer-box">
          <h3>Legal</h3>
          <a href="#">Privacy</a>
          <a href="#">Refund Policy</a>
          <a href="#">Cookie Policy</a>

        </div>
        <div class="footer-box">
          <h3>Contact</h3>
          <p>United States</p>
          <p>Japan</p>
          <p>Germany</p>
        </div>
      </div>
    </section>
    <!-- Copyright -->
    <div class="copyright">
      <p>&#169; MortadaAhmad All Right Reserved</p>
    </div>


  </div>
</template>

<script lang="ts">

import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  name: "CarSale",
  setup() {
    const menuActive = ref(false);
    const searchActive = ref(false);
    const isHeaderShadow = ref(false);

    const toggleMenu = () => {
      menuActive.value = !menuActive.value;
      searchActive.value = false; // Close search when opening the menu
    };

    const toggleSearch = () => {
      searchActive.value = !searchActive.value;
      menuActive.value = false; // Close menu when opening the search box
    };

    const handleScroll = () => {
      menuActive.value = false; // Hide menu on scroll
      searchActive.value = false; // Hide search box on scroll
      isHeaderShadow.value = window.scrollY > 0; // Add shadow to header if scrolled
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      menuActive,
      searchActive,
      isHeaderShadow,
      toggleMenu,
      toggleSearch,
    };
  },
};

</script>

<style lang="scss" scoped></style>