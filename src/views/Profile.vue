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
                <p class="title">自己紹介</p>
                <p>
                Age：22 <br>
                趣味：PC触る、食べ物フェスいく<br>
                目標：就活終わらせて、欲しいもの（時計、macbook）を買う、旅行行く  <br>
                    <br>
                    現在<b>奈良先端科学技術大学院大学</b> 在学中です！ <br>
                    <b>ネットワーク</b>の研究室に属しており、インフラ（特にサーバ）にたくさん触れている段階です。
                    Wi-Fi等の電波強度を用いた屋内測位に関する研究を行っております。
                    現在APIについて学習中。Golangを初めて使って作ってます。
                    バックエンドエンジニアorインフラエンジニアを目指して就活中です。
                      </p>
                    <br>
                <p class="title">スキル</p> 
                <p>
                ・プログラミング言語 <br>
                <b>Python</b>, Java, C#, Javascript, C <br>
                ・開発ツール <br>
                GitHub, Subversion, Docker <br>
                </p>
                <p class="title">現在行っているバイト</p> 
                <p>
                <a href="https://pinebase.jp/index.php/docor_system/">Docor開発</a>
                 <br>

                </p>
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
.title {
  text-align: center;
  font-weight: bold;
  font-size: large;
}
</style>
  