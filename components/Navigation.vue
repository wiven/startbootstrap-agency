<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container">
      <nuxt-link class="navbar-brand js-scroll-trigger" to="/"
        ><Logo v-if="hasLogo" :isDark="isDark" /><span v-else>{{ name }}</span>
      </nuxt-link>

      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">
          <li class="nav-item" v-for="link in links">
            <a
              class="nav-link js-scroll-trigger"
              @click="$router.push('/');"
              :href="link.url"
              >{{ link.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "~/components/Logo";

export default {
  components: {
    Logo
  },
  props: {
    links: {},
    hasLogo: {
      type: Boolean,
      default: false
    },
    isDark: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    }
  }
};
</script>
