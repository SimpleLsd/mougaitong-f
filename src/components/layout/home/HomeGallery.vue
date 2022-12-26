<template>
  <div>{{ loaded }}</div>
  <div></div>
</template>

<script setup lang="ts">
// import ContentLoading from "@/components/common/ContentLoading.vue";
// import ImageLoading from "@/components/common/ImageLoading.vue";
import { computed } from "vue";
import type { IPicture } from "@/store/types";
import { numtoNO3, dateMD } from "@/utils/tools";

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

const tag = computed(() => {
  return props.picture ? props.picture.pictureTags[0].tagName : "";
});

const pictureNumStr = computed(() => {
  return props.picture ? numtoNO3(props.picture.pictureNum) : "";
});

const dateStr = computed(() => {
  return props.picture ? dateMD(props.picture.dateStr) : "";
});
</script>

<style scoped></style>
