<template>
  <div class="home_main">
    <TopRecommend :prop-a="42" />
    <div class="second_recommend">
      <SecondRecommendVue :article="topArticle[0]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TopRecommend from "@/components/layout/home/TopRecommend.vue";
import SecondRecommendVue from "@/components/layout/home/SecondRecommend.vue";
import { useMetadataStore } from "@/store/metadata";
import { ref } from "vue";
import type { IArticleArray } from "@/store/types";
import { getArticleByNum } from "@/service";

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
  console.log(topArticle);
  // console.log(isRef(topArticle));
});
</script>

<style scoped>
.home_main {
  background-color: #f6f6f7;
  width: 100%;
  height: 100%;
  padding: 20px 20px;
}
.second_recommend {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
}
</style>
