<template>
  <div>
    <Hero :data="hero" />
    <quick-guide />
    <why-choose-us />
    <Government />
    <how-to-get-started></how-to-get-started>
  </div>
</template>

<script>
import Hero from '~/components/home/Hero.vue'
import Government from '~/components/home/Government.vue'
import QuickGuide from '~/components/home/QuickGuide.vue'
import WhyChooseUs from '~/components/home/WhyChooseUs.vue'
import HowToGetStarted from '~/components/home/HowToGetStarted.vue'
export default {
  components: { Hero, Government, QuickGuide, WhyChooseUs, HowToGetStarted },
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
