<template>
  <div>
    <div
      v-if="service"
      class="bg-primary rounded-md text-secondary py-2 w-50 m-auto"
    >
      <nav
        class="flex capitalize flex-col text-md text-center divide-y-1 px-3 align-middle divide-secondary"
      >
        <!-- <router-link class="icon-btn py-2" to="/services/business-setup">
          Business Setup
        </router-link> -->
        <router-link
          v-for="(item, i) in mobileServices"
          class="icon-btn py-2"
          :to="item.slug"
          :key="i"
          >{{ item.title }}
        </router-link>
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
        <button class="py-2" @click="$router.replace('/business-setup')">
          Business Setup
        </button>
        <button class="py-2" @click="setServices">Services</button>
        <button class="py-2" @click="$router.replace('/about-us')">
          About us
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
const mobileServices = [
  {
    title: 'PRO & VISA Services',
    slug: '/services/pro-and-visa-services',
  },
  {
    title: 'Business Protection & Trademark Registration Services',
    slug: '/services/business-protection-and-trademark-registration',
  },
  {
    title: 'Investor Right Protection',
    slug: '/services/investor-rights-and-protection',
  },
  {
    title: 'Certificate Attestation Embassy Services',
    slug: '/services/certificate-attestation-embassy-services',
  },
  {
    title: 'Business for Sale',
    slug: '/services/business-for-sale',
  },
  {
    title: 'Financial Services',
    slug: '/services/financial-services',
  },
  {
    title: 'Notarization',
    slug: '/notarization',
  },
  {
    title: 'Local Sponsorship',
    slug: '/local-sponsorship',
  },
  {
    title: 'Bank Account Assistance',
    slug: '/bank-account-assistance',
  },
]
export default {
  data() {
    return {
      menu: false,
      service: false,
      mobileServices: mobileServices,
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