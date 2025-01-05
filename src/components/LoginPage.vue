<template>
  <div class="menu">
    <h1>LoginPage</h1>

    <input type="text" placeholder="UserName" v-model="username" />
    <p v-if="usernameError" class="error">{{ usernameError }}</p>
    <input type="password" placeholder="Senha" v-model="password" />
    <p v-if="passwordError" class="error">{{ passwordError }}</p>
    <button class="btn-login" @click="login">Login</button>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <!-- botao voltar -->
    <button class="btn-voltar" @click="voltar">Voltar</button>
  </div>
</template>

<script>
export default {
  methods: {
    voltar() {
      this.$store.commit("setPage", "HomeMenu");
    },
  },
};
</script>

<style scoped lang="scss">
.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 800px;
  align-items: center;
}

input {
  font-size: 24px;
  margin-top: 30px;
  padding: 10px;
}

.error {
  color: red;
}

.btn-login {
  background-color: #acac2b;
  font-size: 20pt;
  overflow: hidden;
  border-radius: 10px;
  margin: 20px;
}

.btn-login:hover {
  background-color: #2741d8;
}

.btn-voltar {
  background-color: #ececdf;
  font-size: 20pt;
  overflow: hidden;
  border-radius: 10px;
  margin: 20px;
}

.btn-voltar:hover {
  background-color: #2741d8;
}
</style>
