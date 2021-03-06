import Vue from 'vue'
import Router from 'vue-router'
import zxlbanner from './views/zxlbanner.vue'
import zxlt from './components/zxl-t'
import zxlitem from './components/zxlitem'
import zxlnav1 from './views/zxlnav1'
import zxltuwen from './components/zxltuwen'
import zxlxiang from './components/zxlxiang'
import zxlping from './components/zxlping'
import zxlcart from './views/zxlcar'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [{
            path: '/',
            name: '/',
            components: {
                nav: zxlt,
                default: zxlbanner
            }
        },
        {
            path: '/1',
            name: '/1',
            components: {
                nav: zxlnav1,
                default: zxlxiang,
            }
        }, {
            path: '/tu',
            name: '/tu',
            components: {
                nav: zxlnav1,
                default: zxltuwen,
            }
        }, {
            path: '/xiang',
            name: '/xiang',
            components: {
                nav: zxlnav1,
                default: zxlxiang,
            }
        }, {
            path: '/ping',
            name: '/ping',
            components: {
                nav: zxlnav1,
                default: zxlping,
            }
        }, {
            path: '/car',
            name: '/car',
            components: {
                nav: zxlnav1,
                default: zxlcart,
            }
        },

    ]
})