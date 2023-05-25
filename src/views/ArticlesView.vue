<template>
  <div class="main">
    <div class="top_data_test">
      <div>页数: {{ page_number }}</div>
      <div>总文章数: {{ articlesCount }}</div>
      <div>当前页文章: {{ articles_num }}</div>
      <!-- <div>全部文章: {{ all_articles[16] }}</div> -->
      <!-- <div>当前页文章: {{ current_articles }}</div> -->
    </div>
    <PaginationCommon
      :total_count="articlesCount"
      :page_size="page_size"
      :current_page="page_number"
    />
    <!-- <div class="pagination">
      <router-link
        v-for="item in Math.ceil(articlesCount / page_size)"
        :key="item"
        :to="`?page=${item}`"
        :class="['pagination-item', { active: item === page_number }]"
      >
        {{ item }}
      </router-link>
    </div> -->

    <div class="section">
      <div class="middle_title_font">New Articles</div>
      <div v-if="articles_num.length == 0" class="empty">空</div>
      <div class="articles">
        <div v-for="item in articles_num" :key="item" class="article_container">
          <!-- {{ item }} -->
          <NewArticles :article="current_articles[item]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { useMetadataStore } from "@/store/metadata";
import { useRoute } from "vue-router";

import { getArticles } from "@/service";

import type { IArticleArray } from "@/store/types";

import NewArticles from "@/components/layout/home/NewArticles.vue";
import PaginationCommon from "@/components/common/PaginationCommon.vue";

// const router = useRouter();
const route = useRoute();
const metadata = useMetadataStore();

const all_articles = ref([] as IArticleArray);
const current_articles = ref([] as IArticleArray);

onMounted(async () => {
  const newArticles = await getArticles();
  for (const iterator in newArticles) {
    all_articles.value[parseInt(iterator)] = newArticles[parseInt(iterator)];
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
    if (index >= articlesCount.value) {
      break;
    }
    num.push(index);
  }
  return num;
});

watch(
  [page_number, all_articles],
  () => {
    const article = [] as IArticleArray;
    for (const iterator of articles_num.value) {
      article[iterator] = all_articles.value[iterator];
    }
    current_articles.value = article;
  },
  { immediate: true, deep: true }
);
</script>

<style scoped>
.main {
  width: 100%;
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
.section {
  width: 1080px;
  margin: 20px auto;
}
.articles {
  display: flex;
  flex-direction: row;
  gap: 15px;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  width: 100%;
  margin: 20px auto;
}
ul a.router-link-active {
  /* background-color: #f9f9fd; */
  pointer-events: none;
}
</style>
