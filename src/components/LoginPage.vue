<template>
  <div class="login container">
    <h1 class="text-center my-3 title">Logar com um usuário já existente:</h1>
    <form @submit.prevent="login">
      <div class="mb-4">
        <label for="username" class="form-label">Nome do usuário:</label>
        <input
          type="text"
          id="username"
          class="form-control"
          placeholder="username"
          v-model="username"
        />
        <p v-if="usernameError" class="text-danger">{{ usernameError }}</p>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Senha:</label>
        <input
          type="password"
          id="password"
          class="form-control"
          placeholder="password"
          v-model="password"
        />
        <p v-if="passwordError" class="text-danger">{{ passwordError }}</p>
      </div>
      <div class="buttons">
        <div class="d-grid gap-2">
          <button type="submit" class="btn btn-warning">Login</button>
        </div>
        <p v-if="errorMessage" class="text-danger mt-3">{{ errorMessage }}</p>
        <div class="d-grid gap-2 mt-3">
          <button type="button" class="btn btn-dark" @click="voltar">Voltar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import navigationMixin from "@/mixins/navigationMixin";

export default {
  name: "LoginPage",
  mixins: [navigationMixin],
  data() {
    return {
      username: "",
      password: "",
      usernameError: "",
      passwordError: "",
      errorMessage: "",
    };
  },
  methods: {
    login() {
      // Construct the URL with path parameters
      const url = `http://localhost:8085/persons/login/${this.username}/${this.password}`;
      console.log(url);
      axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          this.navigateTo("PrincipalPage");
        })
        .catch((error) => {
          console.log(error);
          this.errorMessage = "Login failed. Please check your username and password.";
        });
    },
    voltar() {
      this.navigateTo("HomePage");
    },
  },
};
</script>

<style scoped>

.title {
  color: rgb(0, 0, 0) !important;
  margin-bottom: 50px !important;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.login {
  margin-top: 20px;
  padding: 70px;
}

label {
  margin-top: 40px;
  font-weight: bold;
}

.buttons {
  margin-top: 120px;
}

</style>
