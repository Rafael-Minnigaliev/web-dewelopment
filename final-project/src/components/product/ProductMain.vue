<template>
  <main class="products">
    <h2 class="hidden">product_slide</h2>
    <ProductSlide />
    <ProductDescription />
    <section class="product">
      <h2 class="hidden">recomendation</h2>
      <div class="product__cards product__cards_none">
        <ProductCard />
      </div>
    </section>
  </main>
</template>

<script>
import ProductSlide from "@/components/product/ProductSlide.vue";
import ProductDescription from "@/components/product/ProductDescription.vue";
import ProductCard from "@/components/product/ProductCard.vue";

export default {
  name: "ProductMain",
  components: {
    ProductSlide,
    ProductDescription,
    ProductCard,
  },
};
</script>