<template>
  <Suspense>
    <div class="home_main">
      <TopRecommend :prop-a="42" />
      <div class="second_recommend">
        <SecondRecommend :article="topArticle[0]" />
        <SecondRecommend :article="topArticle[1]" />
        <SecondRecommend :article="topArticle[2]" class="second_recommend_3" />
      </div>
      <div class="home_articles">
        <div class="middle_title_font">最新文章</div>
        <div class="articles">
          <HomeArticles />
          <HomeArticles />
          <HomeArticles />
          <HomeArticles />
        </div>
      </div>
    </div>
  </Suspense>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useMetadataStore } from "@/store/metadata";
import type { IArticleArray } from "@/store/types";
import { getArticles, getArticleByNum } from "@/service";

import TopRecommend from "@/components/layout/home/TopRecommend.vue";
import SecondRecommend from "@/components/layout/home/SecondRecommend.vue";
import HomeArticles from "@/components/layout/home/HomeArticles.vue";

const metadata = useMetadataStore();
const topArticle = ref([] as IArticleArray);
const newArticle = ref([] as IArticleArray);

metadata.$subscribe(async (mutation, state) => {
  for (const iterator of state.secondArticle) {
    const a = await getArticleByNum(state.secondArticle[iterator - 1]);
    topArticle.value[iterator - 1] = a[0];
  }
});
onMounted(async () => {
  const newArticles = await getArticles();
  for (const iterator in newArticles) {
    newArticle.value[parseInt(iterator)] = newArticles[parseInt(iterator)];
  }
});
console.log(newArticle);
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
.home_articles .articles {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5%;
  width: 100%;
}
</style>
