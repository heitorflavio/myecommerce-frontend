<template>
  <div>
    <nav>
      <div class="logo">
        <router-link to="/" class="logo">
          <img src="@/assets/ranek.svg" alt="Ranek" />
        </router-link>
      </div>
    </nav>
    <div></div>
    <div class="content">
      <div class="card shadow-none">
        <!-- Pills navs -->
        <div v-if="error" class="alert alert-danger" role="alert">
          Senha ou email incorretos!
        </div>
        <!-- Pills navs -->

        <!-- Pills content -->
        <form class="form">
          <!-- Email input -->
          <div class="form-outline mb-12">
            <input
              type="email"
              id="form2Example1"
              class="form-control"
              v-model="email"
            />
            <label class="form-label" for="form2Example1">Email address</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-12">
            <input
              type="password"
              id="form2Example2"
              class="form-control"
              v-model="password"
            />
            <label class="form-label" for="form2Example2">Password</label>
          </div>

          <!-- 2 column grid layout for inline styling -->

          <!-- Submit button -->
          <button
            type="submit"
            class="btn btn-primary btn-block mb-4"
            @click.prevent="login()"
          >
            Sign in
          </button>

          <!-- Register buttons -->
          <div class="text-center">
            <p>Not a member? <a href="/register">Register</a></p>
            <!-- <p>or sign up with:</p> -->
            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-google"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-github"></i>
            </button>
          </div>
        </form>
        <!-- Pills content -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import Navbar from "@/components/Layout/Navbar.vue";
export default {
  name: "LoginUser",
  components: {
    // Navbar,
  },
  data() {
    return {
      email: "",
      password: "",
      error: false,
    };
  },
  methods: {
    login() {
      axios
        .post(this.$store.state.base_url + "login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          this.$store.commit("setLogin", true);
          sessionStorage.setItem("token", response.data.token);
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
          this.error = true;
        });
    },
  },
  created() {
    this.getdado();
  },
};
</script>

<style scoped>
.form {
  width: 100%;
  max-width: 500px;
  padding: 15px;
  margin: auto;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* background-color: #f5f5f5; */
  padding: 20px;
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background: #fff;
  color: #000;
}
.logo img {
  width: 90px;
}
</style>