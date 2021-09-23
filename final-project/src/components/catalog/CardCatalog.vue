<template>
  <div class="product__card">
    <div class="product__image">
      <picture>
        <source srcset="img/product_1.webp" type="image/webp" />
        <img class="product__img" src="img/product_1.jpg" alt="product" />
      </picture>
      <div class="product__overlay">
        <button class="product__button-cart">
          <img
            class="product__cart-img"
            src="img/product-cart.svg"
            alt="cart"
          />
          Add to Cart
        </button>
      </div>
    </div>
    <div class="product__info">
      <router-link to="/product" class="product__titel"
        >ELLERY X M'O CAPSULE</router-link
      >
      <br />
      <span class="product__description"
        >Known for her sculptural takes on traditional tailoring, Australian
        arbiter of cool Kym Ellery teams up with Moda Operandi.</span
      >
      <br />
      <span class="product__price">$52.00</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardCatalog",
};
</script>