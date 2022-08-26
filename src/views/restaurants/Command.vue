<template>
  <h1>Commandes des clients</h1>

  <div v-for="(elem, key) in ordered" :key="elem.id">
    <p>{{ elem.name }}</p>
    <p>Prix du plat : {{ elem.price }}</p>
    <p>Total : {{ elem.total }}</p>
    <p>Numéro de commande : {{ elem.id_command }}</p>
    <button @click="erase(key)">Supprimer</button>
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
