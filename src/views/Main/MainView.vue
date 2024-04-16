<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";

//Vue Material Kit 2 components
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";

// sections
import BrotherhoodChurch from "./Sections/BrotherhoodChurch.vue";
import MainPhotoGallery from "./Sections/MainPhotoGallery.vue";
import data from "./Sections/Data/designBlocksData";
import WeekSermon from "./Components/WeekSermon.vue";

import DiscipleTraning from "./Sections/DiscipleTraning.vue";

//images
import vueMkHeader from "@/assets/img/IMG_4918.jpg";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>
  <Header>
    <div
      class="page-header min-vh-75"
      :style="`background-image: url(${vueMkHeader})`"
      loading="lazy"
    >
      <div class="container">
        <div class="main-text-box">
          <div class="row">
            <div class="col-lg-7 text-center mx-auto position-relative">
              <div class="img-text">중앙영광교회</div>
              <p
                class="lead text-white px-5 mt-3"
                :style="{ fontWeight: '500' }"
              >
                성령의 능력으로 모든 족속으로 제자를 삼아 증인 공동체를 세움으로
                하나님께 영광을 돌리고자 1994년 동경 신주쿠에 세워졌습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <WeekSermon />
    <DiscipleTraning />
    <BrotherhoodChurch />

    <MainPhotoGallery :data="data" />
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 ms-auto">
            <h4 class="mb-1">영상 예배 안내</h4>
            <p class="lead mb-0">We deliver the best web products</p>
          </div>
          <div class="col-lg-5 me-lg-auto my-lg-auto text-lg-end mt-5">
            <MaterialSocialButton
              route="https://www.youtube.com/channel/UCaz5p6HvV6D6H4eVyLj7sHw"
              component="youtube"
              color="youtube"
              label="youtube"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>

<style scoped>
.main-text-box {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 1rem; /* 검은색 배경에 투명도 추가 */
}
.img-text {
  font-size: 2.5rem;
  font-weight: bold;
  color: #eeeeee;
}
</style>
