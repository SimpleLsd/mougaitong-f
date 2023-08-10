<template>
  <!-- <div><PictureTest :link="picture.link" /></div> -->
  <!-- <div>{{ picture }}</div> -->
  <div class="picture_main">
    <img :src="picture.link" class="picture" />
    <div class="title">{{ picture.title }}</div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import type { IPicture } from "@/store/types";
import { getPictureByNum } from "@/service";

// import PictureTest from "@/components/layout/Picture/PictureTest.vue";

const route = useRoute();

const picture = ref<IPicture>({
  pictureNum: 0,
  pictureId: "",
  totalNum: 0,
  dateStr: "",
  pictureTags: [],
  link: "",
  title: "",
  descriptions: [],
  size: [],
});

onMounted(async () => {
  try {
    const get_picture = await getPictureByNum(
      parseInt(route.params.num as string)
    );
    console.log(get_picture[0]);

    picture.value.pictureNum = get_picture.pictureNum ?? 0;
    picture.value.pictureId = get_picture.pictureId ?? "";
    picture.value.totalNum = get_picture.totalNum ?? 0;
    picture.value.dateStr = get_picture.dateStr ?? "";
    picture.value.pictureTags = get_picture.pictureTags ?? [];
    picture.value.link = get_picture.link ?? "";
    picture.value.title = get_picture.title ?? "";
    picture.value.descriptions = get_picture.descriptions ?? [];
    picture.value.size = get_picture.size ?? [];
  } catch (err) {
    console.log(err);
  }
});
</script>
<style scoped>
.picture_main {
  width: var(--mougaitong-main-width);
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.picture {
  max-width: 50%;
}
.title {
  font-size: 20px;
  font-weight: bold;
}
</style>
