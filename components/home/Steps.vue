<template>
  <div class="flex my-12 gap-4">
    <div
      class="ring-2 ring-secondary text-neutral ring-opacity-30 shadow-2xl hover:ring-opacity-100 rounded-full w-16 h-16 flex justify-center items-center text-center border-secondary"
    >
      <span class="transform hover:( scale-120)" v-html="step.icon.icon"></span>
    </div>
    <div class="text-neutral">
      <h1 class="text-xl font-bold">{{ step.title }}</h1>
      <p class="opacity-60">
        {{ step.description }}
      </p>
      <div class="mt-6">
        <appointment
          v-if="step.button.title == 'Book Now'"
          :title="step.button.title"
          design="rounded font-bold hover:text-primary shadow-xl hover:bg-neutral py-3 px-3 border border-neutral border-opacity-30"
        ></appointment>
        <a :href="step.button.url" v-else>
          <button
            class="rounded hover:text-primary shadow-xl hover:bg-neutral py-3 px-3 border border-neutral border-opacity-30"
          >
            {{ step.button.title }}
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Appointment from '../forms/Appointment.vue'
export default {
  components: { Appointment },
  props: {
    step: {
      type: Object,
    },
  },
}
</script>

<style lang="scss" scoped>
</style>