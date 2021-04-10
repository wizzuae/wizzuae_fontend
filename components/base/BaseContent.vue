<template>
  <div
    class="prose md:prose-xl my-12 content mx-auto text-gray-600 markdown"
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
<style  lang="scss">
.markdown {
  h3 {
    @apply text-primary;
  }
}
</style>
