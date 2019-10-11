import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: [],
    },
    mutations: {
        add(state, infor) {
            Vue.set(infor.infor, 'number', infor.num)
            state.data.push(infor.infor)
        },
        addnum(state, index) {
            state.data[index].number--;
            console.log(state.data[index].number)
        },
        subnum(state, index) {
            state.data[index].number++;
            console.log(state.data[index].number)
        }
    },
    getters: {
        data(state) {
            return state.data
        }
    }
})