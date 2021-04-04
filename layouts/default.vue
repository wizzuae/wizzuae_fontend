<template>
  <div>
    <div class="relative">
      <CoreHeader />
      <div>
        <Nuxt />
      </div>
      <NavbarMobile class="fixed w-full text-center z-50 bottom-6" />
    </div>
    <CoreFooter />
  </div>
</template>

<script>
import NavbarMobile from '~/components/core/NavbarMobile.vue'
export default {
  components: { NavbarMobile },
}
</script>

<style>
html {
  /* scroll-snap-type: y proximity; */
  scroll-behavior: smooth;
}
</style>
