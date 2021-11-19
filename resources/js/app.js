require("./bootstrap");

Vue.component("app-comp", require("./components/backEnd/mastering/Master.vue").default);

import VueRouter from "vue-router";
Vue.use(VueRouter);

import { routes } from "./routes";

const router = new VueRouter({
    mode: "history",
    routes,
});

router.beforeEach((to, from, next)=>{
    document.title = to.name
    next()
})

const app = new Vue({
    router,
}).$mount("#app");
