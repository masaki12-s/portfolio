<template>
    <div class="common-layout">
      <!-- <el-button type="primary">Primary</el-button> -->
      <el-container>
        <el-header class="profile" style="height:30px;padding: auto;">Profile</el-header>
            <el-main>
              name 眞田将希 (Sanada Masaki) <br>
              Age 22 <br>
              学歴 <br>
              <el-card class="box-card">
                <template #header>
                  <div class="card-header">
                    <span>スキル</span>
                  </div>
                </template>
                <div> Network
                      machineLeaning
                      Python
                      Git
                      AWS
            </div>


              </el-card>
              <el-card class="box-card">
                <template #header>
                  <div class="card-header">
                    <span>研究</span>
                  </div>
                </template>
                <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
              </el-card>

              <el-card class="box-card">
                <template #header>
                  <div class="card-header">
                    <span>各種リンク</span>
                  </div>
                </template>
                <div v-for="o in 4" :key="o" class="text item">              note
              Qiita
              github</div>
              </el-card>
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

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
  float: left;
}
</style>
