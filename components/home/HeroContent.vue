<template>
  <div class="relative h-full bgSlider" :style="backgroundStyles">
    <!-- <div
      class="
        absolute
        w-auto
        min-w-full min-h-full
        max-w-none
        video-top-layer-off
        filter
        blur-xl
      "
      :style="imageOverlay"
    ></div> -->

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
          <!-- <button @click="getBgColorFromImage">Click</button> -->
          <h1
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible="{ opacity: 1, y: 0, scale: 1 }"
            :delay="200"
            class="text-3xl lg:text-6xl font-bold mb-3 md:mb-8 uppercase"
          >
            {{ slide.title }}
          </h1>
          <p
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible="{ opacity: 1, y: 0, scale: 1 }"
            :delay="300"
            class="text-opacity-80 md:text-3xl"
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
import FastAverageColor from 'fast-average-color'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
export default {
  props: {
    slide: Object,
  },
  data() {
    return {
      backgroundColor: null,
      gradient: { colorStart: '#ff00', colorEnd: '#ffdd', colorText: '#ffff' },
    }
  },
  created() {
    this.getBgColorFromImage()
  },
  methods: {
    __spreadArray(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i]
      return to
    },
    getBgColorFromImage() {
      const fac = new FastAverageColor()
      const imageUrl = this.slide.backgroundImage
      fac
        .getColorAsync(imageUrl, { mode: 'precision', left: 1000, width: 100 })
        .then((color) => {
          const colorText = color.isDark ? '#fafafa' : '#0074D9'
          let colorEnd = this.__spreadArray(
            this.__spreadArray([], color.value.slice(0, 3)),
            [0]
          ).join(',')

          this.gradient = {
            colorStart: color.rgba,
            colorEnd: `rgba('${colorEnd}')`,
            colorText: colorText,
          }
          // console.log(color)
          return color.rgba
        })
        .catch((e) => {
          console.log(e)
          return null
        })
    },
  },
  computed: {
    backgroundStyles() {
      const breakpoints = useBreakpoints(breakpointsTailwind)
      const smAndLarger = breakpoints.greater('sm')
      const imgUrl = this.$img(
        smAndLarger.value
          ? this.slide.backgroundImage
          : this.slide.backgroundImageMobile,
        { width: '100vw' }
      )
      return {
        backgroundImage: `url('${imgUrl}')`,
        color: this.slide.textColor,
      }
    },
    imageOverlay() {
      return {
        'background-image': `linear-gradient(to right, ${this.gradient.colorStart} 10%,rgba(255, 255, 255, 0) 50%)`,
      }
    },
    imageOverlayBottom() {
      return {
        'background-image': `linear-gradient(to top, ${this.gradient.colorStart} 10%,rgba(255, 255, 255, 0) 50%)`,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.bgSlider {
  background-position: 100% 30%;
  background-repeat: no-repeat;
  background-size: cover;
}
.video-top-layer {
  background-image: linear-gradient(
    to right,
    #1b1b1b,
    rgba(255, 255, 255, 0) 80%
  );
}
</style>
