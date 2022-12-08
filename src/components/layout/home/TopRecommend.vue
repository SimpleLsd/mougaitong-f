<template>
  <div class="top_recommend">
    <div
      class="top_article_cover"
      :style="{ backgroundImage: `url(${toparticle.cover})` }"
    ></div>
    <div class="top_article">
      <div class="small_title num">
        <!-- {{ storeNum }} -->
        {{ metadata.totalNum }}
        {{ count }}
      </div>
      <div class="title"></div>
      <div class="tag_date"></div>
      <div class="des">
        <span></span>
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
import { computed, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();

// const topRecommendData = defineProps({
//   propA: Number,
// });

const metadata = computed(() => store.state.metadata);
const toparticle = computed(() => store.state.toparticle);

const count = ref(0);

count.value = metadata.value.totalNum;
</script>

<style scoped>
.top_recommend {
  width: 100%;
  background-color: #fff;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  padding: 28px 50px;
}
.top_recommend::after {
  /* 等比缩放顶部推荐 */
  content: "";
  padding-top: 15%;
  display: block;
}
.top_article_cover {
  width: 25%;
  background-color: azure;
  background-position: center;
  background-size: cover;
  flex-shrink: 0;
}
.top_article_cover::after {
  content: "";
  display: block;
  padding-top: 56%;
}
</style>
