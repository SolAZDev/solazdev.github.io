<template lang="pug">
.px-2.px-md-3.py-2
    .title.text-center #[h3 Level Designs]
    .gallery
        div(v-for="sc in levels")
            img(:src="sc.file" fluid).pics
</template>
<style lang="scss" scoped>I just 
.gallery {
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  column-width: 33%;
  img {
    padding: 5px;
  }
  .pics {
    -webkit-transition: all 350ms ease;
    transition: all 350ms ease;
  }
  .animation {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
}
</style>