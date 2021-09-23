<template>
  <section class="product center">
    <h2 class="hidden">part of products</h2>
    <div class="product__cards product__cards_none">
      <CardCatalog />
    </div>
    <Pagination />
  </section>
</template>

<script>
import CardCatalog from "@/components/catalog/CardCatalog.vue";
import Pagination from "@/components/catalog/Pagination.vue";

export default {
  name: "ShowcaseCatalog",
  components: {
    CardCatalog,
    Pagination,
  },
};
</script>