<template>
  <a class="dark_gray" :href="props.link">
    {{ props.content[0] }}
  </a>
</template>
<script setup lang="ts">
const props = defineProps<{
  content: Array<string>;
  link: string;
}>();
</script>
<style scoped>
a {
  text-decoration: underline;
  font-size: 16px;
  font-weight: 400;
}
</style>
