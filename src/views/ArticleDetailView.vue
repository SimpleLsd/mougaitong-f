<template>
  <div class="main">
    <div class="top_data_test">
      <div>当前文章: {{ article_num }}</div>
      <!-- <div>当前页文章: {{ current_articles }}</div> -->
    </div>
    <div class="show_data">
      <!-- {{ article }} -->
    </div>

    <!-- <FooterFooter /> -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
// import { useMetadataStore } from "@/store/metadata";
import { useRoute } from "vue-router";

import { getArticleByNum } from "@/service";

import type { IArticle } from "@/store/types";

// import FooterFooter from "@/components/common/FooterFooter.vue";

// const router = useRouter();
const route = useRoute();
// const metadata = useMetadataStore();

const article = ref<IArticle>({
  articleNum: 0,
  articleId: "",
  totalNum: 0,
  dateStr: "",
  articleTags: [],
  title: "",
  subTitle: "",
  cover: "",
  sections: [],
});

onMounted(async () => {
  try {
    const get_article = await getArticleByNum(
      parseInt(route.params.num as string)
    );
    console.log(get_article);

    article.value.articleNum = get_article.articleNum ?? 0;
    article.value.title = get_article.title ?? "";
    article.value.sections = get_article.sections ?? [];
  } catch (err) {
    console.log(err);
  }
});

const article_num = computed(() => {
  // return parseInt(route.query.page as string) || 1;
  return route.params.num;
});

// watch(
//   [page_number, all_articles],
//   () => {
//     const article = [] as IArticleArray;
//     for (const iterator of articles_num.value) {
//       article[iterator] = all_articles.value[iterator];
//     }
//     current_articles.value = article;
//   },
//   { immediate: true, deep: true }
// );
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
</style>
