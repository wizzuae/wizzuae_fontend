<template>
  <div>
    <BaseHeader v-if="header" :data="header" />
    <div class="md:py-12 max-w-screen-lg min-h-lg h-full mx-auto">
      <base-content v-if="content" :data="content"></base-content>
      <base-contents :data="contents"></base-contents>
    </div>
  </div>
</template>

<script>
import BaseContent from '~/components/base/BaseContent.vue'
import BaseContents from '~/components/base/BaseContents.vue'
import BaseHeader from '~/components/base/BaseHeader.vue'

export default {
  components: { BaseContent, BaseHeader, BaseContents },
  async asyncData({ $axios, params }) {
    let data = await $axios.$get('/services/', {
      params: {
        filter: { slug: { _eq: params.slug } },
        fields: [
          '*.*',
          'metadata.meta_id.*.*',
          'contents.row_id.*',
          'contents.row_id.items.collection',
          'contents.row_id.items.item.*.*',
        ],
      },
    })
    data = data.data[0]
    const header = {
      title: data.title,
      image: data.image,
    }
    const content = data.content
    const contents = data.contents

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
    return { header, meta, content, contents }
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