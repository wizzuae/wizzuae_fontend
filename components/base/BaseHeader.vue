<template>
  <div
    class="bg-gradient-to-r from-gray-900 via-primary to-blue-900 shadow-inner bg-cover"
  >
    <!-- :style="`
      backgroundImage: url(${
        data.image
          ? data.image.s3_url + data.image.filename_disk
          : 'https://wallpaperaccess.com/full/4318140.jpg'
      });`" -->
    <div class="grid md:grid-cols-2">
      <div
        class="flex flex-col px-6 min-h-20 xl:px-0 text-left text-neutral max-w-screen-lg md:mx-auto"
      >
        <div class="my-auto">
          <h1
            class="md:text-3xl lg:text-4xl font-bold uppercase"
            v-if="data.title"
          >
            {{ data.title }}
          </h1>
          <p class="lg:text-xl mt-3" v-if="data.description">
            {{ data.description }}
          </p>
        </div>
      </div>
      <div class="flex justify-end">
        <img
          class="shadow-xl aspect-h-4"
          :src="data.image.s3_url + data.image.filename_disk"
          alt="header image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
}
</script>

<style lang="scss" scoped>
</style>