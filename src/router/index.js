import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChooseBodyType from "../views/ChooseBodyType.vue";
import SelectAvatar from "../views/SelectAvatar.vue";
import SelectPhoto from "../views/SelectPhoto.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/choose-body-type",
      name: "choose-body-type",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ChooseBodyType,
    },
    {
      path: "/select-avatar",
      name: "select-avatar",
      component: SelectAvatar,
    },
    {
      path: "/select-photo",
      name: "select-photo",
      component: SelectPhoto,
    },
  ],
});

export default router;
