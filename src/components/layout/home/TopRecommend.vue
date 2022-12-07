<template>
  <div class="top_recommend">
    <div class="top_article">
      <div class="cover">{{ topRecommendData.propA }}</div>
      <div class="text">测试文字</div>
      <div class="inner">
        <div class="small_title num">
          <!-- {{ storeNum }} -->
          {{ metadata.totalNum }}
        </div>
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
  <!-- <img src="http://43.142.29.240/static/cover_01.png" alt="1" /> -->
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const topRecommendData = defineProps({
  propA: Number,
});

const metadata = computed(() => store.state.metadata);
</script>

<style scoped>
.top_recommend {
  width: 100%;
  background-color: azure;
}
.top_recommend::after {
  content: "";
  padding-top: 15%;
  display: block;
}
.text {
  font-size: 1.5rem;
}
</style>
