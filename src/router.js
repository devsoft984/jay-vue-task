import Vue from 'vue';
import Router from 'vue-router';
import BrandList from './components/BrandList.vue';
import Detail from './components/Detail.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: BrandList
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: Detail,
        },
    ]
});

export default router;