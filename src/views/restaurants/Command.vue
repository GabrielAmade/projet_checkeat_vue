<template>
    <h1>Commandes des clients</h1>

    <div v-for="(elem, key) in ordered" :key="elem.id">
        <div v-if="elem.status === 'En cours'">
            <p>{{ elem.name }}</p>
            <p>Prix du plat : {{ elem.price }}</p>
            <p>Total : {{ elem.total }}</p>
            <p>Numéro de commande : {{ elem.id_command }}</p>
            <button @click="erase(key, elem.id)">Supprimer</button>
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

        const response = await fetch(
            "http://127.0.0.1:8000/api/ordered",
            options
        );

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

            const rep = await fetch(
                "http://127.0.0.1:8000/api/ordered/" + id,
                param
            );
        },
    },
};
</script>

<style></style>
