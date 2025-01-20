<template>
    <v-for>
    </v-for>
</template>

<script>
import axios from "axios";

export default {
    name: "PrincipalPage",
    data() {
        return {
            persons: [],
        };
    },
    mounted() {
        axios
            .get("http://localhost:8085/persons")
            .then((response) => {
                this.persons = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
};
</script>

<style scoped>
</style>