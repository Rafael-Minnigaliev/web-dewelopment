<template>
  <section class="products-cart">
    <h2 class="hidden">Products-cart</h2>
    <h1 class="product__heading" v-if="cart.length == 0">The cart is empty</h1>
    <CardCart v-bind:key="good.id" v-bind:good="good" v-for="good of cart" />
    <div class="cart-buttons">
      <button v-on:click="clearCart" class="cart-buttons__button">
        CLEAR SHOPPING CART
      </button>
      <router-link to="/catalog" class="cart-buttons__button"
        >CONTINUE SHOPPING</router-link
      >
    </div>
  </section>
</template>

<script>
import CardCart from "@/components/cart/CardCart.vue";

export default {
  name: "ProductsCart",
  components: {
    CardCart,
  },
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
  },
  methods: {
    clearCart() {
      this.$store.dispatch("clearCart", this.cart);
    },
  },
};
</script>