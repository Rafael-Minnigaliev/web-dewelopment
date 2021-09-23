<template>
  <div class="checkout">
    <h2 class="hidden">Checkout</h2>
    <p v-if="cart.length === 0" class="checkout__sub-total">
      SUB TOTAL <span class="checkout__price-checkout">${{ 0 }}</span>
    </p>
    <p v-if="cart.length !== 0" class="checkout__sub-total">
      SUB TOTAL <span class="checkout__price-checkout">${{ subTotal }}</span>
    </p>
    <p class="checkout__grand-total">
      GRAND TOTAL
      <span class="checkout__price-checkout">${{ grandTotal }}</span>
    </p>
    <hr class="checkout__line" />
    <input type="submit" class="checkout__submit" value="PROCEED TO CHECKOUT" />
  </div>
</template>

<script>
export default {
  name: "TotalPrice",

  data() {
    return {
      tax: 5,
    };
  },

  computed: {
    grandTotal() {
      return this.$store.getters.getCart.reduce(
        (acc, good) => acc + good.price * good.quantity,
        0
      );
    },
    subTotal() {
      return this.grandTotal + this.tax;
    },
    cart() {
      return this.$store.getters.getCart;
    },
  },
};
</script>