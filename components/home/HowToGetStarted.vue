<template>
  <div>
    <div
      class="border-t transform rotate-8 -mb-3 top-2 border-primary border-opacity-6 my-18 md:my-12"
    ></div>
    <div class="grid max-w-screen-xl px-6 xl:px-0 min-h-lg mx-auto">
      <div class="lg:my-auto">
        <div class="my-12 text-center text-primary">
          <h1
            class="mb-3 rotate-45 text-3xl lg:text-6xl font-bold md:mb-8 uppercase"
          >
            {{ data.header.title }}
          </h1>
          <p class="opacity-50">
            {{ data.header.description }}
          </p>
        </div>
        <div
          class="flex flex-col md:flex-row md:divide-x md:divide-primary md:divide-opacity-5 md:gap-4 mt-6 text-primary"
        >
          <Steps
            v-for="(step, i) in data.cards"
            :key="i"
            class="md:pl-12"
            :step="step.cards_id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Steps from './Steps.vue'

export default {
  components: { Steps },
  props: {
    data: {
      type: Object,
    },
  },
}
</script>

<style lang="scss" scoped>
</style>