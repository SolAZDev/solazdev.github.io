<template lang="pug">
router-link(:to="link")
  q-img(:src='publicPath+image', :ratio='4/3', spinner-color='primary', spinner-size='82px')
    .absolute-bottom.text-subtitle1.text-center(v-if="name!=''") {{name}}
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    name: String,
    link: String,
    image: String,
    ar: String
  },
})
export default class ThumbnailCard extends Vue {
  name!: string
  icon!:string
  image!:string
  ar="4/3"
  // publicPath= process.env.BASE_URL
  publicPath= "/media/"
}
</script>
