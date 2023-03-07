<template lang="pug">
q-layout(view="hHh lpR fFf")
  q-header.bg-dark.text-main.print-hide(bordered)
    q-toolbar.print-hide
      q-btn(dense flat round icon="menu" @click="toggleLeftDrawer" v-if="$q.screen.lt.sm")
      q-toolbar-title.text-primary(@click="toggleLeftDrawer" v-if="$q.screen.lt.sm") SolAZDev
      .container(v-if="!$q.screen.lt.sm")
        q-tabs.text-primary.text-left(v-model='activeTab')
          q-route-tab(v-for="item in items" :name='item.name', :label='item.label', :to='item.to', no-caps)

  q-drawer.print-hide(v-model="leftDrawerOpen" side="left" overlay bordered)
    //- !-- drawer content --
    .text-h4.text-center.menuText.text-primary Menu
    q-tabs.text-primary.text-left(v-model='activeTab' vertical)
      q-route-tab(v-for="item in items" :name='item.name', :label='item.label', :to='item.to', no-caps)

  q-page-container.body-dark
    router-view
</template>
<script lang="ts" setup>
import { useQuasar } from 'quasar';
import { computed, onMounted, ref } from 'vue';

const $q = useQuasar();

const leftDrawerOpen = ref(false);
const activeTab = ref('home');
const items = ref([
  { name: 'home', label: 'SolAZDev', to: '/', class: 'brand' },
  { name: 'games', label: 'Games', to: '/games' },
  { name: 'resume', label: 'Resume', to: '/resume' },
  { name: 'vport', label: 'Visual Works Portfolio', to: '/visuals' },
  { name: 'other', label: 'Other works', to: '/other' },
]);

onMounted(() => $q.dark.set(true));

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
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
