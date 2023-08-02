<template>
  <div class="section">
    <div class="title_group huge_title_font">
      <slot name="title_name"></slot>
      {{ route }}
      <a href="" class="big_title_font gray">查看更多 ></a>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
interface Props {
  route: string;
}

const props = defineProps<Props>();
const route = computed(() => {
  return props.route ? props.route : "false";
});
</script>
<style scoped>
.title_group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a {
  font-weight: 400;
}
.content {
  margin-bottom: 24px;
}
</style>
