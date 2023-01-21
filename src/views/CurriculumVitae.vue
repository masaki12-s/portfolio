<template>
    <div class="grid-content ep-bg-purple-dark" />
    <h2 style="text-align: left;"> 学歴</h2>
        <el-table :data="education" style="width: 600px" >
            <el-table-column prop="year_month" label="年月" header-align="center" align="center" width="120" />
            <el-table-column prop="school" label="学校名" header-align="center"  width="375" />
            <el-table-column prop="info" label="入学/卒業" header-align="center" align="center" />
        </el-table>

    <h2 style="text-align: left;"> インターン経歴 </h2>
        <el-table :data="intern" style="width: 80%" >
            <el-table-column prop="year_month" label="年月" header-align="center" align="center" width="120" />
            <el-table-column prop="company" label="会社名" header-align="center" align="center" width="200" />
            <el-table-column prop="duration" label="期間" header-align="center" align="center" width="120" />
            <el-table-column prop="about" label="業務内容" header-align="center" align="left" />
        </el-table>
    <h2 style="text-align: left;"> アルバイト </h2>
        <el-table :data="work" style="width: 80%" >
            <el-table-column prop="year_month" label="年月" header-align="center" align="center" width="120" />
            <el-table-column prop="company" label="会社名" header-align="center" align="center" width="200" />
            <el-table-column prop="duration" label="期間" header-align="center" align="center" width="140" />
            <el-table-column prop="about" label="業務内容" header-align="center" align="left" />
        </el-table>
</template>
<script lang="ts" setup>
  const intern = [
    {
      company:'株式会社いい生活',
      year_month:'2022年8月',
      duration:'1週間',
      about:"TypeScriptとVue.jsと独自APIを用いたWeb製作",
    },
    {
      company:'株式会社リクルート',
      year_month:'2022年11月',
      duration:"1ヶ月",
      about:"kubecostの検証",
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
  const work = [
    {
      year_month: '2022年9月',
      company: "株式会社pinebase",
      duration: "~ 2024 3月 予定",
      about: "Docorシステム開発（Webシステム開発，サーバ管理等自由にやらせてもらってます）"
    },
  ]
  </script>