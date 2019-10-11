<template>
  <div class="register">
    <!-- 头部区域位置 -->
    <cnav :list="data"></cnav>
    <!-- 登录 -->
    <div class="reg">
      <form action=""
            method="get">
        <input type="text"
               v-model="login.user"
               placeholder="手机,用户名，昵称">
        <i class="iconfont icon-yonghu"></i>
        <i class="iconfont icon-suo"></i>
        <input type="password"
               v-model="login.pwd"
               placeholder="请输入密码">
        <span class="openbtn"
              @click="change()"
              :class="i%2==1?'active':''">
          <i :class="i%2==1?'active1':''"></i>
        </span>
        <!-- 记住密码 -->
        <span @click="re()"
              :class="login.isShow?'iconfont icon-changyongicon- re-active':''"
              class="rember">
        </span>
        <span>记住密码</span>
        <span>
          <router-link to="/join">忘记密码?</router-link>
        </span>
        <!-- 提交按钮 -->
        <input type="submit"
               @click="provide"
               value="登录"
               class="sub">
      </form>
    </div>
  </div>
</template>
<script>
// 引入头部
import cnav from "./cstnav";
export default {
  components: {
    cnav
  },
  // 密码框开关状态
  data() {
    return {
      i: 0,
      login: {
        isShow: false,
        user: "",
        pwd: ""
      },
      data: ["登录", "去注册", "/join"]
    };
  },
  methods: {
    // 开关状态
    change() {
      if (this.i == 1) {
        this.i--;
      } else if (this.i == 0) {
        this.i++;
      }
    },
    // 勾选状态
    re() {
      this.login.isShow = !this.login.isShow;
    },
    provide() {
      this.$store.commit("provide", this.login);
      // 缓存当前数据
      localStorage.name = JSON.stringify(this.login);
    }
  }
};
</script>
<style lang="scss">
.register {
  width: 100%;
  height: 100%;
}
.reg {
  form {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 1.25rem;
    height: 16.656875rem;
    background: #ededed;
    input {
      height: 3.2975rem;
      background: white;
      padding: 0 1.875rem;
      color: #333;
      font-size: 1rem;
      border: 0.05rem solid #e4e4e4;
    }
    span {
      display: inline-block;
    }
    span:nth-of-type(1) {
      line-height: 1.45rem;
      font-size: 1.25rem;
      width: 2.94rem;
      height: 1.45rem;
      border: 1px solid #ccc;
      border-radius: 1.1rem;
      font-size: 0.6rem;
      color: #fff;
      background: #ccc;
      cursor: pointer;
      overflow: hidden;
      position: absolute;
      right: 2.5rem;
      top: 5.625rem;
      > i {
        display: inline-block;
        width: 1.469375rem;
        height: 1.469375rem;
        background: white;
        border-radius: 50%;
        position: relative;
        left: -0.6rem;
      }
    }
    // 记住密码
    .rember {
      width: 1.03375rem;
      height: 1.03375rem;
      border: 1px solid #ccc;
      margin-top: 1.25rem;
    }
    .re-active {
      color: #ec5196;
      border: 1px solid #ec5196;
    }
    span:nth-of-type(3) {
      width: 6rem;
      height: 1.44375rem;
      position: absolute;
      top: 9.1875rem !important;
      left: 2.5rem;
      color: #999;
    }
    span:nth-of-type(4) {
      width: 6rem;
      height: 1.44375rem;
      position: absolute;
      top: 9.1875rem;
      right: 1.125rem;
      color: #333;
    }
    .sub {
      margin-top: 1.25rem;
      background: #eda948;
      font-size: 1.25rem;
      color: white;
    }
    .icon-yonghu,
    .icon-suo {
      position: absolute;
      left: 1.875rem;
      font-size: 1.25rem;
      top: 2.1875rem;
      color: #999;
    }
    .icon-suo {
      top: 5.625rem;
    }
  }
  .active {
    background: green !important;
    text-align: left;
  }
  .active1 {
    left: 1.2rem !important;
  }
}
</style>