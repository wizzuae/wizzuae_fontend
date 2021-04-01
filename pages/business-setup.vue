<template>
  <div>
    <BaseHeader v-if="header" :data="header" />

    <div class="grid lg:grid-cols-3 max-w-screen-lg mx-auto gap-5 py-12 px-6">
      <div
        class="w-full rounded-2xl shadow-lg p-3"
        v-for="(item, i) in cards"
        :key="i"
      >
        <a :href="item.link">
          <img
            class="bg-clip-padding rounded-xl w-full"
            :src="item.image"
            alt=""
          />
          <div class="pt-4 text-center">
            <h1 class="font-semibold md:text-2xl text-primary">
              {{ item.title }}
            </h1>
          </div>
        </a>
      </div>
    </div>
    <div
      class="grid md:grid-cols-1 bg-neutral shadow-md gap-6 px-6 xl:px-0 md:py-12 max-w-screen-lg min-h-lg h-full mx-auto"
    >
      <base-content v-if="content" :data="content"></base-content>
    </div>
  </div>
</template>

<script>
import BaseContent from '~/components/base/BaseContent.vue'
import BaseHeader from '~/components/base/BaseHeader.vue'
export default {
  components: { BaseContent, BaseHeader },
  async asyncData({ $axios }) {
    let data = await $axios.$get('/services/', {
      params: {
        filter: { slug: { _eq: 'business-setup' } },
        fields: ['*.*'],
      },
    })
    data = data.data[0]
    const header = {
      title: data.title,
      image: data.image,
    }
    const content = data.content
    return { header, content }
  },
  data() {
    return {
      cards: [
        {
          title: 'MAINLAND COMPANIES',
          image:
            'https://wizzuae.s3.us-west-000.backblazeb2.com/b2941dc2-977d-4a08-b55f-28aef34b15ab.jpeg',
          link: '/services/mainland-companies',
        },
        {
          title: 'FREE ZONE COMPANIES',
          image:
            'https://wizzuae.s3.us-west-000.backblazeb2.com/2fe312d8-5ba0-4a51-825e-4ae0bcbffeb8.gif',
          link: '/services/free-zone-companies',
        },
        {
          title: 'OFFSHORE COMPANIES',
          image:
            'https://wizzuae.s3.us-west-000.backblazeb2.com/3bb233b9-1530-428a-873e-a8caafce768f.jpeg',
          link: '/services/offshore-companies',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
</style>