<template>
  <label class="cursor-pointer ml-2" :for="htmlFor"><slot></slot></label>
</template>

<script>
export default {
  props: ['htmlFor'],
};
</script>
