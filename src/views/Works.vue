<template>
    <el-header>
        works
    </el-header>
    <el-main>
        <el-row>
            <el-col :span="12">
                <el-card class="box-card" :body-style="{ padding: '0px' }">
                    <div class="card-header">
                        <span>プログラミング言語</span>
                    </div>
                    <div> 
                        Python <br>
                        Java <br>
                        C# <br>
                        Go <br>
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