<template>
  <div>
    <BaseHeader :data="data.header" />
    <div
      class="grid grid-cols-1 gap-6 px-6 xl:px-0 py-12 max-w-screen-lg min-h-lg h-full mx-auto"
    >
      <base-content :data="data.content"></base-content>
    </div>
  </div>
</template>

<script>
import BaseContent from '~/components/base/BaseContent.vue'
export default {
  components: { BaseContent },
  async asyncData({ $axios }) {
    let data = await $axios.$get('/about_us/', {
      params: {
        fields: [
          '*.*',
          'header.image.id',
          'header.image.filename_disk',
          'header.image.s3_url',
        ],
      },
    })
    data.data
    return data
  },
  head() {
    return {
      title: 'About Us',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'About Us',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'WIZZ is a team of experts and experienced professionals having spent more than 12 years of fruitful journey in company formation, business setup, licensing, visa processing, and PRO services.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
</style>