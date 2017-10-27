import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

export default new VueRouter({
    saveScrollPosition: true,
    routes: [
        {
            name:'/leave',
            path: '/',
            component: resolve => void(require(['../components/Leave/leaveIn.vue'], resolve))
        },
        {
            name:'/history',
        	path: '/history',
        	 component: resolve => void(require(['../components/History/history.vue'], resolve))
        }
    ]
});