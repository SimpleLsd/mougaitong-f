<template>
  <div class="main">
    <div class="top_data_test">
      <div>页数: {{ page_number }}</div>
      <div>总文章数: {{ articlesCount }}</div>
      <div>当前页文章: {{ articles_num }}</div>
    </div>
    <div class="pagination">
      <router-link
        v-for="item in Math.ceil(articlesCount / page_size)"
        :key="item"
        :to="`?page=${item}`"
        :class="['pagination-item', { active: item === page_number }]"
      >
        {{ item }}
      </router-link>
    </div>
    <div class="section">
      <div class="middle_title_font">New Articles</div>
      <div v-if="articles_num.length == 0" class="empty">空</div>
      <div class="articles">
        <div v-for="item in articles_num" :key="item">
          {{ item }}
          <NewArticles :article="article[item]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useMetadataStore } from "@/store/metadata";
import { useRoute } from "vue-router";

import { getArticles } from "@/service";

import type { IArticleArray } from "@/store/types";

import NewArticles from "@/components/layout/home/NewArticles.vue";

// const router = useRouter();
const route = useRoute();
const metadata = useMetadataStore();

let article = ref([] as IArticleArray);

onMounted(async () => {
  const articles = await getArticles();
  for (const iterator of articles_num.value) {
    console.log(iterator);
    article.value[iterator] = articles[iterator];
  }
  article = articles;
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
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin: 20px auto;
}
ul a.router-link-active {
  /* background-color: #f9f9fd; */
  pointer-events: none;
}
</style>
