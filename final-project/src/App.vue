<template>
  <div>
    <Header />
    <router-view />
    <Feedback />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Feedback from "@/components/Feedback.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Feedback,
    Footer,
  },
  mounted() {
    this.$store.dispatch("loadCatalog");
    this.$store.dispatch("loadCart");
  },
};
</script>


 
