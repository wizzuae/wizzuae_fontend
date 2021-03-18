<template>
  <div class="bg-gradient-to-r from-gray-900 via-primary to-blue-900 py-24">
    <div
      class="grid md:grid-cols-2 gap-6 max-w-screen-lg px-6 xl:px-0 min-h-lg mx-auto"
    >
      <div class="lg:my-auto text-left">
        <div>
          <div class="text-secondary uppercase">
            <span class="text-3xl lg:text-6xl font-bold"> A QUICK GUIDE </span>
            <br />
            <span class="font-light text-1xl lg:text-3xl">
              THROUGH OUR SERVICES
            </span>
          </div>
          <!-- <p
            class="tracking-widest text-cool-gray-800 opacity-80 dark:(text-primary opacity-50)"
          >
            We provides you a hand in setting up your business dreams and we
            operate at international level quality..
          </p> -->
        </div>
        <div class="mt-6 text-lg text-secondary">
          <ul class="capitalize grid md:grid-cols-2 gap-4">
            <li v-for="(item, i) in services" :key="i">
              <NuxtLink
                :to="item.slug"
                class="text-left flex rounded shadow-md hover:shadow-xl py-3 px-3 border border-secondary border-opacity-50 hover:border-opacity-100"
              >
                <span class="pr-1 flex-1">{{ item.title }}</span>
                <span class="mr-auto my-auto">
                  <svg
                    class="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="md:order-first mt-6">
        <giving-hand />
      </div>
    </div>
  </div>
</template>

<script>
import GivingHand from './GivingHand.vue'
export default {
  components: { GivingHand },
  data() {
    return {
      services: [
        {
          title: 'Business Set Up Services',
          slug: '/service_categories/business-setup',
        },
        {
          title: 'PRO & Visa Services',
          slug: '/service_categories/pro-and-visa-services',
        },
        {
          title: 'Registration Services',
          slug: '/service_categories/registration-services',
        },
        {
          title: 'Financial Services',
          slug: '/service_categories/financial-services',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
</style>