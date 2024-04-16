<script setup>
import logoDark from "@/assets/img/logo.png";
defineProps({
  brand: {
    type: Object,
    name: String,
    logo: String,
    route: "",
    default: () => ({
      name: "중앙영광교회",
      logo: logoDark,
      route: "/",
    }),
  },
  socials: {
    type: Array,
    icon: String,
    link: String,
    default: () => [
      {
        icon: '<i class="fab fa-youtube text-lg opacity-8"></i>',
        link: "https://www.youtube.com/channel/UCaz5p6HvV6D6H4eVyLj7sHw",
      },
    ],
  },
  menus: {
    type: Array,
    name: String,
    items: {
      type: Array,
      name: String,
      href: String,
    },
    default: () => [
      {
        name: "교회안내",
        items: [
          {
            name: "교회소개",
            href: "https://www.creative-tim.com/presentation",
          },
          {
            name: "목회자 소개",
            href: "https://www.creative-tim.com/templates/premium",
          },
          { name: "교회 약도", href: "https://www.creative-tim.com/blog" },
          {
            name: "공지사항",
            href: "https://www.creative-tim.com/templates/premium",
          },
        ],
      },
      {
        name: "말씀/속회",
        items: [
          { name: "설교", href: "https://iradesign.io/" },
          {
            name: "칼럼",
            href: "https://www.creative-tim.com/bits",
          },
          {
            name: "금주의 성경말씀",
            href: "https://www.creative-tim.com/affiliates/new",
          },
          {
            name: "속회교재실",
            href: "https://www.creative-tim.com/affiliates/new",
          },
        ],
      },
      {
        name: "예배/훈련",
        items: [
          {
            name: "예배/훈련시간",
            href: "https://www.creative-tim.com/contact-us",
          },
          {
            name: "주목자예배",
            href: "https://www.creative-tim.com/knowledge-center",
          },
          {
            name: "훈련",
            href: "https://services.creative-tim.com/",
          },
        ],
      },
      {
        name: "전도섬김",
        items: [
          {
            name: "전도비전",
            href: "https://www.creative-tim.com/terms",
          },
          {
            name: "4영리",
            href: "https://www.creative-tim.com/privacy",
          },
          {
            name: "섬김",
            href: "https://www.creative-tim.com/license",
          },
        ],
      },
    ],
  },
});
</script>
<template>
  <footer class="footer pt-5 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3 mb-4 ms-auto">
          <div style="display: flex">
            <a style="margin-right: 10px" :href="brand.route">
              <img :src="brand.logo" class="mb-3 footer-logo" alt="main_logo" />
            </a>
            <h6 class="font-weight-bolder mb-4">{{ brand.name }}</h6>
          </div>
          <div>
            <ul class="d-flex flex-row ms-n3 nav">
              <li
                class="nav-item"
                v-for="{ icon, link } of socials"
                :key="link"
              >
                <a
                  class="nav-link pe-1"
                  :href="link"
                  target="_blank"
                  v-html="icon"
                >
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="col-md-2 col-sm-6 col-6 mb-4"
          v-for="{ name, items } of menus"
          :key="name"
        >
          <h6 class="text-sm">{{ name }}</h6>
          <ul class="flex-column ms-n3 nav">
            <li class="nav-item" v-for="item of items" :key="item.name">
              <a class="nav-link" :href="item.href" target="_blank">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>

        <div class="col-12">
          <div class="text-center">
            <p class="text-dark my-4 text-sm font-weight-normal">
              All rights reserved. Copyright ©
              {{ new Date().getFullYear() }}
              Web site by
              <a href="https://github.com/whtrade7290" target="_blank"
                >Jeong-Gu-Ji</a
              >.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
