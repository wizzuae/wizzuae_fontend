<template>
  <div
    class="flex text-center max-w-screen-xl px-6 xl:px-0 min-h-lg mx-auto flex-col items-center px-6 py-12"
  >
    <div v-for="(items, i) in data" :key="i">
      <h1 class="text-2xl lg:text-6xl uppercase text-primary font-bold">
        WE WORK CLOSELY WITH ALL GOVERNMENT AGENCIES
      </h1>
      <div class="border-t-2 my-10 border-secondary"></div>
      <div
        v-if="items.collection === 'multi_brands'"
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
      >
        <div
          class="shadow-lg"
          v-for="({ brands_id }, i) in items.item.brands"
          :key="i"
        >
          <img
            :src="brands_id.logo.s3_url + brands_id.logo.filename_disk"
            alt="logo of govt agencies"
          />
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