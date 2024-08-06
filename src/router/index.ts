import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';


const routes: RouteRecordRaw[] = [
    {
        path: "/start",
        name: "start",
        component: () => import("../pages/start/StartPage.vue"),
    },
    {
        path: "/loading",
        name: "loading",
        component: () => import("../pages/loading/LoadingPage.vue"),
    },
    {
        path: "/approve",
        name: "approve",
        component: () => import("../pages/approve/ApprovePage.vue"),
    },
    {
        path: "/",
        name: "home",
        component: () => import("../pages/home/HomePage.vue"),
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;