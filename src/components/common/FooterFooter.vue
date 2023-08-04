<template>
  <div class="footer">
    <div class="container">
      <div class="left">
        <div class="gradient_block"></div>
        <img src="src/assets/mougaitong-logo-footer.svg" alt="" />
      </div>
      <div class="middle">
        <p>“本网站只进行知识、作品、心得等的分享，拒绝任何鸡汤内容”</p>
        <p>输入Ctrl/Command + / 进入快速通道</p>
      </div>
      <div class="right">京ICP备2021028333号-1</div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
img {
  filter: grayscale(100%);
}
.footer {
  width: 100%;
  height: 100px;
  background-color: var(--mougaitong-white);
}
.container {
  width: calc(
    var(--mougaitong-main-width) + var(--mougaitong-nav-width) +
      var(--mougaitong-home-gap)
  );
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left {
  height: 100px;
  display: flex;
  align-items: center;
}

.middle {
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: var(--mougaitong-gray);
  gap: 6px;
}
.right {
  text-align: right;
  height: 100px;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: var(--mougaitong-gray);
}
</style>
