import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: [],
    },
    mutations: {
        add(state, infor) {
            var bool = true;
            state.data.forEach((d) => {
                if (d.goods_id == infor.infor.goods_id) {
                    d.number += parseInt(infor.num)
                    bool = false
                }
            })
            if (bool) {
                if (infor.infor.imgname) {
                    Vue.set(infor.infor, 'IMG', infor.infor.imgname)
                } else if (infor.infor.img_name) {
                    Vue.set(infor.infor, 'IMG', infor.infor.img_name)
                } else {
                    Vue.set(infor.infor, 'IMG', infor.infor.carousel_image[0])
                }
                Vue.set(infor.infor, 'number', infor.num)
                state.data.push(infor.infor)
            }
        },
        addnum(state, index) {
            state.data[index].number--;
            console.log(state.data[index].number)
        },
        subnum(state, index) {
            state.data[index].number++;
            console.log(state.data[index].number)
        },
        del(state, index) {
            Vue.delete(state.data, index)
        }
    },
    getters: {
        data(state) {
            return state.data
        },
        total(state) {
            var sum = 0;
            state.data.forEach((d) => {
                sum += d.number * d.price
            })
            return sum
        }
    }
})