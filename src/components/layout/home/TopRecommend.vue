<template>
  <div class="top_recommend">
    <div class="top_article">
      <div class="cover">{{ topRecommendData.propA }}</div>
      <div class="inner">
        <div class="small_title num"></div>
        <div class="title"></div>
        <div class="tag_date"></div>
        <div class="des">
          <span></span>
        </div>
      </div>
    </div>
    <div class="top_collection">
      <div class="cover"></div>
      <div class="small_title"></div>
      <div class="title"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const topRecommendData = defineProps({
  propA: Number,
});
</script>

<style scoped>
.top_recommend {
  width: 100px;
  height: 100px;
  background-color: azure;
}
</style>
