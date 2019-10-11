<template>
  <div class="cmian">
    <cnav :list="list"></cnav>
    <!-- 个人中心 -->
    <div class="imgbox">
      <img src="http://img3.yidejia.com/7/2014/05/22/cc7bc520fec.jpg"
           alt="图片">
    </div>
    <div class="navlist">
      <ul>
        <li><span class="iconfont icon-menu-cwgl-normal"></span><a>待付款</a></li>
        <li><span class="iconfont icon-che"></span><a>待发货</a></li>
        <li><span class="iconfont icon-feiji"></span><a>已发货</a></li>
        <li><span class="iconfont icon-wancheng"></span><a>已完成</a></li>
        <li><span class="iconfont icon-hua"></span><a>待评价</a></li>
      </ul>
    </div>
    <!-- all order -->
    <div class="all"><span class="iconfont icon-weibiaoti-
"></span>
      <router-link :to="'/ccent/'+order">全部订单</router-link>
    </div>
    <div class="all">
      <span class="iconfont icon-shoucang
 "></span>
      <router-link :to="'/ccent/'+order1">我的收藏</router-link>
    </div>
    <div class="all">
      <span class="iconfont icon-dizhiguanli
 "></span>
      <router-link :to="'/ccent/'+order2">地址管理</router-link>
    </div>
    <div class="alllist">退出登录</div>
  </div>
</template>
<script>
import cnav from "./cstnav";
export default {
  components: {
    cnav
  },
  data() {
    return {
      list: ["个人中心", "", ""],
      order: ["全部订单", "暂无订单"],
      order1: ["全部收藏", "暂无收藏"],
      order2: ["地址管理", "你还没有添加地址", "添加"]
    };
  }
};
</script>
<style lang="scss">
.imgbox {
  height: 9.599375rem;
  background-image: -webkit-linear-gradient(225deg, #e974aa, #aa79b5);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 4.9825rem;
    height: 4.9825rem;
    border-radius: 50%;
  }
}
.navlist {
  width: 100%;
  height: 3.65rem;
  background: #aa79b5;
  ul {
    width: 100%;
    height: 3.65rem;
    display: flex;
    justify-content: space-around;
    li {
      display: inline-block;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      > span {
        color: white;
      }
      > a {
        color: #fff;
      }
    }
  }
}
.all {
  overflow: hidden;
  height: 3.349375rem;
  background: #fff;
  border: 1px solid #e4e4e4;
  text-align: left;
  line-height: 3.349375rem;
  color: #999;
  padding: 0 1.25rem;
}
.alllist {
  text-align: center;
  background: #ec5196;
  color: #fff;
  line-height: 3.349375rem;
}
</style>