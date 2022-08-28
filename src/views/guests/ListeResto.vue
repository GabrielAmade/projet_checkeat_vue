<template>
  <div
    class="min-h-screen bg-black bg-no-repeat bg-center bg-cover"
    style="
      background-image: url('https://images.unsplash.com/photo-1543007631-283050bb3e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80');
    "
  >
    <div class="p-6">
      <!-- <h1
      class="text-center text-2xl text-red-600 font-black border-4 border-red-600 shadow-lg rounded p-6"
    >
      Liste des restaurants
    </h1> -->
      <h1 class="text-red-600 text-3xl p-4 text-center font-black shadow-lg">
        Restaurants que vous pourriez aimer
      </h1>
    </div>
    <ul>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full p-4"
      >
        <li v-for="elem in liste" :key="elem.id">
          <div class="relative mx-auto w-full">
            <div
              class="absolute -inset-1 bg-gradient-to-r from-red-400 to-red-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
            ></div>

            <div
              class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
            >
              <div class="shadow-md p-4 rounded-lg bg-black">
                <div
                  class="flex justify-center relative rounded-lg overflow-hidden h-52"
                >
                  <div
                    class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full"
                  >
                    <div class="absolute inset-0 bg-gray-100">
                      <img
                        class="w-auto rounded-lg"
                        src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                        alt=""
                      />
                    </div>
                  </div>

                  <span
                    class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-green-300 text-sm font-medium text-white select-none"
                  >
                    Recommandé
                  </span>
                </div>
                <div class="mt-4">
                  <p
                    class="text-lg font-black md:text-lg text-gray-100 line-clamp-1"
                  >
                    <span class="text-red-600 font-bold">Restaurant:</span>
                    {{ elem.name }}
                  </p>

                  <p class="mt-2 text-sm text-gray-100 line-clamp-1">
                    <svg
                      class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-red-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        d="M570.53,242,512,190.75V48a16,16,0,0,0-16-16H400a16,16,0,0,0-16,16V78.75L298.53,4a16,16,0,0,0-21.06,0L5.47,242a16,16,0,0,0,21.07,24.09L64,233.27V464a48.05,48.05,0,0,0,48,48H464a48.05,48.05,0,0,0,48-48V233.27l37.46,32.79A16,16,0,0,0,570.53,242ZM480,464a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V205.27l192-168,192,168Zm0-301.25-64-56V64h64ZM208,218.67V325.34A26.75,26.75,0,0,0,234.66,352H341.3A26.76,26.76,0,0,0,368,325.34V218.67A26.75,26.75,0,0,0,341.3,192H234.66A26.74,26.74,0,0,0,208,218.67ZM240,224h96v96H240Z"
                      ></path>
                    </svg>
                    <span class="mt-2 xl:mt-0"
                      >{{ elem.adress }}, {{ elem.zip }}, {{ elem.city }}</span
                    >
                  </p>
                </div>

                <div
                  class="border-t-2 border-b-2 p-2 border-gray-700 grid grid-cols-2 grid-rows-2 gap-4 mt-8 mb-8"
                >
                  <p
                    class="inline-flex flex-col xl:flex-row xl:items-center text-gray-100"
                  >
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
                    <span class="mt-2 xl:mt-0">{{ elem.tel }}</span>
                  </p>

                  <p
                    class="inline-flex flex-col xl:flex-row xl:items-center text-gray-100"
                  >
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
                  <p
                    class="inline-flex flex-col xl:flex-row xl:items-center text-gray-100"
                  >
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

                    <span class="inline-block"
                      >{{ elem.open }}-{{ elem.closed }}h</span
                    >
                  </p>
                  <p
                    class="inline-flex flex-col xl:flex-row xl:items-center text-gray-100"
                  >
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
                    <span class="mt-2 xl:mt-0">{{ elem.capacity }} Tables</span>
                  </p>
                </div>

                <button
                  @click="show(elem.id)"
                  type="submit"
                  class="inline-block p-2 text-white bg-red-500 hover:bg-red-600 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded"
                >
                  Voir le menu
                </button>
              </div>
            </div>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      liste: [],
      // show: [],
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

    const response = await fetch("http://127.0.0.1:8000/api/guests", options);

    const data = await response.json();

    this.liste = data.restaurants;
    console.log(data);
  },

  methods: {
    show(id) {
      localStorage.setItem("id_restaurant_menu", id);
      document.location.href = "/guests/ShowMenu";
      // this.$router.push("/guests/ShowMenu");
    },
  },
};
</script>

<style></style>
