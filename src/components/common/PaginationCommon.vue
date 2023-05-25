<template>
  <div class="pagination">
    <router-link
      v-for="item in Math.ceil(props.total_count / props.page_size)"
      :key="item"
      :to="`?page=${item}`"
      :class="['pagination-item', { active: item === props.current_page }]"
    >
      {{ item }}
    </router-link>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  total_count: { type: Number, required: true },
  page_size: { type: Number, required: true },
  // page_route: { type: String, required: true },
  current_page: { type: Number, required: true },
});
</script>
<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 20px;
}
</style>
