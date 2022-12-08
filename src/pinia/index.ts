import { defineStore } from "pinia";

export const useMetaDataStore = defineStore("metadata", {
  state: () => ({
    count: 0,
  }),
});
