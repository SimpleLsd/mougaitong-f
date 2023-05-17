<template>
  <div>{{ page_number }}</div>
  <div>{{ articlesCount }}</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useMetadataStore } from "@/store/metadata";
import {
  // useRouter,
  useRoute,
} from "vue-router";

const route = useRoute();
// const router = useRouter();

const metadata = useMetadataStore();
const articlesCount = computed(() => {
  return metadata.totalArticleNum;
});

const page_number = computed(() => {
  return route.query.page || 1;
});
</script>

<style scoped></style>
