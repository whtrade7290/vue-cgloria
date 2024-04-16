<template>
  <div>
    <BoardComponent :title="title" :label="label"></BoardComponent>
  </div>
</template>

<script setup>
// import BoardComponent from "/src/components/BoardComponent.vue";
import BoardComponent from "@/components/BoardComponent.vue";

const title = "칼럼";
const label = "말씀/속회";
</script>

<style lang="scss" scoped></style>
