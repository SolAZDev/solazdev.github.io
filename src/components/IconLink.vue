<template lang="pug">
a(:href="link" target="_blank")
    fa(:icon="icon", :size="size") 
    div(v-if="name!=''") {{name}}
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    link: String,
    icon: String,
    size: String,
    name: String
  }
})
export default class IconLink extends Vue {
  link!: string
  icon!:string
  size!:string
  name=""
}
</script>
<style lang="scss" scoped>
@import "../assets/theme.scss";
a{
    color: $textSecondaryColor;
  }
svg{
  margin-bottom: .5rem;
}
</style>
