<template>
  <div class="slide">
    <button class="slide__angle slide__angle_left">
      <i class="fas fa-angle-left"></i>
    </button>
    <picture>
      <source
        media="(max-width: 787px)"
        srcset="img/slide_img_mob.webp"
        type="image/webp"
      />
      <source media="(max-width: 787px)" srcset="img/slide_img_mob.jpg" />
      <source
        media="(max-width: 1192px)"
        srcset="img/slide_img_tab.webp"
        type="image/webp"
      />
      <source media="(max-width: 1192px)" srcset="img/slide_img_tab.jpg" />
      <source srcset="img/slide_img.webp" type="image/webp" />
      <img class="slide__img" src="img/slide_img.jpg" alt="product" />
    </picture>
    <button class="slide__angle slide__angle_right">
      <i class="fas fa-angle-right"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "ProductSlide",
};
</script>