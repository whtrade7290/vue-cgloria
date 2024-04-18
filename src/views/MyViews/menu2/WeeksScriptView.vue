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

const title = "금주의 성경말씀";
const label = "말씀/속회";
</script>

<style lang="scss" scoped></style>
