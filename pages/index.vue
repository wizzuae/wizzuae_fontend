<template>
  <div>
    <Hero v-if="home.hero" :data="home.hero" class="" />
    <!-- <QuickGuideV2 /> -->
    <quick-guide :data="home.components.quickGuide" class="" />
    <why-choose-us :data="home.components.whyChooseUs" class="" />
    <how-to-get-started :data="home.components.howToGetStarted" class="" />
    <Government :data="home.components.governmentAgencies" class="" />
    <join-our-team :data="home.components.joinOurTeam" class=""></join-our-team>
  </div>
</template>

<script>
import Hero from '~/components/home/Hero.vue'
import Government from '~/components/home/Government.vue'
import QuickGuide from '~/components/home/QuickGuide.vue'
import WhyChooseUs from '~/components/home/WhyChooseUs.vue'
import HowToGetStarted from '~/components/home/HowToGetStarted.vue'
import JoinOurTeam from '~/components/home/JoinOurTeam.vue'
import { useGlobalStore, useHomeStore } from '~/store'
import fields from '~/api/home'
import QuickGuideV2 from '~/components/home/v2/QuickGuideV2.vue'
export default {
  components: {
    Hero,
    Government,
    QuickGuide,
    WhyChooseUs,
    HowToGetStarted,
    JoinOurTeam,
    QuickGuideV2,
  },
  name: 'home',
  async asyncData({ $axios, pinia }) {
    const data = await $axios.$get('/home', {
      params: {
        fields: fields, // Directus array fields imported from ./api/home.js
      },
    })

    const metadata = data.data.metadata
    const components = data.data.components
    const hero = data.data.hero

    // Pinia Stores
    const global = useGlobalStore(pinia)
    const home = useHomeStore(pinia)
    // Pinia Actions
    // home.setHomeHeroState(hero)
    global.setMetadata(metadata)
    home.setComponents(components)

    return { global, home }
  },
  head() {
    return {
      title: 'Home',
      meta: global.metadata, // Meta data from Pinia Global State
    }
  },
}
</script>

<style>
.main-title {
  @appy bg-primary text-transparent bg-clip-text;
}
</style>
