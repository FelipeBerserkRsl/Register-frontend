<template>
  <div class="principal">
    <component
      :is="paginaAtualComponent"
      v-if="paginaAtualComponent"
    />
  </div>
</template>

<script>
import RegisterUser from "./RegisterUser.vue";
import HomeMenu from "./HomeMenu.vue";
import LoginPage from "./LoginPage.vue";
import { mapGetters } from "vuex";

export default {
  name: "HomePage",
  components: {
    RegisterUser,
    HomeMenu,
    LoginPage,
  },
  props: {
    msg: String,
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters(["paginaAtual"]),
    paginaAtualComponent() {
      switch (this.paginaAtual) {
        case 'LoginPage':
          return 'LoginPage';
        case 'HomeMenu':
          return 'HomeMenu';
        case 'RegisterUser':
          return 'RegisterUser';
        default:
          return null;
      }
    },
  },

  methods: {},
};
</script>

<style>

label {
  font-weight: bold;
  font-size: 20px;
}

</style>
