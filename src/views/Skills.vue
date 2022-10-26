<template>
    <el-header>
        <p style="font-size:40px;font-weight: bold;">works</p>
    </el-header>
    <el-main>
        <el-row>            
            <el-card class="box-card" :body-style="{ padding: '10px' }">
                <b>プログラミング言語</b>
                <p v-for="item in language" :key="item" class="scrollbar-demo-item">{{ item }}</p>
            </el-card>

        </el-row>
        
    </el-main>
     
</template>

<script lang="ts">
export default {
    data: () => {
        return {
            language: [prolanguage],
            field: ["Network", "machineLeaning", "Git", "AWS"],
        }
    }
}
const prolanguage = [
    {
      language: 'Python3',
      duration: '5',
      about: '入学',
    },
  ]
</script>
<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin: 20px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>