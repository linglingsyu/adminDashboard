<template>
  <ul class="py-2">
    <li v-for="list in lists" :key="list.name">
      <!-- bg-slate-100 -->
      <router-link
        class="h-[50px] flex items-center text-white px-6"
        :to="list.url"
      >
        <div class="z-10">
          <component :is="list.icon" alt="icon" />
        </div>
        <div class="flex items-center w-full ml-3">
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
import IconHome from '@/components/icons/IconHome.vue';
import IconSchedule from '@/components/icons/IconSchedule.vue';
import IconSmartLink from '@/components/icons/IconSmartLink.vue';
import IconGroup from '@/components/icons/IconGroup.vue';
import IconZone from '@/components/icons/IconZone.vue';

export default {
  data() {
    return {
      lists: [
        {
          icon: IconHome,
          name: 'Dashboard',
          url: '/',
        },
        {
          icon: IconZone,
          name: 'Zone',
          url: '/zone',
        },
        {
          icon: IconGroup,
          name: 'Group Control',
          url: '/group',
        },
        {
          icon: IconSchedule,
          name: 'Schedule',
          url: '/schedule',
        },
        {
          icon: IconSmartLink,
          name: 'Smart Link',
          url: '/smartlink',
        },
      ],
    };
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style scoped></style>
