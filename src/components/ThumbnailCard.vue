<template lang="pug">
router-link(:to="link")
  q-img(:src='image', :ratio='4/3', spinner-color='primary', spinner-size='82px')
    .absolute-bottom.text-subtitle1.text-center(v-if="name!=''") {{name}}

</template>
<script lang="ts" setup>
import { defineProps, ref } from 'vue';
const props = defineProps({
  name: String,
  link: { type: String, required: true },
  image: String,
});
const publicPath = ref('/media/');
</script>
