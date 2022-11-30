import { createStore } from "vuex";

import type { IRootState } from "./types";

import metadata from "./metadata";

const store = createStore<IRootState>({
  state: () => {
    return {
      name: "a",
    };
  },
  mutations: {},
  getters: {},
  actions: {
    a() {
      console.log(1);
    },
  },
  modules: {
    metadata,
  },
});

export default store;
