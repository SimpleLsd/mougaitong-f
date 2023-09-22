<template>
  <div class="main">
    <div
      class="stamp"
      :style="{ backgroundImage: `url(${stampStatic}${props.stamp[0]}.png)` }"
    ></div>
  </div>
</template>
<script setup lang="ts">
import { stampStatic } from "@/utils/tools";
const props = defineProps<{
  stamp: Array<string>;
}>();
</script>
<style scoped>
.main {
  height: 60px;
  width: 100%;
}
.stamp {
  width: 60px;
  height: 60px;
  margin: 0 auto;
  background-size: cover;
}
</style>
