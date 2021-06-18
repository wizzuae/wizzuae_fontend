<template>
  <div>
    <header class="relative flex overflow-hidden">
      <div>
        <carousel
          :paginationEnabled="true"
          paginationPosition="bottom-overlay"
          class="h-500px md:h-3/1 bg-blue-200"
          :perPage="1"
          :center-mode="true"
        >
          <CarouselSlide
            class="relative bg-yellow-200"
            v-for="(slide, i) in data"
            :key="i"
          >
            <div
              class="
                absolute
                w-auto
                min-w-full min-h-full
                max-w-none
                video-top-layer
              "
            ></div>
            <div class="h-500px xl:h-560px bg-cyan-500">
              <nuxt-img
                sizes="xs:100vw"
                :src="
                  slide.slider_id.image.s3_url +
                  slide.slider_id.image.filename_disk
                "
              >
              </nuxt-img>
            </div>
            <!-- Hero Text -->
            <div
              class="
                absolute
                top-1/2
                left-1/4
                transform
                -translate-x-1/4 -translate-y-1/2
                max-w-screen-md
                lg:my-auto
                text-left
              "
            >
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
                {{ slide.slider_id.title }}
              </h1>
              <p class="tracking-widest text-neutral opacity-90 md:text-3xl">
                {{ slide.slider_id.description }}
              </p>

              <div class="mt-6">
                <router-link :to="slide.slider_id.link.url">
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
                    {{ slide.slider_id.link.title }}
                  </button>
                </router-link>
              </div>
            </div>
          </CarouselSlide>
        </carousel>
      </div>
    </header>
    <div
      class="
        hidden
        relative
        grid
        px-6
        xl:px-0
        lg:grid-cols-2
        py-12
        max-w-screen-xl
        mx-auto
      "
    >
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
      currentPage: 1,
      totalPages: 3,
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
    #0074d9,
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

.carousel {
  width: 100%;
  height: 300px;
}

.slide {
  width: 100%;
  height: 100%;
}
</style>
