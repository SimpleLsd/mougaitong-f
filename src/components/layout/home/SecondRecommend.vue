<template>
  <div class="second_article">
    <div v-if="loaded" class="top_group">
      <!-- 加载时隐藏 -->
      <div class="cover" :style="{ backgroundImage: `url(${cover})` }"></div>
      <div class="title_group">
        <div class="num theme_red small_font">{{ `NO.${articleNumStr}` }}</div>
        <div class="title big_font">{{ title }}</div>
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
      <div class="tag small_font theme_red">{{ tag }}</div>
      <div class="date small_font gray">{{ dateStr }}</div>
    </div>
    <div v-else class="loading_tag_date">
      <ContentLoading />
    </div>

    <div v-if="loaded" class="des small_font dark_gray">
      {{ subTitle }}
    </div>
    <div v-else class="loading_des">
      <ContentLoading />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { IArticle } from "@/store/types";
import { numtoNO3, dateMD } from "@/utils/tools";

import ContentLoading from "@/components/common/ContentLoading.vue";
import ImageLoading from "@/components/common/ImageLoading.vue";

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
/* ----------------------------媒体查询部分----------------------------- */
@media (max-width: 640px) {
  .small_font {
    font-size: 10px;
  }
  .big_font {
    font-size: 12px;
    font-weight: 700;
  }
  .des {
    display: none;
  }
}
@media (min-width: 641px) and (max-width: 959px) {
  .small_font {
    font-size: 12px;
  }
  .big_font {
    font-size: 13px;
    font-weight: 700;
  }
}
@media (min-width: 960px) and (max-width: 1279px) {
  .small_font {
    font-size: 13px;
  }
  .big_font {
    font-size: 15px;
    font-weight: 700;
  }
}
@media (min-width: 1280px) and (max-width: 1599px) {
  .small_font {
    font-size: 14px;
  }
  .big_font {
    font-size: 16px;
    font-weight: 700;
  }
}
@media (min-width: 1600px) and (max-width: 1920px) {
  .small_font {
    font-size: 16px;
  }
  .big_font {
    font-size: 18px;
    font-weight: 700;
  }
}
@media (min-width: 1921px) {
  .small_font {
    font-size: 16px;
  }
  .big_font {
    font-size: 20px;
    font-weight: 700;
  }
}
/* ------------------------媒体查询-显示数量部分-------------------------- */
@media (max-width: 960px) {
  .second_article {
    padding: 1% 2%;
    width: 49%;
  }
}
@media (min-width: 961px) {
  .second_article {
    padding: 1% 2%;
    width: 32%;
  }
}
/* ------------------------------布局部分------------------------------- */
.second_article {
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
