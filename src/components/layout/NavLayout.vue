<template>
  <div class="nav_main">
    <div class="logo">
      <img class="logo-inner-1" src="@/assets/mougaitong-logo.svg" />
      <img class="logo-inner-2" src="@/assets/mougaitong-logo-small.svg" />
    </div>
    <div class="nav_items">
      <ul>
        <router-link to="/">
          <div class="nav_item_big">
            <span>🏠 网站首页 /Home </span>
          </div>
          <div class="nav_item_small">
            <span class="icon">🏠</span>
            <span class="text">首页</span>
          </div>
        </router-link>
        <router-link to="/works">
          <div class="nav_item_big">
            <span>👜 作品合集 /Works </span>
          </div>
          <div class="nav_item_small">
            <span class="icon">👜</span>
            <span class="text">作品</span>
          </div>
        </router-link>
        <router-link to="/articles">
          <div class="nav_item_big">
            <span>✍ 历史文章 /Articles </span>
          </div>
          <div class="nav_item_small">
            <span class="icon">✍</span>
            <span class="text">文章</span>
          </div>
        </router-link>
        <router-link to="/gallery">
          <div class="nav_item_big">
            <span>🎨 我的画廊 /Gallery </span>
          </div>
          <div class="nav_item_small">
            <span class="icon">🎨</span>
            <span class="text">画廊</span>
          </div>
        </router-link>
        <router-link to="/about">
          <div class="nav_item_big">
            <span>👉 关于本站 /About </span>
          </div>
          <div class="nav_item_small">
            <span class="icon">👉</span>
            <span class="text">关于</span>
          </div>
        </router-link>
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
    <div class="contract">
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
@media (max-width: 800px) {
  .nav_main {
    display: none !important;
  }
}
@media (min-width: 1280px) and (max-width: 1920px) {
  .nav_main {
    --side-width: 210px;
  }
  .logo {
    height: 160px;
  }
  .logo-inner-2 {
    display: none;
  }
  .nav_item_small {
    display: none;
  }
  ul a {
    padding-left: 12px;
    height: 40px;
    line-height: 40px;
  }
  .contract {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 44px;
  }
  .contract span {
    margin: 0 10px;
  }
}
@media (min-width: 640px) and (max-width: 1279px) {
  .nav_main {
    --side-width: 75px;
  }
  .logo {
    height: 80px;
  }
  .logo-inner-1 {
    display: none;
  }
  .nav_item_big {
    display: none;
  }
  ul a {
    padding-top: 8px;
    text-align: center;
    height: 60px;
    line-height: 160%;
  }
  ul:after,
  .tag_items .tag_title,
  .tag_items .tag span {
    display: none !important;
  }
  .contract {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
    padding-bottom: 8px;
    /* height: 44px; */
  }
  .contract span {
    margin: 8px 0;
  }
}

.nav_main {
  display: flex;
  flex-direction: column;
  width: var(--side-width);
  flex-shrink: 0;
  height: 100%;
  font-size: 14px;
}

.logo {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

ul {
  padding: 0 8px 24px 8px;
}

ul a {
  display: block;
  margin-top: 4px;
  border-radius: 4px;
  /* background-color: #f5f5f5; */
}

ul a:hover {
  background-color: #f5f5f5;
}

ul a.router-link-active {
  background-color: #f5f5f5;
}

ul span {
  display: block;
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
</style>
