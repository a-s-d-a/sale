import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },
  getters: {

  },
  mutations: {
    // 验证用户名和密码
    provide (state, i) {
      var bool = false;
      state.data.forEach((d) => {
        if (i.pwd != '' && i.user != '') {
          if (i.user == d.user && i.pwd == d.pwd) {
            window.location.href = "/cstlistadd";
          }
        } else if (i.user != d.user) {
          // window.location.href = "/cstjoin";
        }
      });
      console.log(state.data);
    },
    //注册
    provide1 (state, i) {
      var bool = true;
      state.data.forEach((d) => {
        if (i.pwd != '' && d.user != '' && d.isShow != '') {
          if (i.user != d.user) {
            bool = false;
          }
        }
        console.log(this.state.data);
      })
      if (bool == false) {
        state.data.push(i);
      }
      console.log(state.data);
    }
  },
})
