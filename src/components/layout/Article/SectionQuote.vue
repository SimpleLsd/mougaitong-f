<template>
  <div class="main">
    <div class="left_quote">
      <img class="logo" src="../../../assets/quote.svg" alt="" />
    </div>
    <div class="content">
      <span v-for="span in finalStr" :key="span.type" :class="span.type">
        {{ span.content }}
      </span>
    </div>
    <div class="right_quote">
      <img class="logo" src="../../../assets/quote.svg" alt="" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { reAsteriskByRE } from "@/utils/tools";
const props = defineProps<{
  content: Array<string>;
}>();

const finalStr = computed(() => {
  return reAsteriskByRE(props.content[0]);
});
</script>
<style scoped>
.main {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 0 40px;
}
.main * {
  font-family: inherit;
  line-height: 1.8em;
}
.right_quote {
  display: flex;
  flex-direction: column;
  rotate: 180deg;
}
.content {
  margin: 32px 0;
}
.normal {
  color: #949799;
  font-size: 16px;
  font-weight: 400;
}
.bold {
  color: #949799;
  font-size: 16px;
  font-weight: 700;
}
.italic {
  color: #949799;
  font-size: 16px;
  font-weight: 350;
  font-style: italic;
}
.bolditalic {
  color: #949799;
  font-size: 16px;
  font-weight: 700;
  font-style: italic;
}
.left {
  text-align: left;
}
.center {
  text-align: center;
}
.right {
  text-align: right;
}
</style>
