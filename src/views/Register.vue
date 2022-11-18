<template>
  <div>
    <Navbar />
    <div class="card shadow-none">
      <div class="col-lg-6 cards">
        <div class="p-5" id="form">
          <h3 class="fw-normal mb-5">Contact Details</h3>
          <div class="mb-4 pb-2">
            <div class="form-outline form-white">
              <input
                type="text"
                id="form3Examplea2"
                class="form-control form-control-lg"
                v-model="name"
              />
              <label class="form-label" for="form3Examplea2">Nome</label>
            </div>
          </div>
          <div class="mb-4">
            <div class="form-outline form-white">
              <input
                type="text"
                id="form3Examplea9"
                class="form-control form-control-lg"
                v-model="email"
              />
              <label class="form-label" for="form3Examplea9">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-4 pb-2">
              <div class="form-outline form-white">
                <input
                  type="password"
                  id="pass"
                 :class="css"
                  v-model="password"
                />
                <label class="form-label" for="pass">Senha</label>
              </div>
            </div>
            <div class="col-md-6 mb-4 pb-2">
              <div class="form-outline form-white">
                <input
                  type="password"
                  id="cpass"
                  :class="css"
                  v-model="password_confirmation"
                />
                <label class="form-label" for="cpass"
                  >Confirme a Senha</label
                >
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-7 mb-4 pb-2">
              <div class="form-outline form-white">
                <input
                  type="text"
                  id="rua"
                 class="form-control form-control-lg"
                  v-model="st"
                />
                <label class="form-label" for="rua">Rua</label>
              </div>
            </div>
            <div class="col-md-5 mb-4 pb-2">
              <div class="form-outline form-white">
                <input
                  type="text"
                  id="bairro"
                  class="form-control form-control-lg"
                  v-model="district"
                />
                <label class="form-label" for="bairro"
                  >Bairro</label
                >
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-5 mb-4 pb-2">
              <div class="form-outline form-white">
                <input
                  type="text"
                  id="form3Examplea4"
                  :class="zipcss"
                  v-model="zip_code"
                />
                <label class="form-label" for="form3Examplea4">Cep</label>
              </div>
            </div>
            <div class="col-md-7 mb-4 pb-2">
              <div class="form-outline form-white">
                <input
                  type="text"
                  id="form3Examplea5"
                  class="form-control form-control-lg"
                  v-model="state"
                />
                <label class="form-label" for="form3Examplea5">UF</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-5 mb-4 pb-2">
              <div class="form-outline form-white">
                <input
                  type="text"
                  id="form3Examplea7"
                  class="form-control form-control-lg"
                  v-model="city"
                />
                <label class="form-label" for="form3Examplea7">Cidade</label>
              </div>
            </div>
            <div class="col-md-7 mb-4 pb-2">
              <div class="form-outline form-white">
                <input
                  type="text"
                  id="form3Examplea8"
                  class="form-control form-control-lg"
                  v-model="phone"
                />
                <label class="form-label" for="form3Examplea8"
                  >Telefone</label
                >
              </div>
            </div>
          </div>

         

          <!-- <div class="form-check d-flex justify-content-start mb-4 pb-3">
            <input
              class="form-check-input me-3"
              type="checkbox"
              value=""
              id="form2Example3c"
            />
            <label class="form-check-label text-white" for="form2Example3">
              I do accept the
              <a href="#!" class="text-white"><u>Terms and Conditions</u></a>
              of your site.
            </label>
          </div> -->

          <button
            type="button"
            class="btn btn-primary btn-lg"
            data-mdb-ripple-color="dark"
            @click="register()"
          >
            Register
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Layout/Navbar.vue";
import Footer from "@/components/Layout/Footer.vue";
import axios from "axios";
export default {
  name: "RegisterUser",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      st: "",
      additional_information: "",
      zip_code: "",
      state: "",
      district: "",
      code: "",
      phone: "",
      city: "",
      css: "form-control form-control-lg",
      zipcss: "form-control form-control-lg",
      valide: false,
    
    }
  },
  methods: {
    checkPass() {
      if (this.password !== this.password_confirmation) {
        this.css = "border border-danger form-control form-control-lg";
      } else {
        this.css = "border border-success form-control form-control-lg";
        this.valide = true;
      }
    },
    cep() {
     axios
        .get(`https://viacep.com.br/ws/${this.zip_code}/json`)
        .then((response) => {
          this.st = response.data.logradouro;
          this.district = response.data.bairro;
          this.city = response.data.localidade;
          this.state = response.data.uf;
        }).then((response) => {
          console.log(response);
          this.zipcss = "border border-success form-control form-control-lg";
        }).catch((error) => {
          console.log(error);
          this.zipcss = "border border-danger form-control form-control-lg";
          this.zip_code = "";
        });
    },
    register() {
      if (this.valide) {
        axios.post(this.$store.state.base_url + "register", {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
          address: this.st,
          zip: this.zip_code,
          state: this.state,
          country: this.district,
          code: this.code,
          phone: this.phone,
          city: this.city,
        }).then((response) => {
          console.log(response);
          this.login();
        }).catch((error) => {
          console.log(error);
        });
      }
    },
    login() {
          axios.post(this.$store.state.base_url + "login", {
            email: this.email,
            password: this.password,
          }).then((response) => {
            this.$store.commit("setLogin", true);
            sessionStorage.setItem("token", response.data.token);
            this.$router.push("/");
          }).catch((error) => {
            console.log(error);
          });

        },
    
   
  },
  watch: {
    password_confirmation() {
      this.checkPass();
    },
    zip_code() {
      if(this.zip_code.length > 7){
        this.cep();
      }
    },

  }

};
</script>

<style scoped>
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
  
  margin: 10px;
 
 }
 .cards {
    display: flex;
    border-radius: 10px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    /* width: 100%; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
 }
 .form{
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 }
</style>