<template>
  <div class="bg-neutral">
    <div
      class="px-6 xl:px-0 text-primary py-12 max-w-screen-xl min-h-lg h-full mx-auto"
    >
      <h1 class="text-3xl font-bold uppercase" v-if="data.title">
        {{ data.title }}
      </h1>
      <p v-if="data.description">{{ data.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
}
</script>

<style lang="scss" scoped>
</style>