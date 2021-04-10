<template>
  <div>
    <div>
      <BaseHeader v-if="header" :data="header" />
      <!-- <div v-if="$route.params.slug == 'business-setup'">
        <div>
          <img src="" alt="xxz" srcset="" />
          <h1>Mainland</h1>
        </div>
      </div> -->
      <div
        class="grid md:grid-cols-1 bg-neutral shadow-sm gap-6 px-6 xl:px-0 md:py-12 max-w-screen-lg min-h-lg h-full mx-auto"
      >
        <base-content v-if="content" :data="content"></base-content>
      </div>
    </div>
  </div>
</template>

<script>
import BaseContent from '~/components/base/BaseContent.vue'
import BaseHeader from '~/components/base/BaseHeader.vue'

export default {
  components: { BaseContent, BaseHeader },
  async asyncData({ $axios, params }) {
    let data = await $axios.$get('/services/', {
      params: {
        filter: { slug: { _eq: params.slug } },
        fields: ['*.*', 'metadata.meta_id.*.*'],
      },
    })
    data = data.data[0]
    const header = {
      title: data.title,
      image: data.image,
    }
    const content = data.content

    const metadata = data.metadata
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
    return { header, content, meta }
  },
  head() {
    return {
      title: this.header.title,
      meta: this.meta,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>