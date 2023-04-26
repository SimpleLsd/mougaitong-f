<template>
  <div class="main">
    <div v-if="loaded" class="top_group">
      <!-- 加载时隐藏 -->
      <div class="cover" :style="{ backgroundImage: `url(${cover})` }"></div>
    </div>
    <div v-else class="top_group">
      <!-- 加载时显示 -->
      <div class="loading_cover">
        <ImageLoading />
      </div>
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
.main {
  width: 100px;
  height: 100px;
  background-color: #eee;
}

/* ----------------------------媒体查询部分----------------------------- */
/* 转移到fontsize.css */
/* ------------------------媒体查询-显示数量部分-------------------------- */
@media (max-width: 960px) {
  .main {
    padding: 1% 2%;
    width: 49%;
  }
}
@media (min-width: 961px) {
  .main {
    padding: 1% 2%;
    width: 32%;
  }
}
/* ------------------------------布局部分------------------------------- */
.main {
  background-color: var(--mougaitong-white);
  border-radius: 16px;
}

.top_group {
  display: flex;
  align-items: center;
}
.top_group .cover {
  width: 40%;
  background-size: cover;
  flex-shrink: 0;
  border-radius: 8px;
}
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
}
</style>
