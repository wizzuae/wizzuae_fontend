<template>
  <div class="flex h-full w-full xl:justify-center hidden lg:flex ml-10">
    <div
      class="lg:max-w-2/3 self-center place-self-center xl:max-w-1/2 bg-white bg-opacity-90 px-6 pt-6 rounded-2xl"
    >
      <header>
        <h1 class="text-xl font-bold text-primary">Get a Free Consultation</h1>
      </header>
      <form @submit.prevent="submitForm">
        <div
          class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
        >
          <input
            required
            type="text"
            class="px-4 py-2 border bg-white bg-opacity-90 focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
            placeholder="Your name"
            name="name"
            v-model="full_name"
          />
          <input
            required
            type="mobile"
            name="mobile"
            v-model="mobile"
            class="px-4 py-2 border bg-white bg-opacity-90 focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
            placeholder="Mobile"
          />
          <input
            required
            type="email"
            name="email"
            v-model="email"
            class="px-4 py-2 border bg-white bg-opacity-90 focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
            placeholder="Email"
          />
          <textarea
            type="text"
            name="message"
            v-model="message"
            class="px-4 py-2 border bg-white bg-opacity-90 focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
            placeholder="Your Message (optional)"
          ></textarea>
          <button
            v-if="!loading"
            type="submit"
            class="bg-primary transform hover:(shadow-lg ring-1 ring-blue-500) flex justify-center items-center w-full text-gray-100 px-4 py-3 rounded-md focus:outline-none"
          >
            <span v-if="alert">Thank you</span>
            <span v-else> Submit </span>
          </button>
          <button
            v-if="loading"
            type="button"
            class="bg-primary flex justify-center items-center w-full text-gray-100 px-4 py-3 rounded-md focus:outline-none"
            disabled
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="iconify iconify--ant-design animate-spin h-5 w-5 mr-3"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1024 1024"
            >
              <path
                d="M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3c22.2 52.4 53.9 99.5 94.3 139.9c40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6c52.4-22.2 99.5-53.9 139.9-94.3c40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9a437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7c-63.1 26.8-130.2 40.3-199.3 40.3z"
                fill="currentColor"
              ></path>
            </svg>

            Processing
          </button>
        </div>
      </form>
    </div>
    <img
      class="absolute bottom-0 right-10 lg:w-45 w-28"
      :src="image"
      alt="Get a Free Consultation"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: '/free-consultation.png',
      alert: false,
      loading: false,

      full_name: '',
      email: '',
      mobile: '',
      message: '',
    }
  },
  methods: {
    async submitForm() {
      this.loading = true
      await fetch(process.env.FORM_ACTION_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: this.full_name + ' requested for a free consultation',
          _cc: 'saliha@wizzuae.ae,bhaktipatil@wizzuae.ae,team@visualout.com',
          full_name: this.full_name,
          email: this.email,
          mobile: this.mobile,
          message: this.message,
        }),
      }).then(() => {
        this.full_name = ''
        this.email = ''
        this.mobile = ''
        this.message = ''
        this.loading = false
        this.alert = true
        setTimeout(() => {
          this.alert = false
        }, 5000)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>