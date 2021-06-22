<template>
  <div class="relative z-50">
    <div
      class="
        bg-neutral
        max-w-screen
        h-10
        border-b-2 border-secondary
        hidden
        lg:block
      "
    >
      <div
        class="
          flex
          gap-6
          items-center
          text-primary
          justify-end
          container
          px-6
          xl:px-0
          mx-auto
        "
      >
        <!-- <a href="https://goo.gl/maps/5LkGfVRQGzMf2A7y8" class="flex gap-2">
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
        </a> -->
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
        <appointment
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible="{ opacity: 1, y: 0, scale: 1 }"
          :hovered="{ scale: 1.1 }"
          :delay="200"
        ></appointment>
      </div>
    </div>
    <div class="py-3 max-w-screen bg-neutral shadow-xl">
      <div class="container items-center flex justify-between">
        <Logo class="w-16 md:w-20 lg:w-28" />
        <DesktopNavBar class="hidden lg:block" />
        <div class="lg:hidden">
          <a
            class="flex gap-2 text-primary opacity-100"
            type="button"
            href="tel:+971 58 555 0070"
          >
            <span
              class="rounded-full absolute border-3 bg-blue-500 animate-ping"
            ></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--ic"
              width="22"
              height="22"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                d="M3 15.46l5.27-.61l2.52 2.52c2.83-1.44 5.15-3.75 6.59-6.59l-2.53-2.53l.61-5.25h5.51C21.55 13.18 13.18 21.55 3 20.97v-5.51z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
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
</script>
,

<style lang="scss" scoped></style>
