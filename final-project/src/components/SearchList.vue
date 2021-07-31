<template>
  <section class="product product__search center">
    <div class="product__header">
      <h2 class="product__heading product__heading-search">Search results</h2>
    </div>
    <div class="product__cards">
      <div style="position: relative">
        <Card
          v-bind:key="good.id"
          v-bind:good="good"
          v-for="good of search_list"
        />
        <button v-on:click="closeSearchList" class="product-cart__close-search">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "@/components/home/Card.vue";

export default {
  name: "SearchList",
  computed: {
    search_list() {
      return this.$store.getters.getSearchList;
    },
  },
  data() {
    return {
      close: "",
    };
  },
  components: {
    Card,
  },
  methods: {
    closeSearchList() {
      this.$store.dispatch("searchList", this.close);
    },
  },
};
</script>