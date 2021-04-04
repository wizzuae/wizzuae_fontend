<template>
  <div>
    <div
      class="flex flex-col flex-auto max-w-screen-xl px-6 xl:px-0 min-h-lg mx-auto my-12 md:my-30 text-center"
    >
      <!-- Header Section -->
      <div>
        <h1
          class="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 uppercase bg-primary text-transparent bg-clip-text"
        >
          WHY CHOOSE US ?
        </h1>
        <!-- <p
        class="tracking-widest text-cool-gray-800 opacity-80 dark:(text-primary opacity-50)"
      >
        We are highly qualified and experienced people with great vision.
      </p> -->
      </div>
      <hr class="md:my-9 md:w-100 mx-auto" />
      <!-- Body Section -->
      <div v-for="(items, i) in data" :key="i">
        <div v-if="items.collection === 'multi_icons'">
          <div class="mt-3 tracking-widest text-primary">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-5 items-center">
              <!-- Reason -->
              <div
                v-for="({ icons_id }, i) in items.item.icons"
                :key="i"
                class="flex flex-col p-6 justify-center items-center"
              >
                <div
                  class="md:w-20 md:h-20 xl:w-30 xl:h-30 rounded-full border-8 flex items-center"
                >
                  <img
                    class="rounded-full"
                    :src="icons_id.image.s3_url + icons_id.image.filename_disk"
                    alt=""
                  />
                </div>
                <div class="md:text-2xl lg:text-3xl mt-6 uppercase">
                  {{ icons_id.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// const reasons = [
//   { title: "Accuracy", icon: "carbon-center-circle" },
//   { title: "Transparency", icon: "carbon-data-view" },
//   { title: "On Time", icon: "carbon-time" },
//   { title: "Efficiency", icon: "carbon-meter" },
//   { title: "Authenticity", icon: "carbon-badge" },
//   { title: "Accountability ", icon: "carbon-scales" },
// ];

export default {
  props: {
    data: {
      type: Array,
    },
  },
}
</script>
<style scoped>
</style>