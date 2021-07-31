<template>
  <header class="header center">
    <div class="header__items">
      <router-link to="/" class="header__link header__link_logo">
        <picture>
          <source srcset="img/logo_header.webp" type="image/webp" />
          <img src="img/logo_header.png" alt="logo" />
        </picture>
      </router-link>
      <a @click="inputSearch" class="header__link"
        ><img src="img/search_header.svg" alt="search"
      /></a>
      <input
        type="text"
        v-if="isActive"
        @keyup.enter="search"
        v-model="localValue"
        placeholder="Поиск"
        style="
          margin-left: 30px;
          height: 30px;
          width: 280px;
          padding-left: 10px;
          align-items: center;
        "
      />
    </div>
    <div class="header__items header__items_right">
      <div class="header__menu">
        <input type="checkbox" id="menu" />
        <label for="menu" class="header__link"
          ><img src="img/menu_header.svg" alt="menu"
        /></label>
        <HeaderMenu />
      </div>
      <router-link to="registration" class="header__link header__link_login"
        ><img src="img/login_header.svg" alt="login"
      /></router-link>
      <router-link
        to="cart"
        id="cart-btn"
        class="header__link header__link_cart"
        ><img src="img/cart.svg" alt="cart" /><span
          class="header__cart-counter"
          >{{ cartQuantity }}</span
        ></router-link
      >
    </div>
  </header>
</template>

<script>
import HeaderMenu from "@/components/HeaderMenu.vue";

export default {
  name: "Header",
  components: {
    HeaderMenu,
  },
  computed: {
    cartQuantity() {
      return this.$store.getters.getCart.reduce(
        (acc, good) => acc + good.quantity,
        0
      );
    },

    catalog() {
      return this.$store.getters.getCatalog;
    },
  },

  data() {
    return {
      isActive: false,
      localValue: this.value,
    };
  },

  methods: {
    inputSearch() {
      this.isActive = !this.isActive;
    },
    search() {
      this.$store.dispatch("searchList", this.localValue);
      this.localValue = "";
    },
  },
};
</script>

