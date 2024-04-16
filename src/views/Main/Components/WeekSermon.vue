<script setup>
import imgBible from "@/assets/img/main_bible.jpg";
import FilledInfoCard from "@/examples/cards/infoCards/FilledInfoCard.vue";
</script>
<template>
  <div class="container mt-sm-5">
    <div
      class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl"
      :style="{
        backgroundImage: `url(${imgBible})`,
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark"></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 ms-lg-5">
            <h4 class="text-white">주일 설교</h4>
            <h1 class="text-white">성령 동행(聖霊 同行)</h1>
            <p class="lead text-white opacity-8">
              우리가 유대인이나 헬라인이나 종이나 자유자나 다 한 성령으로 세례를
              받아 한 몸이 되었고 또 다 한 성령을 마시게 하셨느니라<br />
              고린도전서 12:13
            </p>
            <router-link
              to="/menu2/sermonView"
              class="text-white icon-move-right"
            >
              자세히 보기
              <i class="fas fa-arrow-right text-sm ms-1"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <FilledInfoCard
          class="px-lg-1 mt-lg-0 mt-4 p-4"
          height="h-100"
          :icon="{ component: 'book', color: 'success' }"
          title="칼럼"
          description="1. 복음이 선포될 때 성령의 능력이 나타나는 교회 되게 하소서. 2. 믿는 자들의 본이 되는 교회되게 하소서・・・"
          :action="{
            route: '/menu2/columnView',
            label: { text: '자세히 보기' },
          }"
        />
      </div>
      <div class="col-lg-4">
        <FilledInfoCard
          class="px-lg-1 mt-lg-0 mt-4 p-4"
          height="h-100"
          :icon="{ component: 'book', color: 'success' }"
          title="금주의 성경말씀"
          description="고린도전서 1:4-13(コリント一 1:4-13)
              4.  ○그리스도 예수 안에서 너희에게 주신 하나님의 은혜로 말미암아 내가 너희를 위하여 항상 ・・・"
          :action="{
            route: '/menu2/weeksScriptView',
            label: { text: '자세히 보기' },
          }"
        />
      </div>
      <div class="col-lg-4">
        <FilledInfoCard
          class="px-lg-1 mt-lg-0 mt-4 p-4"
          :icon="{ component: 'receipt_long', color: 'success' }"
          title="속회교재실"
          description="동행으로 소문난 교회 속회를 통해서 은혜를 받기 위해서는 반드시 말씀 실천의 삶이 있어야 합니다. 이를 위해서는 먼저 주일 예배 때에 설교를 메모하고 정리하는 것이"
          :action="{
            route: '/menu2/classView',
            label: { text: '자세히 보기' },
          }"
        />
      </div>
    </div>
  </div>
</template>
