<script setup>
import { onMounted } from "vue";

//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

//image
import image from "@/assets/img/neonsign.jpeg";

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
                  <h3 class="text-white text-success mb-0">교회 소개</h3>
                </div>
              </div>
              <div class="card-body">
                <p class="pb-3">
                  <br />
                  중앙 영광교회는 하나님의 말씀(마28:18-20, 행1:8)에 순종하여<br />
                  성령의 능력으로 모든 족속으로 제자를 삼아 증인 공동체를
                  세움으로 하나님께 영광을 돌리고자<br />
                  1994년 동경 신주쿠에 세워졌습니다.<br /><br />
                  중앙영광교회는 “말씀훈련을 통해 한 사람 한 사람을 예수님의
                  제자로 세우는 건강한 교회”를 만들어 가며 ”<br />
                  성령의 능력으로 예배, 전도, 섬김, 교제를 회복하여 목적이
                  이끄는 초대<br />
                  교회의 모습을 되찾는 사명”을 감당해 가고 있습니다
                  중앙영광교회는 한인이<br />
                  중심이 된 교회이지만 한국인이 불씨가 되어 일본인들에게 생명의
                  복음을<br />
                  옮겨주는 영적 사명을 다하며 목적이 이끄는 교회로 늘 깨어 있기
                  위하여 365일<br />
                  새벽기도와 매년 ‘목적이 이끄는 40일 특새를 실시하고 있습니다
                  그리고<br />
                  땅끝까지 이르러 증인이 되라는 예수님의 말씀에 따라 만민이
                  예배하는<br />
                  선교센터로서의 사명을 다하기 위해 순종하며 달려가고 있습니다.
                  또한<br />
                  개척교회 설립의 사명을 주셔서 형제교회들 (
                  99년요코하마영광교회, 2001년<br />
                  치바영광교회, 2004년 가와사키영광교회, 2008년
                  하찌오지영광교회)를 개척해<br />
                  가고 있습니다. 이 모든 사역이 우리의 노력으로 세워지고
                  이루어진 것이<br />
                  아님을 고백합니다. 주님이 세우신 교회(마16:18)이며 주님이
                  주인이신<br />
                  교회입니다 . 주신 비전과 사명 역시 주님의 뜻대로 행하실 것임을
                  믿기에<br />
                  “작은 예수가 되자”이라는 푯대를 향하여 달려갈 것입니다.
                  <br /><br />[ 형제교회 연락처 ]<br /><br />
                  요코하마 영광교회 (담임목사 : 김경환) <br />☎
                  045-212-0061(교회), 090-8302-4749 <br />[홈페이지]
                  www.yhgloria.com <br /><br />치바 영광교회 (담임목사 :
                  김성섭)<br />
                  ☎ 043-201-6350(교회), 090-4258-9340
                  <br />[홈페이지]http://www.cgch.net/<br /><br />
                  하치오지 영광교회 (담임목사 : 소대섭)<br />
                  ☎ 042-634-8633(교회), 080-8300-4747 <br />[홈페이지]
                  cafe.daum.net/h-gmc
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <DefaultFooter />
</template>
