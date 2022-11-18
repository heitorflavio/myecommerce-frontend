<template>
  <div>
    <Navbar :total="total" />
    <Loading v-if="retur" />
    <div v-else >
      <section>
        <div class="container h-100 py-5">
          <div
            class="row d-flex justify-content-center align-items-center  card "
            id="cart"
            
          >
            <div >
              <div
                class="d-flex justify-content-between align-items-center mb-4"
              >
                <h3 class="fw-normal mb-0 text-black">Cart</h3>
                <!-- <div>
                  <p class="mb-0">
                    <span class="text-muted">Sort by:</span>
                    <a href="#!" class="text-body"
                      >price <i class="fas fa-angle-down mt-1"></i
                    ></a>
                  </p>
                </div> -->
              </div>

              <div
                class="card rounded-3 mb-4"
                v-for="products in cart"
                :key="products.id"
              >
                <div class="card-body p-4">
                  <div
                    class="
                      row
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <div class="col-md-2 col-lg-2 col-xl-2">
                      <img
                        :src="products.image"
                        class="img-fluid rounded-3"
                        alt="Cotton T-shirt"
                      />
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-3">
                      <p class="mb-2 description">{{ products.description }}</p>
                      <p>
                        <span class="text-muted">{{
                          products.price | currency
                        }}</span>
                        <!-- <span class="text-muted">Color: </span>Grey -->
                      </p>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button
                        class="btn btn-sm"
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                        @click="updateMinus(products.id, products.quantity - 1)"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          fill="currentColor"
                          class="bi bi-dash"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                          />
                        </svg>
                      </button>
                      <input
                        id="form1"
                        min="0"
                        name="quantity"
                        v-model="products.quantity"
                        type="number"
                        class="form-control form-control-sm"
                      />
                      <button
                        class="btn  btn-sm"
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                        @click="updatePlus(products.id, products.quantity + 1)"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          fill="currentColor"
                          class="bi bi-plus-lg"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                          />
                        </svg>
                      </button>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 class="mb-0">
                        {{
                          products.price * products.quantity
                            | currency
                        }}
                      </h5>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end remove">
                      <button
                        class="btn btn-danger btn-sm btnremove"
                        @click="removeProduct(products.id)"
                      >
                        x
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="card mb-4">
                <div class="card-body p-4 d-flex flex-row">
                  <div class="form-outline flex-fill">
                    <input
                      type="text"
                      id="form1"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="form1">Discound code</label>
                  </div>
                  <button
                    type="button"
                    class="btn btn-outline-warning btn-lg ms-3"
                  >
                    Apply
                  </button>
                </div>
              </div> -->

              <div class="card">
                <h1 class="total">
                  <b> Total: {{ Total | currency }}</b>
                </h1>
                <div class="card-body">
                  <button
                    type="button"
                    class="btn btn-warning btn-block btn-lg"
                  >
                    Finalizar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer v-if="!retur" />
  </div>
</template>

<script>
import Navbar from "@/components/Layout/Navbar.vue";
import Loading from "@/components/Layout/PaginaCarregando.vue";
import Footer from "@/components/Layout/Footer.vue";
import axios from "axios";
export default {
  name: "CartView",
  components: {
    Navbar,
    Loading,
    Footer,
  },
  data() {
    return {
      total: 0,
      cart: [],
      Total: 0,
      TotalProduct: 0,
      quantity: "",
      user: [],
      retur: true,
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
  computed: {
    totalProduct(total,quantity) {
      return total * quantity;
    },
    
    
    
      

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
          this.cart = response.data;
          this.cart.forEach((item) => {
            this.Total += item.price * item.quantity;
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    newTotal() {
      axios
        .post(this.$store.state.base_url + "carts", {
          customer_id: this.user.id,
        
        })
        .then((response) => {
          this.total = response.data.length;
          this.cart = response.data;
          this.retur = false;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
          // this.retur = false;
        });
    },
    removeProduct(id) {
      this.retur = true;
      axios
        .delete(this.$store.state.base_url + "cart/" + id)
        .then((response) => {
          this.cart.find((item) => {
            if (item.id === id) {
              this.Total -= item.price * item.quantity;
            }
          });
          this.newTotal();
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
        // this.me();
    },
    updatePlus(id, quantity) {
      this.retur = true;
      axios
        .put(this.$store.state.base_url + "cart/" + id, {
          quantity: quantity,
        })
        .then((response) => {
            console.log(response);
          this.cart.find((item) => {
            if (item.id === id) {
              this.Total += item.price;
            }
          });
          // this.Total += response.data.price;
          this.newTotal();
        })
        .catch((error) => {
          console.log(error);
        });
      // this.me();
    },
    updateMinus(id, quantity) {
      this.retur = true;
      axios
        .put(this.$store.state.base_url + "cart/" + id, {
          quantity: quantity,
        })
        .then((response) => {
          console.log(response);
          this.cart.find((item) => {
            if (item.id === id) {
              this.Total -= item.price;
            }
          });
          // this.Total -= response.data.price;
          this.newTotal();
        })
        .catch((error) => {
          console.log(error);
        });
        // this.me();
    },
    me() {
      axios
        .post(this.$store.state.base_url + "me", {
          token: sessionStorage.getItem("token"),
        })
        .then((response) => {
          this.user = response.data;
          this.getTotal();
          setTimeout(() => {
            this.retur = false;
          }, 1000);
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

<style>
.description {
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: "Roboto", sans-serif;
}
#cart {
  padding: 50px;
}
.total {
  text-align: center;
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  margin-top: 20px;
}

.btnremove {
 width: 30px;
}
@media (max-width: 768px) {
  .description {
    max-width: 100px;
  }
  .mb-0 {
    margin-bottom: 0px;
    display: flex;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
  }
  .remove {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #cart {
    padding: 0px;
  }
 
}
</style>