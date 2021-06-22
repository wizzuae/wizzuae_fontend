<template>
  <div class="relative h-full">
    <div
      class="absolute w-auto min-w-full min-h-full max-w-none video-top-layer"
    ></div>

    <nuxt-img sizes="xs:100vw" :src="slide.backgroundImage"> </nuxt-img>

    <!-- Hero Text -->
    <div class="absolute top-1/2 transform -translate-y-1/2 h-full w-full flex">
      <div class="container my-auto text-left">
        <div class="max-w-screen-md">
          <h1
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible="{ opacity: 1, y: 0, scale: 1 }"
            :delay="200"
            class="
              text-3xl
              lg:text-6xl
              font-bold
              mb-3
              md:mb-8
              bg-neutral
              text-transparent
              bg-clip-text
              uppercase
            "
          >
            {{ slide.title }}
          </h1>
          <p
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible="{ opacity: 1, y: 0, scale: 1 }"
            :delay="300"
            class="tracking-widest text-neutral opacity-90 md:text-3xl"
          >
            {{ slide.description }}
          </p>

          <div
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible="{ opacity: 1, y: 0, scale: 1 }"
            :delay="400"
            class="mt-6"
          >
            <router-link :to="slide.button.url">
              <button
                class="
                  rounded
                  text-neutral
                  font-medium
                  ring-1 ring-secondary
                  bg-primary
                  shadow-2xl
                  hover:shadow-3xl hover:ring-3
                  py-3
                  px-3
                "
              >
                {{ slide.button.title }}
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slide: Object,
  },
}
</script>

<style lang="scss" scoped>
.video-top-layer {
  background-image: linear-gradient(
    to right,
    #0074d9,
    rgba(255, 255, 255, 0) 80%
  );
}
</style>
