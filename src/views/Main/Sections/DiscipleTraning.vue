<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              image="https://cdn.pixabay.com/photo/2015/01/07/18/04/jesus-591742_1280.jpg"
              icon="touch_app"
              title="제자 훈련"
              description="그러므로 너희는 가서 모든 족속으로 제자를 삼아 아버지와 아들과 성령의 이름으로 세례를 주고 마태복음 28:19"
            />
            <RotatingCardBack
              image="https://cdn.pixabay.com/photo/2016/08/26/21/35/cross-1623184_1280.jpg"
              icon="touch_app"
              title="사역 훈련"
              description="내가 너희에게 분부한 모든 것을 가르쳐 지키게 하라 볼지어다 내가 세상 끝날 까지 너희와 항상 함께 있으리라 하시니라 마태복음 28:20"
            />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              icon="book"
              title="제자 훈련"
              description="그러므로 너희는 가서 모든 족속으로 제자를 삼아 아버지와 아들과 성령의 이름으로 세례를 주고 마태복음 28:19"
            />
            <DefaultInfoCard
              icon="star"
              title="사역 훈련"
              description="내가 너희에게 분부한 모든 것을 가르쳐 지키게 하라 볼지어다 내가 세상 끝날 까지 너희와 항상 함께 있으리라 하시니라 마태복음 28:20"
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              icon="library_books"
              title="속장세미나"
              description="그러나 성령님이 지배하는 생활에는 사랑과 기쁨과 평안과 인내와 친절과 선과 신실함과 갈라디아서 5:22"
            />
            <DefaultInfoCard
              class="mt-3"
              icon="bookmark"
              title="속회"
              description="그러나 하나님은 내가 가는 길을 다 알고 계신다. 그가 나를 단련하신 후에는 내가 순금처럼 깨끗할 것이다."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
