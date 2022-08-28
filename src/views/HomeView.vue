<template>
  <div
    wrapper
    class="h-screen bg-gray-500 flex-col flex items-center justify-around bg-fixed bg-no-repeat bg-center bg-cover"
    style="
      background-image: url('https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80');
    "
  >
    <h1 class="font-extrabold text-8xl text-red-600">
      Check'<span class="text-gray-100 italic">EAT</span>
    </h1>

    <div
      class="title text-gray-200 font-black text-5xl p-2 drop-shadow-lg shadow-black"
    >
      La plateforme de vos restaurants préférés
    </div>
    <!-- <h3 class="text-red-600 font-black text-2xl underline mt-10 pt-10">
      Cherchez votre restaurant
    </h3> -->

    <!-- <button
      @click="getRestaurants()"
      class="mb-24 font-black text-xl animate-bounce w-80 text-gray-200 bg-gradient-to-r from-red-900 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-600 dark:focus:ring-red-800 rounded-lg px-5 py-2.5 text-center mr-2"
    >
      Cherchez votre restaurant
    </button> -->
    <a
      @click="getRestaurants()"
      href="#_"
      class="w-96 cursor-pointer relative inline-flex items-center justify-center p-4 px-12 py-6 overflow-hidden font-black text-red-600 transition duration-300 ease-out border-2 border-red-600 rounded-full shadow-md group"
    >
      <span
        class="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-red-600 group-hover:translate-x-0 ease"
      >
        <p class="pr-2 text-2xl font-black">C'est parti</p>

        <svg
          class="inline-block h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          style="vertical-align: -0.125em"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 48 48"
        >
          <mask id="svgIDa">
            <g
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
            >
              <path d="m34 28l10-4" />
              <path
                fill="#fff"
                d="M4 28h30l-.439 3.802A7 7 0 0 1 26.607 38H11.393a7 7 0 0 1-6.954-6.198L4 28Z"
              />
              <path d="M19 10v10m-8-8v6m16-6v6" />
            </g>
          </mask>
          <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#svgIDa)" />
        </svg>
      </span>
      <span
        class="absolute text-2xl flex items-center justify-center w-full h-full text-red-600 transition-all duration-300 transform group-hover:translate-x-full ease"
        >Cherchez votre restaurant</span
      >
      <span class="relative invisible">Cherchez votre restaurant</span>
      <svg-icon :fa-icon="faCoffee" :size="96" flip="horizontal"></svg-icon>
    </a>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  name: "HomeView",
  components: { NavBar },
  methods: {
    getRestaurants() {
      this.$router.push({ name: "listeResto" });
    },
  },
};
</script>
<style></style>
