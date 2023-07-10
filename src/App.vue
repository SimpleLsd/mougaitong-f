<template>
  <div class="app">
    <!-- <NavLayout /> -->
    <!-- header预留 -->
    <div class="content">
      <!-- <div class="nav"> -->
      <NavBar />
      <!-- </div> -->

      <div class="router-view-container">
        <router-view :key="$route.fullPath" v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { RouterLink, RouterView } from "vue-router";
import { RouterView } from "vue-router";
// import NavLayout from "./components/layout/NavLayout.vue";
import NavBar from "./components/layout/NavBar.vue";

import { useMetadataStore } from "@/store/metadata";

const metadata = useMetadataStore();
metadata.getMetadataAction();
</script>
<style scoped>
.app * {
  font-family: var(--body-font-family);
}
.app {
  background-color: var(--mougaitong-background);
}
.content {
  width: 100%;
  height: 100vh;
}
.router-view-container {
  width: 100%;
  overflow: auto;
}
</style>
