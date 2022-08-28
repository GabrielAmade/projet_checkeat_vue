<template>
  <div
    class="min-h-screen bg-black bg-no-repeat bg-center bg-cover"
    style="
      background-image: url('https://images.unsplash.com/photo-1543007631-283050bb3e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80');
    "
  >
    <div class="flex items-center justify-center py-8 px-2">
      <div class="w-full sm:px-6">
        <div
          class="px-4 md:px-10 py-4 md:py-7 bg-black bg-opacity-75 rounded-tl-lg rounded-tr-lg"
        >
          <div class="pb-4 sm:flex items-center justify-between">
            <h1
              tabindex="0"
              class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-3xl font-black leading-normal text-red-600"
            >
              Tableau de bord
            </h1>
            <button
              class="font-bold text-lg focus:ring-2 focus:ring-offset-2 focus:ring-red-600 inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-red-600 hover:bg-red-700 focus:outline-none rounded"
            >
              <a href="http://localhost:8080/restaurants/create"
                >+ Ajouter un restaurant</a
              >
            </button>
          </div>

          <!-- <h3 class="text-xl text-red-600 underline p-2">Restaurants :</h3> -->

          <ul>
            <li v-for="elem in liste" :key="elem.id">
              <div
                class="flex mb-2 flex-col-reverse lg:flex-row w-full bg-white dark:bg-black shadow rounded"
              >
                <div class="w-full lg:w-1/2">
                  <div
                    class="pt-4 lg:pt-6 pb-4 lg:pb-6 pl-4 lg:pl-6 pr-4 lg:pr-6"
                  >
                    <div class="pb-4">
                      <div class="flex justify-between">
                        <p class="text-sm text-gray-100 flex items-center">
                          <svg
                            class="fill-current text-red-500 w-3 h-3 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                            />
                          </svg>
                          Espace membre
                        </p>

                        <div class="flex items-center justify-center">
                          <div class="relative inline-block text-left dropdown">
                            <span class="rounded-md shadow-sm"
                              ><button
                                class="inline-flex justify-center px-4 py-2 text-sm font-black leading-5 text-red-600 transition duration-150 ease-in-out bg-black rounded-md hover:text-black focus:outline-none hover:bg-red-600 active:bg-gray-50 active:text-gray-800"
                                type="button"
                                aria-haspopup="true"
                                aria-expanded="true"
                                aria-controls="headlessui-menu-items-117"
                              >
                                <span>Options</span>
                                <svg
                                  class="w-5 h-5 ml-2 -mr-1"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg></button
                            ></span>
                            <div
                              class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95"
                            >
                              <div
                                class="absolute right-0 w-56 mt-2 origin-top-right bg-black border border-red-600 rounded-md shadow-lg outline-none"
                                aria-labelledby="headlessui-menu-button-1"
                                id="headlessui-menu-items-117"
                                role="menu"
                              >
                                <div class="py-1">
                                  <button
                                    tabindex="0"
                                    class="text-red-600 block cursor-pointer w-full px-4 py-2 text-sm leading-5 text-left hover:text-black hover:bg-red-600"
                                    role="menuitem"
                                    @click="editProfil(elem.id)"
                                  >
                                    <svg
                                      class="inline-block fill-current h-4 w-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style="vertical-align: -0.125em"
                                      width="1em"
                                      height="1em"
                                      preserveAspectRatio="xMidYMid meet"
                                      viewBox="0 0 24 24"
                                    >
                                      <g
                                        fill="none"
                                        stroke="#dc2626"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                      >
                                        <path
                                          d="m16.474 5.408l2.118 2.117m-.756-3.982L12.109 9.27a2.118 2.118 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621Z"
                                        />
                                        <path
                                          d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3"
                                        />
                                      </g>
                                    </svg>
                                    <span class="inline-block pl-2"
                                      >Modifier</span
                                    >
                                  </button>
                                </div>
                                <div class="py-1">
                                  <button
                                    tabindex="3"
                                    class="text-red-600 block cursor-pointer w-full px-4 py-2 text-sm leading-5 text-left hover:text-black hover:bg-red-600"
                                    role="menuitem"
                                    @click="deleteResto(elem.id)"
                                  >
                                    <svg
                                      class="inline-block fill-current h-4 w-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style="vertical-align: -0.125em"
                                      width="1em"
                                      height="1em"
                                      preserveAspectRatio="xMidYMid meet"
                                      viewBox="0 0 1024 1024"
                                    >
                                      <path
                                        fill="#dc2626"
                                        d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"
                                      />
                                    </svg>
                                    <span class="inline-block pl-2"
                                      >Supprimer</span
                                    >
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p
                        class="text-gray-800 dark:text-gray-100 mt-4 mb-2 tracking-normal text-xl lg:text-2xl font-bold"
                      >
                        <svg
                          class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-red-500"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="1em"
                          height="1em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M357.57 223.94a79.48 79.48 0 0 0 56.58-23.44l77-76.95c6.09-6.09 6.65-16 .85-22.39a16 16 0 0 0-23.17-.56l-68.63 68.58a12.29 12.29 0 0 1-17.37 0c-4.79-4.78-4.53-12.86.25-17.64l68.33-68.33a16 16 0 0 0-.56-23.16A15.62 15.62 0 0 0 440.27 56a16.71 16.71 0 0 0-11.81 4.9l-68.27 68.26a12.29 12.29 0 0 1-17.37 0c-4.78-4.78-4.53-12.86.25-17.64l68.33-68.31a16 16 0 0 0-.56-23.16A15.62 15.62 0 0 0 400.26 16a16.73 16.73 0 0 0-11.81 4.9L311.5 97.85a79.49 79.49 0 0 0-23.44 56.59v8.23a16 16 0 0 1-4.69 11.33l-35.61 35.62a4 4 0 0 1-5.66 0L68.82 36.33a16 16 0 0 0-22.58-.06C31.09 51.28 23 72.47 23 97.54c-.1 41.4 21.66 89 56.79 124.08l85.45 85.45A64.79 64.79 0 0 0 211 326a64 64 0 0 0 16.21-2.08a16.24 16.24 0 0 1 4.07-.53a15.93 15.93 0 0 1 10.83 4.25l11.39 10.52a16.12 16.12 0 0 1 4.6 11.23v5.54a47.73 47.73 0 0 0 13.77 33.65l90.05 91.57l.09.1a53.29 53.29 0 0 0 75.36-75.37L302.39 269.9a4 4 0 0 1 0-5.66L338 228.63a16 16 0 0 1 11.32-4.69Z"
                          />
                          <path
                            d="M211 358a97.32 97.32 0 0 1-68.36-28.25l-13.86-13.86a8 8 0 0 0-11.3 0l-85 84.56c-15.15 15.15-20.56 37.45-13.06 59.29a30.63 30.63 0 0 0 1.49 3.6C31 484 50.58 496 72 496a55.68 55.68 0 0 0 39.64-16.44L225 365.66a4.69 4.69 0 0 0 1.32-3.72v-.26a4.63 4.63 0 0 0-5.15-4.27A97.09 97.09 0 0 1 211 358Z"
                          />
                        </svg>
                        <span>{{ elem.name }}</span>
                      </p>
                      <p class="text-gray-100 text-base">
                        <svg
                          class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-red-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path
                            d="M570.53,242,512,190.75V48a16,16,0,0,0-16-16H400a16,16,0,0,0-16,16V78.75L298.53,4a16,16,0,0,0-21.06,0L5.47,242a16,16,0,0,0,21.07,24.09L64,233.27V464a48.05,48.05,0,0,0,48,48H464a48.05,48.05,0,0,0,48-48V233.27l37.46,32.79A16,16,0,0,0,570.53,242ZM480,464a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V205.27l192-168,192,168Zm0-301.25-64-56V64h64ZM208,218.67V325.34A26.75,26.75,0,0,0,234.66,352H341.3A26.76,26.76,0,0,0,368,325.34V218.67A26.75,26.75,0,0,0,341.3,192H234.66A26.74,26.74,0,0,0,208,218.67ZM240,224h96v96H240Z"
                          ></path>
                        </svg>
                        <span>{{ elem.adress }}, {{ elem.zip }}</span>
                      </p>

                      <p class="text-gray-100 text-base">
                        <svg
                          class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-red-500"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="1em"
                          height="1em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 1.996a.75.75 0 0 1 .75.75V4h2c.966 0 1.75.784 1.75 1.75V11h2.25c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 18.75 22H5.25a1.75 1.75 0 0 1-1.75-1.75v-8.43c0-.619.327-1.192.86-1.507L7.5 8.458V5.749A1.75 1.75 0 0 1 9.25 4h2V2.746a.75.75 0 0 1 .75-.75ZM9 8.018c.81.12 1.5.806 1.5 1.734v10.747h3v-7.75a1.75 1.75 0 0 1 1.5-1.732V5.75a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25v2.269Zm6.25 4.481a.25.25 0 0 0-.25.25v7.75h3.75a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-3.5ZM8.623 9.537l-3.5 2.068A.25.25 0 0 0 5 11.82v8.43c0 .137.112.25.25.25H9V9.751a.25.25 0 0 0-.377-.215Z"
                          />
                        </svg>
                        <span>{{ elem.city }}</span>
                      </p>
                      <p class="text-gray-100 text-base">
                        <svg
                          class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-red-500"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="1em"
                          height="1em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 36 36"
                        >
                          <path
                            d="M25 4H11a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM11 6h14v18H11Zm0 24v-4h14v4Z"
                            class="clr-i-outline clr-i-outline-path-1"
                          />
                          <path
                            d="M17 27h2v2h-2z"
                            class="clr-i-outline clr-i-outline-path-2"
                          />
                          <path fill="none" d="M0 0h36v36H0z" />
                        </svg>
                        <span>{{ elem.tel }}</span>
                      </p>
                      <p class="text-gray-100 text-base">
                        <svg
                          class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-red-500"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="1em"
                          height="1em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 32 32"
                        >
                          <path
                            d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"
                          />
                        </svg>
                        <span class="mt-2 xl:mt-0">{{ elem.email }}</span>
                      </p>
                      <p class="text-gray-100 text-base">
                        <svg
                          class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-red-500"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="1em"
                          height="1em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 1024 1024"
                        >
                          <path
                            d="M945 412H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h256c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM811 548H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h122c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM477.3 322.5H434c-6.2 0-11.2 5-11.2 11.2v248c0 3.6 1.7 6.9 4.6 9l148.9 108.6c5 3.6 12 2.6 15.6-2.4l25.7-35.1v-.1c3.6-5 2.5-12-2.5-15.6l-126.7-91.6V333.7c.1-6.2-5-11.2-11.1-11.2z"
                          />
                          <path
                            d="M804.8 673.9H747c-5.6 0-10.9 2.9-13.9 7.7c-12.7 20.1-27.5 38.7-44.5 55.7c-29.3 29.3-63.4 52.3-101.3 68.3c-39.3 16.6-81 25-124 25c-43.1 0-84.8-8.4-124-25c-37.9-16-72-39-101.3-68.3s-52.3-63.4-68.3-101.3c-16.6-39.2-25-80.9-25-124c0-43.1 8.4-84.7 25-124c16-37.9 39-72 68.3-101.3c29.3-29.3 63.4-52.3 101.3-68.3c39.2-16.6 81-25 124-25c43.1 0 84.8 8.4 124 25c37.9 16 72 39 101.3 68.3c17 17 31.8 35.6 44.5 55.7c3 4.8 8.3 7.7 13.9 7.7h57.8c6.9 0 11.3-7.2 8.2-13.3c-65.2-129.7-197.4-214-345-215.7c-216.1-2.7-395.6 174.2-396 390.1C71.6 727.5 246.9 903 463.2 903c149.5 0 283.9-84.6 349.8-215.8c3.1-6.1-1.4-13.3-8.2-13.3z"
                          />
                        </svg>
                        <span class="mt-2 xl:mt-0 inline-block pr-1"
                          >{{ elem.open }}h -
                        </span>
                        <span class="mt-2 xl:mt-0 inline-block"
                          >{{ elem.closed }}h</span
                        >
                      </p>

                      <p class="text-gray-100 text-base">
                        <svg
                          class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-red-500"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="1em"
                          height="1em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="m21.96 9.73l-1.43-5a.996.996 0 0 0-.96-.73H4.43c-.45 0-.84.3-.96.73l-1.43 5c-.18.63.3 1.27.96 1.27h2.2L4 20h2l.67-5h10.67l.66 5h2l-1.2-9H21c.66 0 1.14-.64.96-1.27zM6.93 13l.27-2h9.6l.27 2H6.93zm-2.6-4l.86-3h13.63l.86 3H4.33z"
                          />
                        </svg>
                        <span class="mt-2 xl:mt-0"
                          >{{ elem.capacity }} Tables</span
                        >
                      </p>
                    </div>

                    <div
                      class="px-5 lg:px-5 md:px-10 py-3 lg:py-4 flex justify-around border-t border-gray-300"
                    >
                      <button
                        class="text-black w-56 mt-6 bg-red-700 hover:bg-red-500 font-semibold hover:text-white py-2 px-6 hover:border-transparent rounded"
                        @click="addMenu(elem.id)"
                      >
                        carte
                      </button>
                      <button
                        class="text-black w-56 mt-6 bg-red-700 hover:bg-red-500 font-semibold hover:text-white py-2 px-6 hover:border-transparent rounded"
                      >
                        <a href="/restaurants/command"> commandes clients</a>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="relative w-full h-64 lg:h-auto lg:w-1/2 rounded-t lg:rounded-t-none lg:rounded-r inline-block"
                >
                  <img
                    class="w-full h-full absolute inset-0 object-cover rounded-t lg:rounded-r lg:rounded-t-none"
                    src="https://images.unsplash.com/photo-1546195643-70f48f9c5b87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    alt="banner"
                  />
                </div>
              </div>
            </li>
            <!-- </div> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      liste: "",
      name: "",
      adress: "",
      zip: "",
      city: "",
      tel: "",
      email: "",
      timetable: "",
      capacity: "",
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
      "http://127.0.0.1:8000/api/restaurants",
      options
    );
    const data = await response.json();
    console.log(data);
    this.liste = data.restaurants;
  },
  methods: {
    editResto() {
      this.$router.push("/restaurants/edit");
    },
    async deleteResto(id) {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      const response = await fetch(
        "http://127.0.0.1:8000/api/restaurants/" + id,
        options
      );
      const data = await response.json();
      if (data.message == true) {
        this.$router.push("/restaurants/delete");
      }
    },
    editProfil(id) {
      this.$router.push("/restaurants/edit/" + id);
    },
    addMenu(id) {
      // J'utilise un localStorage pour récupérer id_restaurant correspondant à celui choisi et le stock pour l'uliser lors de la création de plat
      localStorage.setItem("id_restaurant", id);
      // this.$router.push("/menu");

      // j'ai utilisé le document.location.href pour avoir un reload de la page pour actualiser les informations
      document.location.href = "/menu";
      // window.location.reload();
    },
  },
};
</script>
<style>
.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  transform: translate(0) scale(1);
  visibility: visible;
}
</style>
