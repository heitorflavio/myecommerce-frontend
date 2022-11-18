<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="footer-widget">
              <h2>Get in Touch</h2>
              <div class="contact-info">
                <p>
                  <i class="fa fa-map-marker"></i>123 E Store, Los Angeles, USA
                </p>
                <p>
                  <i class="fa fa-envelope"></i>
                  <a
                    href="mailto:
                        
                    "
                  >
                  </a>
                </p>
                <p><i class="fa fa-phone"></i>(+880) 012 345 6789</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="footer-widget">
              <h2>Follow Us</h2>
              <div class="contact-info">
                <div class="social">
                  <a href=""><i class="fab fa-twitter"></i></a>
                  <a href=""><i class="fab fa-facebook-f"></i></a>
                  <a href=""><i class="fab fa-linkedin-in"></i></a>
                  <a href=""><i class="fab fa-instagram"></i></a>
                  <a href=""><i class="fab fa-youtube"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="footer-widget">
              <h2>Company</h2>
              <ul>
                <li><a href="">About Us</a></li>
                <li><a href="">Terms & Conditions</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Contact</a></li>
              </ul>
            </div>
          </div>
          <!-- <div class="col-lg-3 col-md-6">
                <div class="footer-widget">
                <h2>Payment Method</h2>
                <div class="payment">
                    <a href=""><img src="" alt="Payment Method" /></a>
                </div>
                </div>
            </div> -->
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterC",
};
</script>

<style>
footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
  margin-top: 80px;
  border: 1px solid #eaeaea;
  font-family: Poppins, sans-serif !important;
}
</style>