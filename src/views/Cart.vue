<template>
  <div>
    <Navbar :total="total" />
    <div>
      <section class="h-100" style="background-color: #eee">
        <div class="container h-100 py-5">
          <div
            class="row d-flex justify-content-center align-items-center h-100"
          >
            <div class="col-10">
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
                        class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                      >
                        <i class="fas fa-minus"></i>
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
                        class="btn btn-link px-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 class="mb-0">{{ totalProduct(products.price,products.quantity) | currency }}</h5>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <button
                        class="btn btn-danger"
                        @click="removeProduct(products.id)"
                      >
                        x
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-4">
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
              </div>

              <div class="card">
                <h1 class="total"><b> Total: {{ Total | currency }}</b></h1>
                <div class="card-body">
                  <button
                    type="button"
                    class="btn btn-warning btn-block btn-lg"
                  >
                    Proceed to Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Layout/Navbar.vue";
import axios from "axios";
export default {
  name: "CartView",
  components: {
    Navbar,
  },
  data() {
    return {
      total: 0,
      cart: [],
      Total: 0,
      TotalProduct: 0,
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
    totalProduct() {
      return (price, quantity) => {
        return price * quantity;
      };
    },
  },
  methods: {
    getTotal() {
      axios
        .get(this.$store.state.base_url + "cart/1")
        .then((response) => {
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
        .get(this.$store.state.base_url + "cart/1")
        .then((response) => {
          this.total = response.data.length;
          this.cart = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    removeProduct(id) {
      axios
        .delete(this.$store.state.base_url + "cart/" + id)
        .then((response) => {
          this.cart.find((item) => {
            if (item.id === id) {
              this.Total -= item.price * item.quantity;
            }
          });
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      this.newTotal();
    },
  },
  watch: {},
  created() {
    this.getTotal();
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
.total {
  text-align: center;
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  margin-top : 20px;
}
</style>