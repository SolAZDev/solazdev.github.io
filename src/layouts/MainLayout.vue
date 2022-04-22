<template lang="pug">
q-layout(view="hHh lpR fFf")
  q-header.bg-dark.text-main.print-hide(bordered)
    q-toolbar.print-hide
      q-btn(dense flat round icon="menu" @click="toggleLeftDrawer" v-if="$q.screen.lt.sm")
      q-toolbar-title.text-primary(@click="toggleLeftDrawer" v-if="$q.screen.lt.sm") SolAZDev
      .container(v-if="!$q.screen.lt.sm")
        q-tabs.text-primary.text-left(v-model='tab')
          q-route-tab(v-for="item in items" :name='item.name', :label='item.label', :to='item.to', no-caps)

  q-drawer.print-hide(v-model="leftDrawerOpen" side="left" overlay bordered width="50vw")
    //- !-- drawer content --
    .text-h4.text-center.menuText.text-primary Menu
    q-tabs.text-primary.text-left(v-model='tab' vertical)
      q-route-tab(v-for="item in items" :name='item.name', :label='item.label', :to='item.to', no-caps)

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

.q-toolbar
  margin-bottom: -1px

.q-tabs--vertical
  height: 50vh

.menuText
  padding-top: 8px
  height:50px

</style>
