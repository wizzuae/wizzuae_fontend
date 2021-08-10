<template>
  <div>
    <div class="container py-4rem">
      <div>
        <div class="text-primary uppercase text-center">
          <span class="text-3xl lg:text-6xl font-bold">
            Business Setup in UAE
          </span>
          <br />
          <hr class="w-1/3 mx-auto mt-6" />
          <!-- <span class="font-light text-1xl lg:text-3xl"> ------- </span> -->
        </div>
      </div>
      <div class="pt-6">
        <carousel
          loop
          autoplay
          :autoplayTimeout="2000"
          paginationPosition="bottom"
          paginationActiveColor="#0074D9"
          :resistanceCoef="0"
          :spacePadding="15"
          :spacePaddingMaxOffsetFactor="0"
          :perPageCustom="[
            [320, 1],
            [640, 2],
            [768, 2],
            [1024, 3],
          ]"
          :center-mode="true"
        >
          <CarouselSlide class="py-3 pr-3" v-for="(item, i) in cards" :key="i">
            <div class="w-full rounded-2xl shadow-lg p-3">
              <a :href="item.link">
                <img
                  class="bg-clip-padding rounded-xl w-full"
                  :src="item.image"
                  alt=""
                />
                <div class="pt-4 text-center">
                  <h1 class="font-semibold md:text-2xl text-primary">
                    {{ item.title }}
                  </h1>
                </div>
              </a>
            </div>
          </CarouselSlide></carousel
        >
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const cards = [
      {
        title: 'MAINLAND COMPANIES',
        image:
          'https://wizzuae.s3.us-west-000.backblazeb2.com/b2941dc2-977d-4a08-b55f-28aef34b15ab.jpeg',
        link: '/services/mainland-companies',
      },
      {
        title: 'FREE ZONE COMPANIES',
        image:
          'https://wizzuae.s3.us-west-000.backblazeb2.com/2fe312d8-5ba0-4a51-825e-4ae0bcbffeb8.gif',
        link: '/services/free-zone-companies',
      },
      {
        title: 'OFFSHORE COMPANIES',
        image:
          'https://wizzuae.s3.us-west-000.backblazeb2.com/3bb233b9-1530-428a-873e-a8caafce768f.jpeg',
        link: '/services/offshore-companies',
      },
    ]
    return { cards }
  },
})
</script>

<style scoped></style>
