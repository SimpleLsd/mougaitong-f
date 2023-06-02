<template>
  <div class="main">
    <div class="top_data_test">
      <div>当前文章: {{ article_num }}</div>
      <!-- <div>当前页文章: {{ current_articles }}</div> -->
    </div>
    <div class="show_data">
      <!-- {{ article }} -->
    </div>
    <div class="article_main">
      <ArticleTop
        :num="article.articleNum"
        :cover="article.cover"
        :title="article.title"
        :tags="article.articleTags"
        :date="article.dateStr"
      />
    </div>
    <div class="article_body">
      <div
        class="section"
        v-for="section in article.sections"
        :key="section.sectionType"
      >
        <div v-if="section.sectionType === 'sectionLink'">
          <SectionLink
            :content="section.sectionContent"
            :link="section.sectionDescription"
          />
        </div>
        <div v-else>
          <SectionPlaceholder :type="section.sectionType" />
        </div>
      </div>
    </div>
    <!-- <FooterFooter /> -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getArticleByNum } from "@/service";
import type { IArticle } from "@/store/types";

import ArticleTop from "@/components/layout/Article/ArticleTop.vue";
import SectionLink from "@/components/layout/Article/SectionLink.vue";
import SectionPlaceholder from "@/components/layout/Article/SectionPlaceholder.vue";

// import FooterFooter from "@/components/common/FooterFooter.vue";

const route = useRoute();

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
    article.value.cover = get_article.cover ?? "";
    article.value.articleTags = get_article.articleTags ?? [];
    article.value.articleNum = get_article.articleNum ?? 0;
    article.value.title = get_article.title ?? "";
    article.value.subTitle = get_article.subTitle ?? "";
    article.value.sections = get_article.sections ?? [];
    article.value.dateStr = get_article.dateStr ?? [];
  } catch (err) {
    console.log(err);
  }
});

const article_num = computed(() => {
  return route.params.num;
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
.article_main,
.article_body {
  width: 740px;
  background-color: #fff;
  margin: 0 auto;
}
.section {
  margin: 40px 40px;
}
</style>
