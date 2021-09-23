<template>
  <form action="#" class="adress-form">
    <div class="shipping-adress">
      <h2 class="shipping-adress__title">SHIPPING ADRESS</h2>
      <input
        type="text"
        class="shipping-adress__input"
        placeholder="Bangladesh"
      />
      <input type="text" class="shipping-adress__input" placeholder="State" />
      <input
        type="text"
        class="shipping-adress__input"
        placeholder="Postcode / Zip"
      />
      <input
        type="text"
        class="shipping-adress__input shipping-adress__input_quote"
        placeholder="GET A QUOTE"
      />
    </div>
    <TotalPrice />
  </form>
</template>

<script>
import TotalPrice from "@/components/cart/TotalPrice.vue";

export default {
  name: "ShippingAdress",
  components: {
    TotalPrice,
  },
};
</script>