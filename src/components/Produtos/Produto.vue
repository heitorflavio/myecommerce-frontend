<template>
  <div>
    <!-- <h1>{{products}}</h1> -->
    <Navbar :total="total" />
    <section class="content">
      <div class="card card-solid">
        <div class="card-body">
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
                  <i class="fas fa-cart-plus fa-lg mr-2"></i>
                  Add to Cart
                </div>
                <div class="btn btn-default btn-lg btn-flat" disabled>
                  <i class="fas fa-heart fa-lg mr-2"></i>
                  Add to Wishlist
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="accordion" role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <span block v-b-toggle.accordion-1 variant="info"
                    ><h4 class="description">
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
                      <span class="textdescription">
                        DESCRIÇÃO
                      </span>
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
                    ><h4 class="description">
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
                      <span class="textdescription">
                        ESPECIFICAÇÕES
                      </span>
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
  </div>
</template>

<script>
// import { api } from "@/services/index.js";
import Navbar from "@/components/Layout/Navbar.vue";

import axios from "axios";
export default {
  name: "ProductComponent",
  components: {
    Navbar,
  },
  data() {
    return {
      products: [],
      images: [],
      current: 0,
      total: 0,
      user: []
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
          // console.log(this.images[0]);
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
    addCart() {
      // this.$store.commit("addCart", this.products);
      axios
        .post(this.$store.state.base_url + "cart", {
          customer_id: this.user.id,
          product_id: this.products.id,
          quantity: 1,
          description: this.products.description,
          price: this.products.price,
          image: this.images[0].path ?  this.images[0].path : this.products.image,
        })
        .then((response) => {
          console.log(response);
          this.getTotal();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getTotal() {
      axios
        .get(this.$store.state.base_url + "cart/" + this.user.id)
        .then((response) => {
          this.total = response.data.length;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    me() {
      axios.post(this.$store.state.base_url + "me", {
       token: sessionStorage.getItem("token"),
      }).then((response) => {
        console.log(response);
        this.user = response.data;
        this.getProducts();
        this.getTotal();
      }).catch((error) => {
        console.log(error);
      });
    }
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

}
.svgdes {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.description {
  font-size: 1.2rem;
  display: flex;
  align-items: center;
}
.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.description {
  font-size: 1.25rem;
  line-height: 1.875rem;
  font-weight: 700;
  text-transform: uppercase;
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
}
</style>