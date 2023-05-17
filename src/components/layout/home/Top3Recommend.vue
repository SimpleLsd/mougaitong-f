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
      <ImageLoading />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { IArticle } from "@/store/types";

// import { numtoNO3, dateMD } from "@/utils/tools";
// import ContentLoading from "@/components/common/ContentLoading.vue";

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

/* .top_group .cover::after {
  content: "";
  display: block;
  padding-top: 60%;
} */
/*
.top_group .cover::after {
  content: "";
  display: block;
  padding-top: 56%;
}

.loading_cover {
  width: 40%;
  background-size: cover;
  flex-shrink: 0;
  border-radius: 8px;
}
.loading_title {
  width: 60%;
  padding-left: 4%;
}

.loading_tag_date,
.loading_des {
  margin-top: 4%;
}

.top_group .title_group {
  width: 60%;
  padding-left: 4%;
}
.title {
  font-weight: 700;
  margin-top: 2%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.tag_date {
  margin: 2% 0;
  display: flex;
  justify-content: space-between;
}
.des {
  width: 100%;
  margin: 2% 0;
} */
</style>
