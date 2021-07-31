<template>
  <main class="shopping-cart center">
    <ProductsCart />
    <ShippingAdress />
  </main>
</template>

<script>
import ProductsCart from "@/components/cart/ProductsCart.vue";
import ShippingAdress from "@/components/cart/ShippingAdress.vue";

export default {
  name: "ShoppingCart",
  components: {
    ProductsCart,
    ShippingAdress,
  },
};
</script>