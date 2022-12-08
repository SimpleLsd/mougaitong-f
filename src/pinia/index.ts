import { defineStore } from "pinia";

export const useMetadataStore = defineStore("metadata", {
  state: () => ({
    count: 0,
  }),
});
