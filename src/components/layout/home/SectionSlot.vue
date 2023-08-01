<template>
  <div class="section">
    <div class="title">
      <slot name="title_name"></slot>
      {{ route }}
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
<style scoped></style>
