<template>
  <div>
    <!-- <h1>{{products}}</h1> -->
    <Navbar :total="total" />
    <Loading v-if="retur" />
    <section v-else class="content">
      <div class="card card-solid">
        <div class="card-body">
          <!--  -->
          <div class="alerta" :class="{ ativo: alertaAtivo }">
            <p :class="CSStext">{{ msg }}</p>
          </div>
          <!--  -->
          <div class="row">
            <div class="col-12 col-sm-6">
              <!-- <h3 class="d-inline-block d-sm-none">
                {{ products.name }}
              </h3> -->
              <div class="col-12">
                <img
                  v-if="images.length > 0"
                  :src="images[current].path"
                  class="product-image"
                  alt="Product Image"
                />
                <img
                  v-else
                  :src="products.image"
                  class="product-image"
                  alt="Product Image"
                />
              </div>
              <div class="col-12 product-image-thumbs">
                <div
                  class="product-image-thumb active"
                  v-for="(image, index) in images"
                  :key="index"
                >
                  <img @click="current = index" :src="image.path" />
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6">
              <h3 class="my-3">
                {{ products.name }}
              </h3>
              <p>
                {{ products.description }}
              </p>
              <hr />
              <div v-if="!products.onSale" class="py-2 px-3 mt-4">
                <h2 class="mb-0 price">{{ products.price | currency }}</h2>
                <span class="prices"> à vista</span>
              </div>
              <div v-else class="py-2 px-3 mt-4">
                <span class="Salesprice"
                  ><s>{{ products.onSalePrice | currency }}</s></span
                >
                <h2 class="mb-0 price">{{ products.price | currency }}</h2>
                <span class="prices"> à vista</span>
              </div>
              <div class="mt-4">
                <div class="btn btn-primary btn-lg btn-flat" @click="addCart()">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cart-plus mr2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"
                    />
                    <path
                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                    />
                  </svg>
                  Add to Cart
                </div>
                <button type="button" class="btn btn-outline-danger btn-lg btn-flat"  @click="addWish()">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    ></path>
                  </svg>
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="accordion" role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <span block v-b-toggle.accordion-1 variant="info"
                    ><h4>
                      <span class="svgdes"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-file-earmark-text"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"
                          />
                          <path
                            d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"
                          /></svg
                      ></span>
                      <span class="textdescription"> DESCRIÇÃO </span>
                    </h4></span
                  >
                </b-card-header>
                <b-collapse
                  id="accordion-1"
                  visible
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text>{{ products.Fulldescription }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <span block v-b-toggle.accordion-2
                    ><h4>
                      <span class="svgdes"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-gear"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"
                          />
                          <path
                            d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"
                          />
                        </svg>
                      </span>
                      <span class="textdescription"> ESPECIFICAÇÕES </span>
                    </h4></span
                  >
                </b-card-header>
                <b-collapse
                  id="accordion-2"
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text>{{ products.Fulldescription }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <!-- <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-3 variant="info"
                    >Accordion 3</b-button
                  >
                </b-card-header>
                <b-collapse
                  id="accordion-3"
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text>{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer v-if="!retur" />
  </div>
</template>

<script>
// import { api } from "@/services/index.js";
import Navbar from "@/components/Layout/Navbar.vue";
import Loading from "@/components/Layout/PaginaCarregando.vue";
import Footer from "@/components/Layout/Footer.vue";

import axios from "axios";
export default {
  name: "ProductComponent",
  components: {
    Navbar,
    Loading,
    Footer,
  },
  data() {
    return {
      products: [],
      images: [],
      current: 0,
      total: 0,
      user: [],
      retur: true,
      alertaAtivo: false,
      msg: "",
      CSStext: "",
    };
  },
  filters: {
    currency(value) {
      return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  methods: {
    getImage() {
      axios
        .get(`${this.$store.state.base_url + "image/" + this.$route.params.id}`)
        .then((response) => {
          this.images = response.data;
          this.retur = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getProducts() {
      axios
        .get(
          `${this.$store.state.base_url + "produtos/" + this.$route.params.id}`
        )
        .then((response) => {
          this.products = response.data;
          console.log(this.products);
          this.getImage();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addWish() {
      axios
        .post(this.$store.state.base_url + "wish", {
          customer_id: this.user.id,
          product_id: this.products.id,
          quantity: 1,
          description: this.products.description,
          price: this.products.price,
          image: this.images[0].path
            ? this.images[0].path
            : this.products.image,
        })
        .then((response) => {
          console.log(response);
          this.alerta(
            "Produto adicionado ao carrinho",
            "alerta_mensagem_wishlist"
          );
        })
        .catch((error) => {
          console.log(error);
          if (this.user.id == null) {
            this.alerta(
              "Faça login para adicionar ao carrinho",
              "alerta_mensagem_error"
            );
          }
        });
    },
    addCart() {
      // this.$store.commit("addCart", this.products);
      axios
        .post(this.$store.state.base_url + "cart", {
          customer_id: this.user.id,
          product_id: this.products.id,
          quantity: 1,
          sku: this.products.sku,
          description: this.products.description,
          price: this.products.price,
          image: this.images[0].path
            ? this.images[0].path
            : this.products.image,
        })
        .then((response) => {
          console.log(response);
          this.alerta(
            "Produto adicionado ao carrinho",
            "alerta_mensagem_sucesso"
          );
          this.getTotal();
        })
        .catch((error) => {
          console.log(error);
          if (this.user.id == null) {
            this.alerta(
              "Faça login para adicionar ao carrinho",
              "alerta_mensagem_error"
            );
          }
        });
    },
    getTotal() {
      axios
        .post(this.$store.state.base_url + "carts", {
          customer_id: this.user.id,
        })
        .then((response) => {
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
          this.getProducts();
          this.getTotal();
        })
        .catch((error) => {
          console.log(error);
          this.getProducts();
          this.getTotal();
        });
    },
    alerta(msg, css) {
      this.msg = msg;
      this.CSStext = css;
      this.alertaAtivo = true;
      setTimeout(() => {
        this.alertaAtivo = false;
      }, 1500);
    },
  },
  created() {
    this.me();
  },
};
</script>

<style scoped>
.textdescription {
  font-size: 1.2rem;
  color: #000;
  margin-top: 14px;
  margin-left: 10px;
}
.svgdes {
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.description {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.content {
  padding: 20px 40px 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.price {
  font-size: 2rem;
  color: rgb(255, 101, 0);
}
.Salesprice {
  line-height: 1.5rem;
  font-size: 0.9rem;
  color: rgb(127, 133, 141);
  font-family: Poppins, sans-serif !important;
}
.prices {
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: rgb(86, 92, 105);
  font-family: Poppins, sans-serif !important;
}
@media screen and (max-width: 768px) {
  .content {
    flex-direction: column;
    padding: 0;
  }
  .price {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .prices {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-left: 5px;
  }
  .mt-4 {
    margin-top: 0.5rem !important;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }
}
/* ALERTA */

.alerta {
  position: absolute;
  top: 60px;
  left: 0px;
  z-index: 10;
  width: 100%;
  text-align: center;
  display: none;
}

.alerta.ativo {
  display: block;
  animation: fadeInDown 0.3s forwards;
}

@keyframes fadeInDown {
  from {
    transform: translate3d(0, -30px, 0);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0px, 0);
  }
}

.alerta_mensagem_sucesso {
  background-color: #198754;
  display: inline-block;
  padding: 20px 40px;
  color: #fff;
  border: 1px solid #198754;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.2);
}
.alerta_mensagem_error {
  background-color: #f8d7da;
  display: inline-block;
  padding: 20px 40px;
  color: #fff;
  border: 1px solid #dc3545;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.2);
}
.alerta_mensagem_wishlist {
  background-color: #45748f;
  display: inline-block;
  padding: 20px 40px;
  color: #fff;
  border: 1px solid #000c79;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.2);
}
</style>