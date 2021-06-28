<template>
  <div>
    <header class="relative flex overflow-hidden">
      <carousel
        loop
        autoplay
        :autoplayTimeout="4000"
        paginationPosition="bottom-overlay"
        class="w-full"
        :perPage="1"
        :center-mode="true"
      >
        <CarouselSlide
          class="h-600px md:h-541px"
          v-for="(slide, i) in data"
          :key="i"
        >
          <hero-content :slide="slide"></hero-content>
        </CarouselSlide>
      </carousel>
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
import HeroContent from './HeroContent.vue'
// import FadeTransition from '~/components/transitions/FadeTransition.vue'

export default {
  components: { FreeConsultation, HeroContent },
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
