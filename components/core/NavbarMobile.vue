<template>
  <div
    ref="target"
    class="fixed transform left-1/2 text-center -translate-x-1/2 z-50 bottom-6"
  >
    <div
      v-if="isMobileNavOpen"
      v-motion-roll-bottom
      class="
        bg-neutral
        rounded-md
        text-primary
        py-2
        font-normal
        w-72
        max-h-100
        overflow-x-auto
        bg-scroll
        m-auto
        shadow-2xl
        text-left
      "
    >
      <mobile-nav :navigation="navigation"></mobile-nav>
    </div>

    <button
      @click="nav.toggleMobileNav"
      class="
        z-10
        outline-none
        hover:(ring-10
        outline-none)
        bg-neutral
        spring
        ring-5 ring-opacity-30
        rounded-full
        w-10
        h-10
        md:w-14 md:h-14
        m-auto
        shadow-xl
      "
    >
      <span
        v-if="isMobileNavOpen"
        class="text-xs md:text-sm m-auto text-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--mdi mx-auto"
          width="22"
          height="22"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            d="M13.46 12L19 17.54V19h-1.46L12 13.46L6.46 19H5v-1.46L10.54 12L5 6.46V5h1.46L12 10.54L17.54 5H19v1.46L13.46 12z"
            fill="currentColor"
          ></path>
        </svg>
      </span>

      <span
        v-if="!isMobileNavOpen"
        class="text-xs md:text-sm m-auto text-primary"
        >Menu</span
      >
    </button>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'
import MobileNav from './mobile-navigation/MobileNav.vue'
import { mapState, mapActions } from 'pinia'
import { useNavigationStore } from '~/store'
import { onClickOutside } from '@vueuse/core'
export default defineComponent({
  setup() {
    const target = ref(null)
    // Pinia Store
    const nav = useNavigationStore()
    const { navigation, offMobileNav } = nav
    // State
    const isMobileNavOpen = computed(() => nav.isMobileNavOpen)
    // const navigation = nav.navigation

    onClickOutside(target, () => (nav.isMobileNavOpen ? offMobileNav() : ''))

    return { target, isMobileNavOpen, navigation, nav }
  },
  components: { MobileNav },
  watch: {
    // Detect router change
    $route() {
      this.nav.offMobileNav()
    },
  },
})
</script>

<style scoped>
::-webkit-scrollbar {
  width: 0.2em;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar-thumb {
  @apply bg-primary shadow-2xl rounded-full;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: theme('colors.primary');
}
:focus {
  outline: none;
  @apply shadow-inner;
}
.spring {
  animation: spring 6s ease-in-out infinite;
}
.rotate {
  animation: rotate 6s ease-in-out infinite;
  animation-delay: 2s;
}

@keyframes spring {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 16px);
  }
}

@keyframes rotate {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 7px);
  }
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.menu-fade-enter-active {
  transition: all 0.3s ease;
}
.menu-fade-leave-active {
  transition: all 0.3s ease;
}
.menu-fade-enter, .menu-fade-leave-to
/* .menu-fade-leave-active below version 2.1.8 */ {
  transform: translateY(30px);
  opacity: 0;
}
.service-fade-enter-active {
  transition: all 0.3s ease 0.3s;
}
.service-fade-leave-active {
  transition: all 0s ease;
}
.service-fade-enter, .menu-fade-leave-to
/* .menu-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-30px);
  opacity: 0;
}
</style>
