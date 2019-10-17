import Vue from 'vue';
import Router from 'vue-router';
import BrandMain from '../components/BrandMain.vue';
import BrandDetail from '../components/BrandDetail.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: BrandMain
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: BrandDetail,
        },
    ]
});

export default router;