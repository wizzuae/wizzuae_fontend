<template>
  <div>
    <Hero :data="hero" />
    <Government />
  </div>
</template>

<script>
import Hero from '~/components/home/Hero.vue'
import Government from '~/components/home/Government.vue'
export default {
  components: { Hero, Government },
  name: 'home',
  async asyncData({ $strapi }) {
    const { hero } = await $strapi.find('homepage')
    return {
      hero,
    }
  },
}
</script>

<style>
</style>
