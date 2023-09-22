<template>
  <Suspense>
    <div class="articles_main">
      <div class="top_data_test">
        <div>页数: {{ page_number }}</div>
        <div>总文章数: {{ articlesCount }}</div>
        <div>当前页文章: {{ articles_num }}</div>
        <!-- <div>全部文章: {{ allArticles[16] }}</div> -->
        <!-- <div>当前页文章: {{ current_articles }}</div> -->
      </div>
      <SectionSlot route="all">
        <template #title_name>新文章</template>
        <template #content>
          <div class="articles">
            <div v-for="num in articles_num" :key="num">
              <NewArticles :article="allArticles[num]" />
            </div>
          </div>
        </template>
      </SectionSlot>
      <PaginationCommon
        :total_count="articlesCount"
        :page_size="page_size"
        :current_page="page_number"
      />
      <FooterFooter />
    </div>
  </Suspense>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { useMetadataStore } from "@/store/metadata";
import { useRoute } from "vue-router";

import { getArticlesSortByNum } from "@/service";

import type { IArticleArray } from "@/store/types";

import NewArticles from "@/components/layout/home/NewArticles.vue";
import PaginationCommon from "@/components/common/PaginationCommon.vue";
import FooterFooter from "@/components/common/FooterFooter.vue";

import SectionSlot from "@/components/layout/home/SectionSlot.vue";

// const router = useRouter();
const route = useRoute();
const metadata = useMetadataStore();

const allArticles = ref([] as IArticleArray);
const current_articles = ref([] as IArticleArray);

onMounted(async () => {
  const newArticles = await getArticlesSortByNum();
  for (const iterator in newArticles) {
    allArticles.value[parseInt(iterator)] = newArticles[parseInt(iterator)];
  }
  console.log("onMounted");
});

const page_size = 12;

const articlesCount = computed(() => {
  return metadata.totalArticleNum;
});

const page_number = computed(() => {
  return parseInt(route.query.page as string) || 1;
});

const articles_num = computed(() => {
  const num = [];
  for (
    let index = page_number.value * page_size - page_size + 1;
    index <= page_number.value * page_size;
    index++
  ) {
    num.push(index - 1);
    if (index >= articlesCount.value) {
      break;
    }
  }
  return num;
});

watch(
  [page_number, allArticles],
  () => {
    const article = [] as IArticleArray;
    for (const iterator of articles_num.value) {
      article[iterator] = allArticles.value[iterator];
    }
    current_articles.value = article;
    console.log(current_articles);
  },
  { immediate: true, deep: true }
);
</script>

<style scoped>
.articles_main {
  width: var(--mougaitong-main-width);
  /* width: 100%; */
}
.top_data_test {
  height: 50px;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding-left: 20px;
  gap: 20px;
}
.articles {
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 40px;
  flex-wrap: wrap;
  width: 100%;
}
</style>
