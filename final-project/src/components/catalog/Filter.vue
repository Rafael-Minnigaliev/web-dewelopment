<template>
  <section class="filter center">
    <h3 class="hidden">filter</h3>
    <SidebarCatalog />
    <Sort />
  </section>
</template>

<script>
import SidebarCatalog from "@/components/catalog/SidebarCatalog.vue";
import Sort from "@/components/catalog/Sort.vue";

export default {
  name: "Filter",
  components: {
    SidebarCatalog,
    Sort,
  },
};
</script>