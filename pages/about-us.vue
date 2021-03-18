<template>
  <div>
    <BaseHeader :data="header" />
    <div
      class="grid grid-cols-1 gap-6 px-6 xl:px-0 py-12 max-w-screen-lg min-h-lg h-full mx-auto"
    >
      <div v-if="image">
        <img :src="image" class="" alt="image" />
      </div>
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
  async asyncData({ $strapi, $md }) {
    const data = await $strapi.find('about-us')
    const content = $md.render(data.content)
    const api_url = process.env.strapiBaseUri
    const image = api_url + data.image.url
    // Hardcoded Header for About us
    const header = { title: 'About us', description: null }
    return {
      header,
      content,
      image,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>