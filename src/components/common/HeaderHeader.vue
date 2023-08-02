<template>
  <div class="main">
    <img class="logo" src="src/assets/mougaitong-logo-header.svg" alt="" />
    <div class="links">
      <a href="">合集</a>
      <a href="">标签</a>
      <a href="">关于</a>
      <a href="">联系</a>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.main {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
}
.logo {
  width: 167px;
  height: 38px;
}
.links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}
a {
  font-size: 16px;
}
</style>
