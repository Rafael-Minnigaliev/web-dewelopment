<template>
  <div>
    <BreadcrumbsCatalog />
    <main>
      <h2 class="hidden">products</h2>
      <Filter />
      <ShowcaseCatalog />
    </main>
    <Advantage />
  </div>
</template>

<script>
import BreadcrumbsCatalog from "@/components/catalog/BreadcrumbsCatalog.vue";
import Filter from "@/components/catalog/Filter.vue";
import ShowcaseCatalog from "@/components/catalog/ShowcaseCatalog.vue";
import Advantage from "@/components/home/Advantage.vue";

export default {
  name: "Catalog",
  components: {
    BreadcrumbsCatalog,
    Filter,
    ShowcaseCatalog,
    Advantage,
  },
};
</script>