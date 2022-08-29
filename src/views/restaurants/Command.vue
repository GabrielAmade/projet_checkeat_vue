<template>
  <div
    class="min-h-screen w-screen flex justify-center align-center pt-1 bg-black bg-no-repeat bg-center bg-cover"
    style="
      background-image: url('https://images.unsplash.com/photo-1543007631-283050bb3e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80');
    "
  >
    <div
      class="px-4 w-full m-6 md:px-10 py-4 md:py-7 bg-black bg-opacity-75 rounded-tl-lg rounded-tr-lg"
    >
      <div class="text-center m-4">
        <h1 class="text-red-600 text-2xl font-black">Commandes des clients</h1>
      </div>
      <!-- <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
      >
        <div v-for="(elem, key) in ordered" :key="elem.id">
          <div v-if="elem.status === 'En cours'">
            <div class="flex flex-col bg-white rounded overflow-hidden shadow">
              <div class="px-3 py-2">
                <div class="flex justify-between">
                  <p class="uppercase tracking-wider font-bold text-teal-500">
                    {{ elem.name }}
                  </p>
                  <p class="flex flex-col items-end">
                    <span class="text-indigo-500"
                      >N°: {{ elem.id_command }}</span
                    >
                  </p>
                </div>

                <div class="mt-3 flex justify-between">
                  <div class="text-sm text-gray-700">
                    <p class="text-lg font-bold text-teal-500">
                      Prix: {{ elem.price }} €
                    </p>
                  </div>

                  <div class="text-right text-sm text-gray-700">
                    <p class="text-lg font-bold text-red-500">
                      Total: {{ elem.total }} €
                    </p>
                  </div>
                </div>

                <div class="text-right text-sm text-gray-700">
                  <p class="text-lg font-bold text-red-500">
                    Statut: {{ elem.status }}
                  </p>
                </div>

                <div class="px-3 py-2 flex items-end bg-gray-300">
                  <button
                    type="button"
                    class="px-2 py-1 bg-teal-500 text-white rounded hover:bg-teal-400"
                    @click="erase(key, elem.id)"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-red-600 dark:text-black"
          >
            <tr>
              <th scope="col" class="py-3 px-6">Numero de commande</th>
              <th scope="col" class="py-3 px-6">Nom du Produit</th>
              <th scope="col" class="py-3 px-6">Prix du produit</th>
              <th scope="col" class="py-3 px-6">Prix Total</th>
              <th scope="col" class="py-3 px-6">Statut de la commande</th>

              <th scope="col" class="py-3 px-6">
                <span class="sr-only">Supprimer</span>
              </th>
            </tr>
          </thead>
          <tbody v-for="(elem, key) in ordered" :key="elem.id">
            <tr
              v-if="elem.status === 'En cours'"
              class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900"
            >
              <td
                scope="row"
                class="py-4 px-6 font-black text-base uppercase text-red-600 whitespace-nowrap dark:text-white"
              >
                {{ elem.id_command }}
              </td>
              <td class="py-4 px-6 text-red-600 font-black italic text-base">
                {{ elem.name }}
              </td>
              <td class="py-4 px-6">{{ elem.price }} €</td>
              <td class="py-4 px-6">{{ elem.total }} %</td>
              <td class="py-4 px-6 font-black text-base text-red-600">
                {{ elem.status }}
              </td>

              <td>
                <button
                  class="font-medium text-blue-600 dark:text-red-600 hover:underline"
                  @click="deleteMenu(key, elem.id)"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Command",
  components: {},

  // Déclaration de la DATA qui sera envoyée en requête sur la BDD

  data() {
    return {
      ordered: [],
      status: "Terminé",
    };
  },

  async mounted() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    const response = await fetch("http://127.0.0.1:8000/api/ordered", options);

    const data = await response.json();
    this.ordered = data.ordered;
    console.log(data);
  },

  methods: {
    async erase(index, id) {
      this.ordered.splice(index, 1);

      const param = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          status: this.status,
        }),
      };

      const rep = await fetch("http://127.0.0.1:8000/api/ordered/" + id, param);
    },
  },
};
</script>

<style></style>
