<template lang="pug">
a.text-primary(:href="link", target="_blank")
  q-icon(:name="icon", :size="size")
  div(v-if="name!=''") {{ name }}
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Component } from 'vue-property-decorator';

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

<style lang="sass" scoped></style>
