<template>
    <el-container>
        <el-header class="profile" height>Sanada Masaki's    Profiles</el-header>
            <el-main>
                <el-row>    
                    <el-col :span="12"><div class="grid-content ep-bg-purple-dark" />
                       <p class="name">NAME: 眞田将希 (Sanada Masaki) </p><br>
                        Age 22 <br>
                        趣味：PC触る、食べ物フェスいく<br>
                        目標：就活終わらせて、欲しいもの（時計、macbook）を買う<br>
                        旅行行く  <br>
                    </el-col>
                    
                    <el-col :span="12">
                        <div class="grid-content ep-bg-purple-dark" />
                        <h2> 学歴　</h2>
                            <el-table :data="tableData" style="width: 120%" >
                                <el-table-column prop="year_month" label="year_month" width="120" />
                                <el-table-column prop="school" label="School" width="400" />
                                <el-table-column prop="info" label="Info"  />
                            </el-table>
                        <h2> インターン経歴 </h2>
                            <el-table :data="intern" style="width: 100%" >
                                <el-table-column prop="year_month" label="year_month" width="120" />
                                <el-table-column prop="company" label="company" width="400" />
                                <el-table-column prop="about" label="about" />
                            </el-table>
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
}

.hobby {

}
</style>
  
<script lang="ts" setup>
import internal from 'stream';

  const intern = [
    {
      company:'qq',
      year_month:'2022年8月',
      about:"",
    }
  ]
  const tableData = [
    {
      year_month: '2015年4月',
      school: '奈良工業高等専門学校　情報工学科',
      info: '入学',
    },
    {
      year_month: '2020年3月',
      school: '奈良工業高等専門学校　情報工学科',
      info: '卒業',
    },
    {
      year_month: '2020年4月',
      school: '奈良工業高等専門学校　専攻科　情報システムコース',
      info: '入学',
    },
    {
      year_month: '2022年3月',
      school: '奈良工業高等専門学校　専攻科　情報システムコース',
      info: '卒業',
    },
    {
      year_month: '2022年4月',
      school: '奈良先端科学技術大学　先端科学技術研究科',
      info: '入学',
    },
  ]
  </script>