<template>
  <main>
    <Promo />
    <Category />
    <Showcase />
    <Advantage />
  </main>
</template>

<script>
import Promo from "@/components/home/Promo.vue";
import Category from "@/components/home/Category.vue";
import Showcase from "@/components/home/Showcase.vue";
import Advantage from "@/components/home/Advantage.vue";

export default {
  name: "Home",
  components: {
    Promo,
    Category,
    Showcase,
    Advantage,
  },
};
</script>
