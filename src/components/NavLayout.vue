<template>
  <div class="nav">
    <div class="logo">
      <img src="@/assets/mougaitong-logo.svg" />
    </div>
    <div class="nav_items">
      <ul>
        <router-link to="/"><span>🏠 网站首页 /Home </span></router-link>
        <router-link to="/"><span>👜 作品合集 /Works </span></router-link>
        <router-link to="/"><span>✍ 历史文章 /Articles </span></router-link>
        <router-link to="/"><span>🎨 我的画廊 /Gallery </span></router-link>
        <router-link to="/"><span>👉 关于本站 /About </span></router-link>
      </ul>
    </div>
    <div class="tag_items">
      <div class="tag_title">全部标签</div>
      <div class="tag">
        <span>玩儿什么</span>
        <span>游戏</span>
        <span>画渣记录</span>
        <span>学习笔记</span>
        <span>安利</span>
        <span>大前端</span>
        <span>小后端</span>
        <span>视觉补完计划</span>
      </div>
    </div>
    <div class="contact">
      <span>
        <IconConBehance />
      </span>
      <span>
        <iconConWechat />
      </span>
      <span>
        <IconConZcool />
      </span>
      <span>
        <IconConContact />
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconConBehance from "./icons/IconConBehance.vue";
import iconConWechat from "./icons/iconConWechat.vue";
import IconConZcool from "./icons/IconConZcool.vue";
import IconConContact from "./icons/IconConContact.vue";
</script>
<style scoped>
.nav {
  display: flex;
  flex-direction: column;
  width: 210px;
  font-size: 14px;
}

.logo {
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
}

ul span {
  display: block;
  padding-left: 24px;
  margin-top: 24px;
}

ul {
  padding-bottom: 24px;
}
ul:after {
  content: " ";
  border-bottom: 1px solid var(--color-border);
  position: absolute;
  bottom: 0;
  left: 24px;
  width: calc(100% - 48px);
}
.tag_items {
  margin-top: 24px;
  padding-left: 24px;
}
</style>
