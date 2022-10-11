<template>
<el-card class="box-card">
  <template #header>
    <div class="card-header">
      <span>研究</span>
    </div>
  </template>
  <div v-for="o in 4" :key="o" class="text item">
    {{ 'List item ' + o }}
  </div>
</el-card>

</template>
