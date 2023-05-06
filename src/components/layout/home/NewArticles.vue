<template>
  <div class="main">
    <div v-if="loaded" class="top_group">
      <!-- 加载时隐藏 -->
      <div class="cover" :style="{ backgroundImage: `url(${cover})` }"></div>
      <div class="title_group">
        <div class="num theme_red">
          {{ `NO.${articleNumStr}` }}
        </div>
        <div class="title small_title_font">
          {{ title }}
          <!-- 大标题 -->
        </div>
      </div>
    </div>
    <div v-else class="top_group">
      <!-- 加载时显示 -->
      <div class="loading_cover">
        <ImageLoading />
      </div>
      <div class="loading_title">
        <ContentLoading />
      </div>
    </div>

    <div v-if="loaded" class="tag_date">
      <div class="tag des_font theme_red">
        {{ tag }}
      </div>
      <div class="date des_font gray">
        {{ dateStr }}
      </div>
    </div>
    <div v-else class="loading_tag_date">
      <ContentLoading />
    </div>

    <div v-if="loaded" class="des des_font dark_gray">
      {{ subTitle }}
    </div>
    <div v-else class="loading_des">
      <ContentLoading />
    </div>
  </div>
</template>
<script lang="ts" setup>
import ContentLoading from "@/components/common/ContentLoading.vue";
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

const subTitle = computed(() => {
  return props.article ? props.article.subTitle : "";
});

const articleNumStr = computed(() => {
  return props.article ? numtoNO3(props.article.articleNum) : "";
});

const dateStr = computed(() => {
  return props.article ? dateMD(props.article.dateStr) : "";
});
</script>
<style scoped>
.main {
  width: 258px;
  height: 200px;
  background-color: #eee;
  border-radius: var(--radius-12);
}
</style>
