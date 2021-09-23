<template>
  <details class="sidebar-catalog">
    <summary class="sidebar-catalog__title">
      <span class="sidebar-catalog__name">FILTER</span
      ><svg
        class="sidebar-catalog__icon"
        width="15"
        height="10"
        viewBox="0 0 15 10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
        />
      </svg>
    </summary>
    <div class="sidebar-catalog__items">
      <details class="sidebar-catalog__item" open>
        <summary class="sidebar-catalog__item-title">CATEGORY</summary>
        <button class="sidebar-catalog__button">Accessories</button>
        <button class="sidebar-catalog__button">Bags</button>
        <button class="sidebar-catalog__button">Denim</button>
        <button class="sidebar-catalog__button">Hoodies & Sweatshirts</button>
        <button class="sidebar-catalog__button">Jackets & Coats</button>
        <button class="sidebar-catalog__button">Polos</button>
        <button class="sidebar-catalog__button">Shirts</button>
        <button class="sidebar-catalog__button">Shoes</button>
        <button class="sidebar-catalog__button">Sweaters & Knits</button>
        <button class="sidebar-catalog__button">T-Shirts</button>
        <button class="sidebar-catalog__button">Tanks</button>
      </details>
      <details class="sidebar-catalog__item">
        <summary class="sidebar-catalog__item-title">BRAND</summary>
        <button class="sidebar-catalog__button">Brand-1</button>
        <button class="sidebar-catalog__button">Brand-2</button>
        <button class="sidebar-catalog__button">Brand-3</button>
        <button class="sidebar-catalog__button">Brand-4</button>
        <button class="sidebar-catalog__button">Brand-5</button>
      </details>
      <details class="sidebar-catalog__item">
        <summary
          class="
            sidebar-catalog__item-title sidebar-catalog__item-title_designer
          "
        >
          DESIGNER
        </summary>
        <button class="sidebar-catalog__button">Designer-1</button>
        <button class="sidebar-catalog__button">Designer-2</button>
        <button class="sidebar-catalog__button">Designer-3</button>
        <button class="sidebar-catalog__button">Designer-4</button>
        <button class="sidebar-catalog__button">Designer-5</button>
      </details>
    </div>
  </details>
</template>

<script>
export default {
  name: "SidebarCatalog",
};
</script>