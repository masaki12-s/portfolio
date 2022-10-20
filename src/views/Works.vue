<template>
    <el-header>
        <p style="font-size:40px;font-weight: bold;">works</p>
    </el-header>
    <el-main>
        <el-row>
            <el-col :span="12">
                <el-card class="box-card" :body-style="{ padding: '10px' }">
                  <b>プログラミング言語</b>
            
                    <div> 
                        Python <br>
                        Java <br>
                        C# <br>
                        Go <br>
                        Vue.js <br>
                    </div>
                </el-card>
            </el-col>
  
            <el-col :span="12">
                <el-card class="box-card" :body-style="{ padding: '0px' }">
                    <div class="card-header">
                        <span>プログラミング言語</span>
                    </div>
                    <div> Network
                      machineLeaning
                      Python
                      Git
                      AWS
                    </div>
                </el-card>
            </el-col>
        </el-row>
        
    </el-main>
     
</template>