<template>
  <div class="bg-primary py-24">
    <div
      class="grid md:grid-cols-2 gap-6 max-w-screen-xl px-6 xl:px-0 min-h-lg mx-auto"
    >
      <div class="lg:my-auto text-left">
        <div v-for="(items, i) in data" :key="i">
          <div v-if="items.collection === 'header'">
            <div class="text-neutral uppercase">
              <span class="text-3xl lg:text-6xl font-bold">
                {{ items.item.title }}
              </span>
              <br />
              <span class="font-light text-1xl lg:text-3xl">
                {{ items.item.description }}
              </span>
            </div>
          </div>
          <div
            v-if="items.collection === 'multi_links'"
            class="mt-6 text-lg text-neutral"
          >
            <ul class="capitalize grid md:grid-cols-2 gap-4">
              <li
                v-for="({ links_id }, index) in items.item.links"
                :key="index"
              >
                <NuxtLink
                  :to="links_id.url"
                  class="text-left flex rounded shadow-md hover:shadow-xl py-3 px-3 border border-secondary border-opacity-50 hover:border-opacity-100"
                >
                  <span class="pr-1 flex-1">{{ links_id.title }}</span>
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
  props: {
    data: {
      type: Array,
    },
  },
  data() {
    return {
      services: [
        {
          title: 'Business Set Up',
          slug: '/services/business-setup',
        },
        {
          title: 'PRO & Visa Services',
          slug: '/services/pro-and-visa-services',
        },
        {
          title: 'Registration Services',
          slug: '/services/registration-services',
        },
        {
          title: 'Financial Services',
          slug: '/services/financial-services',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
</style>