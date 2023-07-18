<template>
  <div class="main">
    <ul>
      <router-link to="/">
        <div class="nav_item_big">
          <span class="icon">🏠</span>
          <span class="text">首页 /Home </span>
        </div>
        <div class="nav_item_small">
          <span class="icon">🏠</span>
          <span class="text">首页</span>
        </div>
      </router-link>
      <router-link to="/works">
        <div class="nav_item_big">
          <span class="icon">👜</span>
          <span class="text">作品 /Works </span>
        </div>
        <div class="nav_item_small">
          <span class="icon">👜</span>
          <span class="text">作品</span>
        </div>
      </router-link>
      <router-link to="/articles">
        <div class="nav_item_big">
          <span class="icon">✍</span>
          <span class="text">文章 /Articles </span>
        </div>
        <div class="nav_item_small">
          <span class="icon">✍</span>
          <span class="text">文章</span>
        </div>
      </router-link>
      <router-link to="/gallery">
        <div class="nav_item_big">
          <span class="icon">🎨</span>
          <span class="text">画廊 /Gallery </span>
        </div>
        <div class="nav_item_small">
          <span class="icon">🎨</span>
          <span class="text">画廊</span>
        </div>
      </router-link>
      <router-link to="/about">
        <div class="nav_item_big">
          <span class="icon">👉</span>
          <span class="text">关于 /About </span>
        </div>
        <div class="nav_item_small">
          <span class="icon">👉</span>
          <span class="text">关于</span>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.main {
  display: flex;
  position: fixed;
  top: 0;
  left: calc(
    50vw - var(--mougaitong-nav-width) / 2 - var(--mougaitong-home-gap) / 2 -
      var(--mougaitong-main-width) / 2
  );
  flex-direction: column;
  width: var(--mougaitong-nav-width);
  gap: 8px;
  font-size: 18px;
  z-index: 1;
  border-radius: 12px;
  background-color: #fff;
}
.text {
  font-size: var(--mougaitong-nav-textfz);
}
.icon {
  margin-right: 8px;
  font-size: var(--mougaitong-nav-iconfz);
}
ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
}

ul a {
  border-radius: 8px;
  /* width: 100%; */
  padding: 16px;
  /* background-color: #f5f5f5; */
}

ul a:hover {
  background-color: #f9f9fd;
}

ul a.router-link-active {
  background-color: #f9f9fd;
}

@media (min-width: 1600px) {
  .nav_item_small {
    display: none;
  }
}
@media (max-width: 1599px) {
  .nav_item_big {
    display: none;
  }
}
</style>
