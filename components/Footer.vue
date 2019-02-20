<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <span class="copyright">Copyright &copy; {{ name }} {{ year }}</span>
        </div>
        <div class="col-md-4">
          <ul class="list-inline social-buttons">
            <li class="list-inline-item" v-if="twitterUrl">
              <a :href="twitterUrl"> <i class="fab fa-twitter"></i> </a>
            </li>
            <li class="list-inline-item" v-if="facebookUrl">
              <a :href="facebookUrl"> <i class="fab fa-facebook-f"></i> </a>
            </li>
            <li class="list-inline-item" v-if="linkedInUrl">
              <a :href="linkedInUrl"> <i class="fab fa-linkedin-in"></i> </a>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <ul class="list-inline quicklinks">
            <li class="list-inline-item">
              <nuxt-link to="/privacy">Privacy Policy</nuxt-link>
            </li>
            <li class="list-inline-item">
              <nuxt-link to="/terms">Terms of Use</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    facebookUrl: {
      type: String
    },
    linkedInUrl: {
      type: String
    },
    twitterUrl: {
      type: String
    },
    name: {
      type: String
    }
  },
  data() {
    return {};
  },
  computed: {
    year: function() {
      var now = new Date();

      return now.getFullYear();
    }
  }
};
</script>
