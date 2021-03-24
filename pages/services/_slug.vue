<template>
  <div v-if="!$apollo.queries.service.loading">
    <div v-if="service">
      <BaseHeader v-if="service.header" :data="service.header" />
      <!-- <div v-if="$route.params.slug == 'business-setup'">
        <div>
          <img src="" alt="xxz" srcset="" />
          <h1>Mainland</h1>
        </div>
      </div> -->
      <div
        class="grid md:grid-cols-1 bg-neutral -mt-12 shadow-md gap-6 px-6 xl:px-0 py-12 max-w-screen-lg min-h-lg h-full mx-auto"
      >
        <base-content
          v-if="service.content"
          :data="service.content"
        ></base-content>
      </div>
    </div>
    <div class="flex items-center text-center min-h-screen" v-else>
      <div class="w-full">
        Not found, <a href="/" class="text-blue-500">Back</a>
      </div>
    </div>
  </div>
</template>

<script>
import service from '~/apollo/query/service.gql'
import BaseContent from '~/components/base/BaseContent.vue'
import BaseHeader from '~/components/base/BaseHeader.vue'

export default {
  components: { BaseContent, BaseHeader },
  // async asyncData({ params, $strapi, $md }) {
  //   const res = await $strapi.find('services', { slug: params.slug })
  //   const data = res[0]
  //   const header = { title: data.title, description: data.description }
  //   const content = $md.render(data.content)
  //   const api_url = process.env.strapiBaseUri
  //   const image = api_url + data.image.url
  //   return {
  //     content,
  //     header,
  //     image,
  //     //   head: {
  //     //     image: services.cover,
  //     //     title: services.title,
  //     //     description: services.description,
  //     //     keywords: services.keywords,
  //     //   },
  //   }
  // },
  apollo: {
    service: {
      prefetch: true,
      query: service,
      variables() {
        return { slug: this.$route.params.slug }
      },
      update(res) {
        const data = res.items.services[0]
        return {
          header: {
            title: data.title,
            image: data.image,
          },
          slug: data.slug,
          content: data.content,
          category: data.category,
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
</style>