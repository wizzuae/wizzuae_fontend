<template>
  <div>
    <BaseHeader :data="header" />
    <div
      class="grid grid-cols-1 gap-6 px-6 xl:px-0 py-12 max-w-screen-lg min-h-lg h-full mx-auto"
    >
      <!-- <div v-if="image">
        <img :src="image" alt="image" class="w-full" />
      </div> -->
      <div
        class="prose prose-xl mt-12 text-gray-600 mx-auto text-justify"
        v-if="content"
        v-html="content"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $strapi, $md }) {
    const res = await $strapi.find('service-categories', { slug: params.slug })
    const data = res[0]
    const header = { title: data.title, description: data.description }
    const content = $md.render(data.content)
    const api_url = process.env.strapiBaseUri
    const image = api_url + data.image.url
    return {
      content,
      header,
      image,
      // Head
      //   head: {
      //     image: services.cover,
      //     title: services.title,
      //     description: services.description,
      //     keywords: services.keywords,
      //   },
    }
  },
}
</script>

<style lang="scss" scoped>
</style>