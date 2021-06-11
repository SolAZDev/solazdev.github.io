<template lang="pug">
Menubar(:model="items")
  //- template(#start)
    h5(to="/") SolAZDev
  //- template(#item="{item}")
      (:to="item.to") {{item.label}}
</template>
<script lang='ts'>
import { Options, Vue } from 'vue-class-component';
import Menubar from 'primevue/menubar';
// import PrimeIcons from 'primevue/api'
@Options({
  components:{Menubar}
})
export default class Navbar extends Vue{
  items=[
          {label:'SolAZDev',to:'/', class:"brand"},
          // {label:'About',to:'/about'},
          {label:'Resume',to:'/resume'},
          {label:'Portfolios',to:'/portfolio'},
          {label:'Games',to:'/games'},
          {label:'Other works',to:'/other'},
        ]
}
</script>
<style lang="scss">
@import "../assets/theme.scss";
.brand{
  font-size: 1.2rem;
}
.p-menubar{
  border-radius: 0 !important;
  border-bottom: 5px solid $textSecondaryColor !important;
}
.p-menuitem-icon{display:none}
.p-menuitem-link{
  padding: .75rem .5rem !important;
  &:hover{
    background-color: transparent !important;
  }
}
.p-menuitem-text {
  color: $textSecondaryColor !important; 
}
.p-menubar .p-menubar-button {
  @media (max-width:767px) {
  display: flex;
  width: 2rem;
  height: 2rem;
  color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;}
}
.p-menubar .p-menubar-root-list {
  @media (max-width:767px) {
  background-color: rgb(18, 18, 19);
  background-image: none;
  border-color: rgb(94, 87, 75);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
  }
}
</style>