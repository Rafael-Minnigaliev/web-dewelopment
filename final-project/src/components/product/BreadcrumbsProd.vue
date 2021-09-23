<template>
  <section class="breadcrumbs center">
    <h1 class="breadcrumbs__title">PRODUCT</h1>
    <section class="breadcrumbs__items">
      <h2 class="hidden">breadcrumbs</h2>
      <router-link to="/" class="breadcrumbs__link">HOME /</router-link>
      <a class="breadcrumbs__link" href="#">MEN /</a>
      <router-link
        class="breadcrumbs__link breadcrumbs__link_new-arrivals"
        to="/catalog"
        >NEW ARRIVALS</router-link
      >
    </section>
  </section>
</template>

<script>
export default {
  name: "BreadcrumbsProd",
};
</script>