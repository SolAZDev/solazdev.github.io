<template lang="pug">
q-layout view="hHh lpR fFf"
  q-header.bg-dark.text-main( bordered)
    q-toolbar
      q-btn(dense flat round icon="menu" @click="toggleLeftDrawer" v-if="isSmall")
      q-toolbar-title.text-primary(v-if="isSmall") SolAZDev
      //- span(v-if="!isSmall")
        span(to="/reusme") Resume
        span(to="/visual") Visual Works
      q-tabs.text-primary(v-model='tab' v-if="!isSmall")
        q-route-tab(v-for="item in items" :name='item.name', :label='item.label', :to='item.to', no-caps)

  q-drawer(v-model="leftDrawerOpen" side="left" overlay bordered )
    div Hello!
    //- !-- drawer content --

  q-page-container.body-dark
    router-view
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

@Options({})
export default class MainLayout extends Vue {
	leftDrawerOpen = false;
	// essentialLinks = linksList;
  items=[
          {name:'home', label:'SolAZDev',to:'/', class:"brand"},
          {name:'resume', label:'Resume',to:'/resume'},
          {name:'vport', label:'Visual Works Portfolio',to:'/visuals'},
          {name:'games', label:'Games',to:'/games'},
          {name:'other', label:'Other works',to:'/other'},
        ]
        mounted(){
          this.$q.dark.set(true)
        }
	toggleLeftDrawer () {
		this.leftDrawerOpen = !this.leftDrawerOpen
	}
  activeTab="home";

  get MidSmall(){return (this.$q.screen.sizes.sm+(this.$q.screen.sizes.md/4));}

  get isSmall(){
    return  this.$q.screen.lt.md;
  }

}
</script>
<style lang="sass" scoped>
.q-drawer
  max-width:50vw

.q-header
  border-color: $primary !important

.q-header--bordered
  border-bottom: 2px solid $primary !important

</style>
