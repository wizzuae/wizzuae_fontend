<template>
  <div
    class="flex text-center max-w-screen-xl px-6 xl:px-0 min-h-lg mx-auto flex-col items-center px-6 py-12"
  >
    <h1 class="text-2xl lg:text-6xl uppercase text-primary font-bold">
      {{ data.title }}
    </h1>
    <div class="border-t-2 my-10 md:w-100 border-secondary"></div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <div class="shadow-lg" v-for="(item, i) in data.brands" :key="i">
        <img
          :src="assetUrl + item.brands_id.logo.id"
          alt="logo of govt agencies"
        />
      </div>
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
  data() {
    return {
      assetUrl: process.env.ASSET_URL,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>