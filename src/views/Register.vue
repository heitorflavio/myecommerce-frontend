<template>
  <div>
    <Navbar />
    <div class="card">
      <div class="col-lg-6 cards">
        <div class="p-5">
          <h3 class="fw-normal mb-5">Contact Details</h3>

          <div class="mb-4 pb-2">
            <div class="form-outline form-white">
              <input
                type="text"
                id="form3Examplea2"
                class="form-control form-control-lg"
              />
              <label class="form-label" for="form3Examplea2">Street + Nr</label>
            </div>
          </div>

          <div class="mb-4 pb-2">
            <div class="form-outline form-white">
              <input
                type="text"
                id="form3Examplea3"
                class="form-control form-control-lg"
              />
              <label class="form-label" for="form3Examplea3"
                >Additional Information</label
              >
            </div>
          </div>

          <div class="row">
            <div class="col-md-5 mb-4 pb-2">
              <div class="form-outline form-white">
                <input
                  type="text"
                  id="form3Examplea4"
                  class="form-control form-control-lg"
                />
                <label class="form-label" for="form3Examplea4">Zip Code</label>
              </div>
            </div>
            <div class="col-md-7 mb-4 pb-2">
              <div class="form-outline form-white">
                <input
                  type="text"
                  id="form3Examplea5"
                  class="form-control form-control-lg"
                />
                <label class="form-label" for="form3Examplea5">Place</label>
              </div>
            </div>
          </div>

          <div class="mb-4 pb-2">
            <div class="form-outline form-white">
              <input
                type="text"
                id="form3Examplea6"
                class="form-control form-control-lg"
              />
              <label class="form-label" for="form3Examplea6">Country</label>
            </div>
          </div>

          <div class="row">
            <div class="col-md-5 mb-4 pb-2">
              <div class="form-outline form-white">
                <input
                  type="text"
                  id="form3Examplea7"
                  class="form-control form-control-lg"
                />
                <label class="form-label" for="form3Examplea7">Code +</label>
              </div>
            </div>
            <div class="col-md-7 mb-4 pb-2">
              <div class="form-outline form-white">
                <input
                  type="text"
                  id="form3Examplea8"
                  class="form-control form-control-lg"
                />
                <label class="form-label" for="form3Examplea8"
                  >Phone Number</label
                >
              </div>
            </div>
          </div>

          <div class="mb-4">
            <div class="form-outline form-white">
              <input
                type="text"
                id="form3Examplea9"
                class="form-control form-control-lg"
              />
              <label class="form-label" for="form3Examplea9">Your Email</label>
            </div>
          </div>

          <div class="form-check d-flex justify-content-start mb-4 pb-3">
            <input
              class="form-check-input me-3"
              type="checkbox"
              value=""
              id="form2Example3c"
            />
            <label class="form-check-label text-white" for="form2Example3">
              I do accept the
              <a href="#!" class="text-white"><u>Terms and Conditions</u></a>
              of your site.
            </label>
          </div>

          <button
            type="button"
            class="btn btn-primary btn-lg"
            data-mdb-ripple-color="dark"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Layout/Navbar.vue";
export default {
  name: "RegisterUser",
  components: {
    Navbar,
  },
};
</script>

<style>
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
  
  margin: 10px;
 
 }
 .cards {
    display: flex;
    border-radius: 10px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    width: 100%;
 }
</style>