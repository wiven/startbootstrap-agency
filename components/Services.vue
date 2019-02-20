<template>
  <section id="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">{{ title }}</h2>
          <h3 class="section-subheading text-muted">{{ subTitle }}</h3>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-md-4" v-for="service in services">
          <span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-stack-1x fa-inverse" :class="service.icon"></i>
          </span>
          <h4 class="service-heading">{{ service.name }}</h4>
          <p class="text-muted">{{ service.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    services: {},
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String
    }
  }
};
</script>
