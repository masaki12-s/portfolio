<template>
    <el-header>
        <p style="font-size:40px;font-weight: bold;">works</p>
    </el-header>
    <el-main>
        <el-row>
            <el-col :span="12">
                <el-card class="box-card" :body-style="{ padding: '10px' }">
                  <b>プログラミング言語</b>
                  <el-scrollbar height="400px">
                    <p v-for="item in language" :key="item" class="scrollbar-demo-item">{{ item }}</p>
                </el-scrollbar>

                </el-card>
            </el-col>
  
            <el-col :span="12">
                <el-card class="box-card" :body-style="{ padding: '0px' }">
                    <!-- <div class="card-header"> -->
                        <b>分野</b>
                        <el-scrollbar height="400px">
                            <p v-for="item in field" :key="item" class="scrollbar-demo-item">{{ item }}</p>
                        </el-scrollbar>
                    
                    <div> 
                    </div>
                </el-card>
            </el-col>
        </el-row>
        
    </el-main>
     
</template>

<script lang="ts">
export default {
    data: () => {
        return {
            language: ["Python3", "Java", "C#"],
            field: ["Network", "machineLeaning", "Git", "AWS"],
        }
    }
}
    
</script>
<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>