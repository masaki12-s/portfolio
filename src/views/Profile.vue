<template>
    <el-container>
        <el-header class="profile" style="height:60px;padding: auto;">Profile</el-header>
            <el-main>
                <v-row>
                    <v-col cols="6">
                        fdsfs
                    </v-col>
                    <v-col cols="6">
                        name 眞田将希 (Sanada Masaki) <br>
                Age 22 <br>
                <el-table :data="tableData" style="width: 45%" >
                    <el-table-column prop="year_month" label="year_month" width="180" />
                    <el-table-column prop="school" label="School" width="380" />
                    <el-table-column prop="info" label="Info" />
                </el-table>
 
              趣味：PC触る、食べ物フェスいく
              目標：就活終わらせて、欲しいもの（時計、macbook）を買う
              旅行行く   
                    </v-col>
                    aaa
                </v-row>
              
            </el-main>
      </el-container>
</template>

  
  <script lang="ts" setup>
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