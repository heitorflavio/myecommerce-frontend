<template>
  <div class="app">
    <router-view/>
  </div>
</template>
<script>
// import axios from 'axios';
export default {
  name: "App",
  methods: {
    // getTotal() {
    //   axios
    //     .get(this.$store.state.base_url + "cart/1")
    //     .then((response) => {
    //       // return response.data.length;
    //       this.$store.commit("setCartTotal", response.data.length);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
  },
  created() {
    // this.getTotal();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
