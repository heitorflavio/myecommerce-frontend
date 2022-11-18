<template>
  <div class="home">
    <Navbar :total="total" />
    <List />
    <!-- <Footer /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import List from "@/components/Produtos/List.vue";
import Navbar from "@/components/Layout/Navbar.vue";
// import Footer from "@/components/Layout/Footer.vue";
// import Buscar from "@/components/Produtos/ProdutosBuscar.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    List,
    Navbar,
    // Footer,
    // Buscar,
  },
  data() {
    return {
      total: 0,
      user: [],
    };
  },
  methods: {
    getTotal() {
      axios
        .post(this.$store.state.base_url + "carts",
          {
          customer_id: this.user.id,
        }
        ).then((response) => {
          console.log(response.data);
          this.total = response.data.length;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    me() {
      axios
        .post(this.$store.state.base_url + "me", {
          token: sessionStorage.getItem("token"),
        })
        .then((response) => {
          console.log(response);
          this.user = response.data;
          this.getTotal();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.me();
  },
};
</script>
