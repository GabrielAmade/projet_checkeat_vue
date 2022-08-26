<template>
  <div
    class="min-h-screen bg-black bg-no-repeat bg-center bg-cover"
    style="
      background-image: url('https://images.unsplash.com/photo-1543007631-283050bb3e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80');
    "
  >
    <h1 class="text-red-600 text-2xl">Commandes des clients</h1>

    <div
      v-for="(elem, key) in ordered"
      :key="elem.id"
      class="text-gray-100 font-black"
    >
      <p>{{ elem.name }}</p>
      <p>{{ elem.price }}</p>
      <p>{{ elem.total }}</p>
      <button @click="erase(key)">Supprimer</button>
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
    erase(index) {
      this.ordered.splice(index, 1);
    },
  },
};
</script>

<style></style>
