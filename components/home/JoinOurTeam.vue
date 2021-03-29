<template>
  <div class="grid grid-cols-1 bg-primary py-30">
    <div
      v-for="(items, i) in data"
      :key="i"
      class="max-w-screen-xl px-6 xl:px-0 mx-auto"
    >
      <div v-if="items.collection === 'header'">
        <div class="mb-12 text-center text-neutral">
          <h1 class="mb-5 text-3xl lg:text-6xl font-bold md:mb-8 uppercase">
            {{ items.item.title }}
          </h1>
          <p class="opacity-50 text-xl">
            {{ items.item.description }}
          </p>
        </div>
        <div class="mt-6 text-center">
          <a href="/careers">
            <button
              class="rounded text-neutral hover:text-primary shadow-xl hover:bg-neutral py-3 px-3 border border-neutral border-opacity-30"
            >
              Apply Now
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
    },
  },
}
</script>

<style lang="scss" scoped>
</style>