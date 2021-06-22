<template>
  <div
    :style="`
      backgroundImage: url(${
        data.image ? data.image.s3_url + data.image.filename_disk : ''
      });`"
    class="shadow-inner aspect-w-4 aspect-h-2 md:aspect-h-1 bg-cover"
  >
    <div class="mask-layer flex h-full">
      <div
        class="
          flex flex-col
          px-6
          xl:px-0
          text-left
          w-full
          text-neutral
          max-w-screen-lg
          md:mx-auto
        "
      >
        <div class="my-auto">
          <h1
            class="text-2xl md:text-3xl lg:text-4xl font-bold uppercase"
            v-if="data.title"
          >
            {{ data.title }}
          </h1>
          <p class="text-md lg:text-xl mt-1 md:mt-3" v-if="data.description">
            {{ data.description }}
          </p>
        </div>
      </div>

      <!-- <div class="flex justify-end"> -->
      <!-- <img
          src="~/static/about-us.jpg"
          class="shadow-xl aspect-h-4"
          alt="header image"
        /> -->
      <!-- src="data.image.s3_url + data.image.filename_disk" -->
      <!-- </div> -->
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

<style scoped>
.mask-layer {
  background-image: linear-gradient(to right, #0074d9, rgba(255, 0, 0, 0));
}
</style>
