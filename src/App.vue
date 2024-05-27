<template>
  <div id="app">
    <router-view></router-view>
    <PageFooter/>
  </div>
</template>

<script>
import PageFooter from '@/components/PageFooter.vue'

export default {
  name: 'App',
  components: {
    PageFooter
  }
}
</script>
