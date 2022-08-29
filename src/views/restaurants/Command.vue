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
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
      >
        <div v-for="(elem, key) in ordered" :key="elem.id">
          <div v-if="elem.status === 'En cours'">
            <div class="text-red-600">
              <p>{{ elem.name }}</p>
              <p>Prix du plat : {{ elem.price }}</p>
              <p>Total : {{ elem.total }}</p>
              <p>Numéro de commande : {{ elem.id_command }}</p>
              <button @click="erase(key, elem.id)">Supprimer</button>
            </div>
          </div>
        </div>
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
