<template>
  <div>
    <Navbar :total="Total" />
    <Loading v-if="retur" />
    <div v-else>
        <form @submit.prevent="Order()">
      <div class="d-flex main">
        <div class="alert alert-danger" v-if="alert">{{alert}}</div>
        <div class="card">
          <div class="card-body">
            <div class="row">
                 <h6 class="d-flex justify-content-center align-items-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-houses mr-1" viewBox="0 0 16 16">
                <path d="M5.793 1a1 1 0 0 1 1.414 0l.647.646a.5.5 0 1 1-.708.708L6.5 1.707 2 6.207V12.5a.5.5 0 0 0 .5.5.5.5 0 0 1 0 1A1.5 1.5 0 0 1 1 12.5V7.207l-.146.147a.5.5 0 0 1-.708-.708L5.793 1Zm3 1a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708L8.793 2Zm.707.707L5 7.207V13.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V7.207l-4.5-4.5Z"/>
                </svg><b>Endereço da Entrega</b></h6>
              <div class="col">
                <span><b>Endereço: </b>{{user.address}}</span>
              </div>
            </div>
            <div class="row">
              <div class="col">
               <span><b>Bairro: </b> {{user.country}}</span> 
              </div>
            </div>
            <div class="row">
              <div class="col">
                <span><b>Cidade: </b> {{user.city}}</span>
                <span class=" ml-4"><b>UF: </b> {{user.state}}</span>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <span><b>Cep: </b> {{user.zip}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body ">
            <div class="row">
              <h6 class="d-flex justify-content-center align-items-center mb-4"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square mr-1" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg><b>Itens</b></h6>
              <div class="col">
              <span><b>{{Total}} - itens no pedido - {{total | currency}}</b></span>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col">
                <span><b> Frete: {{ValorFrete | currency}}</b></span>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col">
                <span><b>TOTAL: {{isTotal | currency}}</b></span>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <div class="row">
              <h6 class="d-flex justify-content-center align-items-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-truck mr-1" viewBox="0 0 16 16">
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg><b>Endereço da Entrega</b></h6>
            </div>

            <ul id="frete">
                <li><input type="radio" name="frete"  value="1" v-model="frete" required><span class="ml-2">Retirar <span class="">Grátis</span></span></li>
                <!-- <li><input type="radio" name="frete" value="2" v-model="frete" required><span class="ml-2">Pagar na Entrega <span class="">Grátis</span></span></li> -->
                <li><input type="radio" name="frete" value="3" v-model="frete" required><span class="ml-2">Entrega pela Loja - <span class=""><b>R$ 20,00</b></span></span></li>
            </ul>
           
           
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-body d-flex align-content-center justify-content-center"
        >
          <button
          type="button"
            :class="css1"
            @click="Pay1()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              class="bi bi-credit-card"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"
              />
              <path
                d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"
              />
            </svg>
          </button>
          <button
          type="button"
            :class="css2"
            @click="Pay2()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              class="bi bi-upc"
              viewBox="0 0 16 16"
            >
              <path
                d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"
              />
            </svg>
          </button>
          <button
          type="button"
            :class="css3"
            @click="Pay3()"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-truck mr-1" viewBox="0 0 16 16">
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
          </button>
        </div>
      </div>
      <div class="card pay2" v-if="pay2">
        <div
          class="card-body d-flex align-content-center justify-content-center"
        >
          <div class="row d-flex align-items-center justify-content-center">
            <div class="d-flex align-items-center justify-content-center">
              <h4>
                <b>Total: {{ isTotal | currency }}</b>
              </h4>
            </div>
            <div class="d-flex align-items-center justify-content-center">
              <button type="submit" class="btn fzd mt-3">FINALIZAR COMPRA</button>
            </div>
          </div>
        </div>
      </div>
      <div class="card pay2" v-if="pay3">
        <div
          class="card-body d-flex align-content-center justify-content-center"
        >
           
          <div class="row d-flex align-items-center justify-content-center">
            <div class="row ">
                <div  class="d-flex align-items-center justify-content-center">
                    <span><b>**** PAGAR NA ENTREGA ****</b> </span>
                </div>
                <div class="col d-flex align-items-center justify-content-center mb-2 mt-2">   
               <input type="radio" name="payment" value="1" required v-model="PayEntrega"><span class="ml-2 mr-2"><b>PIX</b></span>
               <input type="radio" name="payment" value="2" required  v-model="PayEntrega"><span class="ml-2 mr-2"><b>DINHEIRO</b></span>
               <input type="radio" name="payment" value="3" required  v-model="PayEntrega"><span class="ml-2 mr-2"><b>CARTÃO</b></span>
            </div>
            </div>
            <div class="d-flex align-items-center justify-content-center mt-2">
              <h4>
                <b>Total: {{ isTotal | currency }}</b>
              </h4>
            </div>
            <div class="d-flex align-items-center justify-content-center">
              <button  type="submit" class="btn fzd mt-1">FINALIZAR COMPRA</button>
            </div>
          </div>
        </div>
      </div>
      <div class="card pay1" v-if="pay1">
        <div
          class="
            card-body
            d-flex
            align-content-center
            justify-content-center
            flex-column
          "
        >
          <!--  -->
          <div class="row gx-3">
            <div class="col-6">
              <div class="d-flex flex-column">
                <p class="text mb-1">Person Name</p>
                <input
                  class="form-control mb-3"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex flex-column">
                <p class="text mb-1">Card Number</p>
                <input
                  class="form-control mb-3"
                  type="text"
                  placeholder="1234 5678 4356 9878"
                  required
                />
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex flex-column">
                <p class="text mb-1">Expiry</p>
                <input
                  class="form-control mb-3"
                  type="text"
                  placeholder="MM/YYYY"
                  required
                />
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex flex-column">
                <p class="text mb-1">CVV/CVC</p>
                <input
                  class="form-control mb-3 pt-2"
                  type="text"
                  placeholder="***"
                  required
                />
              </div>
            </div>
          </div>
          <!--  -->
          <div class="d-flex align-items-center justify-content-center">
            <button type="submit" class="btn fzd mt-3">FINALIZAR COMPRA</button>
          </div>
        </div>
      </div>
    </form>
    </div>
    <Footer v-if="!retur" />
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/Layout/Navbar.vue";
import Footer from "@/components/Layout/Footer.vue";
import Loading from "@/components/Layout/PaginaCarregando.vue";

export default {
  name: "ProductOrder",
  components: {
    Navbar,
    Loading,
    Footer,
  },
  data() {
    return {
      wishList: [],
      Total: 0,
      retur: true,
      user: [],
      total: 0,
      pay1: true,
        pay2: false,
        pay3: false,
      css1: "btn-danger btn-lg btn-flat button",
      css2: "btn-outline-danger btn-lg btn-flat button",
      css3: "btn-outline-danger btn-lg btn-flat button",
      frete: Number | 0,
        isTotal: 0,
      ValorFrete: 0,
      method: "",
      Tfrete: "",
      PayEntrega: "",
      alert: "",
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
      Pay1() {
        this.css1 = "btn-danger btn-lg btn-flat button"
        this.css2 = "btn-outline-danger btn-lg btn-flat button"
        this.css3 = "btn-outline-danger btn-lg btn-flat button"
        this.pay2 = false;
        this.pay3 = false;
        this.pay1 = true;
    },
    Pay2() {
        this.css2 = "btn-danger btn-lg btn-flat button"
        this.css1 = "btn-outline-danger btn-lg btn-flat button"
        this.css3 = "btn-outline-danger btn-lg btn-flat button"
        this.pay1 = false;
        this.pay2 = true;
        this.pay3 = false;
      },
        Pay3() {
            this.css3 = "btn-danger btn-lg btn-flat button"
            this.css2 = "btn-outline-danger btn-lg btn-flat button"
            this.css1 = "btn-outline-danger btn-lg btn-flat button"
            this.pay1 = false;
            this.pay2 = false;
            this.pay3 = true;
        },
      getTotal() {
      axios
        .post(this.$store.state.base_url + "carts",
          {
          customer_id: this.user.id,
        }
        ).then((response) => {
            this.Total = response.data.length;
            this.total = response.data.reduce((total, item) => {
              return total + item.price * item.quantity;
            }, 0);
          
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
            this.user = response.data;
            console.log(this.user);
            this.getTotal();
          this.retur = false;
        })
        .catch((error) => {
            console.log(error);
            this.$router.push("/login");
        });
      },
    Order() {
      this.retur = true;
      if (this.frete == 3) {
        this.Tfrete = "Entrega Pela Loja";
      }
      if (this.frete == 1) {
        this.Tfrete = "Retirar na Loja";
      }
      if(this.pay1 == true){
        this.method = "Cartão de Crédito"
      }
      if(this.pay2 == true){
        this.method = "Boleto"
      }
      if(this.pay3 == true){
        this.method = "Pagar na Entrega"
      }
      if(this.PayEntrega == 1){
        this.PayEntrega = "PIX"
      }
      if(this.PayEntrega == 2){
        this.PayEntrega = "Dinheiro"
      }
      if(this.PayEntrega == 3){
        this.PayEntrega = "Cartão"
      }

      axios.post(this.$store.state.base_url + "order",
        {
          customer_id: this.user.id,
          customer_name: this.user.name,
          customer_email: this.user.email,
          customer_phone: this.user.phone,
          customer_address: this.user.address,
          customer_city: this.user.city,
          customer_state: this.user.state,
          customer_zip: this.user.zip,
          customer_country: this.user.country,
          customer_notes: 'null',
          total: this.isTotal,
          valor_frete: this.ValorFrete,
          frete: this.Tfrete,
          frete_status: "Aguardando",
          payment_method: this.method,
          payment_status: "Aguardando",
        

        
      }
        ).then((response) => {
          console.log(response.data);   
          this.$router.push("/finish");
        })
        .catch((error) => {
          console.log(error);
          this.alert = "Erro ao Finalizar Compra";
        });
      }
    },
    watch: {
        frete(va) {
            
            if (va == 1) {
                this.ValorFrete = 0;
                this.isTotal = this.total + 0;
            }
            if (va == 2) {
                this.ValorFrete = 0;
                this.isTotal = this.total + 0;
            }
            if (va == 3) {
                this.ValorFrete = 20;
                this.isTotal = this.total +  20;
            }
    },
  },
  created() {
    this.me();
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  margin: 10px;
}
.main {
  margin: 20px 0 0 0;
  justify-content: center;
  align-items: center;
}
.button {
  width: 100px;
  height: 100px;
  margin: 0 10px 0 10px;
  border: solid 1px #000;
}
.fzd {
  background-color: #ffc107;
  font-size: 20px;
}
.pay1 {
  margin: 10px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.pay2 {
    margin: 0 0 10% 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
#frete {
    list-style: none;
}
@media screen and (max-width: 500px) {
    .main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>