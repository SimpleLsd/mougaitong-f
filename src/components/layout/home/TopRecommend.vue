<template>
  <div class="top_recommend">
    <div
      class="top_article_cover"
      :style="{ backgroundImage: `url(${topArticle.cover})` }"
    ></div>
    <div class="top_article_content">
      <div class="small_title">
        头条推荐&nbsp;&nbsp;&nbsp;NO.111
        <!-- {{ totalNum }} -->
        <!-- {{ tagIDSub[0] ? tagIDSub[0].tagID : "" }} -->

        <!-- 3. 元素据标签集-3 -->
        <!-- {{ articleTags[0] ? articleTags[0].tagID : "" }} -->
        <!-- {{ topArticle.cover }} -->
      </div>
      <div class="title">
        欸！UI设计师不可不了解的文档输出格式
        <!-- {{ topArticle }} -->
      </div>
      <div class="tag_date">
        <span class="tag">What to Play</span>
        <span class="date">7月17日</span>
      </div>
      <div class="des">
        <span class="content"
          >今天的节目内容主要是由自称18流前端开发的应姓主播来向大家道歉，中间穿插一些他在近期coding工作时接触的事例所组成。
        </span>
        <span class="see_all">查看全部</span>
      </div>
    </div>

    <div
      class="top_collection_cover"
      :style="{ backgroundImage: `url(${test_collection_cover})` }"
    ></div>
    <div class="top_collection_content">
      <div class="small_title">专题推荐</div>
      <div class="title">Ever forever 的记忆和记录的故事</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { useMetadataStore } from "@/store/metadata";
import { getArticleById } from "@/service";

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
  const a = await getArticleById(state.topArticle);
  topArticle.value = a[0];
  console.log(topArticle.value.cover);
});

//
//
//
// const totalNum = computed(() => metadata.totalNum);
// console.log(isReactive(tagID));

// const tagIDSub = ref([] as Array<ItagIDSub>);
// interface ItagIDSub {
//   tagID: string;
//   tagName: string;
//   tagRoute: string;
// }

// console.log(tagID);
</script>

<style scoped>
@media (min-width: 1280px) and (max-width: 1919px) {
  .top_article_content .small_title,
  .top_article_content .tag_date span,
  .top_article_content .des span {
    font-size: 16px;
  }
  .top_article_content .title {
    font-size: 24px;
  }
}
@media (min-width: 600px) and (max-width: 1279px) {
  .top_article_content .small_title,
  .top_article_content .tag_date span,
  .top_article_content .des span {
    font-size: 14px;
  }
  .top_article_content .title {
    font-size: 20px;
  }
}

.top_recommend {
  width: 100%;
  background-color: #fff;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
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
  border-radius: 8px;
  flex-shrink: 0;
}
.top_article_cover::after {
  content: "";
  display: block;
  padding-top: 56%;
}
.top_article_content {
  background-color: azure;
  padding: 0 32px;
}
.top_article_content .small_title {
  /* 小标题 */
  color: #e60012;
  font-size: var(--text-fz);
}
.top_article_content .title {
  /* 大标题 */
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: justify;
  padding: 12px 0;
}
.top_article_content .des .content {
  margin: 12px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: justify;
}
.top_collection_cover {
  width: 10%;
  background-color: azure;
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  flex-shrink: 0;
  /* flex-shrink: 1; */
}
.top_collection_cover::after {
  content: "";
  display: block;
  padding-top: 132.5%;
}
.top_collection_content {
  width: 18%;
}
</style>
