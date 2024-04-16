<script setup>
import { onMounted } from "vue";

//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

//image
import image from "@/assets/img/pastor.jpeg";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <DefaultNavbar
          :sticky="true"
          :action="{
            route: 'https://www.creative-tim.com/product/vue-material-kit-pro',
            color: 'bg-gradient-success',
            label: 'Buy Now',
          }"
        />
      </div>
    </div>
  </div>
  <section>
    <div class="page-header min-vh-100">
      <div class="container">
        <div class="row">
          <div
            class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column"
          >
            <div
              class="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
              :style="{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
              }"
              loading="lazy"
            ></div>
          </div>
          <div
            class="mt-8 col-xl-5 col-lg-6 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5"
          >
            <div
              class="card d-flex blur justify-content-center shadow-lg my-sm-0 my-sm-6 mt-8 mb-5"
            >
              <div
                class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent"
              >
                <div
                  class="bg-gradient-success shadow-success border-radius-lg p-3"
                >
                  <h3 class="text-white text-success mb-0">목회자 소개</h3>
                </div>
              </div>
              <div class="card-body">
                <h3>하나님과의 만남</h3>
                <p class="pb-3">
                  중앙영광교회 담임목사는 이용규 목사입니다.<br />
                  1988년 일본으로 유학을 와서 박사과정을 밟던 중에,<br />
                  불의의 사고로 얼굴을 중심으로 3도 중화상이라는 큰 고통 속에<br />
                  살아계신 하나님을 만나 주의 종으로 서원했습니다. 그 후<br />
                  한국에서 신학 대학을 졸업하고, 감리교단으로부터 일본
                  선교사로<br />
                  파송 받아 1994년 5월 첫 주 신주쿠에서 중앙영광교회를
                  개척하여<br />
                  오늘에 이르고 있습니다.
                </p>
              </div>

              <div class="card-body">
                <h3>경력 및 학력</h3>
                <ul>
                  <li>마산고등학교 졸업</li>
                  <li>서울대 공과대학 졸업</li>
                  <li>서울대 대학원 졸업</li>
                  <li>일본 동경대 박사과정수학</li>
                  <li>감리교 신학대 졸업</li>
                  <li>선한목자교회 전도사</li>
                  <li>일본 선교사로 파송</li>
                  <li>현 중앙영광교회 담임</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <DefaultFooter />
</template>
