<template>
  <div class="bg-neutral">
    <div class="container py-4rem text-left">
      <div v-for="(items, i) in data" :key="i">
        <div v-if="items.collection === 'header'">
          <div class="text-primary uppercase">
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
          v-if="items.collection === 'multi_cards'"
          class="mt-6 text-lg text-neutral"
        >
          <ul class="capitalize grid lg:grid-cols-1 gap-4">
            <!-- https://github.com/jambonn/vue-concise-carousel#compiles-and-hot-reloads-for-development -->
            <carousel
              paginationPosition="bottom"
              paginationActiveColor="#0074D9"
              :resistanceCoef="0"
              :spacePadding="15"
              :spacePaddingMaxOffsetFactor="0"
              :perPageCustom="[
                [320, 1],
                [640, 2],
                [768, 3],
                [1024, 4],
              ]"
              :center-mode="true"
            >
              <CarouselSlide
                class="py-3 pr-3"
                v-for="({ cards_id }, index) in items.item.cards"
                :key="i"
              >
                <!-- v-motion
                  :initial="{ opacity: 0, y: 100 }"
                  :visible="{ opacity: 1, y: 0 }"
                  :delay="index * 200" -->
                <li :key="index">
                  <NuxtLink
                    :to="cards_id.button.url"
                    class="
                      bg-white
                      snap-start
                      text-left
                      flex
                      rounded-xl
                      shadow-md
                      hover:shadow-xl
                      md:my-3
                      py-3
                      px-3
                      border border-secondary border-opacity-50
                      hover:border-opacity-100
                    "
                  >
                    <div class="grid grid-cols-1 text-primary">
                      <div class="max-h-179px rounded-xl overflow-hidden">
                        <nuxt-img
                          class="w-full"
                          :src="
                            cards_id.image.s3_url + cards_id.image.filename_disk
                          "
                        ></nuxt-img>
                      </div>
                      <div class="flex pt-3">
                        <span class="pr-1 flex-1 text-xl font-bold truncate">{{
                          cards_id.title
                        }}</span>
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
                      </div>
                    </div>
                  </NuxtLink>
                </li>
              </CarouselSlide>
            </carousel>
          </ul>
        </div>
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
          title: 'PRO & VISA Services',
          slug: '/services/pro-and-visa-services-uae',
        },
        {
          title: 'Local Sponsors',
          slug: '/services/local-sponsors-uae',
        },
        {
          title: 'Bank Account Opening',
          slug: '/services/bank-account-opening-uae',
        },
        {
          title: 'Trademark Services',
          slug: '/services/trademark-registration-services-uae',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
