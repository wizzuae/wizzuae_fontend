<template>
  <div>
    <ul id="navigation">
      <li v-for="(item, index) in navigation" :key="'item' + index">
        <i
          @click="item.open = !item.open"
          v-if="item.sub"
          class="far text-primary"
        >
          <svg
            v-if="!item.open"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--mdi"
            width="22"
            height="22"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
              fill="currentColor"
            ></path>
          </svg>
          <svg
            v-if="item.open"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--mdi"
            width="22"
            height="22"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path d="M19 13H5v-2h14v2z" fill="currentColor"></path>
          </svg>
        </i>
        <div
          class="
            text-primary
            bg-neutral bg-opacity-30
            hover:(
            filter
            brightness-88)
          "
          @click="item.open = !item.open"
        >
          <nuxt-link class="flex title" :to="item.slug">
            {{ item.title }}
          </nuxt-link>
        </div>
        <MobileNavDropdown v-if="item.sub" :list="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import MobileNavDropdown from './MobileNavDropdown.vue'
export default {
  components: { MobileNavDropdown },
  props: ['navigation'],
}
</script>

<style lang="scss" scoped>
#sidebar {
  width: 100%;
  max-width: 350px;
  min-height: 100vh;
  background-color: #fefefe;
  box-shadow: 10px 0 20px rgba($color: #000000, $alpha: 0.2);
}
#navigation {
  list-style: none;
  border-bottom: 1px solid #dedede;
  li {
    position: relative;
    // color: #555;
    border-top: 1px solid #dedede;
    // cursor: pointer;
    .title {
      padding: 10px 0;
      text-indent: 20px;
    }
    i {
      position: absolute;
      top: 12px;
      right: 10px;
    }
  }
}
</style>
