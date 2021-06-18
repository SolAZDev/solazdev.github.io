<template lang="pug">
router-link(:to="link")
  img(:src="publicPath+'media/img/'+image" ref="img")
  .imgText {{name}}
  //- template(#title)
    .p-text-center {{name}}
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import Card from 'primevue/card';

@Options({
  props: {
    name: String,
    link: String,
    image: String
  },
  // components:{Card}
})
export default class ThumbnailCard extends Vue {
  name!: string
  icon!:string
  image!:string
  publicPath= process.env.BASE_URL
  imageWidth="0px"
  mounted(){
    this.imageWidth=(this.$refs.img as HTMLImageElement).width + "px"
  }
  get imageWidthComputed(){
    return (this.$refs.img as HTMLImageElement).width + "px"
  }
}
</script>
<style lang="scss">
@import "../assets/theme.scss";
$borderRadius: 5px;
img{
  display: inline-block;
  object-fit: cover;
  width: 100%;
  border-radius: $borderRadius;
  height: v-bind(imageWidth);
}
a{text-decoration: none;}
.imgText{
  color: $textColor;
  border-bottom-left-radius: $borderRadius;
  border-bottom-right-radius: $borderRadius;
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
// .p-card-content{display: none;}
</style>