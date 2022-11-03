<template>
    <el-header>
        <p style="font-size:40px;font-weight: bold;">skills</p>
    </el-header>
    <el-main>
        <h2 style="text-align: left;"> 自信のあるプログラミング言語 </h2>
        <el-table :data="prolanguage" style="width: 80%" >
            <el-table-column prop="language" label="Language" header-align="center" align="center" width="100" />
            <el-table-column prop="duration" label="期間" header-align="center" align="center" width="100" />
            <el-table-column prop="about" label="about"/>
        </el-table>
        <h2 style="text-align: left;"> 使ったことのあるプログラミング言語 </h2>
        <el-table :data="easelanguage" style="width: 80%" >
            <el-table-column prop="language" label="Language" header-align="center" align="center" width="100" />
            <el-table-column prop="duration" label="期間" header-align="center" align="center" width="100" />
            <el-table-column prop="about" label="about"/>
        </el-table>
        <h2 style="text-align: left;"> Webフレームワーク </h2>
        <el-table :data="webframework" style="width: 80%" >
            <el-table-column prop="name" label="name" header-align="center" align="center" width="150" />
            <el-table-column prop="about" label="about"/>
        </el-table>
    </el-main>
     
</template>

<script lang="ts" setup>
    const prolanguage = [
        {
        language: 'Python3',
        duration: '5年',
        about: '趣味・研究で使用',
        },
        {
        language: 'Java',
        duration: '2年',
        about: 'Swingによるお絵描きソフト開発',
        },
        {
        language: 'C#',
        duration: '2年',
        about: '',
        },
    ]
  const easelanguage = [
    {
      language: 'Go',
      duration: '半年',
      about: 'API作成',
    },
    {
      language: 'C',
      duration: '1年',
      about: '授業',
    },
  ]
const webframework = [
    {
        name: "Django",
        about: "Docor開発",
    },
    {
        name: "Flask",
        about: "在庫管理APIの作成",
    },
    {
        name: "Vue.js",
        about: "ポートフォリオ",
    }
]
</script>
