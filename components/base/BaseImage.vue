<template>
  <div v-if="data">
    <img
      v-if="data.image"
      :src="data.image.s3_url + data.image.filename_disk"
      :alt="data.image.title"
    />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
}
</script>
=