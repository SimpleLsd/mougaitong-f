<template>
  <div class="main">
    {{ props.type }}
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  type: string;
}>();
</script>
<style scoped>
.main {
  display: flex;
  justify-content: center;
  width: 100%;
  line-height: 40px;
  height: 40px;
  background-color: #eee;
}
</style>
