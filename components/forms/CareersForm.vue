<template>
  <div class="my-6 bg-neutral p-12">
    <form
      class="flex flex-col gap-3"
      action="mailto:info@wizzuae.ae"
      method="get"
      enctype="text/plain"
    >
      <div>
        <label for="name">
          <input
            class="p-3 w-full border-1 border-secondary"
            placeholder="Name of the Applicant"
            type="text"
            name="name"
            id="name"
          />
        </label>
      </div>
      <div>
        <label for="place">
          <input
            class="p-3 w-full border-1 border-secondary"
            placeholder="Country of Residence"
            type="text"
            name="place"
            id="place"
          />
        </label>
      </div>
      <div>
        <label for="email">
          <input
            class="p-3 w-full border-1 border-secondary"
            placeholder="Email"
            type="text"
            name="email"
            id="email"
          />
        </label>
      </div>
      <div>
        <label for="phone">
          <input
            class="p-3 border-1 w-full border-secondary"
            placeholder="Phone"
            type="text"
            name="phone"
            id="phone"
          />
        </label>
      </div>
      <div>
        <textarea
          class="p-3 w-full border-1 border-secondary"
          placeholder="Your comments"
          name="comments"
        ></textarea>
      </div>
      <div class="flex gap-4 justify-end">
        <input
          class="py-3 w-24 bg-white text-primary rounded-sm"
          type="reset"
          name="reset"
          value="Clear"
        />
        <input
          class="py-3 w-24 bg-primary text-secondary rounded-sm"
          type="submit"
          name="submit"
          value="Send"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notify: false,
      full_name: '',
      country: '',
      email: '',
      mobile: '',
      message: '',
    }
  },
  methods: {
    async submitForm() {
      await fetch(process.env.FORM_ACTION_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: this.full_name + ' want to join on the team',
          full_name: this.full_name,
          country: this.country,
          email: this.email,
          mobile: this.mobile,
          message: this.message,
        }),
      }).then(() => {
        this.model = false
      })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>