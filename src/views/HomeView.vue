<template>
  <Suspense>
    <div class="home_main">
      <div class="top_3_recommend">
        <Top3Recommend :article="newArticle[5]" />
        <Top3Recommend :article="newArticle[6]" />
        <Top3Recommend :article="newArticle[7]" class="second_recommend_3" />
      </div>
      <div class="section">
        <div class="middle_title_font">New Articles</div>
        <div class="articles">
          <NewArticles :article="newArticle[28]" />
          <NewArticles :article="newArticle[11]" />
          <NewArticles :article="newArticle[10]" />
          <NewArticles :article="newArticle[9]" />
          <NewArticles :article="newArticle[4]" />
          <NewArticles :article="newArticle[5]" />
          <NewArticles :article="newArticle[6]" />
          <NewArticles :article="newArticle[7]" />
        </div>
      </div>
      <div class="section">
        <div class="middle_title_font">New Drawings</div>
        <div class="drawings">
          <NewPicture :picture="newPicture[0]" />
          <NewPicture :picture="newPicture[1]" />
          <NewPicture :picture="newPicture[2]" />
          <NewPicture :picture="newPicture[3]" />
          <NewPicture :picture="newPicture[4]" />
        </div>
      </div>
      <FooterFooter />
    </div>
  </Suspense>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useMetadataStore } from "@/store/metadata";
import type { IArticleArray, IPictureArray } from "@/store/types";
import { getArticles, getArticleByNum, getPictures } from "@/service";

// import TopRecommend from "@/components/layout/home/TopRecommend.vue";
// import SecondRecommend from "@/components/layout/home/SecondRecommend.vue";
// import HomeGallery from "@/components/layout/home/HomeGallery.vue";
// import HomeArticles from "@/components/layout/home/HomeArticles.vue";

import Top3Recommend from "@/components/layout/home/Top3Recommend.vue";
import NewArticles from "@/components/layout/home/NewArticles.vue";
import NewPicture from "@/components/layout/home/NewPicture.vue";

import FooterFooter from "@/components/common/FooterFooter.vue";

const metadata = useMetadataStore();
// metadata.getMetadataAction();

const topArticle = ref([] as IArticleArray);
const newArticle = ref([] as IArticleArray);
const newPicture = ref([] as IPictureArray);

metadata.$subscribe(async (mutation, state) => {
  for (const iterator of state.secondArticle.entries()) {
    // console.log(iterator);
    const a = await getArticleByNum(state.secondArticle[iterator[0]]);
    topArticle.value[iterator[0]] = a;
  }
});
onMounted(async () => {
  const newArticles = await getArticles();
  for (const iterator in newArticles) {
    newArticle.value[parseInt(iterator)] = newArticles[parseInt(iterator)];
  }
  const newPictures = await getPictures();
  for (const iterator in newPictures) {
    newPicture.value[parseInt(iterator)] = newPictures[parseInt(iterator)];
  }
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
  width: 1280px;
}
.top_3_recommend {
  display: flex;
  justify-content: space-between;
  width: 1080px;
  margin: 20px auto;
}
.section {
  width: 1080px;
  margin: 20px auto;
}
.articles {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin: 20px auto;
}
.drawings {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin: 20px auto;
}
</style>
