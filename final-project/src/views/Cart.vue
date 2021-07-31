<template>
  <div>
    <BreadcrumbsCart />
    <ShoppingCart />
  </div>
</template>

<script>
import BreadcrumbsCart from "@/components/cart/BreadcrumbsCart.vue";
import ShoppingCart from "@/components/cart/ShoppingCart.vue";

export default {
  name: "Cart",
  components: {
    BreadcrumbsCart,
    ShoppingCart,
  },
};
</script>