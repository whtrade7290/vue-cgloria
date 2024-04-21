import { fetchSermonList } from "@/api/index";
import mutations from "./mutations.js";

export default {
  async FETCH_TRAINING_NOTICE() {
    const res = await fetchSermonList();
    mutations.SET_SERMON(res.data);
    return res;
  },
  increment() {
    console.log("excute");
  },
};
