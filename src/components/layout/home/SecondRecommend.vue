<template>
  <div class="container">
    <div class="second_article">
      <div class="top_group">
        <div
          class="cover"
          :style="{ backgroundImage: `url(${test_collection_cover})` }"
        ></div>
        <div class="top_group">
          <div class="num">NO.001</div>
          <div class="title">转载 - S12图说丨八强篇T1 vs RNG——归零</div>
        </div>
      </div>
      <div class="tag_date">
        <div class="tag">玩点什么</div>
        <div class="date">7月17日</div>
      </div>
      <div class="des">
        “没有谁能像这两支队伍一样广为人知、备受喜爱、如此传奇。”
      </div>
    </div>

    <div class="second_article"></div>
    <div class="second_article"></div>
  </div>
</template>

<script setup lang="ts">
const test_collection_cover =
  "https://image.gcores.com/d8c1f38b-6591-4963-a4d0-0f8c621754af.jpg?x-oss-process=image/resize,limit_1,m_lfit,w_2000,h_2000/quality,q_90/format,webp";
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
  background-color: azure;
}
/* .container::after { content: ""; display: block; padding-top: 10%; } */
.container .second_article {
  padding: 1% 2%;
  width: 32%;
  background-color: aqua;
}
/* .container .second_article::after { content: ""; display: block; padding-top: 50%; } */
</style>
