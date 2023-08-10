<template>
  <div>{{ link }}</div>
</template>
<script setup lang="ts">
import { computed } from "vue";
interface Props {
  link: string;
}
const props = defineProps<Props>();
const link = computed(() => {
  console.log(props);
  console.log(1);
  return props.link ? props.link : "";
});
</script>
<style scoped></style>
