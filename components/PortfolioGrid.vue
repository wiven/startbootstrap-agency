<template>
  <section class="bg-light" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">{{ title }}</h2>
          <h3 class="section-subheading text-muted">{{ subTitle }}</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-6 portfolio-item" v-for="item in items">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" :src="item.imgUrl" :alt="item.title" />
          </a>
          <div class="portfolio-caption">
            <h4>{{ item.title }}</h4>
            <p class="text-muted">{{ item.subTitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    items: {},
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
