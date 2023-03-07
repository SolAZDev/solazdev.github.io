<template lang="pug">
q-btn(color='primary', :icon='icon', :size='size' @click='openLink(link)' round)
  q-tooltip(v-if='name!=""') {{ name }}
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps({
  link: String,
  icon: String,
  size: String,
  name: String,
});
function openLink(url: string) {
  window.open(url, '_blank');
}
</script>
