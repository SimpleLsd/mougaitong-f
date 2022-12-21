<template>
  <div class="main">
    <div v-if="loaded" class="top_group">
      <!-- 加载时隐藏 -->
      <div
        class="cover"
        :style="{ backgroundImage: `url(${test_collection_cover})` }"
      ></div>
      <div class="title_group">
        <div class="num theme_red">
          <!-- {{ `NO.${articleNumStr}` }} -->
          NO.111
        </div>
        <div class="title middle_title_font">
          <!-- {{ title }} -->
          大标题
        </div>
      </div>
    </div>
    <div v-else class="top_group">
      <!-- 加载时显示 -->
      <div class="loading_cover">
        <ImageLoading />
      </div>
      <div class="loading_title">
        <ContentLoading />
      </div>
    </div>

    <div v-if="loaded" class="tag_date">
      <div class="tag des_font theme_red">
        <!-- {{ tag }} -->
        标签
      </div>
      <div class="date des_font gray">
        <!-- {{ dateStr }} -->
        日期
      </div>
    </div>
    <div v-else class="loading_tag_date">
      <ContentLoading />
    </div>

    <div v-if="loaded" class="des des_font dark_gray">
      <!-- {{ subTitle }} -->
      描述性文字
    </div>
    <div v-else class="loading_des">
      <ContentLoading />
    </div>
  </div>
</template>

<script setup lang="ts">
import { test_collection_cover } from "@/utils/tools";
import ContentLoading from "@/components/common/ContentLoading.vue";
import ImageLoading from "@/components/common/ImageLoading.vue";
const loaded = true;
</script>

<style scoped>
.main {
  width: 24%;
  background-color: azure;
}
.top_group {
  display: flex;
  align-items: center;
}
.top_group .cover {
  width: 40%;
  background-size: cover;
  flex-shrink: 0;
  border-radius: 8px;
}
.top_group .cover::after {
  content: "";
  display: block;
  padding-top: 56%;
}

.loading_cover {
  width: 40%;
  background-size: cover;
  flex-shrink: 0;
  border-radius: 8px;
}
.loading_title {
  width: 60%;
  padding-left: 4%;
}

.loading_tag_date,
.loading_des {
  margin-top: 4%;
}

.top_group .title_group {
  width: 60%;
  padding-left: 4%;
}
.title {
  font-weight: 700;
  margin-top: 2%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.tag_date {
  margin: 3% 0 1% 0;
  display: flex;
  justify-content: space-between;
}
.des {
  width: 100%;
  margin: 1% 0;
}
</style>
