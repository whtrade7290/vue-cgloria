<template>
  <div>
    <BoardComponent
      :title="title"
      :label="label"
      :name="this.$route.name"
    ></BoardComponent>
  </div>
</template>

<script setup>
// import BoardComponent from "/src/components/BoardComponent.vue";
import BoardComponent from "@/components/BoardComponent.vue";

const title = "갤러리";
const label = "훈련";
</script>

<style lang="scss" scoped></style>
