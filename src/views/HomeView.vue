
<template>
    <div class="common-layout">
      <profile id="Profile"/>
  </div>
</template>

<script lang="ts">
import Profile from './Profile.vue';
export default {
  name: 'home',
  components: {
    Profile,
  },
};

</script>

<style>


.skill {
  background-color: #97cdf3;
  height:50px;
}
.link {
  background-color: #97cdf3;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
  float: left;
}
</style>
