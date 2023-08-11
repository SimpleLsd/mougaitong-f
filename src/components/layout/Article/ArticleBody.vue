<template>
  <div class="article_body_main">
    <div
      class="section"
      v-for="section in props.sections"
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
</template>
<script setup lang="ts">
import { generateRandomString } from "@/utils/tools";
import type { IArticleSection } from "@/store/types";

import SectionStamp from "@/components/layout/Article/SectionStamp.vue";
import SectionLink from "@/components/layout/Article/SectionLink.vue";
import SectionTitle from "@/components/layout/Article/SectionTitle.vue";
import SectionParagraph from "@/components/layout/Article/SectionParagraph.vue";
import SectionImages from "@/components/layout/Article/SectionImages.vue";
import SectionPlaceholder from "@/components/layout/Article/SectionPlaceholder.vue";
import SectionQuote from "@/components/layout/Article/SectionQuote.vue";

const props = defineProps({
  // 需要接受一个符合条件的数组
  sections: Array<IArticleSection>,
});
</script>
<style scoped>
.section:first-child {
  margin-top: 0px !important;
}
.section {
  width: 100%;
  margin: 40px 0;
}
</style>
