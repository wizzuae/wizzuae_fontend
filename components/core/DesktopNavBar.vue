<template>
  <div class="flex">
    <NavButton v-for="(item, i) in navMenu" :key="i" :data="item" />
  </div>
</template>


<script>
const home = {
  title: 'Home',
  slug: '/',
}

const ourServices = {
  title: 'Services',
  slug: '#',
  subFolder: '/service_categories/',
  sub: [
    {
      title: 'Business Setup',
      slug: 'business-setup',
      subFolder: '/services/',
      sub: [
        {
          title: 'Mainland Companies',
          slug: 'mainland-companies',
        },
        {
          title: 'Free Zone Companies',
          slug: 'free-zone-companies',
        },
        {
          title: 'Offshore Companies',
          slug: 'offshore-companies',
        },
        {
          title: 'Notarization',
          slug: '#',
        },
        {
          title: 'Local Sponsorship',
          slug: '#',
        },
        {
          title: 'Office Solutions',
          slug: '#',
        },
        {
          title: 'EJARI',
          slug: '#',
        },
        {
          title: 'Liquidation of Business',
          slug: '#',
        },
        {
          title: 'Bank Account Assistance',
          slug: '#',
        },
      ],
    },
    {
      title: 'PRO & VISA Services',
      slug: 'pro-and-visa-services',
    },
    {
      title: 'Registration Services',
      slug: 'registration-services',
      sub: [
        {
          title: 'Business Protection & Trademark Registration Services',
          slug: '#',
        },
        {
          title: 'Investor Right Protection',
          slug: '#',
        },
        {
          title: 'Certificate Attestation Embassy Services',
          slug: '#',
        },
        {
          title: 'Business for Sale',
          slug: '#',
        },
      ],
    },
    {
      title: 'Financial Services',
      slug: 'financial-services',
    },
  ],
}

const aboutUs = {
  title: 'About us',
  slug: '/about-us',
  sub: [
    {
      title: 'Directors Desk',
      slug: '#',
    },
    {
      title: 'Our Team',
      slug: '#',
    },
  ],
}

const portfolio = {
  title: 'Portfolio',
  slug: '/portfolio',
  sub: [
    {
      title: 'Our Clients',
      slug: '#',
    },
    {
      title: 'Testimonials',
      slug: '#',
    },
  ],
}

const careers = {
  title: 'Careers',
  slug: '/careers',
}

const contactUs = {
  title: 'Contact us',
  slug: '/contact-us',
}
const navMenu = [home, ourServices, aboutUs, portfolio, careers, contactUs]
import NavButton from './Navbar/NavButton.vue'

export default {
  components: {
    NavButton,
  },
  data() {
    return {
      navMenu: navMenu,
    }
  },
}
</script>

<style >
li > ul {
  transform: translatex(100%) scale(0);
}
li:hover > ul {
  transform: translatex(101%) scale(1);
}
li > button svg {
  transform: rotate(-90deg);
}
li:hover > button svg {
  transform: rotate(-270deg);
}

/* Below styles fake what can be achieved with the tailwind config
     you need to add the group-hover variant to scale and define your custom
     min width style.
  	 See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html
  	 for implementation with config file
  */
.group:hover .group-hover\:scale-100 {
  transform: scale(1);
}
.group:hover .group-hover\:-rotate-180 {
  transform: rotate(180deg);
}
.scale-0 {
  transform: scale(0);
}
.min-w-32 {
  min-width: 8rem;
}
</style>