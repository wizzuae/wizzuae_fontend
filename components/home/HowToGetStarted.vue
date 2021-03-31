<template>
  <div class="bg-primary">
    <div
      class="grid max-w-screen-xl px-6 xl:px-0 min-h-lg mx-auto py-12 md:py-25 lg:py-30"
    >
      <div class="lg:my-auto">
        <div v-for="(items, i) in data" :key="i">
          <div
            v-if="items.collection === 'header'"
            class="text-center text-neutral"
          >
            <h1
              class="mb-3 text-3xl md:text-5xl lg:text-6xl font-bold md:mb-8 uppercase"
            >
              {{ items.item.title }}
            </h1>
            <p class="opacity-50">
              {{ items.item.description }}
            </p>
          </div>
          <div
            v-if="items.collection === 'multi_cards'"
            class="flex flex-col lg:flex-row lg:divide-x lg:divide-primary lg:divide-opacity-5 lg:gap-4 mt-6 text-primary"
          >
            <Steps
              v-for="({ cards_id }, i) in items.item.cards"
              :key="i"
              class="md:pl-12"
              :step="cards_id"
            />
          </div>
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
      type: Array,
    },
  },
}
</script>

<style lang="scss" scoped>
</style>