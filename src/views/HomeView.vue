
<template>
    <div class="common-layout">
      <profile id="Profile"/>
      <works id="Works"/>
  </div>
</template>

<script lang="ts">
import Profile from './Profile.vue';
import Works from './Works.vue';
import Research from './Research.vue';
export default {
  name: 'home',
  components: {
    Profile,
    Works,
    Research,
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
