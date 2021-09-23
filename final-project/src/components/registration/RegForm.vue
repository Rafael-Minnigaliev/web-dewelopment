<template>
  <section class="registration center">
    <h2 class="hidden">login</h2>
    <Login />
    <Loyalty />
  </section>
</template>

<script>
import Login from "@/components/registration/Login.vue";
import Loyalty from "@/components/registration/Loyalty.vue";

export default {
  name: "RegForm",
  components: {
    Login,
    Loyalty,
  },
};
</script>