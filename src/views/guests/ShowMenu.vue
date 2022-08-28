<template>
  <div
    class="min-h-screen bg-black bg-no-repeat bg-center bg-cover"
    style="
      background-image: url('https://images.unsplash.com/photo-1543007631-283050bb3e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80');
    "
  >
    <div class="container mx-auto py-10">
      <div class="flex shadow-md">
        <div class="w-3/4 bg-black px-8 bg-opacity-75 py-10 rounded-lg">
          <div class="text-center border-b pb-8 shadow-2xl">
            <h1 class="font-semibold text-red-600 text-3xl" tabindex="0">
              Choisissez votre menu
            </h1>
          </div>

          <ul>
            <div
              class="w-full dark:bg-gray-300 dark:bg-opacity-90 pl-2 my-6 border-b pb-2 shadow-2xl hover:scale-105 transition duration-300 ease-out rounded-tl-lg rounded-tr-lg"
            >
              <div class="p-2">
                <h2 class="text-xl font-black text-red-700 underline">
                  Entrées
                </h2>
              </div>
              <li v-for="elem in menu" :key="elem.id">
                <div v-if="elem.category === 'entree'">
                  <div class="w-48 pl-2 justify-between inline-block">
                    <button
                      @click="addEntree(elem.name, elem.priceTtc, elem.id)"
                      class="text-sm font-black md:text-lg text-gray-900 border-solid border-red-600 hover:scale-110 hover:text-red-600 transition duration-300"
                    >
                      {{ elem.name }}
                    </button>
                  </div>
                  <div
                    class="w-4/6 mx-4 inline-block border-b border-dashed border-red-600"
                  ></div>
                  <div class="inline-block">
                    <span class="text-lg font-black md:text-lg text-gray-900">
                      {{ elem.priceTtc }} €
                    </span>
                  </div>
                </div>
              </li>
            </div>

            <div
              class="w-full dark:bg-gray-300 dark:bg-opacity-90 pl-2 my-6 border-b pb-2 shadow-2xl hover:scale-105 transition duration-150 ease-out"
            >
              <div class="p-2">
                <h2 class="text-xl font-black text-red-700 underline">Plats</h2>
              </div>
              <li v-for="elem in menu" :key="elem.id">
                <div v-if="elem.category === 'plat'">
                  <div class="w-48 pl-2 justify-between inline-block">
                    <button
                      class="inline-block text-sm md:text-lg text-gray-900"
                      @click="addPlat(elem.name, elem.priceTtc, elem.id)"
                    >
                      <span
                        class="inline-block text-gray-900 font-bold hover:scale-110 hover:text-red-600 transition duration-300"
                      >
                        {{ elem.name }}
                      </span>
                    </button>
                  </div>
                  <div
                    class="w-4/6 mx-4 inline-block border-b border-dashed border-red-600"
                  ></div>
                  <div class="inline-block">
                    <span class="text-lg font-black md:text-lg text-gray-900"
                      >{{ elem.priceTtc }} €
                    </span>
                  </div>
                </div>
              </li>
            </div>

            <div
              class="w-full dark:bg-gray-300 dark:bg-opacity-90 pl-2 my-6 border-b pb-2 shadow-2xl hover:scale-105 transition duration-150 ease-out"
            >
              <div class="p-2">
                <h2 class="text-xl font-black text-red-700 underline">
                  Desserts
                </h2>
              </div>
              <li v-for="elem in menu" :key="elem.id">
                <div v-if="elem.category === 'dessert'">
                  <div class="w-48 pl-2 justify-between inline-block">
                    <button
                      class="inline-block text-lg md:text-lg text-gray-900"
                      @click="addDessert(elem.name, elem.priceTtc, elem.id)"
                    >
                      <span
                        class="inline-block text-gray-800 font-bold hover:scale-110 hover:text-red-600 transition duration-300"
                        >{{ elem.name }}
                      </span>
                    </button>
                  </div>
                  <div
                    class="w-4/6 mx-4 inline-block border-b border-dashed border-red-600"
                  ></div>

                  <div class="inline-block">
                    <span
                      class="inline-block font-black text-lg md:text-lg text-gray-900"
                      >{{ elem.priceTtc }} €
                    </span>
                  </div>
                </div>
              </li>
            </div>

            <div
              class="w-full dark:bg-gray-300 dark:bg-opacity-90 pl-2 my-6 border-b pb-2 shadow-2xl hover:scale-105 transition duration-150 ease-out rounded-bl-lg rounded-br-lg"
            >
              <div class="p-2">
                <h2 class="text-xl font-black text-red-700 underline">
                  Boissons
                </h2>
              </div>
              <li v-for="elem in menu" :key="elem.id">
                <div v-if="elem.category === 'boisson'">
                  <div class="w-48 pl-2 justify-between inline-block">
                    <button
                      class="inline-block text-lg font-black md:text-lg text-gray-900"
                      @click="addBoissons(elem.name, elem.priceTtc, elem.id)"
                    >
                      <span
                        class="inline-block text-gray-900 font-bold hover:scale-110 hover:text-red-600 transition duration-300"
                        >{{ elem.name }}
                      </span>
                    </button>
                  </div>
                  <div
                    class="w-4/6 mx-4 inline-block border-b border-dashed border-red-600"
                  ></div>
                  <div class="inline-block">
                    <span
                      class="inline-block text-lg font-black md:text-lg text-gray-900"
                      >{{ elem.priceTtc }} €
                    </span>
                  </div>
                </div>
              </li>
            </div>
          </ul>
        </div>

        <div
          id="summary"
          class="w-1/4 px-8 py-10 rounded-lg bg-gray-300 bg-opacity-90"
        >
          <h1
            class="font-semibold text-black text-center text-3xl border-b border-red-600 pb-8"
          >
            Votre commande
          </h1>
          <div v-for="(elem, index) in command" :key="elem.id">
            <div class="flex justify-between mt-5 mb-2">
              <span class="w-56 font-semibold text-base">{{ elem.name }} </span>
              <span class="w-1/3 font-semibold text-base"
                >{{ elem.price }} €</span
              >
              <button
                class="font-semibold text-sm"
                @click="deleteAddition(index)"
              >
                <svg
                  class="inline-block pb-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#dc2626"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16l-1.58 14.22A2 2 0 0 1 16.432 22H7.568a2 2 0 0 1-1.988-1.78L4 6Zm3.345-2.853A2 2 0 0 1 9.154 2h5.692a2 2 0 0 1 1.81 1.147L18 6H6l1.345-2.853ZM2 6h20m-12 5v5m4-5v5"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div class="border-t border-red-600 mt-8">
            <div class="flex font-black justify-between py-6 uppercase">
              <span class="text-lg" v-bind="addition">total :</span>
              <span class="text-xl font-black">{{ total }} €</span>
            </div>
            <button
              class="dark:bg-red-600 font-bold hover:bg-red-700 py-3 text-lg text-black uppercase w-full rounded-lg"
              @click="ordered(status)"
            >
              Commander
            </button>
            <h1 class="text-xl font-black" v-if="message">
              {{ message }}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const idRestaurantMenu = localStorage.getItem("id_restaurant_menu");

const idCommand = localStorage.getItem("idCommand");

export default {
  data() {
    return {
      menu: [],
      id_restaurant: idRestaurantMenu,
      command: [],
      price: [],
      total: 0,
      id: 0,
      nameOrdered: "",
      priceOrdered: "",
      totalOrdered: "",
      message: "",
      id_command: idCommand,
      status: "En cours",
    };
  },

  async mounted() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    const response = await fetch(
      "http://127.0.0.1:8000/api/guestmenu/" + this.id_restaurant,
      options
    );

    const data = await response.json();

    this.menu = data.menu;
    // console.log(this.menu);
  },
  computed: {
    addition() {
      if (this.price != 0) {
        const sum = this.price.reduce((a, b) => a + b);

        this.total = sum;
      } else {
        this.total = 0;
      }
    },
  },
  methods: {
    async ordered() {
      this.id_command++;
      localStorage.setItem("idCommand", this.id_command);

      for (let i in this.command) {
        this.nameOrdered = this.command[i].name;
        this.priceOrdered = this.command[i].price;

        console.log(this.nameOrdered);

        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: this.nameOrdered,
            price: this.priceOrdered,
            total: this.total,
            id_restaurant: idRestaurantMenu,
            id_command: this.id_command,
            status: this.status,
          }),
        };
        // FETCH pour envoyé la requête sur l'API
        const response = await fetch(
          "http://127.0.0.1:8000/api/ordered",
          options
        );
        const data = await response.json();
        console.log(data.message);

        this.message = data.message;
        setTimeout(window.location.reload(), 5000);
      }
    },
    addEntree(entree, value, id) {
      const starter = { name: entree, price: value, id: this.id++ };
      // console.log(starter);
      this.command.push(starter);
      this.price.push(value);
    },

    addPlat(plat, value, id) {
      const course = { name: plat, price: value, id: this.id++ };
      this.command.push(course);
      this.price.push(value);
      // console.log(this.command);
    },
    addDessert(dessert, value, id) {
      const desserts = { name: dessert, price: value, id: this.id++ };
      this.command.push(desserts);
      this.price.push(value);
      // console.log(this.command);
    },
    addBoissons(boisson, value, id) {
      const drinks = { name: boisson, price: value, id: this.id++ };
      this.command.push(drinks);
      this.price.push(value);
      // console.log(this.command);
    },
    deleteAddition(index) {
      // je splice grâce a l'index car index pour la commande et le price possède le même
      this.command.splice(index, 1);
      this.price.splice(index, 1);
    },
  },
};
</script>

<style>
/* #summary {
  background-color: #f6f6f6;
} */
</style>
