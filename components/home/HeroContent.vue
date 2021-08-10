<template>
  <div class="relative h-full bgSlider" :style="backgroundStyles">
    <!-- Hero Text -->
    <div
      class="
        absolute
        transform
        top-1/6
        md:top-1/2 md:-translate-y-1/2
        h-full
        w-full
        flex
      "
    >
      <div class="container my-auto text-left">
        <div class="max-w-screen-md">
          <h1
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :delay="200"
            class="text-3xl lg:text-6xl font-bold mb-3 md:mb-8 uppercase"
          >
            {{ slide.title }}
          </h1>
          <p
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :delay="300"
            class="text-opacity-80 md:text-3xl"
          >
            {{ slide.description }}
          </p>

          <div
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :delay="400"
            class="mt-6"
          >
            <router-link :to="slide.button.url">
              <button
                class="
                  rounded
                  font-medium
                  ring-1
                  shadow-2xl
                  ring-white
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
import { defineComponent, computed, useContext } from '@nuxtjs/composition-api'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
export default defineComponent({
  props: {
    slide: Object,
  },
  setup(props) {
    const { $img } = useContext()

    const backgroundStyles = computed(() => {
      const breakpoints = useBreakpoints(breakpointsTailwind)
      const smAndLarger = breakpoints.greater('sm')
      const imgUrl = $img(
        smAndLarger.value
          ? props.slide.backgroundImage
          : props.slide.backgroundImageMobile,
        { width: '100vw' }
      )
      return {
        backgroundImage: `url('${imgUrl}')`,
        color: props.slide.textColor,
      }
    })
    return { backgroundStyles }
  },
})
</script>

<style lang="scss" scoped>
.bgSlider {
  // background-position: 100% 30%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
