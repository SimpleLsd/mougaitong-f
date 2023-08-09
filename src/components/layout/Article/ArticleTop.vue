<template>
  <div class="top_main">
    <div class="cover" :style="{ backgroundImage: `url(${cover})` }"></div>
    <div class="text">
      <div class="num font_small theme_red">N0.{{ articleNumStr }}</div>
      <div class="title">{{ title }}</div>
      <div class="tag_date font_small">
        <div class="tag_group">
          <div class="tag theme_red" v-for="item in tags" :key="item.tagID">
            {{ item.tagName }}
          </div>
        </div>
        <div class="date middle_gray">{{ dateStr }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";

import { numtoNO3, dateMD } from "@/utils/tools";

interface Itags {
  tagID: string;
  tagName: string;
  tagRoute: string;
}

interface Props {
  num: number;
  cover: string;
  title: string;
  tags: Array<Itags>;
  date: string;
}
const props = defineProps<Props>();

const articleNumStr = computed(() => {
  return numtoNO3(props.num as number);
});

const dateStr = computed(() => {
  return dateMD(props.date as string);
});
</script>
<style scoped>
.top_main {
  width: 1000px;
  padding: 0 40px 40px 40px;
  display: flex;
  flex-flow: column;
  gap: 32px;
}
.cover {
  width: 100%;
  height: 370px;
  border-radius: 16px;
  background-size: cover;
}
.text {
  display: flex;
  flex-flow: column;
  gap: 16px;
}
.tag_date {
  display: flex;
  justify-content: space-between;
}
.tag_group {
  display: flex;
  gap: 8px;
}
.font_small {
  font-size: 14px;
}
.title {
  font-size: 20px;
  font-weight: bold;
}
</style>
