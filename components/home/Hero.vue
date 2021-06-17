<template>
  <div>
    <header class="relative flex h-screen overflow-hidden">
      <div class="z-30 w-auto min-w-full min-h-full max-w-none video-top-layer">
        <div
          class="
            relative
            grid
            px-6
            xl:px-0
            lg:grid-cols-2
            py-12
            max-w-screen-xl
            min-h-lg
            h-full
            mx-auto
          "
        >
          <!-- Hero Text -->
          <div class="lg:my-auto text-left">
            <h1
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
              {{ currentSlider.title }}
            </h1>
            <p class="tracking-widest text-neutral opacity-90 text-3xl">
              {{ currentSlider.description }}
            </p>

            <div class="mt-6">
              <router-link :to="currentSlider.link.url">
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
                  {{ currentSlider.link.title }}
                </button>
              </router-link>
            </div>
          </div>
          <!-- Form Start -->
          <transition name="slide-fade">
            <div v-if="consultation">
              <free-consultation></free-consultation>
            </div>
          </transition>
          <button
            @click="consultation = !consultation"
            class="
              hidden
              lg:flex
              absolute
              ring-3 ring-neutral
              self-center
              top-0
              right-0
              transform
              bg-primary
              py-3
              px-5
              text-neutral text-xl
              rounded-b-2xl
            "
          >
            Get a Free Consultation
          </button>
        </div>
      </div>
      <div
        class="
          absolute
          z-10
          w-auto
          min-w-full min-h-full
          max-w-none
          shadow-inner shadow-2xl
        "
      >
        <!-- <fade-transition mode="out-in"> -->
        <div v-for="(item, i) in data" :key="i">
          <img
            class="
              w-auto
              lg:w-full
              transition
              duration-500
              h-screen
              ease-in-out
            "
            :src="
              currentSlider.image.s3_url + currentSlider.image.filename_disk
            "
          />
        </div>
        <!-- </fade-transition> -->
      </div>
    </header>
  </div>
</template>

<script>
import FreeConsultation from '../forms/FreeConsultation.vue'
// import FadeTransition from '~/components/transitions/FadeTransition.vue'

export default {
  components: { FreeConsultation },
  name: 'Hero',
  // components: {
  // Flicking,
  // FadeTransition,
  // },
  props: {
    data: {
      type: Array,
    },
  },
  data() {
    return {
      timer: null,
      currentIndex: 0,
      consultation: false,
    }
  },

  mounted: function () {
    this.startSlide()
  },

  methods: {
    onMoveEnd() {
      alert('ss')
      this.$refs.flicking.next()
    },
    startSlide: function () {
      this.timer = setInterval(this.next, 5000)
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

<style lang="scss">
.video-top-layer {
  background-image: linear-gradient(
    to right,
    #62c2ff,
    rgba(255, 255, 255, 0) 80%
  );
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .menu-fade-leave-active below version 2.1.8 */ {
  transform: translateX(50px);
  opacity: 0;
}
</style>
