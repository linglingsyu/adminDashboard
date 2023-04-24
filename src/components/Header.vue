<template>
  <!-- 手機板 -->
  <div class="py-5 md:py-0">
    <div
      class="w-full fixed bg-primary/90 z-[60] border-b border-white/[0.08] -mt-5 sm:-mx-8 mb-6 md:hidden before:content-[''] before:w-full before:h-screen before:z-10 before:fixed before:inset-x-0 before:bg-black/90 before:transition-opacity before:duration-200 before:ease-in-out"
      :class="
        mobileMenu
          ? 'before:visible before:opacity-100'
          : 'before:invisible before:opacity-0'
      "
    >
      <div class="h-[70px] px-3 sm:px-8 flex items-center">
        <a href="" class="flex mr-auto text-white uppercase"
          >dexatek esg system
        </a>
        <a href="#" @click.prevent="mobileMenu = !mobileMenu">
          <IconMenu></IconMenu>
        </a>
      </div>
      <simplebar
        v-show="mobileMenu"
        class="h-screen z-20 top-0 left-0 w-[270px] bg-primary transition-all duration-300 ease-in-out [&[data-simplebar]]:fixed [&_.simplebar-scrollbar]:before:bg-black/50 ml-0"
        data-simplebar-auto-hide="false"
        data-simplebar="init"
      >
        <a
          href="#"
          class="fixed top-0 right-0 mt-4 mr-4 transition-opacity duration-200 ease-in-out visible opacity-100"
          @click.prevent="mobileMenu = !mobileMenu"
          ><IconMenuCancel></IconMenuCancel
        ></a>
        <MobileMenu></MobileMenu>
      </simplebar>
    </div>

    <!-- PC -->
    <div
      class="h-[70px] md:h-[65px] z-[51] border-b border-white/[0.08] mt-14 md:mt-0 sm:-mx-8 md:-mx-0 px-3 md:border-b-0 relative md:fixed md:inset-x-0 md:top-0 sm:px-8 md:px-10 md:pt-10 md:bg-gradient-to-b md:from-slate-100 md:to-transparent before:content-[''] before:absolute before:h-[65px] before:inset-0 before:top-0 before:mx-7 before:bg-primary/30 before:mt-3 before:rounded-xl before:hidden before:md:block after:content-[''] after:absolute after:inset-0 after:h-[65px] after:mx-3 after:bg-primary after:mt-5 after:rounded-xl after:shadow-md after:hidden after:md:block"
    >
      <div class="flex items-center h-full">
        <a href="/" class="-intro-x hidden md:flex xl:w-[180px]">
          <!-- <img
          alt="Enigma Tailwind HTML Admin Template"
          class="w-6"
          src="/assets/logo.9a88cec5.svg"
        /> -->
          <span class="ml-3 text-lg text-white hidden xl:block"> Enigma </span>
        </a>
        <nav
          class="flex h-[45px] md:ml-10 md:border-l border-white/[0.08] mr-auto -intro-x md:pl-6"
          aria-label="breadcrumb"
        >
          <ol class="flex items-center text-primary text-white/90">
            <li class="">
              <a href="/" class="router-link-active">Application</a>
            </li>
            <li
              class="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-bredcrumb-chevron-light before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 text-white/70"
            >
              <a href="/" class="router-link-active"> Dashboard </a>
            </li>
          </ol>
        </nav>
        <!-- search bar -->
        <!-- <div class="relative mr-3 intro-x sm:mr-6">
          <div class="relative hidden sm:block">
            <input
              class="disabled:bg-slate-100 disabled:cursor-not-allowed [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed text-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-opacity-40 border-transparent w-56 shadow-none !rounded-full bg-slate-200 pr-8 transition-[width] duration-300 ease-in-out focus:border-transparent focus:w-72"
              type="text"
              placeholder="Search..."
            />
            <IconSearch
              class="absolute inset-y-0 right-0 my-auto mr-3 text-slate-600"
            ></IconSearch>
          </div>
          <a class="relative text-white/70 sm:hidden" href="">
            <IconSearch></IconSearch>
          </a>
        </div> -->
        <div class="relative mr-4 intro-x sm:mr-6">
          <div
            class="cursor-pointer relative text-white/70 outline-none block before:content-[''] before:w-[8px] before:h-[8px] before:rounded-full before:absolute before:top-[-2px] before:right-0 before:bg-danger"
            id="headlessui-popover-button-1"
            aria-expanded="false"
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
              class="stroke-1.5 w-5 h-5"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
        </div>
        <div class="relative">
          <Menu>
            <MenuButton
              class="cursor-pointer block w-8 h-8 overflow-hidden rounded-full shadow-lg image-fit zoom-in intro-x"
            >
              <img alt="avatar" src="@/assets/avatar.webp" />
            </MenuButton>
            <div class="absolute z-30 top-[100%] right-0 mt-1">
              <MenuItems
                class="p-2 shadow-[0px_3px_10px_#00000017] border-transparent rounded-md dark:border-transparent w-56 mt-px relative bg-primary/80 before:block before:absolute before:bg-black before:inset-0 before:rounded-md before:z-[-1] text-white"
              >
                <div class="p-2 font-normal">
                  <div class="font-medium">Welcome</div>
                  <div class="text-xs text-white/70 mt-0.5">Admin</div>
                </div>
                <div class="h-px my-2 -mx-2 bg-white/[0.08]"></div>
                <MenuItem
                  class="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-white/5"
                  v-slot="{ active }"
                  v-for="item in menuItems"
                  :key="item.name"
                >
                  <router-link
                    :class="{ 'bg-blue-500': active }"
                    :to="item.url"
                  >
                    <component :is="item.icon" alt="icon" /> {{ item.name }}
                  </router-link>
                </MenuItem>
                <div class="h-px my-2 -mx-2 bg-white/[0.08]"></div>
                <router-link
                  class="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-white/5"
                  :class="{ 'bg-blue-500': active }"
                  to="/"
                >
                  <IconLogout></IconLogout> Logout
                </router-link>
              </MenuItems>
            </div>
          </Menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HomeView from '@/components/HomeView.vue';
// import { mapActions, mapState } from 'pinia';
import simplebar from 'simplebar-vue';
import 'simplebar-vue/dist/simplebar.min.css';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';

import MobileMenu from '@/components/MobileMenu.vue';
import IconProfile from '@/components/icons/IconProfile.vue';
import IconAddAccount from '@/components/icons/IconAddAccount.vue';
import IconResetPassword from '@/components/icons/IconResetPassword.vue';
import IconLogout from '@/components/icons/IconLogout.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import IconMenuCancel from '@/components/icons/IconMenuCancel.vue';
import IconMenu from '@/components/icons/IconMenu.vue';

export default {
  data() {
    return {
      mobileMenu: false,
      menuItems: [
        {
          icon: IconProfile,
          name: 'Profile',
          url: '/profile',
        },
        {
          icon: IconAddAccount,
          name: 'Add Account',
          url: '/addAccount',
        },
        {
          icon: IconResetPassword,
          name: 'Reset Password',
          url: '/resetPassword',
        },
      ],
    };
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
  components: {
    MobileMenu,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    simplebar,
    IconLogout,
    IconSearch,
    IconMenuCancel,
    IconMenu,
  },
};
</script>

<style scoped></style>
