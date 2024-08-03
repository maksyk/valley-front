import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
    // {
    //     path: "/",
    //     name: "home",
    //     component: () => import("../pages/home/HomePage.vue"),
    // },
    {
        path: "/homes",
        name: "homes",
        component: () => import("../pages/home/HomePage.vue"),
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
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;