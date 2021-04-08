<template>
  <div>
    <BaseHeader :data="data.header" />
    <div
      class="grid md:grid-cols-2 gap-6 px-6 xl:px-0 py-12 max-w-screen-lg min-h-lg h-full mx-auto"
    >
      <!-- <div v-if="image">
        <img :src="image" alt="image" class="w-full" />
      </div> -->
      <base-content :data="data.content"></base-content>
      <div>
        <careers-form></careers-form>
      </div>
    </div>
  </div>
</template>

<script>
import CareersForm from '~/components/forms/CareersForm.vue'
export default {
  components: { CareersForm },
  async asyncData({ $axios }) {
    const { data } = await $axios.$get('/careers/', {
      params: {
        fields: [
          '*.*',
          'metadata.meta_id.*.*',
          'header.image.id',
          'header.image.filename_disk',
          'header.image.s3_url',
        ],
      },
    })
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
    return { data, meta }
  },
  head() {
    return {
      title: 'Careers',
      meta: this.meta,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>