<template>
  <div>
    <BreadcrumbsReg />
    <main>
      <RegForm />
    </main>
  </div>
</template>

<script>
import BreadcrumbsReg from "@/components/registration/BreadcrumbsReg.vue";
import RegForm from "@/components/registration/RegForm.vue";

export default {
  name: "Registration",
  components: {
    BreadcrumbsReg,
    RegForm,
  },
};
</script>