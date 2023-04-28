<template>
  <div class="mt-8">
    <vCard></vCard>

    <VueDatePicker week-numbers="iso" v-model="date" />

    <div class="my-3">
      <v-select
        multiple
        v-model="test"
        :options="['Canada', 'United States']"
        :clearable="false"
      ></v-select>
    </div>

    <button
      type="button"
      class="btn btn-primary"
      @click="this.$refs.testModal.openModal()"
    >
      Open dialog
    </button>

    <button
      type="button"
      class="btn btn-primary btn-large rounded-full btn-primary-soft"
      @click="this.$refs.testModal.openModal()"
    >
      Open dialog
    </button>
    <BlankModal ref="testModal"></BlankModal>
  </div>
</template>

<script>
import vCard from '@/components/card/Card.vue';
import BlankModal from '@/components/modal/BlankModal.vue';

// import { mapActions, mapState } from 'pinia';

export default {
  data() {
    return {
      date: null,
      test: ['Canada'],
    };
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
  components: {
    vCard,
    BlankModal,
  },
};
</script>

<style scoped></style>
