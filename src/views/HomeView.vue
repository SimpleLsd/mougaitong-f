<template>
  <Suspense>
    <div class="home_main">
      <!-- slot 1 -->
      <SectionSlot route="all">
        <template #title_name>新文章</template>
        <template #content>
          <div class="articles">
            <NewArticles :article="allArticles[28]" />
            <NewArticles :article="allArticles[10]" />
            <NewArticles :article="allArticles[9]" />
            <NewArticles :article="allArticles[4]" />
            <NewArticles :article="allArticles[6]" />
            <NewArticles :article="allArticles[7]" />
          </div>
        </template>
      </SectionSlot>
      <!-- slot 2 -->
      <SectionSlot route="all">
        <template #title_name>新图表</template>
        <template #content>
          <div class="drawings">
            <NewPicture :picture="allPictures[0]" />
            <NewPicture :picture="allPictures[1]" />
            <NewPicture :picture="allPictures[2]" />
            <NewPicture :picture="allPictures[3]" />
          </div>
        </template>
      </SectionSlot>
    </div>
  </Suspense>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useMetadataStore } from "@/store/metadata";
import type { IArticleArray, IPictureArray } from "@/store/types";
// import { getArticles, getArticleByNum, getPictures } from "@/service";

import SectionSlot from "@/components/layout/home/SectionSlot.vue";

import NewArticles from "@/components/layout/home/NewArticles.vue";
import NewPicture from "@/components/layout/home/NewPicture.vue";

const metadata = useMetadataStore();

// const topArticle = ref([] as IArticleArray);

const allArticles = ref([] as IArticleArray);
const allPictures = ref([] as IPictureArray);
// const newArticle = ref([] as IArticleArray);
// const newPicture = ref([] as IPictureArray);

metadata.$subscribe(async (mutation, state) => {
  // for (const iterator of state.secondArticle.entries()) {
  //   const a = await getArticleByNum(state.secondArticle[iterator[0]]);
  //   topArticle.value[iterator[0]] = a;
  // }
  allArticles.value = state.allArticles;
  allPictures.value = state.allPictures;
});

onMounted(async () => {
  // console.log("HomeViewonMounted");
  // const newArticles = await getArticles();
  // for (const iterator in newArticles) {
  //   newArticle.value[parseInt(iterator)] = newArticles[parseInt(iterator)];
  // }
  // const newPictures = await getPictures();
  // for (const iterator in newPictures) {
  //   newPicture.value[parseInt(iterator)] = newPictures[parseInt(iterator)];
  // }
});
</script>

<style scoped>
.home_main {
  width: var(--mougaitong-main-width);
}
.articles {
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 40px;
  flex-wrap: wrap;
  width: 100%;
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
