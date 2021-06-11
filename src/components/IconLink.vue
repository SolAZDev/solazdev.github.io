<template lang="pug">
a(:href="link" target="_blank")
    fa(:icon="icon", :size="size")
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    link: String,
    icon: String,
    size: String
  }
})
export default class IconLink extends Vue {
  link!: string
  icon!:string
  size!:string
}
</script>
