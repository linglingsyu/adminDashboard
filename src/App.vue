<template>
  <vHeader></vHeader>
  <div class="flex overflow-hidden">
    <nav
      class="w-[105px] xl:w-[260px] px-5 pb-16 overflow-x-hidden z-50 pt-32 -mt-4 hidden md:block group relative"
      id="SideMenu"
    >
      <sideMenu></sideMenu>
    </nav>
    <div
      class="max-w-full md:max-w-none rounded-[30px] md:rounded-none px-4 md:px-[22px] min-w-0 min-h-screen bg-slate-100 flex-1 md:pt-20 pb-10 mt-5 md:mt-1 relative before:w-full before:h-px before:block"
    >
      <RouterView />
    </div>
  </div>
</template>
<script>
import sideMenu from '@/components/SideMenu.vue';
import vHeader from '@/components/Header.vue';

export default {
  components: {
    sideMenu,
    vHeader,
  },
};
</script>
<style scoped></style>
