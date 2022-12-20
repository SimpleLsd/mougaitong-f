<template>
  <div class="home_main">
    <TopRecommend :prop-a="42" />
    <div class="second_recommend">
      <SecondRecommend :article="topArticle[0]" />
      <SecondRecommend :article="topArticle[1]" />
      <SecondRecommend :article="topArticle[2]" class="second_recommend_3" />
    </div>
    <div class="home_articles">
      <div class="title">最新文章</div>
      <div class="articles">
        <HomeArticles />
        <HomeArticles />
        <HomeArticles />
        <HomeArticles />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMetadataStore } from "@/store/metadata";
import type { IArticleArray } from "@/store/types";
import { getArticleByNum } from "@/service";

import TopRecommend from "@/components/layout/home/TopRecommend.vue";
import SecondRecommend from "@/components/layout/home/SecondRecommend.vue";
import HomeArticles from "@/components/layout/home/HomeArticles.vue";

const metadata = useMetadataStore();
const topArticle = ref([] as IArticleArray);

metadata.$subscribe(async (mutation, state) => {
  // tagIDSub.value = state.articleTags;
  // console.log(state.secondArticle.length);
  for (const iterator of state.secondArticle) {
    // console.log(iterator);
    const a = await getArticleByNum(state.secondArticle[iterator - 1]);
    topArticle.value[iterator - 1] = a[0];
  }
  // console.log(topArticle);
  // console.log(isRef(topArticle));
});
</script>

<style scoped>
/* ----次级推荐数量媒体查询---- */
@media (max-width: 960px) {
  .second_recommend_3 {
    display: none;
  }
}
@media (min-width: 961px) {
  .secondRecommend_3 {
    display: block;
  }
}
.home_main {
  background-color: #f6f6f7;
  width: 100%;
  height: 100%;
  padding: 20px 20px;
}
.second_recommend {
  display: flex;
  justify-content: space-between;
  margin-top: 2%;
  width: 100%;
}
.home_articles {
  /* display: flex;
  justify-content: space-between; */
  margin-top: 2%;
  padding: 1% 2%;
  width: 100%;
  background-color: var(--mougaitong-white);
  border-radius: 16px;
}
.home_articles .title {
  font-weight: 700;
}
.home_articles .articles {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5%;
  width: 100%;
}
</style>
