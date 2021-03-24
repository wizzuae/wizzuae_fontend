<template>
  <div class="flex my-12">
    <div
      class="ring-2 ring-primary ring-opacity-30 shadow-2xl rounded-full w-16 h-16 place-content-center text-center grid border-primary mr-6"
    >
      <img class="rounded-full" :src="assetUrl + step.icon.image.id" alt="" />
      <!-- <h1 class="text-3xl">{{ step.step }}</h1> -->
    </div>
    <div>
      <h1 class="text-xl font-bold">{{ step.title }}</h1>
      <p class="opacity-60">
        {{ step.description }}
      </p>
      <div class="mt-6">
        <a :href="step.button.url">
          <button
            class="rounded hover:text-secondary shadow-xl hover:bg-primary py-3 px-3 border border-primary border-opacity-30"
          >
            {{ step.button.title }}
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Object,
    },
  },
  data() {
    return {
      assetUrl: process.env.ASSET_URL,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>