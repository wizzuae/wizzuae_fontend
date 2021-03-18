<template>
  <div>
    <BaseHeader :data="header" />

    <div
      class="grid grid-cols-2 gap-6 px-6 xl:px-0 py-12 max-w-screen-lg min-h-lg h-full mx-auto"
    >
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.3077807240106!2d55.156192514858304!3d25.091440683945446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b5d6fc8634b%3A0x9305041eb9c02e13!2sArenco%20Tower!5e0!3m2!1sen!2sin!4v1615887096865!5m2!1sen!2sin"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <!-- <div v-if="image" class="lg:order-last">
        <img :src="image" alt="image" class="w-full" />
      </div> -->
      <div
        class="flex flex-col gap-6 items-center text-primary justify-center max-w-screen-lg mx-auto"
      >
        <a
          href="https://goo.gl/maps/5LkGfVRQGzMf2A7y8"
          class="flex flex-col gap-2"
        >
          <svg
            class="h-16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <div class="text-center">
            <span class="text-xl"> #2307, Arenco Tower</span> <br />
            <span class="text-xl"> Sheikh Zayed Road, Dubai, UAE</span>
          </div>
        </a>
        <a href="mailto:info@wizzuae.ae" class="flex flex-col gap-2">
          <svg
            class="h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="text-xl">info@wizzuae.ae</span>
        </a>
        <a
          class="flex flex-col gap-2"
          type="button"
          href="tel:+971 58 555 0070"
        >
          <svg
            class="h-16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span class="text-xl">+971 58 555 0070</span>
        </a>
        <appointment></appointment>
      </div>
      <div
        class="prose prose-xl text-gray-600 text-justify"
        v-if="content"
        v-html="content"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi, $md }) {
    // const data = await $strapi.find('contact-us')
    // const content = $md.render(data.content)
    const api_url = process.env.strapiBaseUri
    // const image = api_url + data.image.url
    // Hardcoded Header for About us
    const header = { title: 'Contact us', description: null }
    return {
      header,
      //   content,
      //   image,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>