<script setup>
// example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import Header from "../../../examples/Header.vue";

import { onMounted, ref } from "vue";
import { fetchTraining } from "@/api/index.js";
import router from "@/router/index.js";
import Swal from "sweetalert2";

// sections
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
import TrainingBoards from "./TrainingBoards.vue";

const imgUrl = ref(null);
const groupNum = ref(null);
const trainingType = ref(null);
const notice_flg = ref(null);
const diary_flg = ref(null);
const homework_flg = ref(null);
const gallery_flg = ref(null);

// hook
onMounted(async () => {
  if (!sessionStorage.getItem(1)) {
    Swal.fire({
      title: "로그인 해주세요.",
      icon: "error",
    }).then(() => {
      // router.replace("/");
      router.push({ path: "/" });
    });
  }
  const traing_num = JSON.parse(sessionStorage.getItem(1)).traning_num;
  const { data } = await fetchTraining(traing_num);
  if (data.length === 0) {
    Swal.fire({
      title: "확인된 훈련이 없습니다.",
      icon: "error",
    }).then(() => {
      // router.replace("/");
      router.push({ path: "/" });
    });
  } else {
    groupNum.value = data[0].group_num;
    imgUrl.value = data[0].img_url;
    trainingType.value = parseInt(data[0].training_type);
    notice_flg.value = data[0].notice_flg;
    diary_flg.value = data[0].diary_flg;
    homework_flg.value = data[0].homework_flg;
    gallery_flg.value = data[0].gallery_flg;
  }
});
</script>
<template>
  <DefaultNavbar transparent />
  <Header>
    <div
      class="page-header min-height-400"
      :style="{ backgroundImage: `url(${imgUrl})` }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-8"></span>
    </div>
  </Header>
  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
    <!-- <Profile /> -->
    <TrainingBoards
      :groupNum="groupNum"
      :trainingType="trainingType"
      :notice_flg="notice_flg"
      :diary_flg="diary_flg"
      :homework_flg="homework_flg"
      :gallery_flg="gallery_flg"
    />
  </div>
  <!-- 지도 커스텀하기 -->
  <!-- <Contact /> -->
  <DefaultFooter />
</template>
