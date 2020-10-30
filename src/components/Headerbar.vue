<template>
    <div class="header">
        <header>
            <router-link to="/">HOME</router-link> |
            <router-link to="/about">ABOUT</router-link> |
            <router-link to="/list">LIST</router-link>
        </header>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Headerbar',
});
</script>

<style lang="less">
header {
    box-sizing: border-box;
    height: 60px;
    line-height: 60px;
    background: #3998fc;
    color: #fff;
    font-weight: 800;
    text-align: center;
    a {
        margin: 0 20px;
        color: #fff;
    }
}
</style>
