<template>
  <div v-if="data">
    <h1
      v-if="data.title"
      class="text-3xl md:text-5xl lg:text-6xl font-bold bg-primary text-transparent bg-clip-text"
    >
      {{ data.title }}
    </h1>
    <p
      v-if="data.description"
      class="text-cool-gray-800 pt-3 opacity-90 text-xl tracking-widest"
    >
      {{ data.description }}
    </p>
    <div class="mt-6 bg-secondary w-60 h-2"></div>
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

