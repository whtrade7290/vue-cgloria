<script setup>
import { computed } from "vue";
import { TRAINING } from "@/data/enum.js";

const props = defineProps({
  groupNum: {
    type: String,
    default: null,
  },
  trainingType: {
    type: Number,
    default: 0,
  },
  notice_flg: {
    type: Number,
    default: 0,
  },
  diary_flg: {
    type: Number,
    default: 0,
  },
  homework_flg: {
    type: Number,
    default: 0,
  },
  gallery_flg: {
    type: Number,
    default: 0,
  },
});

const dicideTitle = computed(() => {
  switch (props.trainingType) {
    case TRAINING.DISCIPLE:
      return "기 제자 훈련반";
    case TRAINING.MINISTRY:
      return "기 사역 훈련반";
    case TRAINING.PEOPLE:
      return "기 예수님의 사람";
    default:
      return "기 영성일기";
  }
});

// example components
import TransparentBlogCard from "@/examples/cards/blogCards/TransparentBlogCard.vue";
import BackgroundBlogCard from "@/examples/cards/blogCards/BackgroundBlogCard.vue";

//Vue Material Kit 2 components
import post1 from "@/assets/img/examples/testimonial-6-2.jpg";
import post2 from "@/assets/img/examples/testimonial-6-3.jpg";
import post3 from "@/assets/img/examples/blog-9-4.jpg";
import post4 from "@/assets/img/examples/blog2.jpg";
</script>
<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mb-5">{{ groupNum }}{{ dicideTitle }}</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6" v-if="notice_flg">
          <TransparentBlogCard
            board="notice"
            :image="post1"
            title="공지사항 게시판"
            description="Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover ..."
          />
        </div>
        <div class="col-lg-3 col-sm-6" v-if="diary_flg">
          <TransparentBlogCard
            board="diary"
            :image="post2"
            title="훈련일기 게시판"
            description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
          />
        </div>
        <div class="col-lg-3 col-sm-6" v-if="homework_flg">
          <TransparentBlogCard
            board="homework"
            :image="post3"
            title="생활숙제 제출 게시판"
            description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
          />
        </div>
        <div class="col-lg-3 col-md-12 col-12" v-if="gallery_flg">
          <BackgroundBlogCard
            board="gallery"
            :image="post4"
            title="제자 훈련 사진첩"
            description="Rather than worrying about switching offices every couple years, you stay in the same place."
          />
        </div>
      </div>
    </div>
  </section>
</template>
