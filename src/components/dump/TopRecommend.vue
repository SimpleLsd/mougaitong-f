<template>
  <div class="top_recommend">
    <div
      v-if="topArticle.title"
      class="top_article_cover"
      :style="{ backgroundImage: `url(${topArticle.cover})` }"
    ></div>
    <div v-else class="top_article_cover_loading">
      <ImageLoading />
    </div>

    <!-- 加载完成 -->
    <div v-if="topArticle.title" class="top_article_content">
      <div class="small_title theme_red des_font">
        头条推荐&nbsp;&nbsp;&nbsp;{{ `NO.${articleNumStr}` }}
      </div>

      <div class="title big_title_font black">
        {{ topArticle.title }}
      </div>

      <div class="tag_date des_font">
        <span class="tag theme_red">{{
          topArticle.articleTags ? topArticle.articleTags[0].tagName : ""
        }}</span>
        <span class="date gray">{{ dateStr }}</span>
      </div>

      <div class="des">
        <span class="content des_font dark_gray"
          >{{ topArticle.subTitle }}
        </span>
        <span class="see_all theme_red des_font">查看文章</span>
      </div>
    </div>
    <!-- 加载中 -->
    <div v-else class="loading_container">
      <div class="loading_small_title">
        <ContentLoading />
      </div>
      <div class="loading_big_title">
        <ContentLoading />
      </div>
      <div class="loading_content_long">
        <ContentLoading />
      </div>
      <div class="loading_content_short">
        <ContentLoading />
      </div>
    </div>

    <div class="line"></div>
    <div
      class="top_collection_cover"
      :style="{ backgroundImage: `url(${test_collection_cover})` }"
    ></div>

    <div class="top_collection_content">
      <div class="des_font theme_red">专题推荐</div>
      <div class="title big_title_font">印象笔记的记忆和记录的故事</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

import { useMetadataStore } from "@/store/metadata";
import { getArticleByNum } from "@/service";

import ContentLoading from "@/components/common/ContentLoading.vue";
import ImageLoading from "@/components/common/ImageLoading.vue";

import { numtoNO3, dateMD } from "@/utils/tools";

// 1.元素据标签集-1
// import { storeToRefs } from "pinia";

import type { IArticle } from "@/store/types";

const test_collection_cover =
  "http://43.142.29.240/statics/test_collectiojn_cover.png";

const metadata = useMetadataStore();

metadata.getMetadataAction();

// 2.元素据标签集-2
// const { articleTags } = storeToRefs(metadata);

//获取推荐位文章
const topArticle = ref({} as IArticle);

metadata.$subscribe(async (mutation, state) => {
  // tagIDSub.value = state.articleTags;
  const a = await getArticleByNum(state.topArticle);
  topArticle.value = a[0];
  // console.log(topArticle.value.articleNum);
  // console.log(topArticle.value.cover);
});

const articleNumStr = computed(() => {
  // 修整序号数字
  return numtoNO3(topArticle.value.articleNum);
});

const dateStr = computed(() => {
  return dateMD(topArticle.value.dateStr);
});
</script>

<style scoped>
@media (max-width: 1249px) {
  .top_collection_cover,
  .top_collection_content,
  .line,
  .loading_content_long {
    display: none;
  }
}
.top_recommend {
  /* margin-bottom: 20px; */
  width: 100%;
  background-color: #fff;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1% 2%;
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
  border-radius: 8px;
  flex-shrink: 0;
}
.top_article_cover::after {
  content: "";
  display: block;
  padding-top: 56%;
}
.top_article_cover_loading {
  width: 25%;
  background-color: azure;
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  flex-shrink: 0;
}
.top_article_content {
  width: 100%;
  margin: 0 2%;
}
/* .top_article_content .small_title {
  小标题
  font-size: var(--text-fz);
} */
.top_article_content .title {
  /* 大标题 */
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: justify;
  margin: 1% 0;
}
.top_article_content .tag_date {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.top_article_content .des .content {
  margin: 1.5% 0;
}
.top_article_content .des .content {
  text-align: justify;
}
.top_collection_cover {
  width: 10%;
  background-color: azure;
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  flex-shrink: 0;
}
.top_collection_cover::after {
  content: "";
  display: block;
  padding-top: 132.5%;
}
.top_collection_content {
  width: 24%;
  padding: 0 20px;
}
.top_collection_content .title {
  font-weight: 700;
}
.line {
  width: 1px;
  height: 130px;
  background-color: var(--mougaitong-gray-light);
  margin: 0 2% 0 0;
}
.loading_container {
  /* background-color: azure; */
  width: 100%;
  margin: 0 2%;
  flex-grow: 2;
}
.loading_small_title {
  width: 10%;
  margin-bottom: 1%;
}
.loading_big_title {
  width: 80%;
  margin-bottom: 1%;
}
.loading_content_long {
  width: 100%;
  margin-bottom: 1%;
}
.loading_content_short {
  width: 60%;
}
</style>
