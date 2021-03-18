<template>
  <div>
    <BaseHeader :data="header" />
    <div
      class="grid grid-cols-2 gap-6 px-6 xl:px-0 py-12 max-w-screen-lg min-h-lg h-full mx-auto"
    >
      <div v-if="image" class="lg:order-last">
        <img :src="image" alt="image" class="w-full" />
      </div>
      <div>
        <div
          class="prose prose-xl text-gray-600 text-justify"
          v-if="content"
          v-html="content"
        ></div>
        <careers-form></careers-form>
      </div>
    </div>
  </div>
</template>

<script>
import CareersForm from '~/components/forms/CareersForm.vue'
export default {
  components: { CareersForm },
  async asyncData({ $strapi, $md }) {
    const data = await $strapi.find('careers')
    const content = $md.render(data.content)
    const api_url = process.env.strapiBaseUri
    const image = api_url + data.image.url
    // Hardcoded Header for About us
    const header = { title: 'Careers', description: null }
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