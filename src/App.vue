<template>
  <!-- <nav>
    <router-link to="/portfolio">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/cv">cv</router-link> |
  </nav>
  <router-view/> -->

  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    router=true
  >
    <el-menu-item index="/portfolio">Home</el-menu-item>
    <el-menu-item index="/works">Works</el-menu-item>
    <el-menu-item index="/cv" >Curriculum Vitae</el-menu-item>
    <el-menu-item index="4">Works</el-menu-item>
  </el-menu>
<router-view/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const activeIndex = ref('1')
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color:#26e690;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
