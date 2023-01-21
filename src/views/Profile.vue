<template>
    <el-container>
        <!-- <el-header class="profile">Sanada Masaki's    Profiles</el-header> -->
            <el-main>
              <el-row>
              <el-col :span="12" style="margin:auto">
                <img src="../assets/icon.jpg" style="width:30%;" /> <br>
                <p style="margin-top:10px; font-size: large; text-align: center;"><b> Sanada Masaki </b> </p><br>
              </el-col>
              <el-col :span="12">
                <h2>Socials</h2>
                <div class="sns">
                <el-link href="https://twitter.com/ma_rururu12" type="primary">Twitter</el-link> <br>
                <el-link href="https://www.instagram.com/script1204/" type="warning">instagram</el-link> <br>
                <el-link href="https://github.com/masaki12-s" type="info">Github</el-link> <br>
                <el-link href="https://qiita.com/masaki12-s" type="success">Qiita</el-link> <br>
                </div>
              </el-col>
            </el-row>
                <h2> Introduction </h2>
                <div class="box">
                  <p>
                    <ul>
                      <li>name: 眞田将希 (Masaki Sanada)</li>
                      <li>age: 23</li>
                      <li>Affiliation: 奈良先端科学技術大学院大学 (Nara Institute of Science and Technology)  M1</li>
                      <li>hobby: PC works, trip</li>
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
                        <li> Web development </li>
                        <li> server management </li>
                        <li> Git, Docker </li>
                        <li> interested in DevOps (mainly CI/CD)</li>
                      </ul>
                    </p>
                  </div>
                <h2> todo </h2>
                  <div class="box">
                    <div class="flex justify-space-between mb-4 flex-wrap gap-4">
                      <!-- <el-button link="/Skills">詳細はこちら</el-button> -->
                    </div>
                    <p>
                      <ul>
                        <li> i18n </li>
                        <li> add social icon </li>
                      </ul>
                    </p>
                  </div>
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
  font-size: large;
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
  font-size: large; 
}
.sns {
  background:#ebe9e9; /*背景色の指定*/
  border: #adbdf1 1px solid; /*境界線の指定*/
  padding:10px;
  border-radius: 10px; /*角丸の指定*/
}
.sns p {
  margin-bottom: 10px;
}
.box {
  background:#dcedf8; /*背景色の指定*/
  border: #adbdf1 1px solid; /*境界線の指定*/
  padding:10px;
  border-radius: 10px; /*角丸の指定*/
}
.box p {
  margin-bottom: 10px;
}
.title {
  text-align: center;
  font-weight: bold;
  font-size: large;
}
.el-link {
  font-weight: bold;
  font-size: large;
}
</style>
  