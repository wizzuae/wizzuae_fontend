<template>
  <div v-if="data" class="grid">
    <div
      class="grid gap-6 px-6 xl:px-0"
      v-for="row in data"
      :key="row.id"
      :class="[row.row_id.mobile, row.row_id.tablet, row.row_id.laptop]"
    >
      <div
        v-if="row.row_id.items"
        v-for="item in row.row_id.items"
        :key="item.id"
      >
        <base-title
          class="mt-18 mb-3"
          v-if="item.collection === 'title'"
          :data="item.item"
        ></base-title>
        <base-rich-text
          class="py-6"
          v-if="item.collection === 'rich_text'"
          :data="item.item.content"
        ></base-rich-text>
        <base-image
          v-if="item.collection === 'image'"
          :data="item.item"
        ></base-image>
      </div>
    </div>
  </div>
</template>

<script>
import BaseImage from './BaseImage.vue'
import BaseRichText from './BaseRichText.vue'
import BaseTitle from './BaseTitle.vue'
export default {
  components: { BaseImage, BaseRichText, BaseTitle },
  props: {
    data: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
</style>