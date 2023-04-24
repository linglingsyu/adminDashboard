<template>
  <a
    class="cursor-pointer h-[50px] flex items-center pl-5 text-slate-600 mb-1 relative rounded-xl bg-slate-100 before:content-[''] before:block before:inset-0 before:rounded-xl before:absolute before:border-b-[3px] before:border-solid before:border-black/[0.08] after:content-[''] after:w-[20px] after:h-[80px] after:bg-menu-active after:bg-no-repeat after:bg-cover after:absolute after:top-0 after:bottom-0 after:right-0 after:my-auto after:-mr-[47px] after:opacity-0 after:animate-[0.4s_ease-in-out_0.1s_active-side-menu-chevron] after:animate-fill-mode-forwards"
    href="#"
    ><div class="text-primary z-10">
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
    <div
      class="w-full ml-3 hidden xl:flex items-center text-primary font-medium z-10"
    >
      Dashboard
      <div
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
      </div></div
  ></a>
  <ul
    class="bg-white/[0.04] rounded-xl relative dark:bg-transparent before:content-[''] before:block before:inset-0 before:bg-white/30 before:rounded-xl before:absolute before:z-[-1] before:dark:bg-darkmode-900/30 block"
    style="display: block"
  >
    <li>
      <a
        class="cursor-pointer h-[50px] flex items-center pl-5 text-slate-600 mb-1 relative rounded-xl dark:text-slate-300"
        href="/dashboard-overview-1"
        ><div class="text-slate-700 dark:text-slate-300">
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
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        </div>
        <div
          class="w-full ml-3 hidden xl:flex items-center text-slate-700 font-medium dark:text-slate-300"
        >
          Overview 1
          <!---->
        </div></a
      ><!---->
    </li>
    <li>
      <a
        class="cursor-pointer h-[50px] flex items-center pl-5 text-slate-600 mb-1 relative rounded-xl dark:text-slate-300 text-slate-600 dark:text-slate-400 opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-20"
        href="/dashboard-overview-2"
        ><div class="dark:text-slate-400">
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
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        </div>
        <div
          class="w-full ml-3 hidden xl:flex items-center dark:text-slate-400"
        >
          Overview 2
          <!---->
        </div></a
      ><!---->
    </li>
    <li>
      <a
        class="cursor-pointer h-[50px] flex items-center pl-5 text-slate-600 mb-1 relative rounded-xl dark:text-slate-300 text-slate-600 dark:text-slate-400 opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-30"
        href="/dashboard-overview-3"
        ><div class="dark:text-slate-400">
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
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        </div>
        <div
          class="w-full ml-3 hidden xl:flex items-center dark:text-slate-400"
        >
          Overview 3
          <!---->
        </div></a
      ><!---->
    </li>
    <li>
      <a
        class="cursor-pointer h-[50px] flex items-center pl-5 text-slate-600 mb-1 relative rounded-xl dark:text-slate-300 text-slate-600 dark:text-slate-400 opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-40"
        href="/"
        ><div class="dark:text-slate-400">
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
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        </div>
        <div
          class="w-full ml-3 hidden xl:flex items-center dark:text-slate-400"
        >
          Overview 4
          <!---->
        </div></a
      ><!---->
    </li>
  </ul>
</template>

<script>
import HomeView from '@/components/HomeView.vue';
import { mapActions, mapState } from 'pinia';

export default {
  data() {
    return {
      lists: [
        {
          name: '',
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
