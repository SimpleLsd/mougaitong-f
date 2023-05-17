<template>
  <div>{{ page_number }}</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
// const router = useRouter();

// interface Props {
//   pageNumber: number;
// }
// const props = defineProps<Props>();

const page_number = computed(() => {
  return route.query.page || 1;
});
</script>

<style scoped></style>
