<template>
  <div
    v-if="loaded"
    id="main"
    class="main"
    :style="{ backgroundImage: `url(${cover})` }"
    @click="redirecrToDestination"
  >
    <div class="info_color">
      <div class="info">
        <div class="row">
          <div class="date_num">{{ dateStr + " #" + num }}</div>
          <div class="tag">{{ tag }}</div>
        </div>
        <div class="title">
          {{ title }}
        </div>
      </div>
    </div>
  </div>
  <div v-else class="loading">
    <ImageLoading />
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

const showInfo = true;

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
  router.push(`/articles/${num.value}`);
};

// const articleNumStr = computed(() => {
//   return props.article ? numtoNO3(props.article.articleNum) : "";
// });

const dateStr = computed(() => {
  return props.article ? dateMD(props.article.dateStr) : "";
});
</script>
<style scoped>
.main {
  width: var(--mougaitong-home-entryw);
  height: 256px;
  background-color: #fff;
  background-size: cover;
  cursor: pointer;
  border-radius: 32px;
  overflow: hidden;
  margin-top: 32px;
  transition: transform 0.5s ease;
}
.loading {
  width: var(--mougaitong-home-entryw);
  border-radius: 32px;
  overflow: hidden;
  margin-top: 32px;
  height: 224px;
}
.loading * {
  width: 100%;
  height: 100%;
}
.info_color {
  position: absolute;
  width: 100%;
  height: 66%;
  bottom: 0;
  /* top: 34%; */
  margin: 0 auto;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.75) 100%
  );
}
.info {
  position: absolute;
  bottom: 20px;
  width: 100%;
  height: 92px;
  padding: 0 32px;
  color: #fff;
}
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
}
.tag {
  border: 1px solid #fff;
  padding: 3.5px 7px;
  border-radius: 50px;
}
.title {
  /* display: -webkit-box; */
  /* -webkit-line-clamp: 2; */
  /* -webkit-box-orient: vertical; */
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
  /* min-height: 36px; */
  font-size: 20px;
  font-weight: 700;
}
</style>
