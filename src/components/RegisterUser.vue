<template>
  <div class="register container">
    <h1 class="text-center my-4 title">Cadastrar novo usuário:</h1>
    <form @submit.prevent="cadastrar">
      <div class="mb-3">
        <label for="name" class="form-label">Nome:</label>
        <input
          type="text"
          id="name"
          class="form-control"
          placeholder="name"
          v-model="name"
        />
        <div v-if="nameError" class="text-danger">{{ nameErrorComputed }}</div>
      </div>
      <div class="mb-3">
        <label for="username" class="form-label">Nome do usuário:</label>
        <input
          type="text"
          id="username"
          class="form-control"
          placeholder="username"
          v-model="username"
        />
        <div v-if="usernameError" class="text-danger">{{ usernameErrorComputed }}</div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Senha</label>
        <input
          type="password"
          id="password"
          class="form-control"
          placeholder="password"
          v-model="password"
        />
        <div v-if="passwordError" class="text-danger">{{ passwordErrorComputed }}</div>
      </div>
      <div class="buttons">
        <div class="d-grid gap-2">
          <button type="submit" class="btn btn-warning">Cadastrar</button>
        </div>
        <div v-if="errorMessage" class="text-danger mt-3">{{ errorMessage }}</div>
        <div v-if="successPage" class="text-success mt-3">
          Usuário cadastrado com sucesso!
        </div>
        <div class="d-grid gap-2 mt-3">
          <button type="button" class="btn btn-dark" @click="voltar">Voltar</button>
        </div>
      </div>
    </form>
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
      passwordError: false,
      usernameError: false,
      nameError: false,
    };
  },
  computed: {
    usernameErrorComputed() {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!this.username) {
        return "O campo UserName é obrigatório";
      } else if (!emailRegex.test(this.username)) {
        return "O UserName deve ser um email válido";
      }
      return "";
    },
    passwordErrorComputed() {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;
      
      if (!this.password) {
        return "O campo Senha é obrigatório";
      } else if (!passwordRegex.test(this.password)) {
        return "A Senha deve ter pelo menos 8 caracteres, contendo pelo menos uma letra maiúscula, um número e um caractere especial";
      }
      return "";
    },
    nameErrorComputed() {
      if (!this.name) {
        return "O campo Nome é obrigatório";
      }
      return "";
    },
  },
  methods: {
    async cadastrar() {
      this.nameError = this.nameErrorComputed !== "";
      this.usernameError = this.usernameErrorComputed !== "";
      this.passwordError = this.passwordErrorComputed !== "";

      if (this.nameError || this.usernameError || this.passwordError) {
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

<style scoped>
.register {
  margin-top: 20px;
  padding: 70px;
}

.title {
  color: rgb(0, 0, 0) !important;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

label {
  font-weight: bold;
}

.buttons {
  margin-top: 80px;
}

</style>
