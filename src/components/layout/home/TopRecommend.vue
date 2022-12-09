<template>
  <div class="top_recommend">
    <div class="top_article_cover" :style="{ backgroundImage: `` }"></div>
    <div class="top_article">
      <div class="small_title num">
        <!-- {{ totalNum }} -->
        <!-- {{ tagIDSub[0] ? tagIDSub[0].tagID : "" }} -->
        {{ articleTags[0] ? articleTags[0].tagID : "" }}
        <br />
        {{ topArticle.cover }}
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
import { ref } from "vue";

// import { storeToRefs } from "pinia";
import { useMetadataStore } from "@/store/metadata";
import { getArticleById } from "@/service";
import { storeToRefs } from "pinia";

import type { IArticle } from "@/store/types";

const metadata = useMetadataStore();

metadata.getMetadataAction();

const { articleTags } = storeToRefs(metadata);
const topArticle = ref({} as IArticle);

metadata.$subscribe(async (mutation, state) => {
  // tagIDSub.value = state.articleTags;
  const a = await getArticleById(state.topArticle);
  topArticle.value = a[0];
  console.log(topArticle.value.cover);
});

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
