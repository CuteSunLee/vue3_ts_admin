<template>
  <div class="app">
    <headerbar/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Headerbar from './components/Headerbar.vue';

export default defineComponent({
  name: 'home',
  components: {
    Headerbar,
  },
});
</script>

<style lang="less">

</style>
