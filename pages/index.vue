<template>
  <div>
    <Hero v-if="hero" :data="hero" class="section" />
    <div class="section" v-for="({ item }, i) in components" :key="i">
      <quick-guide v-if="item.slug === 'quick-guide'" :data="item.content" />
      <why-choose-us
        v-if="item.slug === 'why-choose-us'"
        :data="item.content"
      />
      <Government
        v-if="item.slug === 'government-agencies'"
        :data="item.content"
      />
      <how-to-get-started
        v-if="item.slug === 'how-to-get-started'"
        :data="item.content"
      ></how-to-get-started>

      <join-our-team
        v-if="item.slug === 'join-our-team'"
        :data="item.content"
      ></join-our-team>
    </div>
  </div>
</template>

<script>
import Hero from '~/components/home/Hero.vue'
import Government from '~/components/home/Government.vue'
import QuickGuide from '~/components/home/QuickGuide.vue'
import WhyChooseUs from '~/components/home/WhyChooseUs.vue'
import HowToGetStarted from '~/components/home/HowToGetStarted.vue'
import JoinOurTeam from '~/components/home/JoinOurTeam.vue'
export default {
  components: {
    Hero,
    Government,
    QuickGuide,
    WhyChooseUs,
    HowToGetStarted,
    JoinOurTeam,
  },
  name: 'home',
  async asyncData({ $axios }) {
    const data = await $axios.$get('/home', {
      params: {
        fields: [
          'hero.slider_id.*.*',
          'metadata.meta_id.*.*',
          'components.item:sections.slug',
          'components.item:sections.content.collection',
          'components.item:sections.content.item:header.title',
          'components.item:sections.content.item:header.description',
          'components.item:sections.content.item:header.image.id',
          'components.item:sections.content.item:header.image.s3_url',
          'components.item:sections.content.item:header.image.filename_disk',
          'components.item:sections.content.item:header.video.id',
          'components.item:sections.content.item:header.video.s3_url',
          'components.item:sections.content.item:header.video.filename_disk',
          'components.item:sections.content.item:links.title',
          'components.item:sections.content.item:links.url',
          'components.item:sections.content.item:multi_brands.brands.brands_id.logo.id',
          'components.item:sections.content.item:multi_brands.brands.brands_id.logo.s3_url',
          'components.item:sections.content.item:multi_brands.brands.brands_id.logo.filename_disk',
          'components.item:sections.content.item:multi_links.links.links_id.title',
          'components.item:sections.content.item:multi_links.links.links_id.url',
          'components.item:sections.content.item:multi_cards.cards.cards_id.title',
          'components.item:sections.content.item:multi_cards.cards.cards_id.description',
          'components.item:sections.content.item:multi_cards.cards.cards_id.icon.title',
          'components.item:sections.content.item:multi_cards.cards.cards_id.icon.icon',
          'components.item:sections.content.item:multi_cards.cards.cards_id.icon.image.id',
          'components.item:sections.content.item:multi_cards.cards.cards_id.icon.image.s3_url',
          'components.item:sections.content.item:multi_cards.cards.cards_id.icon.image.filename_disk',
          'components.item:sections.content.item:multi_cards.cards.cards_id.button.title',
          'components.item:sections.content.item:multi_cards.cards.cards_id.button.url',
          'components.item:sections.content.item:multi_icons.icons.icons_id.title',
          'components.item:sections.content.item:multi_icons.icons.icons_id.image.id',
          'components.item:sections.content.item:multi_icons.icons.icons_id.image.s3_url',
          'components.item:sections.content.item:multi_icons.icons.icons_id.image.filename_disk',
        ],
      },
    })

    const metadata = data.data.metadata

    let i = 0
    let len = metadata.length
    let meta = []

    for (i; i < len; i++) {
      meta.push({
        hid: metadata[i].meta_id.name,
        name: metadata[i].meta_id.name,
        content: metadata[i].meta_id.content,
      })
    }

    const components = data.data.components
    const hero = data.data.hero
    return { hero, components, meta }
  },
  head() {
    return {
      title: 'Home',
      meta: this.meta,
    }
  },
}
</script>

<style>
.main-title {
  @appy bg-primary text-transparent bg-clip-text;
}

.section {
  /* scroll-snap-align: center; */
}
</style>
