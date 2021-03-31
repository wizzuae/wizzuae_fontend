<template>
  <div>
    <BaseHeader :data="data.header" />

    <div
      class="grid md:grid-cols-2 gap-6 px-6 xl:px-0 py-12 max-w-screen-lg min-h-lg h-full mx-auto"
    >
      <div class="order-last md:order-first" v-html="data.map"></div>
      <div
        class="flex flex-col gap-6 items-center text-primary justify-center max-w-screen-lg mx-auto"
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
          <span class="text-xl" v-html="$md.render(data.address)"> </span>
        </div>

        <a :href="`mailto:${data.email}`" class="flex flex-col gap-2">
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
          <span class="text-xl">{{ data.email }}</span>
        </a>
        <a
          class="flex flex-col gap-2"
          type="button"
          :href="`tel:${data.phone}`"
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
          <span class="text-xl">{{ data.phone }}</span>
        </a>
        <div>
          <!-- <div id="tawk_60421191385de407571cdd87"></div> -->
        </div>
      </div>
    </div>
    <div>
      <!--Start of Tawk.to Script-->
      <!-- <script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date(); Tawk_API.embedded='tawk_60421191385de407571cdd87';
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/60421191385de407571cdd87/1f1l6bsqm';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);})();
</script> -->
      <!--End of Tawk.to Script-->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    let data = await $axios.$get('/contact_us/', {
      params: {
        fields: [
          '*.*',
          'header.image.id',
          'header.image.filename_disk',
          'header.image.s3_url',
        ],
      },
    })
    data.data
    return data
  },
}
</script>

<style lang="scss" scoped>
</style>