<template>
  <div v-if="paginaAtual === 'RegisterUser'">
    <RegisterUser />
  </div>
  <div v-else-if="paginaAtual === 'HomeMenu'">
    <HomeMenu />
  </div>
  <div v-else-if="paginaAtual === 'Login'">
    <LoginPage />
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
  },

  methods: {},
};
</script>
