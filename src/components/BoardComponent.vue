<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "@/layouts/sections/components/BaseLayout.vue";
import View from "@/layouts/sections/components/View.vue";

// Pagination page components
import PaginationSimple from "@/layouts/sections/navigation/pagination/components/PaginationSimple.vue";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

defineProps({
  title: {
    type: String,
    default: "설교",
  },
  label: {
    type: String,
    default: "말씀/속회",
  },
});

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    :title="title"
    :breadcrumb="[{ label: label, route: '/' }, { label: title }]"
  >
    <View title="title" id="Sermon_view">
      <PaginationSimple />
    </View>
  </BaseLayout>
</template>
