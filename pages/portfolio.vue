<template>
  <div class="min-h-screen">
    <BaseHeader :data="header" />
    <div
      class="flex flex-col justify-center items-center min-h-screen text-center"
    >
      <div>This page is under development, Please come back later</div>
    </div>
    <!-- <div
      class="grid grid-cols-2 gap-6 px-6 xl:px-0 py-12 max-w-screen-xl min-h-lg h-full mx-auto"
    >
      <div v-if="image" class="lg:order-last">
        <img :src="image" alt="image" class="w-full" />
      </div>
      <div
        class="prose prose-xl text-gray-600 text-justify"
        v-if="content"
        v-html="content"
      ></div>
    </div> -->

    <BaseHeader :data="clients" />
    <div></div>
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
    const header = { title: 'Portfolio', description: null }
    const clients = { title: 'Clients', description: null }
    return {
      header,
      content,
      image,
      clients,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>