<template>
  <ul>
    <li v-for="(list, index) in lists" :key="list.name">
      <!-- bg-slate-100 -->
      <router-link
        class="cursor-pointer h-[50px] flex items-center pl-5 text-slate-600 mb-1 relative rounded-xl hover:bg-slate-100 hover:before:content-[''] hover:before:block hover:before:inset-0 hover:before:rounded-xl hover:before:absolute hover:before:z-[-1] hover:before:border-b-[3px] hover:before:border-solid hover:before:border-black/[0.08] opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] !animate-fill-mode-forwards"
        :style="{ animationDelay: `${(index + 1) * 0.1}s` }"
        :to="list.url"
        :id="`menu${index}`"
        v-tippy="{ content: list.name, disabled: screenWidth >= 768 }"
      >
        <div class="z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="stroke-1.5"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </div>
        <div class="w-full ml-3 hidden xl:flex items-center font-medium z-10">
          {{ list.name }}
          <!-- <div
              class="transition ease-in duration-100 ml-auto mr-5 hidden xl:block transform rotate-180"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="stroke-1.5 w-4 h-4"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div> -->
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
// import HomeView from '@/components/HomeView.vue';
// import { mapActions, mapState } from 'pinia';

export default {
  data() {
    return {
      lists: [
        {
          name: 'Dashboard',
          url: '/',
        },
        {
          name: 'Zone',
          url: '/zone',
        },
        {
          name: 'Group Control',
          url: '/group',
        },
        {
          name: 'Group',
          url: '/group',
        },
        {
          name: 'Schedule',
          url: '/schedule',
        },
      ],
    };
  },
  mounted() {},
  methods: {},
  computed: {
    screenWidth() {
      return window.innerWidth;
    },
  },
  watch: {},
};
</script>

<style scoped></style>
