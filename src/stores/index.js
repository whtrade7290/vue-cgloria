import { defineStore } from "pinia";
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";
import { getBoardList } from "@/api/index";

export const useAppStore = defineStore("storeId", {
  state: () => {
    return {
      bootstrap,
      dataList: [],
    };
  },
  actions: {
    // async fetchBoardList(name) {
    //   const res = await fetchSermonList(name);
    //   this.dataList = res.data; // 상태를 직접 변경
    //   return res;
    // },
    async fetchBoardList(name) {
      const res = await getBoardList(name);
      this.dataList = res.data; // 상태를 직접 변경
      return res;
    },
  },
});
