<template lang="pug">
a.text-primary(:href="link", target="_blank")
  q-icon(:name='icon', :size="size")
  .text-body1(v-if="name!=''") {{ name }}
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps({
  link: String,
  icon: String,
  size: String,
  name: String,
});
</script>
