<template>
  <div class="group inline-block">
    <NuxtLink
      :to="data.slug"
      class="outline-none focus:outline-none text-xl text-secondary hover:text-white py-1 rounded-sm flex items-center"
    >
      <span class="pr-1 font-semibold flex-1">{{ data.title }}</span>
      <span v-if="data.sub">
        <svg
          class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </span>
    </NuxtLink>
    <ul
      v-if="data.sub"
      class="bg-primary border text-secondary divide-y divide-secondary rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32"
    >
      <li
        v-for="(item, i) in data.sub"
        :key="i"
        class="rounded-sm relative px-3 py-1 hover:bg-blue-900"
      >
        <NuxtLink
          :to="data.subFolder ? data.subFolder + item.slug : item.slug"
          class="w-full text-left flex items-center outline-none focus:outline-none"
        >
          <span class="pr-1 flex-1">{{ item.title }}</span>
          <span class="mr-auto" v-if="item.sub">
            <svg
              class="fill-current h-4 w-4 transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </span>
        </NuxtLink>
        <ul
          v-if="item.sub"
          class="bg-primary border divide-y rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32"
        >
          <li
            v-for="(subItem, i) in item.sub"
            :key="i"
            class="rounded-sm relative px-3 py-1 hover:bg-gray-100"
          >
            <NuxtLink
              :to="
                item.subFolder ? item.subFolder + subItem.slug : subItem.slug
              "
              class="w-full text-left flex items-center outline-none focus:outline-none"
            >
              <span class="pr-1 flex-1">{{ subItem.title }}</span>
              <span class="mr-auto" v-if="subItem.sub">
                <svg
                  class="fill-current h-4 w-4 transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </span>
            </NuxtLink>
            <ul
              v-if="subItem.sub"
              class="bg-primary border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32"
            >
              <li
                v-for="(deepItem, i) in subItem.sub"
                :key="i"
                class="px-3 py-1 hover:bg-gray-100"
              >
                <NuxtLink :to="subItem.slug">
                  {{ deepItem.title }}
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
}
</script>

<style scoped>
/* since nested groupes are not supported we have to use 
     regular css for the nested dropdowns 
  */
li > ul {
  transform: translatex(100%) scale(0);
}
li:hover > ul {
  transform: translatex(101%) scale(1);
}
li > button svg {
  transform: rotate(-90deg);
}
li:hover > button svg {
  transform: rotate(-270deg);
}

/* Below styles fake what can be achieved with the tailwind config
     you need to add the group-hover variant to scale and define your custom
     min width style.
  	 See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html
  	 for implementation with config file
  */
.group:hover .group-hover\:scale-100 {
  transform: scale(1);
}
.group:hover .group-hover\:-rotate-180 {
  transform: rotate(180deg);
}
.scale-0 {
  transform: scale(0);
}
.min-w-32 {
  min-width: 8rem;
}
</style>