<template>
  <!-- v-if="!$apollo.queries.home.loading" -->
  <div>
    <Hero :data="home.hero" />
    <quick-guide :data="home.quick_guide" />
    <why-choose-us :data="home.why_choose_us" />
    <Government :data="home.govt_agencies" />
    <how-to-get-started :data="home.how_get_started"></how-to-get-started>
  </div>
</template>

<script>
import home from '~/apollo/query/home.gql'
import homeData from '~/apollo/query/home.json'
import Hero from '~/components/home/Hero.vue'
import Government from '~/components/home/Government.vue'
import QuickGuide from '~/components/home/QuickGuide.vue'
import WhyChooseUs from '~/components/home/WhyChooseUs.vue'
import HowToGetStarted from '~/components/home/HowToGetStarted.vue'
export default {
  components: { Hero, Government, QuickGuide, WhyChooseUs, HowToGetStarted },
  name: 'home',
  data() {
    return {
      home: homeData,
    }
  },
  // async asyncData({ $strapi }) {
  // const { hero } = await $strapi.find('homepage')
  // return {
  // hero,
  // }
  // },
  // apollo: {
  //   home: {
  //     prefetch: true,
  //     query: home,
  // variables() {
  //   return { id: 1 }
  // },
  //     update(data) {
  //       const {
  //         // Hero
  //         hero_title,
  //         hero_description,
  //         hero_button,
  //         // Quick Guide
  //         quick_guide_title,
  //         quick_guide_buttons,
  //         // Why choose
  //         why_choose_us_icons,
  //       } = data.items.home
  //       const hero = {
  //         title: hero_title,
  //         description: hero_description,
  //         button: hero_button,
  //       }
  //       const quick_guide = {
  //         title: quick_guide_title,
  //         button: quick_guide_buttons,
  //       }
  //       const why_choose_us = {
  //         icons: why_choose_us_icons,
  //       }
  //       return { hero, quick_guide, why_choose_us }
  //     },
  //   },
  // },
}
</script>

<style>
</style>
