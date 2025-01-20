<template>
  <div class="menu">
    <img src="../assets/bitcoin.png" alt="" />
    <h1 class="">Seja bem-vindo ao sistema de cadastro de usuários</h1>
    <div class="d-flex flex-column align-items-center">
      <button class="btn btn-warning mb-3" @click="startLogin">
        Entrar com usuário existente
      </button>
      ou
      <button class="btn btn-dark mb-3" @click="startRegister">
        Cadastrar um novo usuário
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import navigationMixin from '@/mixins/navigationMixin';


export default {
  name: "HomeMenu",
  mixins: [navigationMixin],
  computed: {
    ...mapGetters(["paginaAtual"]),
  },
  methods: {
    startLogin() {
      this.navigateTo("LoginPage");
    },
    startRegister() {
      this.navigateTo("RegisterUser");
    },
  },
};
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

button {
  margin: 10px;
  width: 200px;
}

h1 {
  text-align: center;
  margin: 80px;
}

img {
  width: 200px;
  height: 200px;
  margin: 20px;
}
</style>
