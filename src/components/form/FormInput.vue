<template>
  <input :class="ArrayClass" :type="type" :id="id" :placeholder="placeholder" />
</template>

<script>
// import HomeView from '@/components/HomeView.vue'
// import {mapActions,mapState} from 'pinia'

export default {
  props: ['type', 'id', 'placeholder'],
  data() {
    return {
      ArrayClass: [],
    };
  },
  mounted() {
    this.changeClass();
  },
  methods: {
    changeClass() {
      if (this.type === 'checkbox' || this.type === 'radio') {
        this.ArrayClass = [
          "transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20  [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed  [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed",
        ];
        if (this.type === 'checkbox') this.ArrayClass.push('rounded');
      } else {
        this.ArrayClass = [
          'disabled:bg-slate-100 disabled:cursor-not-allowed [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40',
        ];
      }
    },
  },
  computed: {},
  watch: {
    // type() {
    //   this.changeClass();
    // },
  },
};
</script>
