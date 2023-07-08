<template>
  <div class="main" :class="textAlign">
    <span v-for="span in finalStr" :key="span.type" :class="span.type">
      {{ span.content }}
    </span>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { reAsteriskByRE } from "@/utils/tools";
const props = defineProps<{
  content: Array<string>;
  textAlign?: string;
}>();

const textAlign = computed(() => {
  return props.textAlign ? props.textAlign : "left";
});

const finalStr = computed(() => {
  return reAsteriskByRE(props.content[0]);
});
//首个***被三个引号包含的内容1***，过渡***被三个引号包含的内容2***，
</script>
<style scoped>
.main {
  padding: 0 40px;
}
.main * {
  font-family: inherit;
  line-height: 1.8em;
}
.span {
  width: 100%;
  line-height: 1.8em;
}
.normal {
  color: #606060;
  font-size: 16px;
  font-weight: 400;
}
.bold {
  color: rgb(50, 50, 50);
  font-size: 16px;
  font-weight: 700;
}
.italic {
  color: #606060;
  font-size: 16px;
  font-weight: 350;
  font-style: italic;
}
.bolditalic {
  color: rgb(50, 50, 50);
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
