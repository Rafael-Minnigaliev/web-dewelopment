<template>
  <div class="product-cart">
    <picture class="product-cart__picture">
      <source
        class="product-cart__img"
        media="(max-width: 787px)"
        :srcset="good.img1"
        type="image/webp"
      />
      <source
        class="product-cart__img"
        media="(max-width: 787px)"
        :srcset="good.img1"
        type="image/webp"
      />
      <source class="product-cart__img" :srcset="good.img1" type="image/webp" />
      <img class="product-cart__img" :src="good.img2" alt="photo" />
    </picture>
    <div class="product-cart__info">
      <h3 class="product-cart__title">
        {{ good.title }}
      </h3>
      <form action="#" class="product-cart__quantity-form">
        Price: <span class="product-cart__price">{{ good.price }}</span> <br />
        Color: Red <br />
        Size: Xl <br />
        Quantity:<input
          class="product-cart__quantity-input"
          type="number"
          name="quantity"
          min="1"
          max="10"
          required
          :value="good.quantity"
        />
      </form>
    </div>
    <button v-on:click="deleteCartGood" class="product-cart__close">
      <i class="fas fa-times"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "CardCart",
  props: ["good"],
  methods: {
    deleteCartGood() {
      this.$store.dispatch("deleteFromCart", this.good);
    },
  },
};
</script>