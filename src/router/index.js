import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/Main/MainView.vue";
import introView from "@/views/MyViews/menu1/introView.vue";
import pastorIntro from "@/views/MyViews/menu1/PastorIntro.vue";
import AboutView from "../views/LandingPages/AboutUs/AboutView.vue";
// import ContactView from "../views/LandingPages/ContactUs/ContactView.vue";
import TrainingView from "@/views/MyViews/menu3/TrainingView.vue";
import LoginView from "../views/LandingPages/SignIn/LoginView.vue";
import PageHeaders from "../layouts/sections/page-sections/page-headers/HeadersView.vue";
import PageFeatures from "../layouts/sections/page-sections/features/FeaturesView.vue";
import NavigationNavbars from "../layouts/sections/navigation/navbars/NavbarsView.vue";
import NavigationNavTabs from "../layouts/sections/navigation/nav-tabs/NavTabsView.vue";
import sermonView from "@/views/MyViews/menu2/SermonView.vue";
import columnView from "@/views/MyViews/menu2/ColumnView.vue";
import weeksScriptView from "@/views/MyViews/menu2/WeeksScriptView.vue";
import classView from "@/views/MyViews/menu2/classView.vue";
import ACAlerts from "../layouts/sections/attention-catchers/alerts/AlertsView.vue";
import ACModals from "../layouts/sections/attention-catchers/modals/ModalsView.vue";
import ACTooltipsPopovers from "../layouts/sections/attention-catchers/tooltips-popovers/TooltipsPopoversView.vue";
import ElAvatars from "../layouts/sections/elements/avatars/AvatarsView.vue";
import ElBadges from "../layouts/sections/elements/badges/BadgesView.vue";
import ElBreadcrumbs from "../layouts/sections/elements/breadcrumbs/BreadcrumbsView.vue";
import ElButtons from "../layouts/sections/elements/buttons/ButtonsView.vue";
import ElButtonGroups from "../layouts/sections/elements/button-groups/ButtonGroupsView.vue";
import ElDropdowns from "../layouts/sections/elements/dropdowns/DropdownsView.vue";
import ElProgressBars from "../layouts/sections/elements/progress-bars/ProgressBarsView.vue";
import ElToggles from "../layouts/sections/elements/toggles/TogglesView.vue";
import ElTypography from "../layouts/sections/elements/typography/TypographyView.vue";
import NoticeView from "@/views/MyViews/menu3/boards/NoticeView.vue";
import DiaryView from "@/views/MyViews/menu3/boards/DiaryView.vue";
import HomeworkView from "@/views/MyViews/menu3/boards/HomeworkView.vue";
import GalleryView from "@/views/MyViews/menu3/boards/GalleryView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: MainView,
    },
    {
      path: "/home/redirect",
      redirect: "/menu1/introView",
    },
    {
      path: "/menu1/introView",
      name: "introView",
      component: introView,
    },
    {
      path: "/menu1/pastorIntro",
      name: "pastorIntro",
      component: pastorIntro,
    },
    {
      path: "/pages/landing-pages/about-us",
      name: "about",
      component: AboutView,
    },
    // {
    //   path: "/pages/landing-pages/contact-us",
    //   name: "contactus",
    //   component: ContactView,
    // },
    {
      path: "/training",
      name: "training",
      component: TrainingView,
    },
    {
      path: "/pages/landing-pages/login",
      name: "signin-basic",
      component: LoginView,
    },
    {
      path: "/sections/page-sections/page-headers",
      name: "page-headers",
      component: PageHeaders,
    },
    {
      path: "/sections/page-sections/features",
      name: "page-features",
      component: PageFeatures,
    },
    {
      path: "/sections/navigation/navbars",
      name: "navigation-navbars",
      component: NavigationNavbars,
    },
    {
      path: "/sections/navigation/nav-tabs",
      name: "navigation-navtabs",
      component: NavigationNavTabs,
    },
    {
      path: "/menu2/sermonView",
      name: "sermonView",
      component: sermonView,
    },
    {
      path: "/menu2/columnView",
      name: "columnView",
      component: columnView,
    },
    {
      path: "/menu2/weeksScriptView",
      name: "weeksScriptView",
      component: weeksScriptView,
    },
    {
      path: "/menu2/classView",
      name: "classView",
      component: classView,
    },
    {
      path: "/sections/attention-catchers/alerts",
      name: "ac-alerts",
      component: ACAlerts,
    },
    {
      path: "/sections/attention-catchers/modals",
      name: "ac-modals",
      component: ACModals,
    },
    {
      path: "/sections/attention-catchers/tooltips-popovers",
      name: "ac-tooltips-popovers",
      component: ACTooltipsPopovers,
    },
    {
      path: "/sections/elements/avatars",
      name: "el-avatars",
      component: ElAvatars,
    },
    {
      path: "/sections/elements/badges",
      name: "el-badges",
      component: ElBadges,
    },
    {
      path: "/sections/elements/breadcrumbs",
      name: "el-breadcrumbs",
      component: ElBreadcrumbs,
    },
    {
      path: "/sections/elements/buttons",
      name: "el-buttons",
      component: ElButtons,
    },
    {
      path: "/sections/elements/button-groups",
      name: "el-button-groups",
      component: ElButtonGroups,
    },
    {
      path: "/sections/elements/dropdowns",
      name: "el-dropdowns",
      component: ElDropdowns,
    },
    {
      path: "/sections/elements/progress-bars",
      name: "el-progress-bars",
      component: ElProgressBars,
    },
    {
      path: "/sections/elements/toggles",
      name: "el-toggles",
      component: ElToggles,
    },
    {
      path: "/sections/elements/typography",
      name: "el-typography",
      component: ElTypography,
    },
    {
      path: "/training/notice",
      name: "notice",
      component: NoticeView,
    },
    {
      path: "/training/diary",
      name: "diary",
      component: DiaryView,
    },
    {
      path: "/training/homework",
      name: "homework",
      component: HomeworkView,
    },
    {
      path: "/training/gallery",
      name: "gallery",
      component: GalleryView,
    },
  ],
});

export default router;
