<template>
  <div class="footer">
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
</template>
<script setup lang="ts"></script>
<style scoped>
img {
  filter: grayscale(100%);
}
.footer {
  width: 100%;
  height: 100px;
  background: linear-gradient();
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--mougaitong-white);
}
.footer .left {
  height: 100px;
  display: flex;
  align-items: center;
}
.footer .left::before {
  content: "";
  display: block;
  width: 32px;
  height: 100%;
  background-color: #444;
  background: linear-gradient(
    90deg,
    var(--mougaitong-background) 0%,
    var(--mougaitong-white) 100%
  );
}
.footer .middle {
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: var(--mougaitong-gray);
  gap: 6px;
}
.footer .right {
  height: 100px;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: var(--mougaitong-gray);
  margin-right: 32px;
}
</style>
