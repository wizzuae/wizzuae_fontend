<template>
  <div class="min-h-screen">
    <BaseHeader :data="header" />
    <div
      class="grid grid-cols-2 md:grid-cols-4 justify-center items-center min-h-screen text-center py-12 gap-6 px-6 xl:px-0 max-w-screen-lg mx-auto"
    >
      <div v-for="(logo, i) in clientsLogo" :key="i">
        <img :src="logo" alt="logo" />
      </div>
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
    const header = { title: 'Clients', description: null }
    const clientsLogo = [
      'our-clients/1.jpg',
      'our-clients/2.png',
      'our-clients/3.jpg',
      'our-clients/4.png',
      'our-clients/5.jpg',
      'our-clients/6.jpg',
      'our-clients/7.jpg',
      'our-clients/8.jpg',
    ]
    return {
      header,
      content,
      image,
      clientsLogo,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>