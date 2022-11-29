<template>
  <div>
    <Navbar :total="0" />
    <div
      class="w-100 h-100 d-flex justify-content-center align-items-center mt-4"
    >
      <div>
        <div class="d-flex justify-content-center align-items-center mt-2">
          <span><b>PEDIDO GERADO COM SUCESSO</b></span>
        </div>
        <div class="d-flex justify-content-center align-items-center mt-2">
          <!-- <span>Seu pedido foi gerado com sucesso, aguarde a confirmação do pagamento.</span> -->
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            fill="currentColor"
            class="bi bi-check-lg"
            viewBox="0 0 16 16"
          >
            <path
              d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
            />
          </svg>
        </div>
        <div class="d-flex justify-content-center align-items-center bt mt-2">
          <a class="btn btn-link" href="/">Voltar para a página inicial</a>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Layout/Navbar.vue";
import Footer from "@/components/Layout/Footer.vue";
export default {
  name: "FinishView",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.bt {
  margin-top: 20px;
  margin-bottom: 150%;
}
</style>