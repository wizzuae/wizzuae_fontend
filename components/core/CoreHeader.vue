<template>
  <div class="relative z-50">
    <div class="bg-secondary max-w-screen h-8 hidden md:block">
      <div
        class="flex gap-6 items-center text-primary justify-end max-w-screen-xl px-6 xl:px-0 mx-auto"
      >
        <a href="https://goo.gl/maps/5LkGfVRQGzMf2A7y8" class="flex gap-2">
          <svg
            class="h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span> #2307, Arenco Tower, Sheikh Zayed Road, Dubai, UAE</span>
        </a>
        <a href="mailto:info@wizzuae.ae" class="flex gap-2">
          <svg
            class="h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
              clip-rule="evenodd"
            />
          </svg>
          <span>info@wizzuae.ae</span>
        </a>
        <a class="flex gap-2" type="button" href="tel:+971 58 555 0070">
          <svg
            class="h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span>+971 58 555 0070</span>
        </a>
        <appointment></appointment>
      </div>
    </div>
    <div class="py-3 bg-primary max-w-screen">
      <div
        class="max-w-screen-xl px-6 xl:px-0 items-center flex justify-between mx-auto"
      >
        <Logo class="w-16 md:w-32" />
        <DesktopNavBar class="hidden md:block" />
        <!-- <div class="md:hidden">
          <appointment></appointment>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Appointment from '../forms/Appointment.vue'
import DesktopNavBar from './DesktopNavBar.vue'
import Logo from './Logo.vue'
export default {
  components: {
    Appointment,
    DesktopNavBar,
    Logo,
  },
}
</script>,
    

<style lang="scss" scoped>
</style>