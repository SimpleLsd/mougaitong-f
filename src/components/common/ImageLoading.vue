<template>
  <div class="content">
    <div v-if="props.size === 100" class="progress size_100"></div>
    <div v-else class="progress size_56"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["size"]);
// console.log(document.getElementById("progress"));
</script>

<style scoped>
.content {
  overflow: hidden;
  width: 100%;
  background-color: #eee;
  border-radius: 8px;
}
@keyframes progressing {
  0% {
    margin-left: -100%;
    opacity: 1;
  }
  100% {
    margin-left: 100%;
    opacity: 0;
  }
}
.progress {
  opacity: 0.8;
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
.size_56 {
  width: 100%;
}
.size_56::after {
  content: "";
  display: block;
  padding-top: 56%;
}
.size_100 {
  width: 100%;
}
.size_100::after {
  content: "";
  display: block;
  padding-top: 100%;
}
</style>
