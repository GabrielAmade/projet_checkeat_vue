<template>
  <div
    class="h-screen w-screen flex justify-center align-center pt-1 bg-black bg-no-repeat bg-center bg-cover"
    style="
      background-image: url('https://images.unsplash.com/photo-1543007631-283050bb3e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80');
    "
  >
    <div
      class="px-4 w-full m-6 md:px-10 py-4 md:py-7 bg-black bg-opacity-75 rounded-tl-lg rounded-tr-lg"
    >
      <div class="text-center m-3">
        <p class="text-2xl text-red-600 font-black">Facturation</p>
      </div>
      <div class="flex justify-center pt-16">
        <div
          class="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-full max-w-screen-lg"
        >
          <div class="lg:col-span-2">
            <h2 class="text-lg font-black text-red-600">
              Choisissez votre méthode de réglement
            </h2>
            <div class="bg-white rounded mt-4 shadow-lg">
              <div class="flex items-center px-8 py-5">
                <input
                  class="appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-red-600 ring-opacity-100"
                  type="radio"
                />
                <label class="text-sm font-medium ml-4">PayPal</label>
              </div>
              <div class="border-t">
                <div class="flex items-center px-8 py-5">
                  <input
                    class="appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-red-600 ring-opacity-100 bg-red-600"
                    type="radio"
                  />
                  <label class="text-sm font-medium ml-4"
                    >Carte de crédit</label
                  >
                </div>
                <div class="grid grid-cols-2 gap-4 px-8 pb-8">
                  <div class="col-span-2">
                    <label class="text-xs font-semibold" for="cardNumber"
                      >Numéro de carte de crédit</label
                    >
                    <input
                      class="flex items-center h-10 border border-red-600 mt-1 rounded px-4 w-full text-sm"
                      type="text"
                      placeholder="0000 0000 0000 0000"
                    />
                  </div>
                  <div class="">
                    <label class="text-xs font-semibold" for="cardNumber"
                      >Date d'éxpiration</label
                    >
                    <input
                      class="flex items-center h-10 border border-red-600 mt-1 rounded px-4 w-full text-sm"
                      type="text"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div class="">
                    <label class="text-xs font-semibold" for="cardNumber"
                      >CVC/CVV</label
                    >
                    <input
                      class="flex items-center h-10 border border-red-600 mt-1 rounded px-4 w-full text-sm"
                      type="password"
                      placeholder="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 class="text-lg font-bold text-red-600">Votre commande</h2>
            <div class="bg-white rounded mt-4 shadow-lg py-6">
              <div class="px-8">
                <div
                  class="flex items-end"
                  v-for="elem in orderedpayment"
                  :key="elem.id"
                >
                  <span class="text-red-600">{{ elem.name }}</span>

                  <span class="text-sm ml-auto font-semibold pr-1">{{
                    elem.price
                  }}</span>
                  <span class="text-xs text-gray-500 mb-px">€</span>
                </div>
              </div>
              <div class="px-8 mt-4 border-t pt-4">
                <div class="flex items-end justify-between">
                  <span class="font-semibold">Total : </span>
                  <span class="font-semibold">{{ total }} €</span>
                </div>
              </div>
              <div class="flex items-center px-8 mt-8">
                <input id="termsConditions" type="checkbox" />
                <label class="text-xs text-gray-500 ml-2" for="termsConditions"
                  >Je suis d'accord avec les conditions.</label
                >
              </div>
              <div class="flex flex-col px-8 pt-4">
                <button
                  @click="validateOrder"
                  class="flex items-center justify-center bg-red-600 text-sm font-black w-full h-10 rounded text-black hover:bg-red-700"
                >
                  Valider le paiement
                </button>
                <button class="text-xs text-red-600 mt-3 underline">
                  Avez-vous un coupons de réduction ?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const idCommand = localStorage.getItem("idCommand");

export default {
  data() {
    return {
      orderedpayment: [],
      name: "",
      priceTtc: "",
      total: "",
      idCommand: idCommand,
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
      "http://127.0.0.1:8000/api/payment/" + idCommand,
      options
    );

    const data = await response.json();

    this.orderedpayment = data.orderedpayment;

    for (let i in this.orderedpayment) {
      const orderTotal = this.orderedpayment[i];

      this.total = orderTotal.total;

      console.log(this.total);
    }
    console.log(this.orderedpayment);
    // this.name = data.orderedpayment.name;
    // this.priceTtc = data.orderedpayment.price;

    // this.orderedpayment = payment;

    // console.log(this.orderedpayment);
    // console.log(payment);
  },
};
</script>

<style></style>
