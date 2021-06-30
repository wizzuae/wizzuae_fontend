<template>
  <div>
    <transition
      name="expand"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
    >
      <ul v-show="list.open" class="sub-items">
        <li
          class="sub-item bg-secondary hover:( filter brightness-95)"
          v-for="(item, index) in list.sub"
          :key="'item' + index"
        >
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
          <div @click="item.open = !item.open">
            <nuxt-link class="flex title" :to="item.slug">
              {{ item.title }}
            </nuxt-link>
          </div>
          <!-- 
          Renders the Dropdown Component again if the current item has subnav elements
        -->

          <mobile-nav-dropdown
            class="subnav"
            v-if="item.sub"
            :list="item"
          ></mobile-nav-dropdown>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
const MobileNavDropdown = () => import('./MobileNavDropdown.vue')
export default {
  name: 'mobile-nav-dropdown',
  components: { MobileNavDropdown },
  props: ['list'],
  methods: {
    enter(el) {
      // set the element to his natural hight
      el.style.height = 'auto'
      /*
          get the calculated height.
          getComputedStyle returns an object containing all the CSS properties 
          of the element after all active styles have been loaded and the basic 
          calculations have been performed.
          We need the height after all basic calculations have been performed, 
          then the height of each element here is dynamically, 
          based on the number of items in the sublist.
        */
      const height = getComputedStyle(el).height
      // set the height to zero for the opening animation
      el.style.height = 0
      /*
          Force the repaint to make sure the animation is triggered correctly, 
          then you can fire the method getComputedStyle again.
          This is not necessary, but sometimes the animation may not start depending on the case.
        */
      getComputedStyle(el)
      /*
          Set the height from the element to the calculated height.
          With setTimeout you make sure the browser has finished the painting 
          after setting the height to zero.
        */
      setTimeout(() => {
        el.style.height = height
      })
    },
    afterEnter(el) {
      el.style.height = 'auto'
    },
    leave(el) {
      /*
          Same as with the enter method, but only the other way around.
        */
      el.style.height = getComputedStyle(el).height
      getComputedStyle(el)
      setTimeout(() => {
        el.style.height = 0
      })
    },
  },
}
</script>

<style lang="scss" scoped>
/*
    CSS definitions for the sublist
  */
.sub-items {
  list-style: none;
  .sub-item {
    position: relative;
    border-top: 1px solid #fafafa;
    cursor: pointer;
    .subnav {
      padding-left: 20px;
    }
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
/*
    The CSS classes for the opening and closing animation.
  */
.expand-enter-active,
.expand-leave-active {
  transition: height 0.5s ease-in-out;
  overflow: hidden;
}
</style>
