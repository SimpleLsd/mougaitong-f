<template>
  <div class="main">
    <!-- 加载时隐藏 -->
    <div
      v-if="loaded"
      class="cover radius12"
      :style="{ backgroundImage: `url(${cover})` }"
    ></div>
    <!-- 加载时显示 -->
    <div v-else class="loading_cover radius12">
      {{ props }}
      <ImageLoading />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { IArticle } from "@/store/types";

import ImageLoading from "@/components/common/ImageLoading.vue";

interface Props {
  article: IArticle;
}
const props = defineProps<Props>();

const loaded = computed(() => {
  return props.article ? true : false;
});

const cover = computed(() => {
  return props.article ? props.article.cover : "";
});
</script>
<style scoped>
@media (max-width: 960px) {
  .main {
    width: 50%;
  }
}
@media (min-width: 961px) {
  .main {
    width: 350px;
  }
}
.cover {
  width: 100%;
  height: 100%;
  background-size: cover;
}
.cover::after {
  content: "";
  display: block;
  padding-top: 60%;
}
</style>
