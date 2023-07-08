<template>
  <div class="main">
    <div v-if="loaded" class="cover_container">
      <!-- 加载时隐藏 -->
      <div
        class="cover"
        :style="{ backgroundImage: `url(${cover})` }"
        @click="redirecrToDestination"
      ></div>
      <div class="title_group"></div>
    </div>

    <div v-else class="cover_container">
      <!-- 加载时显示 -->
      <div class="loading_cover">
        <ImageLoading />
      </div>
    </div>

    <div v-if="loaded" class="info_container">
      <div class="num theme_red">
        {{ `NO.${articleNumStr}` }}
      </div>
      <router-link :to="'/articles/' + num" class="title">
        {{ title }}
      </router-link>

      <div class="tag_data">
        <div class="theme_red">
          {{ tag }}
        </div>
        <div class="gray">
          {{ dateStr }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
// import ContentLoading from "@/components/common/ContentLoading.vue";
import ImageLoading from "@/components/common/ImageLoading.vue";
import { computed } from "vue";
import type { IArticle } from "@/store/types";
import { numtoNO3, dateMD } from "@/utils/tools";
import { useRouter } from "vue-router";

const router = useRouter();

interface Props {
  article: IArticle;
}
const props = defineProps<Props>();

const loaded = computed(() => {
  return props.article ? true : false;
});

const title = computed(() => {
  return props.article ? props.article.title : "";
});

const num = computed(() => {
  return props.article ? props.article.articleNum : "";
});

const cover = computed(() => {
  return props.article ? props.article.cover : "";
});

const tag = computed(() => {
  return props.article ? props.article.articleTags[0].tagName : "";
});

const redirecrToDestination = () => {
  console.log(123);
  router.push(`/articles/${num.value}`);
};

const articleNumStr = computed(() => {
  return props.article ? numtoNO3(props.article.articleNum) : "";
});

const dateStr = computed(() => {
  return props.article ? dateMD(props.article.dateStr) : "";
});
</script>
<style scoped>
.main {
  width: 258px !important;
  background-color: #fff;
  border-radius: var(--radius-12);
  overflow: hidden;
  margin-bottom: 16px;
}
.cover {
  width: 100%;
  height: 155px;
  background-size: cover;
  cursor: pointer;
}
.info_container {
  padding: 12px 16px;
}
.num {
  margin-bottom: 4px;
}
.title {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 显示两行文本 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  /* height: 36px; */
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 700;
  min-height: 36px;
}
.tag_data {
  display: flex;
  justify-content: space-between;
}
</style>
