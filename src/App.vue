<template>
<div class="common-layout">
  <el-container>
    <el-header>
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
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
  

   
</div>
  
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
