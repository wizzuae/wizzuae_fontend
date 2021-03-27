<template>
  <div>
    <div
      v-if="service"
      class="bg-primary rounded-md text-secondary py-2 w-50 m-auto"
    >
      <nav
        class="flex capitalize flex-col text-md text-center divide-y-1 px-3 align-middle divide-secondary"
      >
        <router-link class="icon-btn py-2" to="/services/business-setup">
          Business Setup
        </router-link>
        <router-link class="icon-btn py-2" to="/services/pro-and-visa-services"
          >Pro & VISA Services
        </router-link>
        <router-link class="icon-btn py-2" to="/services/registration-services"
          >Registration Services
        </router-link>
        <router-link class="icon-btn py-2" to="/services/financial-services"
          >Financial Services</router-link
        >
      </nav>
    </div>
    <div
      v-if="menu"
      class="bg-primary rounded-md text-secondary py-2 font-bold w-50 m-auto"
    >
      <div
        class="flex flex-col text-md text-center divide-y-1 px-3 align-middle divide-secondary"
      >
        <button class="py-2" @click="$router.replace('/')">Home</button>
        <button class="py-2" @click="setServices">Services</button>
        <button class="py-2" @click="$router.replace('/about-us')">
          About us
        </button>
        <button class="py-2" @click="$router.replace('/clients')">
          Our Clients
        </button>
        <button class="py-2" @click="$router.replace('/careers')">
          Careers
        </button>
        <button class="py-2" @click="$router.replace('/contact-us')">
          Contact us
        </button>
      </div>
    </div>
    <button
      @click="onClickMenu"
      class="z-10 bg-primary spring ring-5 ring-brandBlue ring-opacity-30 rounded-full w-10 h-10 md:w-14 md:h-14 m-auto shadow-xl"
    >
      <span class="text-xs md:text-sm rotate m-auto text-neutral">Menu</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      service: false,
    }
  },
  methods: {
    onClickMenu() {
      this.service = false
      this.menu = !this.menu
    },
    setServices() {
      this.menu = false
      this.service = true
    },
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