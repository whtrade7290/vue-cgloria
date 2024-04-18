<template>
  <div>
    <BoardComponent
      :title="title"
      :label="label"
      :name="this.$route.name"
    ></BoardComponent>
  </div>
</template>

<script>
import BoardComponent from "@/components/BoardComponent.vue";

export default {
  components: {
    BoardComponent,
  },
  data() {
    return {
      title: "설교",
      label: "말씀/속회",
      // sermonList: [],
    };
  },
  async created() {
    // await this.getSermonList();
  },
  // methods: {
  //   async getSermonList() {
  //     try {
  //       const response = await fetch("http://localhost:8080/sermon");
  //       const data = await response.json();
  //       this.sermonList = data;
  //       console.log("Sermon List:", this.sermonList);
  //     } catch (error) {
  //       console.error("Error fetching sermon list:", error);
  //     }
  //   },
  // },
};
</script>

<style scoped lang="scss"></style>
