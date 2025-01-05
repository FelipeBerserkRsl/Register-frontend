<template>
  <div class="home">
    <h1>Seja bem-vindo ao sistema de cadastro de usuários</h1>
    <button @click="startLogin">Entrar com usuário</button>
    <button @click="startRegister">Cadastrar novo usuário</button>
  </div>
</template>

<script>
export default {
  name: "HomeMenu",
  methods: {
    startLogin() {
      this.$store.commit("setPage", "Login");
    },
    startRegister() {
      console.log("startRegister");
      this.$store.commit("setPage", "RegisterUser");
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 800px;
  align-items: center;
  // borda leve com efeito de sombreamento
  border: 1px solid #bca931;
  box-shadow: 0 0 10px #bca931;
  border-radius: 20px;
  width: 500px;
  margin: 0 auto;
  color: white;
}

h1 {
  font-size: 30pt;
  margin: 20px;
}

button {
  height: 200px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 20px;
  background-color: #bca931;
  width: 300px;
  font-size: 20pt;
  font-weight: bold;
  overflow: hidden;
  border-radius: 20px;
}

button:hover {
  background-color: #6b580d;
  cursor: pointer;
}
</style>
