<template>
  <div class="nav_main">
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
        <span>GAMES</span>
        <span>画渣记录</span>
        <span>学习笔记</span>
        <span>安利</span>
        <span>大前端</span>
        <span>小后端</span>
        <span>视觉补完计划</span>
      </div>
    </div>
    <div class="context">
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
import IconConBehance from "@/components/icons/IconConBehance.vue";
import iconConWechat from "@/components/icons/iconConWechat.vue";
import IconConZcool from "@/components/icons/IconConZcool.vue";
import IconConContact from "@/components/icons/IconConContact.vue";
</script>
<style scoped>
@media (min-width: 600px) and (max-width: 1279px) {
  .nav_main {
    --side-width: 75px;
  }
}
@media (min-width: 1280px) and (max-width: 1919px) {
  .nav_main {
    --side-width: 210px;
  }
}
.nav_main {
  display: flex;
  flex-direction: column;
  width: var(--side-width);
  /* flex: 0 0 var(--side-width); */
  flex-shrink: 0;
  height: 100%;
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
  flex: auto;
  margin-top: 24px;
  padding: 0 24px;
}
.tag_items .tag_title {
  font-size: 12px;
  color: var(--mougaitong-theme);
}
.tag_items .tag span {
  display: inline-block;
  margin-top: 16px;
  margin-right: 16px;
}
.context {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 44px;
}
.context span {
  margin: 0 10px;
}
</style>
