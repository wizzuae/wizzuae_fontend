<template>
  <div>
    <header class="relative flex h-screen overflow-hidden">
      <div
        class="relative z-30 w-auto min-w-full min-h-full max-w-none video-top-layer"
      >
        <div
          class="grid px-6 xl:px-0 lg:grid-cols-2 py-12 max-w-screen-lg min-h-lg h-full mx-auto"
        >
          <div class="lg:my-auto text-left">
            <div>
              <h1
                class="text-3xl lg:text-6xl font-bold mb-3 md:mb-8 text-primary uppercase"
              >
                {{ data.title }}
              </h1>
              <p
                class="tracking-widest text-cool-gray-800 opacity-80 dark:(text-primary opacity-50)"
              >
                {{ data.description }}
              </p>
            </div>
            <div class="mt-6">
              <router-link to="/about-us">
                <button
                  class="rounded text-primary border-opacity-10 shadow-2xl hover:text-secondary hover:bg-primary py-3 px-3 border border-primary"
                >
                  {{ data.button.title }}
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <video
        autoplay
        loop
        muted
        class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source :src="video" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </header>
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
      video: '/hero-video-.mp4',
    }
  },
}
</script>

<style scoped>
.video-top-layer {
  background-image: linear-gradient(
    to right,
    rgb(241, 236, 236),
    rgba(255, 0, 0, 0)
  );
}
</style>