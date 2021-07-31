<template>
  <section class="product center">
    <div class="product__header">
      <h2 class="product__heading">Fetured Items</h2>
      <p class="product__text">
        Shop for items based on what we featured in this week
      </p>
    </div>
    <div class="product__cards">
      <Card v-bind:key="good.id" v-bind:good="good" v-for="good of catalog" />
    </div>
    <div class="product__btn">
      <router-link to="/catalog" class="product__button"
        >Browse All Product</router-link
      >
    </div>
  </section>
</template>


<script>
import Card from "@/components/home/Card.vue";

export default {
  name: "Showcase",
  components: {
    Card,
  },
  computed: {
    catalog() {
      return this.$store.getters.getCatalog;
    },
  },
};
</script>