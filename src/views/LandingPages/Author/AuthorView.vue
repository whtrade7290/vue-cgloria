<script setup>
import { useRoute } from "vue-router";

// example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import Header from "../../../examples/Header.vue";

// sections
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
import Posts from "./Sections/AuthorPosts.vue";

// image
import image from "@/assets/img/disciple.jpeg";

const route = useRoute();
// console.log(, );
</script>
<template>
  <DefaultNavbar transparent />
  <Header>
    <div
      class="page-header min-height-400"
      :style="{ backgroundImage: `url(${image})` }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-8"></span>
    </div>
  </Header>
  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
    <!-- <Profile /> -->
    <Posts :num="route.params.postId" />
  </div>
  <!-- 지도 커스텀하기 -->
  <!-- <Contact /> -->
  <DefaultFooter />
</template>
