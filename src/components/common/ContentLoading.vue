<template>
  <div class="content">
    <div class="progress"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.content {
  overflow: hidden;
  width: 100%;
  background-color: #eee;
  border-radius: 8px;
}
@keyframes progressing {
  0% {
    margin-left: -100px;
    opacity: 1;
  }
  100% {
    margin-left: 80%;
    opacity: 0;
  }
}
.progress {
  opacity: 0.8;
  width: 100px;
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 33%,
    #ffffff 66%,
    rgba(255, 255, 255, 0) 100%
  );
  animation: progressing 0.8s ease-in infinite;
  -webkit-animation: progressing 0.8s ease-in infinite;
}
</style>
