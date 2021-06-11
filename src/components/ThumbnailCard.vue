<template lang="pug">
Card(:to="link")
  template(#header)
    img(:src="publicPath+'media/img/'+image")
    .imgText {{name}}
  //- template(#title)
    .p-text-center {{name}}
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Card from 'primevue/card';

@Options({
  props: {
    name: String,
    link: String,
    image: String
  },
  components:{Card}
})
export default class ThumbnailCard extends Vue {
  name!: string
  icon!:string
  image!:string
  publicPath= process.env.BASE_URL
  // finalImage=this.publicPath
}
</script>
<style lang="scss">
@import 'primeflex/src/_variables';
@import "../assets/theme.scss";
img{
  object-fit: cover;
  height: auto;
  @media (max-width: $lg) {
    width: 300px;
  }
}
.imgText{
  z-index: 10;
  position: relative;
  bottom: 65px;
  background: rgba(0,0,0, .4);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  padding: 1rem;
  text-align: center;
}
.p-card-content{display: none;}
</style>