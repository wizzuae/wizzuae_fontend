<template>
  <div class="flex space-x-6">
    <NavButton v-for="(item, i) in navMenu" :key="i" :data="item" />
  </div>
</template>

<script>
import navMenu from './menu.json'
import NavButton from './Navbar/NavButton.vue'

export default {
  components: {
    NavButton,
  },
  data() {
    return {
      navMenu: navMenu,
    }
  },
}
</script>

<style >
li > ul {
  transform: translatex(100%) scale(0);
}
li:hover > ul {
  transform: translatex(101%) scale(1);
}
li > button svg {
  transform: rotate(-90deg);
}
li:hover > button svg {
  transform: rotate(-270deg);
}

/* Below styles fake what can be achieved with the tailwind config
     you need to add the group-hover variant to scale and define your custom
     min width style.
  	 See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html
  	 for implementation with config file
  */
.group:hover .group-hover\:scale-100 {
  transform: scale(1);
}
.group:hover .group-hover\:-rotate-180 {
  transform: rotate(180deg);
}
.scale-0 {
  transform: scale(0);
}
.min-w-32 {
  min-width: 8rem;
}
</style>