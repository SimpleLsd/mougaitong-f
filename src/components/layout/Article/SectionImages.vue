<template>
  <!-- {{ currentImgIndex }} -->
  <div class="main">
    <div v-if="props.imageLinks.length > 1" id="left-arrow" @click="SlideLeft">
      <img src="@/assets/icons/img-arrow.svg" />
    </div>
    <div class="imgs">
      <div id="img_container" :class="props.randomImgId">
        <img :src="imageLinks[imageLinks.length - 1]" alt="" />
        <img
          v-for="img in imageLinks"
          :key="img"
          :src="img"
          :class="props.randomImgId"
        />
      </div>
    </div>
    <div
      v-if="props.imageLinks.length > 1"
      id="right-arrow"
      @click="SlideRight"
    >
      <img src="@/assets/icons/img-arrow.svg" />
    </div>
  </div>
  <div class="description">{{ props.sectionDescription }}</div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  imageLinks: Array<string>;
  sectionDescription: string;
  randomImgId: string;
}>();

const anime = (
  element: HTMLElement | undefined,
  endW: number,
  duration: number,
  curve: "ease-in-out" | "none"
) => {
  if (element) {
    element.style.transition = "none";
    element.style.transition = `transform ${duration}ms ${curve}`;
    element.style.transform = `translate3d(${endW}px, 0, 0)`;
    // console.log(element, endW, duration);
  }
};

const currentImgIndex = ref(1);

const SlideLeft = () => {
  const slide = document.getElementsByClassName(props.randomImgId)[0] as
    | HTMLElement
    | undefined;
  const imgs = document.getElementsByClassName(props.randomImgId);
  if (currentImgIndex.value === 1) {
    anime(slide, 0 * 660, 200, "ease-in-out");
    currentImgIndex.value = imgs.length - 1;
    setTimeout(() => {
      anime(slide, (1 - imgs.length) * 660, 200, "none");
    }, 200);
  } else {
    currentImgIndex.value -= 1;
    anime(slide, -currentImgIndex.value * 660, 200, "ease-in-out");
  }
};

const SlideRight = () => {
  const slide = document.getElementsByClassName(props.randomImgId)[0] as
    | HTMLElement
    | undefined;
  const imgs = document.getElementsByClassName(props.randomImgId);
  if (currentImgIndex.value === imgs.length - 1) {
    anime(slide, 0 * 660, 200, "none");
    setTimeout(() => {
      anime(slide, -1 * 660, 200, "ease-in-out");
      currentImgIndex.value = 1;
    }, 10);
  } else {
    currentImgIndex.value += 1;
    anime(slide, -currentImgIndex.value * 660, 200, "ease-in-out");
  }
};
</script>
<style scoped>
.main * {
  user-select: none;
}
.main {
  width: 740px;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-between;
  gap: 10px;
  margin: 0 auto;
  width: 100%;
  height: auto;
}
.imgs {
  margin: 0 auto;
  display: inline;
  width: 660px;
  height: auto;
  overflow: hidden;
  white-space: nowrap;
}
.imgs img {
  vertical-align: middle;
  display: inline;
  width: 660px;
  padding: auto 0;
}
#img_container {
  transform: translate3d(-660px, 0, 0);
}
#left-arrow,
#right-arrow {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  cursor: pointer;
}
#left-arrow:hover,
#right-arrow:hover {
  background-color: #eee;
}
#left-arrow img,
#right-arrow img {
  opacity: 0.5;
  width: 20px;
}
#left-arrow {
  transform: rotate(180deg);
}
.description {
  width: 100%;
  user-select: auto;
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #666;
}
</style>
