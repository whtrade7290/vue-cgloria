<script setup>
import ExampleCard from "../Components/ExampleCard.vue";

// images
import yokohama from "@/assets/img/yokohama.png";
import chiba from "@/assets/img/chiba.png";
import hachiooji from "@/assets/img/hachiooji.png";
import kawaguchi from "@/assets/img/kawaguchi.png";
</script>
<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="row text-center my-sm-5 mt-5">
          <div class="col-lg-6 mx-auto">
            <h2 class="">형제 교회 안내</h2>
            <p class="lead">
              The easiest way to get started is to use one of our <br />
              pre-built example pages.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-8">
          <div class="row mt-4">
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                class="shadow-lg"
                title="요코하마 영광 교회"
                :image="yokohama"
                route="http://yhgloria.com/xe/"
              />
            </div>
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                class="shadow-lg"
                title="치바 영광 교회"
                :image="chiba"
                route="http://www.cgch.net/"
              />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                classes="mt-5"
                title="하치오지 영광 교회"
                :image="hachiooji"
                route="https://cafe.daum.net/h-gmc"
              />
            </div>
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                classes="shadow-lg"
                title="가와구치 영광 교회"
                :image="kawaguchi"
                route="https://www.youtube.com/@japanyoon"
              />
            </div>
          </div>
        </div>
        <div class="col-md-3 mx-auto mt-md-0 mt-3">
          <div class="position-sticky" style="top: 100px !important">
            <h3>도쿄 중앙영광교회와 형제 교회들 입니다.</h3>
            <h6 class="text-secondary font-weight-normal">
              These is just a small selection of the multiple possibitilies you
              have. Focus on the business, not on the design.
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
