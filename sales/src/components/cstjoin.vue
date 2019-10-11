<template>
  <div class="join">
    <!-- 头部区域位置 -->
    <cnav :list="data"></cnav>
    <!-- 注册 -->
    <div class="join1">
      <form action=""
            method="get">
        <input type="text"
               v-model="join.user"
               placeholder="请输入手机号">
        <input type="password"
               v-model="join.pwd"
               placeholder="请设置6~20位的登录密码">
        <i class="iconfont icon-yonghu"></i>
        <i class="iconfont icon-suo"></i>
        <input type="text"
               placeholder="请输入验证码">
        <span class="openbtn"
              @click="change()"
              :class="i%2==1?'active':''">
          <i :class="i%2==1?'active1':''"></i>
        </span>
        <!-- 记住密码 -->
        <span @click="re()"
              :class="join.isShow?'iconfont icon-changyongicon- re-active':''"
              class="rember">
        </span>
        <span>注册及视为同意<i>《服务条款》</i></span>
        <!-- 提交按钮 -->
        <input type="submit"
               @click="provide1"
               value="注册"
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
  data() {
    return {
      i: 0,
      data: ["注册", "去登录", "/register"],
      join: {
        isShow: false,
        user: "",
        pwd: ""
      }
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
      console.log(1);
      this.join.isShow = !this.join.isShow;
    },
    provide1() {
      this.$store.commit("provide1", this.join);
      // 缓存当前数据
    }
  }
};
</script>
<style lang="scss">
.join1 {
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
      position: relative;
      top: 0.875rem;
      width: 1.03375rem;
      height: 1.03375rem;
      border: 1px solid #ccc;
      // margin-top: 1.25rem;
    }
    .re-active {
      color: #ec5196;
      border: 1px solid #ec5196;
    }
    span:nth-of-type(3) {
      width: 100%;
      text-align: left;
      height: 1.44375rem;
      line-height: 1.44375rem;
      position: absolute;
      top: 12.2rem;
      left: 2.5rem;
      color: #999;
      > i {
        color: #ec5196;
      }
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