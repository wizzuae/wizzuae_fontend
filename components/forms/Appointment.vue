<template>
  <div>
    <button @click="model = !model" :class="design">{{ title }}</button>
    <div class="" v-if="model">
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div
          class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
          <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
          </div>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >&#8203;</span
          >
          <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
          <div
            class="inline-block align-bottom overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <!-- Start -->

            <div class="relative sm:max-w-xl sm:mx-auto">
              <div
                class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10"
              >
                <div class="max-w-md mx-auto">
                  <!-- Form Header -->
                  <div class="items-center">
                    <div class="font-semibold text-xl text-gray-700">
                      <h2 class="leading-relaxed">Create an Appointment</h2>
                      <p
                        class="text-sm text-gray-500 font-normal leading-relaxed"
                      >
                        Feel free to create a meeting at your chosen time
                      </p>
                    </div>
                  </div>
                  <!-- Form Start -->
                  <form v-if="!alert" @submit.prevent="submitForm">
                    <div class="divide-y text-left divide-gray-200">
                      <div
                        class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                      >
                        <div class="flex flex-col">
                          <!-- <label class="leading-loose">Your Name</label> -->
                          <input
                            required
                            type="text"
                            class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="Your name"
                            name="name"
                            v-model="full_name"
                          />
                        </div>
                        <div class="flex flex-col">
                          <!-- <label class="leading-loose">Contact Number</label> -->
                          <input
                            required
                            type="mobile"
                            name="mobile"
                            v-model="mobile"
                            class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="Mobile"
                          />
                        </div>
                        <div class="flex flex-col">
                          <!-- <label class="leading-loose">Email</label> -->
                          <input
                            required
                            type="email"
                            name="email"
                            v-model="email"
                            class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="Email"
                          />
                        </div>
                        <div class="flex items-center space-x-4">
                          <div class="flex flex-col">
                            <label class="leading-loose">Date</label>
                            <div
                              class="relative focus-within:text-gray-600 text-gray-400"
                            >
                              <input
                                type="text"
                                name="data"
                                v-model="date"
                                class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                placeholder="25/02/2021"
                              />
                              <div class="absolute left-3 top-2">
                                <svg
                                  class="w-6 h-6"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div class="flex flex-col">
                            <label class="leading-loose">Time</label>
                            <div
                              class="relative focus-within:text-gray-600 text-gray-400"
                            >
                              <input
                                type="text"
                                name="time"
                                v-model="time"
                                class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                placeholder="12:00 PM"
                              />
                              <div class="absolute left-3 top-2">
                                <svg
                                  class="w-6 h-6"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-col">
                          <label class="leading-loose">Your Message</label>
                          <textarea
                            type="text"
                            name="message"
                            v-model="message"
                            class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="Your Message (optional)"
                          />
                        </div>
                        <!-- <input
                          type="file"
                          name="attachment"
                          v-on="attachment"
                          accept="image/png, image/jpeg"
                        /> -->
                      </div>
                      <div class="pt-4 flex items-center space-x-4">
                        <button
                          @click="model = false"
                          class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none"
                        >
                          <svg
                            class="w-6 h-6 mr-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"
                            ></path>
                          </svg>
                          Cancel
                        </button>
                        <button
                          type="submit"
                          class="bg-primary flex justify-center items-center w-full text-gray-100 px-4 py-3 rounded-md focus:outline-none"
                        >
                          Create
                        </button>
                      </div>
                    </div>
                  </form>
                  <div class="text-center py-4 lg:px-4" v-if="alert">
                    <div
                      class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
                      role="alert"
                    >
                      <span
                        class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3"
                        >New</span
                      >
                      <span class="font-semibold mr-2 text-left flex-auto"
                        >Appointment Created</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- End -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    design: {
      type: String,
      default:
        'px-2 h-7 flex items-center my-1 rounded-sm bg-primary text-secondary',
    },
    title: {
      type: String,
      default: 'Book Appointment',
    },
  },
  data() {
    return {
      model: false,
      alert: false,
      full_name: '',
      email: '',
      mobile: '',
      date: '',
      time: '',
      message: '',
    }
  },
  methods: {
    async submitForm() {
      await fetch(
        'https://formsubmit.co/ajax/fee43215d7705bf93f00d4da9f2d8f30',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            _subject: this.full_name + ' created a new appointment',
            _cc: 'saliha@wizzuae.ae,bhaktipatil@wizzuae.ae,team@visualout.com',
            full_name: this.full_name,
            email: this.email,
            mobile: this.mobile,
            date: this.date,
            time: this.time,
            message: this.message,
          }),
        }
      ).then(() => {
        this.alert = true
        setTimeout(() => {
          this.alert = false
          this.model = false
        }, 5000)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>