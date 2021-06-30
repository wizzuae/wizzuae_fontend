<template>
  <div class="scroll-snap">
    <div class="relative">
      <CoreHeader />
    </div>
    <div>
      <Nuxt />
      <NavbarMobile />
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
}
::-webkit-scrollbar {
  width: 0.7em;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar-thumb {
  @apply bg-primary shadow-2xl rounded-full;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: theme('colors.primary');
}
.scroll-snap {
  scroll-behavior: smooth;
  /* scroll-snap-type: y proximity;
  overflow-y: auto;
  height: 100vh; */
}
.snap-start {
  scroll-snap-align: start;
}
.snap-center {
  scroll-snap-align: center;
  /* height: 100vh; */
}
.snap-end {
  scroll-snap-align: end;
  /* height: 100vh; */
}
</style>
