<template>
  <div>
    <SearchList v-if="search_list.length !== 0" />
    <section class="promo center">
      <div class="promo__items">
        <h1 class="promo__heading">
          <span class="promo__brand">THE BRAND</span> <br />
          OF LUXERIOUS <span class="promo__fashion">FASHION</span>
        </h1>
      </div>
    </section>
  </div>
</template>

<script>
import SearchList from "@/components/SearchList.vue";

export default {
  name: "Promo",
  components: {
    SearchList,
  },
  computed: {
    search_list() {
      return this.$store.getters.getSearchList;
    },
  },
};
</script>