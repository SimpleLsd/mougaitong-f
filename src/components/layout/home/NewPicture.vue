<template>
  <!-- <div>{{ loaded }}</div> -->
  <div class="main">
    <!-- -{{ link }}- -->
    <div
      v-if="loaded"
      class="thumbnail"
      :style="{ backgroundImage: `url(${link})` }"
    ></div>
    <div v-else>
      <!-- 加载时显示 -->
      <div class="loading_image">
        <ImageLoading :size="100" />
      </div>
    </div>

    <div v-if="loaded" class="info">
      <div class="num theme_red">{{ `NO.${num}` }}</div>
      <div class="size_group gray">1920*1080</div>
    </div>
    <div v-else class="loading_content">
      <ContentLoading />
    </div>
    <div v-if="loaded" class="middle_title_font">{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
import ContentLoading from "@/components/common/ContentLoading.vue";
import ImageLoading from "@/components/common/ImageLoading.vue";
import { computed } from "vue";
import type { IPicture } from "@/store/types";
import { numtoNO3 } from "@/utils/tools";

interface Props {
  picture: IPicture;
}
const props = defineProps<Props>();

const loaded = computed(() => {
  return props.picture ? true : false;
});

const title = computed(() => {
  return props.picture ? props.picture.title : "";
});

const link = computed(() => {
  return props.picture ? props.picture.link : "";
});

const num = computed(() => {
  return props.picture ? numtoNO3(props.picture.totalNum) : "";
});

// const pictureNumStr = computed(() => {
//   return props.picture ? numtoNO3(props.picture.pictureNum) : "";
// });
</script>

<style scoped>
.main {
  width: 290px !important;
  padding-bottom: 1%;
}
.thumbnail {
  background-size: cover;
  flex-shrink: 0;
  border-radius: 20px;
}
.thumbnail::after {
  content: "";
  display: block;
  padding-top: 100%;
}
.loading_image {
  width: 100%;
  background-size: cover;
  flex-shrink: 0;
  border-radius: 4px;
}
.info {
  margin: 5px 0;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
}
.loading_content {
  margin: 6% 0;
  width: 100%;
}
</style>
