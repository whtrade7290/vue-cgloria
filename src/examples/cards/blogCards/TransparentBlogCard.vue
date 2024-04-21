<script setup>
import router from "../../../router";
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      route: "javascript:;",
      color: "success",
      label: "Read more",
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
  <div class="card card-plain">
    <div class="card-header p-0 position-relative">
      <a class="d-block blur-shadow-image">
        <img
          :src="image"
          :alt="title"
          class="img-fluid shadow border-radius-lg"
          loading="lazy"
        />
      </a>
    </div>
    <div class="card-body px-0">
      <h5>
        <a :href="action.route" class="text-dark font-weight-bold">{{
          title
        }}</a>
      </h5>
      <p>
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
</template>
