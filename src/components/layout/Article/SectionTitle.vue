<template>
  <div class="title">{{ props.content[0] }}</div>
</template>
<script setup lang="ts">
const props = defineProps<{
  content: Array<string>;
  description: string;
  textAlign?: string;
}>();
</script>
<style scoped>
.title {
  padding: 0 40px;
  font-size: 24px;
  font-weight: 700;
  color: #404040;
}
</style>
