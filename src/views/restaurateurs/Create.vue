<template>
  <!-- Formulaire Inscription Restaurateur -->

  <div
    class="h-screen w-screen flex justify-center align-center pt-1 bg-black bg-no-repeat bg-center bg-cover"
    style="
      background-image: url('https://images.unsplash.com/photo-1543007631-283050bb3e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80');
    ">
    <div
      class="bg-gray-100 text-red-600 border-2 border-red-600 rounded-3xl shadow-xl w-full overflow-hidden"
      style="max-width: 1000px">
      <div class="md:flex w-full">
        <div
          class="hidden md:block w-1/2 bg-red-500 bg-cover bg-no-repeat bg-center">
          <video
            autoplay
            loop
            muted
            class="z-10 w-auto min-h-full object-cover">
            <source
              src="https://media.vidfy.com/public/32143/conversions/import_61408255372851.01740089-video-preview.mp4?v=1631617752"
              type="video/mp4" />
          </video>
        </div>
        <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
          <div class="text-center mb-10">
            <h2 class="font-bold text-3xl text-red-600">
              Devenez notre partenaire
            </h2>
            <p>Remplissez les champs</p>
          </div>

          <form class="" @submit.prevent="register">
            <div class="flex -mx-3">
              <div class="w-1/2 px-3 mb-5">
                <label class="text-xs font-semibold px-1" for="lastname"
                  >Nom</label
                >

                <div class="flex">
                  <div
                    class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i
                      class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="text"
                    class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-red-500"
                    id="lastname"
                    v-model="lastname"
                    placeholder="Nom"
                    required />
                </div>
              </div>

              <div class="w-1/2 px-3 mb-5">
                <label class="text-xs font-semibold px-1" for="firstname"
                  >Prénom</label
                >
                <div class="flex">
                  <div
                    class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i
                      class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="text"
                    class="firstnameRegister w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-red-500"
                    id="firstname"
                    v-model="firstname"
                    placeholder="Prénom"
                    required />
                </div>
              </div>
            </div>

            <div class="flex -mx-3">
              <div class="w-full px-3 mb-5">
                <label class="text-xs font-semibold px-1" for="siret"
                  >SIRET</label
                >
                <div class="flex">
                  <input
                    type="number"
                    class="siretRegister shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="siret"
                    v-model="siret"
                    placeholder="Numéro Siret"
                    required />
                </div>
              </div>
            </div>

            <div class="flex -mx-3">
              <div class="w-full px-3 mb-5">
                <label class="text-xs font-semibold px-1" for="email"
                  >Email</label
                >
                <div class="flex">
                  <div
                    class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="email"
                    class="emailRegister w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-red-500"
                    id="email"
                    v-model="email"
                    placeholder="Votre email"
                    required />
                </div>
              </div>
            </div>

            <div class="flex -mx-3">
              <div class="w-full px-3 mb-12">
                <label class="text-xs font-semibold px-1" for="phone"
                  >Télephone</label
                >
                <div class="flex">
                  <div
                    class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="text"
                    class="phoneRegister w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-red-500"
                    placeholder="Télephone"
                    id="phone"
                    v-model="phone"
                    required />
                </div>
              </div>
            </div>

            <div class="flex -mx-3">
              <div class="w-full px-3 mb-12">
                <label class="text-xs font-semibold px-1" for="password"
                  >Mot de passe</label
                >
                <div class="flex">
                  <div
                    class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="password"
                    class="passwordRegister w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-red-500"
                    placeholder="************"
                    id="password"
                    v-model="password"
                    required />
                </div>
              </div>
            </div>

            <div class="flex -mx-3">
              <div class="w-full px-3 mb-5">
                <input
                  class="block w-full max-w-xs mx-auto bg-red-500 hover:bg-red-700 focus:bg-red-700 text-white rounded-lg px-3 py-3 font-semibold"
                  type="submit"
                  value="Valider Inscription" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <p>{{ message }}</p>
</template>

<script>
export default {
  name: "Create",
  components: {},

  // Déclaration de la DATA qui sera envoyée en requête sur la BDD

  data() {
    return {
      lastname: "",
      firstname: "",
      siret: "",
      email: "",
      phone: "",
      password: "",
      message: "",
      token: "",
    };
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
          lastname: this.lastname,
          firstname: this.firstname,
          siret: this.siret,
          email: this.email,
          phone: this.phone,
          password: this.password,
        }),
      };

      // FETCH pour envoyé la requête sur l'API

      const response = await fetch(
        "http://127.0.0.1:8000/api/restaurateurs",
        options
      );

      const data = await response.json();

      if (data.message == true) {
        this.token = data.access_token;
        localStorage.setItem("token", data.access_token);
        location = "http://localhost:8080/restaurateurs/success";
        // this.$router.push("/restaurateurs/success");
      }
    },
  },
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css");
</style>
