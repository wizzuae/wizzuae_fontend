<template>
  <div>
    <div
      class="border-t transform rotate-8 -mb-3 top-2 border-primary border-opacity-6 my-18 md:my-12"
    ></div>
    <div class="grid max-w-screen-lg px-6 xl:px-0 min-h-lg mx-auto">
      <div class="lg:my-auto text-left">
        <div class="my-12 text-primary">
          <h1
            class="mb-3 rotate-45 text-3xl lg:text-6xl font-bold md:mb-8 uppercase"
          >
            How to get started ?
          </h1>
          <p class="opacity-50">
            Just follow any of these steps to start a business in UAE, we are
            ready to help you with the rest
          </p>
        </div>
        <div
          class="flex flex-col md:flex-row md:divide-x md:divide-primary md:divide-opacity-5 md:gap-4 mt-6 text-primary"
        >
          <Steps
            v-for="(step, i) in data"
            :key="i"
            class="md:pl-12"
            :step="step"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Steps from './Steps.vue'
const data = [
  {
    paddingLeft: 0,
    step: '1',
    title: 'Send us a quick enquiry',
    description: 'Share your details with us for further discussion!',
    button: { title: 'Quick Enquiry', link: '/contacts' },
  },
  {
    paddingLeft: 12,
    step: '2',
    title: 'Speak to our consultant',
    description: 'Let us understand your requisites better!',
    button: { title: 'Call Now', link: 'tel:+971 4 261 0888' },
  },
  {
    paddingLeft: 12,
    step: '3',
    title: 'Book an Appointment',
    description: 'Meet us and meet your requirements!',
    button: { title: 'Book Now', link: '/free-appointment' },
  },
]
export default {
  components: { Steps },
  data() {
    return {
      data: data,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>