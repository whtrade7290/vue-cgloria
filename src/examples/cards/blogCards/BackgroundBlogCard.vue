<script setup>
import router from "../../../router";

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    requierd: true,
  },
  description: {
    type: String,
    required: true,
  },
  action: {
    type: Object,
    route: String,
    label: String,
    color: String,
    default: () => ({
      route: "javascript:;",
      label: "Read more",
      color: "white",
    }),
  },
  board: {
    type: String,
    default: "test",
  },
});

const moveTo = () => {
  router.push({ path: `/training/${props.board}` });
};
</script>
<template>
  <div class="card card-blog card-background cursor-pointer">
    <div
      class="full-background"
      :style="{ backgroundImage: `url(${image})` }"
      loading="lazy"
    ></div>
    <div class="card-body">
      <div class="content-left text-start my-auto py-4">
        <h2 class="card-title text-white">{{ title }}</h2>
        <p class="card-description text-white">
          {{ description }}
        </p>
        <a
          href="javascript:;"
          class="text-sm icon-move-right"
          :class="`text-${action.color}`"
          @click="moveTo"
          >게시판 접속
          <i class="fas fa-arrow-right text-xs ms-1"></i>
        </a>
      </div>
    </div>
  </div>
</template>
