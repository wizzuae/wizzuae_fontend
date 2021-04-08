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
      <div class="md:py-12 max-w-screen-lg min-h-lg h-full mx-auto">
        <!-- <base-content v-if="content" :data="content"></base-content> -->
        <base-contents :data="contents"></base-contents>
      </div>
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
    return { header, content, contents }
  },
}
</script>

<style lang="scss" scoped>
</style>