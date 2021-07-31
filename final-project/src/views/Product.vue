<template>
  <div>
    <BreadcrumbsProd />
    <ProductMain />
  </div>
</template>

<script>
import BreadcrumbsProd from "@/components/product/BreadcrumbsProd.vue";
import ProductMain from "@/components/product/ProductMain.vue";

export default {
  name: "Product",
  components: {
    BreadcrumbsProd,
    ProductMain,
  },
};
</script>