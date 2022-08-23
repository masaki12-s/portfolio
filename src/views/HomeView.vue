<template>
    <div class="common-layout">
      <!-- <el-button type="primary">Primary</el-button> -->
      <el-container>
        <el-header class="profile" style="height:30px;">Profile</el-header>
            <el-main>
              name 眞田将希 (Sanada Masaki) <br>
              Age 22<br>
              学歴<br>
            </el-main>
      </el-container>

      <el-container>
        <el-header class="skill">スキル</el-header>
            <el-main>
              Network
              machineLeaning

              Python
              Git
              AWS
            </el-main>
      </el-container>
      <el-container>
        <el-header class="link">各種リンク</el-header>
            <el-main>
              note
              Qiita
              github
            </el-main>

</el-container>
      
  </div>
</template>

<script lang="ts">

</script>

<style>

.profile {
  background-color: #97cdf3;
  height:20px;
}
.skill {
  background-color: #97cdf3;
  height:50px;
}
.link {
  background-color: #97cdf3;
}


</style>
