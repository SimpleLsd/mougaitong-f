<template>
  <div class="vh">vh</div>
  <div class="lvh">lvh</div>
  <div class="svh">svh</div>
  <div class="dvh">dvh</div>
</template>
<style scoped>
.vh {
  border: 1vw solid white;
  line-height: 100vh;
  width: 25%;
  height: 100vh;
  background-color: red;
}
.lvh {
  border: 1vw solid white;
  line-height: 100vh;
  width: 25%;
  height: 100lvh;
  background-color: blue;
}
.svh {
  border: 1vw solid white;
  line-height: 100vh;
  width: 25%;
  height: 100svh;
  background-color: chartreuse;
}
.dvh {
  border: 1vw solid white;
  line-height: 100vh;
  width: 25%;
  height: 100dvh;
  background-color: fuchsia;
}
</style>
<script lang="ts" setup></script>
