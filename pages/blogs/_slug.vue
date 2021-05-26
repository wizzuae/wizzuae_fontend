<template>
  <div>
    <BaseHeader v-if="header" :data="header" />
    <div class="md:py-12 max-w-screen-lg min-h-lg h-full mx-auto">
      <base-content
        class="px-6 xl:px-0"
        v-if="content"
        :data="content"
      ></base-content>
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
    let data = await $axios.$get('/articles/', {
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

    // Meta Method 1

    // const metadata = data.metadata
    // let i = 0
    // let len = metadata.length
    // let meta = []

    // for (i; i < len; i++) {
    //   meta.push({
    //     hid: metadata[i].meta_id.name,
    //     name: metadata[i].meta_id.name,
    //     content: metadata[i].meta_id.content,
    //   })
    // }

    // Meta Method 2
    let meta = [
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: data.title,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: data.description,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: data.image.s3_url + data.image.filename_disk,
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: data.title,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: data.title,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: data.description,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: data.image.s3_url + data.image.filename_disk,
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: data.image.s3_url + data.image.filename_disk,
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: data.title,
      },
    ]
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