<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <img src="@/assets/ranek.svg" alt="Ranek" />
      </router-link>

      <!-- <b-avatar v-if="this.$store.state.login == true" id="dropdown-1" text="Dropdown Button" class="m-md-2"> -->
      <!-- dropdown -->
      <div
        v-if="this.$store.state.login == true"
        class="d-flex flex-direction-1 align-items-center"
      >
        <ul class="navbar-nav ml-auto cart btn" @click="cart()">
          <li class="nav-item">
            <span href="nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                />
              </svg>
            </span>
            <span class="badge badge-danger">{{ total }}</span>
          </li>
        </ul>
        <div class="dropdown">
          <b-avatar
            class=""
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
          </b-avatar>

          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
      <!--  end -->

      <router-link v-else class="btn" to="/login">Vender / Login</router-link>
    </nav>
  </header>
</template>
  
  <script>
// import axios from 'axios';
export default {
  name: "TheHeader",
  computed: {},
  data() {
    return {
      // total: 0,
    };
  },
  
  props: {
    total: Number,
  },
  methods: {
    getTotal() {
     
    },
    cart() {
      this.$router.push("/cart");
    }
    
  },
  watch: {
    $route() {
      this.getTotal();
    },
    total() {
    
    },

  },
  mounted() {
    // this.getTotal();
    
  }
};
</script>
  
  <style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

.logo {
  padding: 10px 0;
}

.logo img {
  width: 90px;
}
.cart {
  margin-right: 14px;
}
.badge {
  /* position: absolute; */
  /* top: -14px; */
  /* right: -10px; */
  /* padding: 5px 10px; */
  border-radius: 50%;
  background: red;
  color: #fff;
  font-size: 0.7rem;
}
</style>
  