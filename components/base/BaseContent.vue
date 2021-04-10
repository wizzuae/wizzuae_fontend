<template>
  <div>
    <div
      class="prose md:prose-xl my-12 content mx-auto text-gray-600 markdown"
      v-if="data"
      v-html="$md.render(data)"
    ></div>
    <div class="markdown text-3xl font-bold">
      <h1>dfdfd</h1>
      <h2>dfdfd</h2>
      <h3>dfdfd</h3>
    </div>
  </div>
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
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply text-primary;
  }
}
</style>
