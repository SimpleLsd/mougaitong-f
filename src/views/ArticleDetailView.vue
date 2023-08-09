<template>
  <div class="article_main">
    <!-- <div class="top_data_test">
      <div>当前文章: {{ article_num }}</div>
    </div> -->
    <div class="show_data"></div>
    <div class="article_top">
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
        <div v-else-if="section.sectionType === 'sectionStamp'">
          <SectionStamp
            :stamp="section.sectionContent"
            :stampDescription="section.sectionDescription"
          ></SectionStamp>
        </div>
        <div v-else-if="section.sectionType === 'sectionTitle'">
          <SectionTitle
            :content="section.sectionContent"
            :description="section.sectionDescription"
          ></SectionTitle>
        </div>
        <div v-else-if="section.sectionType === 'sectionParagraph'">
          <SectionParagraph
            :content="section.sectionContent"
            :textAlign="section.sectionAlign"
          ></SectionParagraph>
        </div>
        <div v-else-if="section.sectionType === 'sectionImages'">
          <SectionImages
            :imageLinks="section.sectionContent"
            :sectionDescription="section.sectionDescription"
            :randomImgId="generateRandomString(10)"
          ></SectionImages>
        </div>
        <div v-else-if="section.sectionType === 'sectionQuote'">
          <!-- <SectionImages
            :imageLinks="section.sectionContent"
            :sectionDescription="section.sectionDescription"
            :randomImgId="generateRandomString(10)"
          ></SectionImages> -->
          <SectionQuote
            :content="section.sectionContent"
            :sectionDescription="section.sectionDescription"
          ></SectionQuote>
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
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getArticleByNum } from "@/service";
import type { IArticle } from "@/store/types";
import { generateRandomString } from "@/utils/tools";

import ArticleTop from "@/components/layout/Article/ArticleTop.vue";
import SectionStamp from "@/components/layout/Article/SectionStamp.vue";
import SectionLink from "@/components/layout/Article/SectionLink.vue";
import SectionTitle from "@/components/layout/Article/SectionTitle.vue";
import SectionParagraph from "@/components/layout/Article/SectionParagraph.vue";
import SectionImages from "@/components/layout/Article/SectionImages.vue";
import SectionPlaceholder from "@/components/layout/Article/SectionPlaceholder.vue";
import SectionQuote from "@/components/layout/Article/SectionQuote.vue";

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

// const article_num = computed(() => {
//   return route.params.num;
// });
</script>

<style scoped>
.article_main {
  width: var(--mougaitong-main-width);
  padding-top: 20px;
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
.article_top,
.article_body {
  width: 1000px;
  /* background-color: #fff; */
  margin: 0 auto;
}

.section:first-child {
  margin-top: 0px !important;
}
.section {
  width: 100%;
  margin: 40px 0;
}
</style>
