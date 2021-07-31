<template>
  <section class="pagin">
    <h3 class="hidden">pagination</h3>
    <ul class="pagination">
      <li class="pagination__link">
        <button class="pagination__button">
          <img src="img/pagination_left.svg" alt="" />
        </button>
      </li>

      <li class="pagination__link pagination__link_margin">
        <button class="pagination__button pagination__button_selected-page">
          1
        </button>
      </li>
      <li class="pagination__link pagination__link_margin">
        <button class="pagination__button">2</button>
      </li>
      <li class="pagination__link pagination__link_margin">
        <button class="pagination__button">3</button>
      </li>
      <li class="pagination__link pagination__link_margin">
        <button class="pagination__button">4</button>
      </li>
      <li class="pagination__link pagination__link_margin">
        <button class="pagination__button">5</button>
      </li>
      <li class="pagination__link pagination__link_margin">
        <button class="pagination__button">6</button>
      </li>
      <li class="pagination__link">
        <button class="pagination__button pagination__button_ellipsis">
          .....
        </button>
      </li>
      <li class="pagination__link">
        <button class="pagination__button">20</button>
      </li>
      <li class="pagination__link pagination__link_margin">
        <button class="pagination__button">
          <img src="img/pagination_right.svg" alt="" />
        </button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Pagination",
};
</script>