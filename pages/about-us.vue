<template>
  <div>
    <BaseHeader :data="about.data.header" />
    <div
      class="grid grid-cols-1 gap-6 px-6 xl:px-0 py-12 max-w-screen-lg min-h-lg h-full mx-auto"
    >
      <base-content :data="about.data.content"></base-content>
    </div>
    <div
      class="bg-fixed"
      :style="`
      backgroundImage: url(${
        clients.data.header.image
          ? clients.data.header.image.s3_url +
            clients.data.header.image.filename_disk
          : ''
      });`"
    >
      <!-- <BaseHeader :data="clients.data.header" /> -->

      <div class="mask-layer lg:py-30 py-18">
        <div
          class="flex flex-col px-6 xl:px-0 text-left w-full text-neutral max-w-screen-lg md:mx-auto"
        >
          <div class="my-auto">
            <h1
              class="text-2xl md:text-3xl lg:text-4xl font-bold uppercase"
              v-if="clients.data.header.title"
            >
              {{ clients.data.header.title }}
            </h1>
            <p
              class="text-md lg:text-xl mt-1 md:mt-3"
              v-if="clients.data.header.description"
            >
              {{ clients.data.header.description }}
            </p>
          </div>
        </div>

        <div
          class="grid grid-cols-2 md:grid-cols-4 justify-center items-center min-h-screen text-center py-12 gap-6 px-6 xl:px-0 max-w-screen-lg mx-auto"
        >
          <div
            class="shadow-md"
            v-for="({ brands_id: { logo } }, i) in clients.data.clients.brands"
            :key="i"
          >
            <img
              class="rounded-xl"
              :src="logo.s3_url + logo.filename_disk"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseContent from '~/components/base/BaseContent.vue'
export default {
  components: { BaseContent },
  async asyncData({ $axios }) {
    const about = await $axios.$get('/about_us/', {
      params: {
        fields: [
          '*.*',
          'header.image.id',
          'header.image.filename_disk',
          'header.image.s3_url',
          'metadata.meta_id.*.*',
        ],
      },
    })
    const clients = await $axios.$get('/clients/', {
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
    const metadata = about.data.metadata
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
    return { about, clients, meta }
  },
  head() {
    return {
      title: 'About Us',
      meta: this.meta,
    }
  },
}
</script>

<style lang="scss" scoped>
.mask-layer {
  background-image: linear-gradient(to right, #1e3a8a, rgba(255, 0, 0, 0));
}
</style>