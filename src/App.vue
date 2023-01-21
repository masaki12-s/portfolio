<template>
<div class="common-layout">
  <el-container>
    <el-container>
      <el-header>
        <el-menu
          default-active="/"
          class="el-menu-demo"
          mode="horizontal"
          router="true"
        >
          <el-menu-item index="/">Home</el-menu-item>
          <el-menu-item index="cv">Curriculum Vitae</el-menu-item>
          <el-menu-item index="skills">Skills</el-menu-item>
          <!-- <el-menu-item index="/works">Works</el-menu-item> -->
        </el-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.me {
  margin-top: 30px;
}
.el-link {
  font-weight: bold;
  margin: 5px;
}
</style>
