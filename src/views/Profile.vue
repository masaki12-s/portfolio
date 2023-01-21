<template>
    <el-container>
        <!-- <el-header class="profile">Sanada Masaki's    Profiles</el-header> -->
            <el-main>
              <el-row>
              <el-col :span="12">
                <img src="../assets/icon.jpg" style="width:70%; margin-top: 10%; margin-right: 10%;" />
                <p class="name">NAME: 眞田将希 (Sanada Masaki) </p><br>
              </el-col>
              <el-col :span="12">
                <h2> Introduction </h2>
                <div class="box">
                  <p>
                    <ul>
                      <li>name: 眞田将希</li>
                      <li>age: 23</li>
                      <li>所属: 奈良先端科学技術大学院大学 修士1年 </li>
                      <li>趣味: PC?, 食べ物, 旅行</li>
                    </ul>
                  </p>
                </div>
                <h2> stacks </h2>
                  <div class="box">
                    <div class="flex justify-space-between mb-4 flex-wrap gap-4">
                      <!-- <el-button link="/Skills">詳細はこちら</el-button> -->
                    </div>
                    <p>
                      <ul>
                        <li> Web開発 </li>
                        <li> サーバ管理 </li>
                        <li> Git, Docker </li>
                        <li> DevOps(特にCI/CD)に興味あり </li>
                      </ul>
                    </p>
                  </div>
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
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-right: 10%;
}
p {
  text-align: left;
}
ul {
  list-style-type: circle,
}
li {
  font-size: 20px; 
}
.box {
  background:#dcedf8; /*背景色の指定*/
  border: #adbdf1 1px solid; /*境界線の指定*/
  padding:10px;
  border-radius: 10px; /*角丸の指定*/
}
.box p {
margin:0;
padding:0;
}

</style>
  