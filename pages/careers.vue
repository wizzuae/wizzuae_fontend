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
    let data = await $axios.$get('/careers/', {
      params: {
        fields: [
          '*.*',
          'header.image.id',
          'header.image.filename_disk',
          'header.image.s3_url',
        ],
      },
    })
    data.data
    return data
  },
}
</script>

<style lang="scss" scoped>
</style>