<template>
  <div>
    <div
      v-if="menu"
      class="bg-neutral rounded-md text-primary py-2 font-bold w-50 m-auto"
    >
      <nav
        class="flex flex-col text-xl text-center divide-y-1 px-3 align-middle divide-secondary"
      >
        <router-link class="icon-btn py-2" to="/"> Home </router-link>
        <router-link class="icon-btn py-2" to="/about-us"> About </router-link>
        <router-link class="icon-btn py-2" to="/services">
          Services
        </router-link>
        <router-link class="icon-btn py-2" to="/contact-us">
          Contacts
        </router-link>
      </nav>
    </div>
    <button
      @click="menu = !menu"
      class="bg-gradient-to-br z-10 from-cool-gray-800 to-cool-gray-700 spring ring-2 ring-primary ring-opacity-30 rounded-full w-14 h-14 m-auto shadow-xl"
    >
      <span class="text-sm rotate m-auto text-primary">Menu</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
    }
  },
}
</script>

<style scoped>
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
</style>
