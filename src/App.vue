<template>
  <div class="app">
    <HeaderHeader />
    <div class="content">
      <NavBar />
      <div class="router-view-container">
        <router-view :key="$route.fullPath" v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
    </div>
    <FooterFooter />
  </div>
</template>

<script setup lang="ts">
// import { RouterLink, RouterView } from "vue-router";
import { RouterView } from "vue-router";
// import NavLayout from "./components/layout/NavLayout.vue";
import NavBar from "./components/layout/NavBar.vue";
import FooterFooter from "./components/common/FooterFooter.vue";
import HeaderHeader from "./components/common/HeaderHeader.vue";

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
}
.router-view-container {
  margin-left: calc(
    50vw + var(--mougaitong-nav-width) / 2 + var(--mougaitong-home-gap) / 2 -
      var(--mougaitong-main-width) / 2
  );
  overflow: auto;
}
</style>
