<template>
  <div>
    <form>
    <input name="busca" id="busca" type="text" v-model="busca" placeholder="Buscar...">
    <input type="submit" id="lupa" value="Buscar" @click.prevent="buscarProdutos">
  </form>
    <section class="produtos-container">
      <Loading v-if="retur" />
      <div v-else>
        <transition mode="out-in">
          <div
            v-if="produtos && produtos.length"
            class="produtos"
            key="produtos"
          >
            <div
              class="produto"
              v-for="(produto, index) in produtos"
              :key="index"
            >
              <router-link :to="'/product/' + produto.id" class="link">
                <div>
                  <img class="img" v-if="produto.image" :src="produto.image" />
                </div>
                <p class="description">{{ produto.description }}</p>
                <div class="db">
                  <p v-if="!produto.onSale" class="preco">
                    {{ produto.price | numeroPreco }}
                  </p>
                  <div v-else>
                    <p class="Salesprice">
                      <s>{{ produto.onSalePrice | numeroPreco }}</s>
                    </p>
                    <p class="preco">{{ produto.price | numeroPreco }}</p>
                  </div>
                  <button v-if="!produto.onSale" class="button">COMPRAR</button>
                  <div class="content" v-else>
                    <span class="dsvg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-clock-history"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"
                        />
                        <path
                          d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"
                        />
                        <path
                          d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
                        />
                      </svg>
                    </span>
                    <button class="dtime">
                      <span class="time">{{
                        Time(produto.onSaleDate, 1000)
                      }}</span>
                    </button>
                  </div>
                </div>
              </router-link>
            </div>
            <!-- <ProdutosPaginar :produtosTotal="produtosTotal" :produtosPorPagina="produtosPorPagina"/> -->
          </div>
          <div
            v-else-if="produtos && produtos.length === 0"
            key="sem-resultados"
            class="resultados"
          >
            <p class="sem-resultados">
              Busca sem resultados. Tente buscar outro termo.
            </p>
          </div>
          <!-- <PaginaCarregando key="carregando" v-else/> -->
        </transition>
      </div>
    </section>
    <Footer v-if="!retur" />
  </div>
</template>
  
<script>
import axios from "axios";
// import { api } from "@/services/index.js";
// import Buscar from "@/components/Produtos/ProdutosBuscar.vue";
import Loading from "@/components/Layout/PaginaCarregando.vue";
import Footer from "@/components/Layout/Footer.vue";
export default {
  name: "ProdutosLista",
  components: {
    //   ProdutosPaginar
    // Buscar,
    Loading,
    Footer,
  },
  filters: {
    numeroPreco(value) {
      return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  data() {
    return {
      produtos: null,
      produtosPorPagina: 9,
      produtosTotal: 0,
      date: new Date(),
      retur: true,
      busca: "",
    };
  },
  computed: {
    url() {
      // const query = serialize(this.$route.query);
      // return `/produto?_limit=${this.produtosPorPagina}${query}`;
      return `/produtos`;
    },
  },
  methods: {
    getProdutos() {
      this.produtos = null;
      axios
        .get(this.$store.state.base_url + "produtos")
        .then((response) => {
          // this.produtosTotal = Number(response.headers["x-total-count"]);
          this.produtos = response.data;
          this.retur = false;
        })
        .catch((error) => {
          console.log(error);
        });
      // console.log(this.$axios);
    },
    buscarProdutos() {
      this.retur = true;
      this.produtos = null;
      axios
        .get(this.$store.state.base_url + "produtos/query", {
          params: {
            busca: this.busca,
          },
        
        })
        .then((response) => {
          // this.produtosTotal = Number(response.headers["x-total-count"]);
          this.produtos = response.data;
          this.retur = false;
        })
        .catch((error) => {
          console.log(error);
        });
      console.log('teste');
    },
    Time(date) {
      setInterval(() => {
        this.date = new Date();
      }, 60000);
      var now = this.date;
      var end = new Date(date);
      var diff = new Date(end - now);
      var days = diff / 1000 / 60 / 60 / 24;
      var hours = (days - Math.floor(days)) * 24;
      var minutes = (hours - Math.floor(hours)) * 60;
      // var seconds = (minutes - Math.floor(minutes)) * 60;
      return (
        Math.floor(days) +
        "d " +
        Math.floor(hours) +
        "h " +
        Math.floor(minutes) +
        "m "
        // + Math.floor(seconds) +
        // "s"
      );
    },
  },
  watch: {
    // url() {
    // this.getProdutos();
    // },
  },
  created() {
    this.getProdutos();
  },
};
</script>
  
  <style scoped>
.content {
  display: flex;
  flex-wrap: nowrap;
  /* justify-content: center;
    align-items: center; */
  /* margin: 0 auto; */
  width: 100%;
  max-width: 1200px;
  /* padding: 0 20px; */
  border: 1px solid #af4c4c;
}
.dsvg {
  background-color: #af4c4c; /* Green */
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
.dtime {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
.time {
  font-size: 12px;
  color: #dc3545;
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
}
p {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.produtos-container {
  max-width: 1000px;
  margin: 0 auto;
}
.db {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
}
.link {
  text-decoration: none;
  color: #000;
}
.img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.button {
  background-color: #4caf50; /* Green */
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 6px;
  /* margin: 4px 2px; */
}
.produtos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin: 30px;
}
.description {
  font-size: 1rem;
  line-height: 1.125rem;
  font-weight: 600;
  margin-top: 0.5rem;
  color: rgb(66, 70, 77);
}

@media screen and (max-width: 500px) {
  .produtos {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    margin: 20px;
  }
  .resultados {
  height: 200px;
}
}

.produto {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}

.produto:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.produto img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.titulo {
  margin-bottom: 10px;
}

.preco {
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 0.9rem; */
  /* margin-top: 0.25rem; */
  font-size: 1.25rem;
  line-height: 1.875rem;
  font-weight: 700;
  height: 1.25rem;
  color: rgb(255, 101, 0);
}
.Salesprice {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -0.2rem;
  margin-top: -0.25rem;
  font-size: 0.9rem;
  /* line-height: 1.875rem; */
  font-weight: 700;
  height: 1rem;
  color: rgb(127, 133, 141);
  font-family: Poppins, sans-serif !important;
}

.sem-resultados {
  text-align: center;
  /* color: #af4c4c; */

}
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
  padding: 0 10px;
}

.resultados {
  height: 600px;
}

#busca {
  width: 100%;
  padding: 20px;
  border: none;
}

#busca:focus,
#busca:hover {
  transform: scale(0.4.0.4);
}

#lupa {
  width: 62px;
  height: 62px;
  background: url("@/assets/search.svg") no-repeat center center;
  text-indent: -150px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  box-shadow: none;
}
</style>
  