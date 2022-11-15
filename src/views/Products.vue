<template>
  <div>
    <!-- <Navbar  /> -->
    <div>
      <Produto />
    </div>
  </div>
</template>

<script>
// import Navbar from "@/components/Layout/Navbar.vue";
import Produto from "@/components/Produtos/Produto.vue";
// import axios from "axios";
export default {
  name: "ProductView",
  components: {
    // Navbar,
    Produto,
  },
  data() {
    return {
      // total: 0,
    };
  },
  methods: {
    
  },
  created() {
    // this.getTotal();
  },
};
</script>

<style>
</style>