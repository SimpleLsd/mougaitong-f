<template>
  <div class="home_main">
    <TopRecommend :prop-a="42" />
  </div>
</template>

<script setup lang="ts">
import TopRecommend from "@/components/layout/home/TopRecommend.vue";
</script>

<style scoped>
.home_main {
  background-color: #f6f6f7;
  width: 100%;
  height: 100%;
  padding: 20px 20px;
}
</style>
