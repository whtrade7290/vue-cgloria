<template>
  <DefaultNavbar transparent />
  <Header>
    <div
      class="page-header align-items-start min-vh-100"
      :style="{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80)',
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div
                class="card-header p-0 position-relative mt-n4 mx-3 z-index-2"
              >
                <div
                  class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1"
                >
                  <h4
                    class="text-white font-weight-bolder text-center mt-2 mb-0"
                  >
                    로그인
                  </h4>
                </div>
              </div>
              <div class="card-body">
                <form role="form" class="text-start">
                  <MaterialInput
                    id="email"
                    class="input-group-outline my-3"
                    :label="{ text: '아이디', class: 'form-label' }"
                    type="email"
                    :value="username"
                    v-on:update="
                      (inputVal) => {
                        username = inputVal;
                      }
                    "
                  />
                  <MaterialInput
                    id="password"
                    class="input-group-outline mb-3"
                    :label="{ text: '비밀번호', class: 'form-label' }"
                    type="password"
                    :value="password"
                    v-on:update="
                      (inputVal) => {
                        password = inputVal;
                      }
                    "
                  />
                  <MaterialSwitch
                    class="d-flex align-items-center mb-3"
                    id="rememberMe"
                    labelClass="mb-0 ms-3"
                    checked
                  >
                    기억하기</MaterialSwitch
                  >

                  <div class="text-center">
                    <MaterialButton
                      class="my-4 mb-2"
                      variant="gradient"
                      color="success"
                      fullWidth
                      @click.prevent="login"
                    >
                      로그인</MaterialButton
                    >
                  </div>
                  <p class="mt-4 text-sm text-center">
                    <span
                      to="/pages/landing-pages/SignIn"
                      class="text-success text-gradient font-weight-bold"
                      >회원가입</span
                    >
                    은 관리자에게 문의해주세요
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer position-absolute bottom-2 py-2 w-100">
        <div class="container">
          <div class="row align-items-center justify-content-lg-between">
            <div class="col-12 col-md-6 my-auto">
              <div
                class="copyright text-center text-sm text-white text-lg-start"
              >
                © {{ new Date().getFullYear() }}, made with
                <i class="fa fa-heart" aria-hidden="true"></i> by
                <a
                  href="https://github.com/whtrade7290"
                  class="font-weight-bold text-white"
                  target="_blank"
                  >Jeong-Gu-Ji</a
                >
                for a better web.
              </div>
            </div>
            <div class="col-12 col-md-6"></div>
          </div>
        </div>
      </footer>
    </div>
  </Header>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import router from "../../../router";
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import setMaterialInput from "@/assets/js/material-input";
import Header from "@/examples/Header.vue";
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import Swal from "sweetalert2";
import { requestLogin } from "@/api/index.js";

const username = ref("");
const password = ref("");

const login = async () => {
  const res = await requestLogin(username.value, password.value);
  const { data, status, statusText } = res;

  if (status === 200 || statusText === "OK") {
    sessionStorage.setItem(1, JSON.stringify(data[0]));
    Swal.fire({
      title: "로그인 되었습니다.",
      icon: "success",
    }).then(() => {
      router.replace("/");
    });
  } else {
    Swal.fire({
      title: "비밀번호를 확인해주세요.",
      icon: "error",
    });
  }
};

onMounted(() => {
  setMaterialInput();
});
</script>
