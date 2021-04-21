<template>
  <div>
    <BaseHeader v-if="header" :data="header" />
    <div class="max-w-screen-lg mx-auto min-h-screen my-12">
      <div
        v-for="blog in data"
        :key="blog.id"
        class="shadow-lg grid grid-cols-1 p-4"
      >
        <a v-if="blog.status === 'published'" :href="'/blogs/' + blog.slug">
          <div class="aspect-w-4 aspect-h-2 md:aspect-h-1">
            <img
              class="object-cover"
              v-if="blog.image"
              :src="blog.image.s3_url + blog.image.filename_disk"
              :alt="blog.image.title"
            />
          </div>
          <div class="flex flex-col gap-3 my-4">
            <h1
              class="text-xl md:text-2xl lg:text-3xl font-bold bg-primary text-transparent bg-clip-text"
            >
              {{ blog.title }}
            </h1>
            <p class="text-base">{{ blog.description }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.$get('/articles/', {
      params: {
        fields: ['*.*'],
      },
    })
    return { data }
  },
  data() {
    return {
      header: {
        title: 'Blogs',
        Image: {},
      },
    }
  },
}
</script>

<style lang="scss" scoped>
</style>