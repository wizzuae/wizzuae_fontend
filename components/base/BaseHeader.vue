<template>
  <div
    :style="`
      backgroundImage: url(${
        data.image
          ? data.image.s3_url + data.image.filename_disk
          : 'https://wallpaperaccess.com/full/4318140.jpg'
      });`"
    class="h-50 md:h-90 bg-cover bg-fixed flex items-center"
  >
    <div
      class="w-full px-6 xl:px-0 text-left text-primary max-w-screen-lg mx-auto"
    >
      <h1 class="text-3xl font-bold uppercase" v-if="data.title">
        {{ data.title }}
      </h1>
      <p v-if="data.description">{{ data.description }}</p>
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