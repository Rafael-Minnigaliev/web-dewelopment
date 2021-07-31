<template>
  <div class="sort center">
    <div class="sort__items">
      <input type="checkbox" id="trend" />
      <label
        for="trend"
        class="sort__items-title sort__items-title_trending-now"
        >TRENDING NOW</label
      >
      <form class="sort__item">trending now</form>
    </div>
    <div class="sort__items">
      <input type="checkbox" id="size" />
      <label for="size" class="sort__items-title sort__items-title_size"
        >SIZE</label
      >
      <form class="sort__item">
        <label
          ><input
            class="sort__input"
            type="checkbox"
            name="size"
            value="size-xs"
          />XS</label
        >
        <label
          ><input
            class="sort__input"
            type="checkbox"
            name="size"
            value="size-s"
          />S</label
        >
        <label
          ><input
            class="sort__input"
            type="checkbox"
            name="size"
            value="size-m"
          />M</label
        >
        <label
          ><input
            class="sort__input"
            type="checkbox"
            name="size"
            value="size-l"
          />L</label
        >
      </form>
    </div>
    <div class="sort__items">
      <input type="checkbox" id="price" />
      <label
        for="price"
        class="sort__items-title sort__items-title_dropdown-price"
        >PRICE</label
      >
      <form class="sort__item">price</form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sort",
};
</script>