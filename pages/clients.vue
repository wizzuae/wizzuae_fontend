<template>
  <div class="min-h-screen">
    <BaseHeader :data="data.header" />
    <div
      class="
        grid grid-cols-2
        md:grid-cols-4
        justify-center
        items-center
        min-h-screen
        text-center
        py-12
        gap-6
        px-6
        xl:px-0
        max-w-screen-lg
        mx-auto
      "
    >
      <div
        class="shadow-md"
        v-for="({ brands_id: { logo } }, i) in data.clients.brands"
        :key="i"
      >
        <img v-if="logo" :src="logo.s3_url + logo.filename_disk" alt="logo" />
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
  async asyncData({ $axios }) {
    let data = await $axios.$get('/clients/', {
      params: {
        fields: [
          '*.*',
          'header.image.id',
          'header.image.filename_disk',
          'header.image.s3_url',
          'clients.brands.brands_id.*.*',
        ],
      },
    })
    data.data
    return data
  },
}
</script>

<style lang="scss" scoped></style>
