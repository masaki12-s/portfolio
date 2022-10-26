<template>
    <div class="grid-content ep-bg-purple-dark" />
    <h2> 学歴　</h2>
        <el-table :data="education" style="width: 80%" >
            <el-table-column prop="year_month" label="year_month" width="120" />
            <el-table-column prop="school" label="School" width="500" />
            <el-table-column prop="info" label="Info"  />
        </el-table>

    <h2> インターン経歴 </h2>
        <el-table :data="intern" style="width: 80%" >
            <el-table-column prop="year_month" label="year_month" width="120" />
            <el-table-column prop="company" label="company" width="400" />
            <el-table-column prop="about" label="about" />
        </el-table>
</template>
<script lang="ts" setup>
  const intern = [
    {
      company:'qq',
      year_month:'2022年8月',
      about:"",
    }
  ]
  const education = [
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
      school: '奈良先端科学技術大学院大学　先端科学技術研究科',
      info: '入学',
    },
  ]
  </script>