<template>
  <div
    class="prose md:prose-xl my-12 content mx-auto text-gray-600"
    v-if="data"
    v-html="$md.render(data)"
  ></div>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
    },
  },
}
</script>
<style scoped>
</style>
