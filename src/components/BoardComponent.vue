<template>
  <BaseLayout
    :title="title"
    :breadcrumb="[{ label: label, route: '/' }, { label: title }]"
  >
    <View :title="title" :postList="postList" :name="name" id="Sermon_view">
      <PaginationSimple />
    </View>
  </BaseLayout>
</template>

<script>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "@/layouts/sections/components/BaseLayout.vue";
import View from "@/layouts/sections/components/View.vue";

// Pagination page components
import PaginationSimple from "@/layouts/sections/navigation/pagination/components/PaginationSimple.vue";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    postList: {
      type: Array,
      default: null,
    },
    name: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      sermonList: [],
    };
  },
  setup() {
    //hook
    onMounted(() => {
      setNavPills();
    });
  },
  components: {
    BaseLayout,
    // eslint-disable-next-line vue/no-reserved-component-names
    View,
    PaginationSimple,
  },
};
</script>
