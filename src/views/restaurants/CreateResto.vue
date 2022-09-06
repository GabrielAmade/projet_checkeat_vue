<template>
  <!-- Formulaire Inscription Restaurateur -->
  <div
    class="h-screen w-screen flex justify-center align-center bg-black bg-no-repeat bg-center bg-cover"
    style="
      background-image: url('https://images.unsplash.com/photo-1543007631-283050bb3e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80');
    "
  >
    <div
      class="px-4 w-full md:px-10 md:py-7 bg-black bg-opacity-75 rounded-tl-lg rounded-tr-lg"
    >
      <div
        class="bg-gray-100 text-red-600 border-2 border-red-600 rounded-3xl shadow-xl w-full overflow-hidden"
      >
        <div class="w-full px-5 md:px-10">
          <div class="flex justify-center">
            <h2 class="titleRegister text-red-600 text-2xl p-2 font-black">
              Ajouter votre restaurant
            </h2>
          </div>

          <div id="mainContainer" class="mainContainer">
            <form @submit.prevent="register">
              <div class="flex -mx-3">
                <div class="w-full px-3 mb-1">
                  <label class="text-basic font-black px-1" for="name"
                    >Nom du restaurant</label
                  >
                  <input
                    type="text"
                    class="nameRegister shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    v-model="name"
                    placeholder="Nom du restaurant"
                    required
                  />
                </div>
              </div>

              <div class="flex -mx-3">
                <div class="w-full px-3 mb-1">
                  <label class="text-basic font-black px-1" for="adress"
                    >Adresse</label
                  >
                  <input
                    type="text"
                    class="adressRegister shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="adress"
                    v-model="adress"
                    placeholder="Adresse"
                    required
                  />
                </div>
              </div>

              <div class="flex -mx-3">
                <div class="w-full px-3 mb-1">
                  <label class="text-basic font-black px-1" for="zip"
                    >Code postal</label
                  >
                  <input
                    type="number"
                    class="zipRegister shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="zip"
                    v-model="zip"
                    placeholder="Code postale"
                    required
                  />
                </div>
              </div>

              <div class="flex -mx-3">
                <div class="w-full px-3 mb-1">
                  <label class="text-basic font-black px-1" for="city"
                    >Ville</label
                  >
                  <input
                    type="text"
                    class="cityRegister shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="city"
                    v-model="city"
                    placeholder="Ville"
                    required
                  />
                </div>
              </div>

              <div class="flex -mx-3">
                <div class="w-full px-3 mb-1">
                  <label class="text-basic font-black px-1" for="phone"
                    >Téléphone</label
                  >
                  <input
                    type="text"
                    class="phoneRegister shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="tel"
                    v-model="tel"
                    placeholder="Téléphone"
                    required
                  />
                </div>
              </div>

              <div class="flex -mx-3">
                <div class="w-full px-3 mb-1">
                  <label class="text-basic font-black px-1" for="email"
                    >Email</label
                  >
                  <input
                    type="email"
                    class="emailRegister shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    v-model="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              <div class="flex -mx-3">
                <div class="w-full px-3 mb-1">
                  <label class="text-basic font-black px-1" for="open"
                    >Heure d'ouverture</label
                  >
                  <input
                    type="time"
                    class="timetableRegister shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="open"
                    v-model="open"
                    placeholder="Heure d'ouverture"
                    required
                  />
                </div>
              </div>

              <div class="flex -mx-3">
                <div class="w-full px-3 mb-1">
                  <label class="text-basic font-black px-1" for="closed"
                    >Heure de fermeture</label
                  >
                  <input
                    type="time"
                    class="timetableRegister shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="closed"
                    v-model="closed"
                    placeholder="Heure de fermeture"
                    required
                  />
                </div>
              </div>

              <div class="flex -mx-3">
                <div class="w-full px-3 mb-1">
                  <label class="text-basic font-black px-1" for="capacity"
                    >Capacité</label
                  >
                  <input
                    type="number"
                    class="capacityRegister shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="capacity"
                    v-model="capacity"
                    placeholder="Nombre de tables"
                    required
                  />
                </div>
              </div>

              <div class="boxButton flex justify-center p-1">
                <input
                  class="block w-full max-w-xs mx-auto bg-red-500 hover:bg-red-700 focus:bg-red-700 text-white rounded-lg px-3 py-3 font-semibold"
                  type="submit"
                  value="Ajouter"
                />
              </div>
            </form>
          </div>

          <div v-if="message === true">{{ message }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Create",
  components: {},

  // Déclaration de la DATA qui sera envoyée en requête sur la BDD

  data() {
    return {
      name: "",
      adress: "",
      zip: "",
      city: "",
      tel: "",
      email: "",
      open: "",
      closed: "",
      capacity: "",
      id_restaurateur: "",
      message: "",
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

    const response = await fetch(
      "http://127.0.0.1:8000/api/restaurateurs/profile",
      options
    );

    const data = await response.json();
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
          adress: this.adress,
          zip: this.zip,
          city: this.city,
          tel: this.tel,
          email: this.email,
          open: this.open,
          closed: this.closed,
          capacity: this.capacity,
          id_restaurateur: this.id_restaurateur,
        }),
      };

      // FETCH pour envoyé la requête sur l'API

      const response = await fetch(
        "http://127.0.0.1:8000/api/restaurants",
        options
      );

      const data = await response.json();
      if (data.message == true) {
        this.$router.push("/restaurants/success");
      }
    },
  },
};
</script>
