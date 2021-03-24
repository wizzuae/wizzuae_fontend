<template>
  <div
    class="prose prose-xl my-12 mx-auto text-gray-600 text-justify"
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
