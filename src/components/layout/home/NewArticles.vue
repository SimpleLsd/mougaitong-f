<template>
  <div class="main">
    <div v-if="loaded" class="cover_container">
      <!-- 加载时隐藏 -->
      <div class="cover" :style="{ backgroundImage: `url(${cover})` }"></div>
      <div class="title_group"></div>
    </div>

    <div v-else class="cover_container">
      <!-- 加载时显示 -->
      <div class="loading_cover">
        <ImageLoading />
      </div>
    </div>

    <div v-if="loaded" class="info_container">
      <div class="num theme_red">
        {{ `NO.${articleNumStr}` }}
      </div>
      <div class="title">
        {{ title }}
      </div>
      <div class="tag_data">
        <div class="theme_red">
          {{ tag }}
        </div>
        <div class="gray">
          {{ dateStr }}
        </div>
      </div>
    </div>

    <!-- <div v-else class="loading_tag_date">
      <ContentLoading />
    </div> -->

    <!-- <div v-if="loaded" class="des des_font dark_gray">
      {{ subTitle }}
    </div>
    <div v-else class="loading_des">
      <ContentLoading />
    </div> -->
  </div>
</template>
<script lang="ts" setup>
// import ContentLoading from "@/components/common/ContentLoading.vue";
import ImageLoading from "@/components/common/ImageLoading.vue";
import { computed } from "vue";
import type { IArticle } from "@/store/types";
import { numtoNO3, dateMD } from "@/utils/tools";

interface Props {
  article: IArticle;
}
const props = defineProps<Props>();

const loaded = computed(() => {
  return props.article ? true : false;
});

const title = computed(() => {
  return props.article ? props.article.title : "";
});

const cover = computed(() => {
  return props.article ? props.article.cover : "";
});

const tag = computed(() => {
  return props.article ? props.article.articleTags[0].tagName : "";
});

// const subTitle = computed(() => {
//   return props.article ? props.article.subTitle : "";
// });

const articleNumStr = computed(() => {
  return props.article ? numtoNO3(props.article.articleNum) : "";
});

const dateStr = computed(() => {
  return props.article ? dateMD(props.article.dateStr) : "";
});
</script>
<style scoped>
.main {
  width: 258px !important;
  /* height: 200px; */
  background-color: #fff;
  border-radius: var(--radius-12);
  overflow: hidden;
  margin-bottom: 16px;
}
.cover {
  width: 100%;
  height: 155px;
  background-size: cover;
}
.info_container {
  padding: 12px 16px;
}
.num {
  margin-bottom: 4px;
}
.title {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 显示两行文本 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  /* height: 36px; */
  margin-bottom: 8px;
  font-size: 14px;
}
.tag_data {
  display: flex;
  justify-content: space-between;
}
</style>
