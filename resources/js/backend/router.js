import Vue from 'vue';
import VueRouter from 'vue-router';
import * as auth from './services/auth_service';

Vue.use(VueRouter)

const routes = [
    {
        path: '/admin',
        name: 'Admin',
        component: () =>
            import ('./views/Admin.vue'),
        children: [
            {
                path: '',
                name: 'Dashboard',
                component: () =>
                    import ('./views/Dashboard.vue'),
                // beforeEnter: (to, from, next) => {
                //     if (auth.getUserRole() === 'administrator') {
                //         next();
                //     } else {
                //         next('/404');
                //     }
                // }
            },{
                path: 'categories',
                name: 'Category',
                component: () => import('../backend/views/categories/Categories')
            },{
                path: 'products',
                name: 'Products',
                component: () => import('../backend/views/products/Products')
            }
        ],
        beforeEnter: (to, from, next) => {
            if (!auth.isLoggedIn()) {
                next('/admin-login');
            } else {
                next();
            }
        }
    },{
        path: '/admin-login',
        name: 'Login',
        component: () =>
            import ('./views/authentication/Login.vue'),
        beforeEnter: (to, from, next) => {
            if (!auth.isLoggedIn()) {
                next();
            } else {
                next('/admin');
            }
        }
    }, {
        path: '/register',
        name: 'Register',
        component: () =>
            import ('./views/authentication/Register.vue'),
        beforeEnter: (to, from, next) => {
            if (!auth.isLoggedIn()) {
                next();
            } else {
                next('/admin');
            }
        }
    },{
        path: '/404',
        name: '404',
        component: () =>
            import ('./views/404'),
    }];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
