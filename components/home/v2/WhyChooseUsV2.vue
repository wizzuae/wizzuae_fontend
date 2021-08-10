<template>
  <div>
    <div class="container py-4rem">
      <div>
        <div class="text-primary uppercase text-center">
          <span class="text-3xl lg:text-6xl font-bold">
            {{ data.title }}
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
          <CarouselSlide
            class="py-3 pr-3"
            v-for="(item, i) in data.reasons"
            :key="i"
          >
            <div class="rounded-2xl shadow-lg p-3 h-full">
              <div
                class="
                  grid
                  items-center
                  justify-items-center
                  rounded-full
                  w-28
                  h-28
                  mx-auto
                  border-primary border
                "
              >
                <img class="w-15" :src="item.icon" />
              </div>
              <div class="pt-4 text-center">
                <h1 class="font-semibold md:text-2xl text-primary mb-3">
                  {{ item.title }}
                </h1>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </CarouselSlide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: ['data'],
  setup(props) {
    return {}
  },
})
</script>

<style scoped></style>
