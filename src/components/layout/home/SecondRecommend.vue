<template>
  <div class="second_article">
    <div class="top_group">
      <div
        class="cover"
        :style="{ backgroundImage: `url(${test_collection_cover})` }"
      ></div>
      <div class="title_group">
        <div class="num theme_red small_font">{{ `NO.${articleNumStr}` }}</div>
        <div class="title big_font">{{ props.article.title }}</div>
      </div>
    </div>
    <div class="tag_date">
      <div class="tag small_font theme_red">玩点什么</div>
      <div class="date small_font gray">7月17日</div>
    </div>
    <div class="des small_font dark_gray">
      “没有谁能像这两支队伍一样广为人知、备受喜爱、如此传奇。”
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { IArticle } from "@/store/types";
import { numtoNO3 } from "@/utils/tools";

const test_collection_cover =
  "https://image.gcores.com/d8c1f38b-6591-4963-a4d0-0f8c621754af.jpg?x-oss-process=image/resize,limit_1,m_lfit,w_2000,h_2000/quality,q_90/format,webp";
interface Props {
  article: IArticle;
}
const props = defineProps<Props>();
console.log(props.article);

const articleNumStr = computed(() => {
  if (props.article) {
    return numtoNO3(props.article.articleNum);
  } else {
    return "";
  }
});
</script>

<style scoped>
/* ------------------------------媒体查询部分------------------------------- */
@media (max-width: 640px) {
  .small_font {
    font-size: 10px;
  }
  .big_font {
    font-size: 12px;
    font-weight: 700;
  }
  .des {
    display: none;
  }
}
@media (min-width: 641px) and (max-width: 959px) {
  .small_font {
    font-size: 12px;
  }
  .big_font {
    font-size: 12px;
    font-weight: 700;
  }
  .des {
    display: none;
  }
}
@media (min-width: 960px) and (max-width: 1279px) {
  .small_font {
    font-size: 14px;
  }
  .big_font {
    font-size: 16px;
    font-weight: 700;
  }
}
@media (min-width: 1280px) and (max-width: 1599px) {
  .small_font {
    font-size: 14px;
  }
  .big_font {
    font-size: 16px;
    font-weight: 700;
  }
}
@media (min-width: 1600px) and (max-width: 1920px) {
  .small_font {
    font-size: 16px;
  }
  .big_font {
    font-size: 18px;
    font-weight: 700;
  }
}
@media (min-width: 1921px) {
  .small_font {
    font-size: 16px;
  }
  .big_font {
    font-size: 20px;
    font-weight: 700;
  }
}
/* ------------------------------布局部分------------------------------- */
.second_article {
  padding: 1% 2%;
  width: 32%;
  background-color: var(--mougaitong-white);
  border-radius: 16px;
}

.top_group {
  display: flex;
  align-items: center;
}
.cover {
  width: 40%;
  background-size: cover;
  flex-shrink: 0;
  border-radius: 8px;
}
.cover::after {
  content: "";
  display: block;
  padding-top: 60%;
}
.title_group {
  width: 60%;
  padding-left: 4%;
}
.title {
  margin-top: 2%;
  word-wrap: break-word;
}
.tag_date {
  margin: 2% 0;
  display: flex;
  justify-content: space-between;
}
.des {
  width: 100%;
  margin: 2% 0;
}
</style>
