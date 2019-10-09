import Vue from 'vue'
import Router from 'vue-router'
import zxlbanner from './views/zxlbanner.vue'
import zxlt from './components/zxl-t'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            components: {
                nav: zxlt,
                default: zxlbanner
            }
        },

    ]
})