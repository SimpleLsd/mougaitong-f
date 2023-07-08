<template>
  <div class="nav_container">
    <div class="nav_main">
      <!-- <div class="logo">
        <img class="logo-inner-1" src="@/assets/mougaitong-logo.svg" />
        <img class="logo-inner-2" src="@/assets/mougaitong-logo-small.svg" />
      </div> -->
      <div class="nav_items">
        <ul>
          <router-link to="/">
            <div class="nav_item_big">
              <span class="icon">🏠</span>
              <span class="text">网站首页 /Home </span>
            </div>
            <div class="nav_item_small">
              <span class="icon">🏠</span>
              <span class="text">首页</span>
            </div>
          </router-link>
          <router-link to="/works">
            <div class="nav_item_big">
              <span class="icon">👜</span>
              <span class="text">作品合集 /Works </span>
            </div>
            <div class="nav_item_small">
              <span class="icon">👜</span>
              <span class="text">作品</span>
            </div>
          </router-link>
          <router-link to="/articles">
            <div class="nav_item_big">
              <span class="icon">✍</span>
              <span class="text">历史文章 /Articles </span>
            </div>
            <div class="nav_item_small">
              <span class="icon">✍</span>
              <span class="text">文章</span>
            </div>
          </router-link>
          <router-link to="/gallery">
            <div class="nav_item_big">
              <span class="icon">🎨</span>
              <span class="text">我的画廊 /Gallery </span>
            </div>
            <div class="nav_item_small">
              <span class="icon">🎨</span>
              <span class="text">画廊</span>
            </div>
          </router-link>
          <router-link to="/about">
            <div class="nav_item_big">
              <span class="icon">👉</span>
              <span class="text">关于本站 /About </span>
            </div>
            <div class="nav_item_small">
              <span class="icon">👉</span>
              <span class="text">关于</span>
            </div>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// import IconConBehance from "@/components/icons/IconConBehance.vue";
// import iconConWechat from "@/components/icons/iconConWechat.vue";
// import IconConZcool from "@/components/icons/IconConZcool.vue";
// import IconConContact from "@/components/icons/IconConContact.vue";
</script>
<style scoped>
/* @media (max-width: 800px) {
  .nav_main {
    display: none !important;
  }
} */
/* @media (min-width: 1280px) and (max-width: 1920px) {
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
    color: #333;
    padding-left: 12px;
    height: 64px;
    line-height: 40px;
  }

  ul a span {
    display: inline-block;
  }
  ul a .icon {
    line-height: 64px;
    font-size: 22px;
  }
  ul a .text {
    line-height: 64px;
    font-size: 14px;
    font-weight: 400;
    margin-left: 8px;
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
} */
/*
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
  }
  .contract span {
    margin: 8px 0;
  }
}

*/

.nav_main {
  display: flex;
  flex-direction: column;
  width: var(--side-width);
  flex-shrink: 0;
  height: 100vh;
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
  background-color: #f9f9fd;
}

ul span {
  display: block;
}

/* ul:after {
  content: " ";
  border-bottom: 1px solid var(--color-border);
  position: absolute;
  bottom: 0;
  left: 24px;
  width: calc(100% - 48px);
} */
</style>
