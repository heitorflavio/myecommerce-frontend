<template>
  <div>
    <Navbar :total="total" />
    <Loading v-if="retur" />
    <div v-else>
      <section>
        <div class="container h-100 py-5">
          <div
            class="row d-flex justify-content-center align-items-center card"
            id="cart"
          >
            <div>
              <div
                class="d-flex justify-content-between align-items-center mb-4"
              >
                <h3 class="fw-normal mb-0 text-black">WishList</h3>
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
                v-for="products in wishList"
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
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer v-if="!retur" />
  </div>
</template>
  
<script>
import axios from "axios";
import Navbar from "@/components/Layout/Navbar.vue";
import Loading from "@/components/Layout/PaginaCarregando.vue";
import Footer from "@/components/Layout/Footer.vue";
export default {
  name: "WishList",
  data() {
    return {
      wishList: [],
      Total: 0,
      retur: true,
      user: [],
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
  components: {
    Navbar,
    Loading,
    Footer,
  },
  methods: {
    getWishList() {
      axios
        .post(this.$store.state.base_url + "wishlist", {
          customer_id: this.user.id,
        })
        .then((response) => {
          console.log(response.data);
          this.wishList = response.data;
          this.retur = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    removeProduct(id) {
        this.retur = true;
      console.log(id);
      axios
        .delete(this.$store.state.base_url + "wish/" + id)
        .then((response) => {
          console.log(response);
          this.getWishList();
        })
        .catch((error) => {
          console.log(error);
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
          this.getTotal();
          this.getWishList();
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
</style>