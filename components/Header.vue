<template>
  <header
    class="masthead"
    :style="{ backgroundImage: 'url(' + backgroundImg + ')' }"
  >
    <div class="container">
      <div class="intro-text">
        <div class="intro-lead-in" v-if="leadText">{{ leadText }}</div>
        <div class="intro-heading text-uppercase" v-if="headingText">
          {{ headingText }}
        </div>
        <a
          v-if="buttonText && buttonLink"
          class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
          :href="buttonLink"
          >{{ buttonText }}</a
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    leadText: {
      type: String
    },
    headingText: {
      type: String
    },
    buttonText: {
      type: String
    },
    buttonLink: {
      type: String
    },
    bgImg: {
      type: String
    }
  },
  computed: {
    backgroundImg: function() {
      return this.bgImg
        ? this.bgImg
        : "https://blackrockdigital.github.io/startbootstrap-agency/img/header-bg.jpg";
    }
  }
};
</script>

<style scoped>
.masthead {
}
</style>
