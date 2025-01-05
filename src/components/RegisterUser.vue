<template>
  <div class="register">
    <h1>Cadastrar novo usuário</h1>
    <input type="text" placeholder="Nome" v-model="name" />
    <input type="text" placeholder="UserName" v-model="username" />
    <p v-if="usernameError" class="error">{{ usernameError }}</p>
    <input type="password" placeholder="Senha" v-model="password" />
    <p v-if="passwordError" class="error">{{ passwordError }}</p>
    <button class="btn-cadastrar" @click="cadastrar">Cadastrar</button>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p v-if="successPage" class="success">Usuário cadastrado com sucesso!</p>
    <button class="btn-voltar" @click="voltar">Voltar</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterUser",
  data() {
    return {
      name: "",
      username: "",
      password: "",
      errorMessage: "",
      successPage: false,
    };
  },
  computed: {
    usernameError() {
      const usernameRegex = /^[a-zA-Z0-9._-]{3,}$/;
      if (!this.username) {
        return "O campo UserName é obrigatório";
      } else if (!usernameRegex.test(this.username)) {
        return "O UserName deve ter pelo menos 3 caracteres e pode conter letras, números, pontos, traços e sublinhados";
      }
      return "";
    },
    passwordError() {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!this.password) {
        return "O campo Senha é obrigatório";
      } else if (!passwordRegex.test(this.password)) {
        return "A Senha deve ter pelo menos 8 caracteres, incluindo letras e números";
      }
      return "";
    },
  },
  methods: {
    async cadastrar() {
      if (!this.name || !this.username || !this.password) {
        this.errorMessage = "Todos os campos são obrigatórios";
        return;
      }

      try {
        const response = await axios.post("http://localhost:8085/persons", {
          name: this.name,
          username: this.username,
          password: this.password,
        });
        console.log(response);
        this.errorMessage = "";
        this.successPage = true;
      } catch (error) {
        console.error(error);
        this.errorMessage = "Erro ao cadastrar usuário";
      }
    },
    voltar() {
      this.$store.commit("setPage", "HomeMenu");
    },
  },
};
</script>

<style scoped lang="scss">
.register {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 800px;
  align-items: center;
}

h1 {
  font-size: 30pt;
  margin: 20px;
  color: white;
}

input {
  font-size: 24px;
  margin-top: 30px;
  padding: 10px;
}

.btn-cadastrar {
  font-size: 24px;
  margin-top: 30px;
  padding: 10px;
  background-color: #2baca5;
  color: white;
  border: none;
  cursor: pointer;
}

.btn-cadastrar:hover {
  background-color: #279a94;
}

.btn-voltar {
  font-size: 24px;
  padding: 10px;
  background-color: azure;
  border: none;
  cursor: pointer;
}

.error {
  color: red;
  margin-top: 20px;
}

.success {
  color: green;
  margin-top: 20px;
}
</style>
