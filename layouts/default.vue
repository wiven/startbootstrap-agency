<template>
  <div>
    <Navigation :links="links" hasLogo isDark :name="websiteName" /> <nuxt />
    <CustomFooter
      twitterUrl="https://twitter.com/wivenweb"
      facebookUrl="https://facebook/com/wivenwebsolutions"
      linkedInUrl="https://linkedin.com/in/wimvandevenne"
      :name="websiteName"
    />

    <!-- Modal 1 -->
    <div
      class="portfolio-modal modal fade"
      id="portfolioModal1"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr"><div class="rl"></div></div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2 class="text-uppercase">Project Name</h2>
                  <p class="item-intro text-muted">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <img
                    class="img-fluid d-block mx-auto"
                    src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/01-full.jpg"
                    alt=""
                  />
                  <p>
                    Use this area to describe your project. Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Est blanditiis
                    dolorem culpa incidunt minus dignissimos deserunt repellat
                    aperiam quasi sunt officia expedita beatae cupiditate,
                    maiores repudiandae, nostrum, reiciendis facere nemo!
                  </p>
                  <ul class="list-inline">
                    <li>Date: January 2017</li>
                    <li>Client: Threads</li>
                    <li>Category: Illustration</li>
                  </ul>
                  <button
                    class="btn btn-primary"
                    data-dismiss="modal"
                    type="button"
                  >
                    <i class="fas fa-times"></i> Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bootstrap core JavaScript -->
    <script src="https://blackrockdigital.github.io/startbootstrap-agency/vendor/jquery/jquery.min.js"></script>
    <script src="https://blackrockdigital.github.io/startbootstrap-agency/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="https://blackrockdigital.github.io/startbootstrap-agency/vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Contact form JavaScript -->
    <script src="https://blackrockdigital.github.io/startbootstrap-agency/js/jqBootstrapValidation.js"></script>
    <script src="https://blackrockdigital.github.io/startbootstrap-agency/js/contact_me.js"></script>

    <!-- Custom scripts for this template -->
    <script src="https://blackrockdigital.github.io/startbootstrap-agency/js/agency.min.js"></script>
  </div>
</template>

<script>
import Navigation from "~/components/Navigation";
import CustomFooter from "~/components/Footer.vue";

export default {
  components: {
    Navigation,
    CustomFooter
  },
  data() {
    return {
      links: [
        { name: "Diensten", url: "#services" },
        { name: "Portfolio", url: "#portfolio" },
        { name: "About", url: "#about" },
        { name: "Team", url: "#team" },
        { name: "Contact", url: "#contact" }
      ],
      websiteName: "WiVen Web Solutions"
    };
  }
};
</script>

<style></style>
