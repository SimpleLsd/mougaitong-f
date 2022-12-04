import { createStore } from "vuex";

import type { IRootState } from "./types";

import metadata from "./metadata";
import toparticle from "./toparticle";

const store = createStore<IRootState>({
  state: () => {
    return {
      name: "",
      num: 44,
      numObj: {
        num1: 55,
        num2: 66,
      },
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
    toparticle,
  },
});

export default store;
