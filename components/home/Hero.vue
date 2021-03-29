<template>
  <div>
    <header class="relative flex h-screen overflow-hidden">
      <div
        class="relative z-30 w-auto min-w-full min-h-full max-w-none video-top-layer"
      >
        <div
          class="grid px-6 xl:px-0 lg:grid-cols-2 py-12 max-w-screen-xl min-h-lg h-full mx-auto"
        >
          <div class="lg:my-auto text-left">
            <h1
              class="text-3xl lg:text-6xl font-bold mb-3 md:mb-8 bg-primary text-transparent bg-clip-text uppercase"
            >
              {{ currentSlider.title }}
            </h1>
            <p class="tracking-widest text-cool-gray-800 opacity-90 text-xl">
              {{ currentSlider.description }}
            </p>

            <div class="mt-6">
              <router-link :to="currentSlider.link.url">
                <button
                  class="rounded text-neutral font-medium ring-2 ring-teal-500 bg-primary shadow-2xl hover:shadow-3xl hover:ring-3 py-3 px-3"
                >
                  {{ currentSlider.link.title }}
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute z-10 w-auto min-w-full min-h-full max-w-none">
        <transition-group name="fade" tag="div">
          <div v-for="i in [currentIndex]" :key="i">
            <img
              class="w-full"
              :src="
                currentSlider.image.s3_url + currentSlider.image.filename_disk
              "
            />
          </div>
        </transition-group>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
    },
  },
  data() {
    return {
      timer: null,
      currentIndex: 0,
    }
  },

  mounted: function () {
    this.startSlide()
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 10000)
    },

    next: function () {
      this.currentIndex += 1
    },
    prev: function () {
      this.currentIndex -= 1
    },
  },

  computed: {
    currentSlider: function () {
      return this.data[Math.abs(this.currentIndex) % this.data.length].slider_id
    },
  },
}
</script>

<style lang="scss" scoped>
.video-top-layer {
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0) 80%
  );
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}
</style>
