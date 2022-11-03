<template>
    <el-header>
        <p style="font-size:40px;font-weight: bold;">skills</p>
    </el-header>
    <el-main>
        <h2 style="text-align: left;"> プログラミング言語 </h2>
        <el-table :data="prolanguage" style="width: 80%" >
            <el-table-column prop="language" label="Language" header-align="center" align="center" width="150" />
            <el-table-column prop="about"  header-align="center" label="about"/>
        </el-table>
        
    </el-main>
     
</template>

<script lang="ts" setup>
const prolanguage = [
    {
      language: 'Python3',
      about: '',
    },
    {
      language: 'Java',
      about: '',
    },
    {
      language: 'Go',
      about: '',
    },
    {
      language: 'C#',
      about: '',
    },
    {
      language: 'C',
      about: '',
    },

  ]
</script>
