<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6" v-for="client in clients">
          <a :href="client.url">
            <img
              class="img-fluid d-block mx-auto client-logo"
              :src="client.logo"
              :alt="client.name"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    clients: {}
  }
};
</script>

<style scoped>
.client-logo {
  height: 5rem;
}
</style>
