<template>
  <!-- Formulaire Inscription Restaurateur -->
  <div
    class="min-h-screen w-screen flex justify-center align-center pt-1 bg-black bg-no-repeat bg-center bg-cover"
    style="
      background-image: url('https://images.unsplash.com/photo-1543007631-283050bb3e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80');
    "
  >
    <div
      class="px-4 w-full m-6 md:px-10 py-4 md:py-7 bg-black bg-opacity-75 rounded-tl-lg rounded-tr-lg"
    >
      <div
        class="bg-gray-100 text-red-600 border-2 border-red-600 rounded-3xl shadow-xl w-full overflow-hidden"
      >
        <div class="w-full py-10 px-5 md:px-10">
          <div class="text-center mb-10">
            <h2 class="titleRegister text-red-600 text-2xl p-2 font-black">
              Personaliser votre Carte
            </h2>
          </div>

          <div class="wrapper">
            <div id="mainContainer" class="mainContainer">
              <!-- <button @click="accueil()">Page principale</button> -->
              <form @submit.prevent>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <label class="text-basic font-black px-1" for="category"
                      >Catégorie</label
                    >
                    <select
                      name="category"
                      v-model="category"
                      id="category"
                      class="categoryRegister shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="entree">Entrée</option>
                      <option value="plat">Plat</option>
                      <option value="dessert">Dessert</option>
                      <option value="boisson">Boisson</option>
                    </select>
                  </div>
                </div>

                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <label class="text-basic font-black px-1" for="name"
                      >Nom</label
                    >
                    <input
                      type="text"
                      class="nameRegister shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      v-model="name"
                      placeholder="Nom du plat"
                      required
                    />
                  </div>
                </div>

                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <label class="text-basic font-black px-1" for="priceHt"
                      >Prix hors taxe</label
                    >
                    <input
                      type="number"
                      class="priceHtRegister shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="priceHt"
                      v-model="priceHt"
                      placeholder="Prix HT"
                      required
                    />
                  </div>
                </div>

                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <label class="text-basic font-black px-1" for="tva"
                      >Taux de TVA</label
                    >
                    <select
                      name="tva"
                      v-model="tva"
                      id="tva"
                      class="tvaRegister shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="0">0%</option>
                      <option value="5.5">5.5%</option>
                      <option value="10">10%</option>
                      <option value="20">20%</option>
                    </select>
                  </div>
                </div>

                <div class="boxButton flex justify-center">
                  <input
                    class="block w-full max-w-xs mx-auto bg-red-500 hover:bg-red-700 focus:bg-red-700 text-white rounded-lg px-3 py-3 font-semibold"
                    type="submit"
                    value="Valider"
                    @click="register"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="list">
        <h2 class="text-red-600 text-center text-3xl p-4 m-6">La Carte</h2>
        <ul>
          <li>
            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
              <table
                class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
              >
                <thead
                  class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-red-600 dark:text-black"
                >
                  <tr>
                    <th scope="col" class="py-3 px-6">Categorie</th>
                    <th scope="col" class="py-3 px-6">Nom du Produit</th>
                    <th scope="col" class="py-3 px-6">Prix Hors taxe</th>
                    <th scope="col" class="py-3 px-6">TVA</th>
                    <th scope="col" class="py-3 px-6">Prix TTC</th>
                    <th scope="col" class="py-3 px-6">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody v-for="task in tasks" :key="task.id">
                  <tr
                    v-if="task.category === 'entree'"
                    class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900"
                  >
                    <td
                      scope="row"
                      class="py-4 px-6 font-black text-base uppercase text-red-600 whitespace-nowrap dark:text-white"
                    >
                      {{ task.category }}
                    </td>
                    <td
                      class="py-4 px-6 text-red-600 font-black italic text-base"
                    >
                      {{ task.name }}
                    </td>
                    <td class="py-4 px-6">{{ task.priceHt }} €</td>
                    <td class="py-4 px-6">{{ task.tva }} %</td>
                    <td class="py-4 px-6 font-black text-base text-red-600">
                      {{ task.priceTtc }} €
                    </td>
                    <td class="py-4 px-6 text-right">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-red-600 hover:underline"
                        >Edit</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-4">
              <table
                class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
              >
                <thead
                  class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-red-600 dark:text-black"
                >
                  <tr>
                    <th scope="col" class="py-3 px-6">Categorie</th>
                    <th scope="col" class="py-3 px-6">Nom du Produit</th>
                    <th scope="col" class="py-3 px-6">Prix Hors taxe</th>
                    <th scope="col" class="py-3 px-6">TVA</th>
                    <th scope="col" class="py-3 px-6">Prix TTC</th>
                    <th scope="col" class="py-3 px-6">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody v-for="task in tasks" :key="task.id">
                  <tr
                    v-if="task.category === 'plat'"
                    class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900"
                  >
                    <td
                      scope="row"
                      class="py-4 px-6 font-black text-base uppercase text-red-600 whitespace-nowrap dark:text-white"
                    >
                      {{ task.category }}
                    </td>
                    <td
                      class="py-4 px-6 text-red-600 font-black italic text-base"
                    >
                      {{ task.name }}
                    </td>
                    <td class="py-4 px-6">{{ task.priceHt }} €</td>
                    <td class="py-4 px-6">{{ task.tva }} %</td>
                    <td class="py-4 px-6 font-black text-base text-red-600">
                      {{ task.priceTtc }} €
                    </td>
                    <td class="py-4 px-6 text-right">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-red-600 hover:underline"
                        >Edit</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-4">
              <table
                class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
              >
                <thead
                  class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-red-600 dark:text-black"
                >
                  <tr>
                    <th scope="col" class="py-3 px-6">Categorie</th>
                    <th scope="col" class="py-3 px-6">Nom du Produit</th>
                    <th scope="col" class="py-3 px-6">Prix Hors taxe</th>
                    <th scope="col" class="py-3 px-6">TVA</th>
                    <th scope="col" class="py-3 px-6">Prix TTC</th>
                    <th scope="col" class="py-3 px-6">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody v-for="task in tasks" :key="task.id">
                  <tr
                    v-if="task.category === 'dessert'"
                    class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900"
                  >
                    <td
                      scope="row"
                      class="py-4 px-6 font-black text-base uppercase text-red-600 whitespace-nowrap dark:text-white"
                    >
                      {{ task.category }}
                    </td>
                    <td
                      class="py-4 px-6 text-red-600 font-black italic text-base"
                    >
                      {{ task.name }}
                    </td>
                    <td class="py-4 px-6">{{ task.priceHt }} €</td>
                    <td class="py-4 px-6">{{ task.tva }} %</td>
                    <td class="py-4 px-6 font-black text-base text-red-600">
                      {{ task.priceTtc }} €
                    </td>
                    <td class="py-4 px-6 text-right">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-red-600 hover:underline"
                        >Edit</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-4">
              <table
                class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
              >
                <thead
                  class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-red-600 dark:text-black"
                >
                  <tr>
                    <th scope="col" class="py-3 px-6">Categorie</th>
                    <th scope="col" class="py-3 px-6">Nom du Produit</th>
                    <th scope="col" class="py-3 px-6">Prix Hors taxe</th>
                    <th scope="col" class="py-3 px-6">TVA</th>
                    <th scope="col" class="py-3 px-6">Prix TTC</th>
                    <th scope="col" class="py-3 px-6">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody v-for="task in tasks" :key="task.id">
                  <tr
                    v-if="task.category === 'boisson'"
                    class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900"
                  >
                    <td
                      scope="row"
                      class="py-4 px-6 font-black text-base uppercase text-red-600 whitespace-nowrap dark:text-white"
                    >
                      {{ task.category }}
                    </td>
                    <td
                      class="py-4 px-6 text-red-600 font-black italic text-base"
                    >
                      {{ task.name }}
                    </td>
                    <td class="py-4 px-6">{{ task.priceHt }} €</td>
                    <td class="py-4 px-6">{{ task.tva }} %</td>
                    <td class="py-4 px-6 font-black text-base text-red-600">
                      {{ task.priceTtc }} €
                    </td>
                    <td class="py-4 px-6 text-right">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-red-600 hover:underline"
                        >Edit</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// Je récupère id_restaurant du restaurant choisi pour faire correspondre chaque plat créé que celui ci correspond avec le restaurant choisi
const id_restaurant = localStorage.getItem("id_restaurant");

export default {
  name: "Create",
  components: {},

  data() {
    return {
      tasks: [],
      id: "",
      name: "",
      category: "",
      priceHt: "",
      tva: "",
      priceTtc: "",
      id_restaurant: id_restaurant,
    };
  },

  async mounted() {
    const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      },
      response = await fetch(
        "http://127.0.0.1:8000/api/menu/" + this.id_restaurant,
        options
      );

    const data = await response.json();
    console.log(data);

    this.tasks = data.liste;
  },

  methods: {
    async register() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          name: this.name,
          category: this.category,
          priceHt: this.priceHt,
          tva: this.tva,
          priceTtc: this.priceTtc,
          id_restaurant: this.id_restaurant,
        }),
      };
      // FETCH pour envoyé la requête sur l'API
      const response = await fetch("http://127.0.0.1:8000/api/menu", options);
      const data = await response.json();
      window.location.reload();
    },

    async deleteMenu(id) {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          // Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      const response = await fetch("http://127.0.0.1:8000/api/menu/", options);
      const data = await response.json();

      if (data.message == true) {
        this.$router.push("/menu/delete");
      }
    },
  },
};
</script>

<style></style>
