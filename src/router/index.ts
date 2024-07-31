import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home",
        component: () => import("../pages/HomePage.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;