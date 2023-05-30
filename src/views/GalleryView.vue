<template>
  <div class="main">
    <div class="top_data_test">
      <div>页数: {{ page_number }}</div>
      <div>总图片数: {{ picturesCount }}</div>
      <div>当前页图片: {{ pictures_num }}</div>
      <!-- <div class="">全部图片: {{ all_pictures }}</div> -->
      <!-- <div class="theme_red">当前页文章: {{ current_pictures }}</div> -->
    </div>
    <div class="section">
      <div class="middle_title_font">New Picture</div>
      <div v-if="pictures_num.length == 0" class="empty">空</div>
      <div class="pictures">
        <div v-for="item in pictures_num" :key="item" class="article_container">
          <!-- {{ item }} -->
          <NewPicture :picture="current_pictures[item]" />
        </div>
      </div>
    </div>
    <PaginationCommon
      :total_count="picturesCount"
      :page_size="page_size"
      :current_page="page_number"
    />
    <FooterFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { useMetadataStore } from "@/store/metadata";
import { useRoute } from "vue-router";

import { getPictures } from "@/service";

import type { IPictureArray } from "@/store/types";

// import NewArticles from "@/components/layout/home/NewArticles.vue";
import NewPicture from "@/components/layout/home/NewPicture.vue";
import PaginationCommon from "@/components/common/PaginationCommon.vue";
import FooterFooter from "@/components/common/FooterFooter.vue";

// const router = useRouter();
const route = useRoute();
const metadata = useMetadataStore();

const all_pictures = ref([] as IPictureArray);
const current_pictures = ref([] as IPictureArray);

onMounted(async () => {
  const newArticles = await getPictures();
  for (const iterator in newArticles) {
    all_pictures.value[parseInt(iterator)] = newArticles[parseInt(iterator)];
  }
  console.log("onMounted");
});

const page_size = 12;

const picturesCount = computed(() => {
  return metadata.totalPictureNum;
});

const page_number = computed(() => {
  return parseInt(route.query.page as string) || 1;
});

const pictures_num = computed(() => {
  const num = [];
  for (
    let index = page_number.value * page_size - page_size + 1;
    index <= page_number.value * page_size;
    index++
  ) {
    num.push(index - 1);
    if (index >= picturesCount.value) {
      break;
    }
  }
  return num;
});

watch(
  [page_number, all_pictures, pictures_num],
  () => {
    const picture = [] as IPictureArray;
    for (const iterator of pictures_num.value) {
      picture[iterator] = all_pictures.value[iterator];
    }
    current_pictures.value = picture;
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
  min-height: 923px;
  margin: 20px auto;
}
.pictures {
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
