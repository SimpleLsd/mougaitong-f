<template>
  <div class="pagination">
    <router-link
      v-for="item in Math.ceil(props.total_count / props.page_size)"
      :key="item"
      :to="`?page=${item}`"
      :class="['pagination_item', { active: item === props.current_page }]"
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
.pagination_item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #fff;
  color: #666;
  text-decoration: none;
  font-size: 14px;
}
.active {
  background-color: #333;
  color: #fff;
  pointer-events: none;
}
</style>
