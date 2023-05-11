<template>
  <div class="app">
    <NavLayout />
    <div class="router-view-container">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { RouterLink, RouterView } from "vue-router";
import { RouterView } from "vue-router";
import NavLayout from "./components/layout/NavLayout.vue";

import { useMetadataStore } from "@/store/metadata";

const metadata = useMetadataStore();
metadata.getMetadataAction();
</script>
<style scoped>
.router-view-container {
  flex-grow: 1;
  height: 100%;
  overflow: auto;
  background-color: #f9f9fd;
}
</style>
