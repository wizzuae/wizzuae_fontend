<template>
  <div class="flex my-12">
    <div
      class="ring-2 ring-secondary ring-opacity-30 shadow-2xl rounded-full w-16 h-16 place-content-center text-center grid border-secondary mr-6"
    >
      <img
        class="rounded-full"
        :src="step.icon.image.s3_url + step.icon.image.filename_disk"
        alt=""
      />
      <!-- <h1 class="text-3xl">{{ step.step }}</h1> -->
    </div>
    <div class="text-neutral">
      <h1 class="text-xl font-bold">{{ step.title }}</h1>
      <p class="opacity-60">
        {{ step.description }}
      </p>
      <div class="mt-6">
        <a :href="step.button.url">
          <button
            class="rounded hover:text-primary shadow-xl hover:bg-neutral py-3 px-3 border border-neutral border-opacity-30"
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
}
</script>

<style lang="scss" scoped>
</style>