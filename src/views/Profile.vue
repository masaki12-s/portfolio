<template>
    <el-container>
        <el-header class="profile" height>Sanada Masaki's    Profiles</el-header>
            <el-main>
              <el-row>
              <el-col :span="12">
                <img src="../assets/icon.jpg" style="width:80%;" />
                <p class="name">NAME: 眞田将希 (Sanada Masaki) </p><br>
              </el-col>
              <el-col :span="12">
                       
                       <p>
                        現在<b>奈良先端科学技術大学院大学</b> 在学中。
                        <b>ネットワーク</b>の研究室に属しており，Wi-Fi等の電波強度を用いた屋内測位に関する研究を行っております。
                        <br>
                       現在APIについて学習中。
                       バックエンドエンジニアorインフラエンジニアを目指して就活中です。
                      </p>
                        <br>
                        Age 22 <br>
                        趣味：PC触る、食べ物フェスいく<br>
                        目標：就活終わらせて、欲しいもの（時計、macbook）を買う<br>
                        旅行行く  <br>
              </el-col>
            </el-row>
            </el-main>
      </el-container>
</template>

<style scoped>
.profile {
  font-size: 50px;
  background-color: #97cdf3;
  font-weight: bold;
}
.name {
  font-size:20px;
  font-weight: bold;
  text-align: center;
}
p {
  text-align: left;
}
</style>
  