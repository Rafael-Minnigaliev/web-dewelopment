<template>
  <div class="product__card">
    <div class="product__image">
      <picture>
        <source :srcset="good.img1" type="image/webp" />
        <img class="product__img" :src="good.img2" alt="product" />
      </picture>
      <div class="product__overlay">
        <button v-on:click="addToCart" class="product__button-cart">
          <img
            class="product__cart-img"
            src="img/product-cart.svg"
            alt="cart"
          />Add to Cart
        </button>
      </div>
    </div>
    <div class="product__info">
      <router-link to="/product" class="product__titel">{{
        good.title
      }}</router-link>
      <br />
      <span class="product__description">{{ good.description }}</span>
      <br />
      <span class="product__price">${{ good.price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["good"],
  methods: {
    addToCart() {
      this.$store.dispatch("loadToCart", this.good);
    },
  },
};
</script>