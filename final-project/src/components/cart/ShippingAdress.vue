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
    <div class="checkout">
      <h2 class="hidden">Checkout</h2>
      <p class="checkout__sub-total">
        SUB TOTAL <span class="checkout__price-checkout">$900</span>
      </p>
      <p class="checkout__grand-total">
        GRAND TOTAL <span class="checkout__price-checkout">$900</span>
      </p>
      <hr class="checkout__line" />
      <input
        type="submit"
        class="checkout__submit"
        value="PROCEED TO CHECKOUT"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "ShippingAdress",
};
</script>