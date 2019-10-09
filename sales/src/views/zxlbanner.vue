<template>
  <div>
    <van-swipe class="ding" :autoplay="3000" indicator-color="white" style="width:414.px;">
      <van-swipe-item class="lun" v-for="(item,index) in list" :key="index">
        <img :src="'http://img2.yidejia.com/'+item.img_name" alt />
      </van-swipe-item>
    </van-swipe>
    <nav class="c_nav">
      <a href="#/category">
        <van-icon name="wap-home" />
        <br />
        <b>类目</b>
      </a>
      <a href="#/activity/list">
        <van-icon name="shop-collect" />
        <br />
        <b>活动馆</b>
      </a>
      <a href="#/discount/list">
        <van-icon name="gift" />
        <br />
        <b>伊日惠</b>
      </a>
      <a href="#/video/index">
        <van-icon name="video" />
        <br />
        <b>视频中心</b>
      </a>
      <a href="#/user/index">
        <van-icon name="manager" />
        <br />
        <b>个人中心</b>
      </a>
    </nav>
    <div class="t_3column">
      <a href="#/info/12409">
        <img alt src="http://img2.yidejia.com/8/2019/03/08/9d338086ca27.jpg" />
      </a>
      <a href="#/info/14873">
        <img alt src="http://img2.yidejia.com/8/2019/03/08/106d365cdb80.jpg" />
      </a>
      <a href="#/info/17324">
        <img alt src="http://img2.yidejia.com/2/2019/03/08/6834263c21e17.jpg" />
      </a>
    </div>
    <div class="t_2column s_2row">
      <a href="#/info/17279" style>
        <img alt src="http://img2.yidejia.com/8/2019/03/08/68a94ace8f68e.jpg" />
      </a>
      <a href="#/info/6742" style>
        <img alt src="http://img2.yidejia.com/5/2019/03/08/10e6d82745ea.jpg" />
      </a>
      <a href="#/info/14951" style>
        <img alt src="http://img2.yidejia.com/8/2019/03/08/10e9917fca42.jpg" />
      </a>
    </div>
    <fashion :list='List'></fashion>
    <mlove :list="List.guess"></mlove>
  </div>
</template>

<script>
import fashion from '../components/zxlfashion';
import mlove from './zxlmablove'
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
export default {
    components:{
        fashion:fashion,
        mlove:mlove
    },
  data() {
    return {
      list: "",
      List:'',
    };
  },
  created() {
    this.$axios
      .get("/index.php?api=index.index.get&_=1570609505755")
      .then(res => {
        this.list = res.data.response.advert.top;
        this.List=res.data.response;
        console.log(this.List);
      });
  }
};
</script>

<style>
.ding {
  margin-top: 56.8px;
}
.lun img {
  width: 16rem;
  height: 100%;
  display: block;
}
.c_nav {
  border-bottom: 1px solid #e4e4e4;
  padding: 0.5rem 0 0.25rem;
  background: #fff;
  overflow: hidden;
}

.c_nav a {
  float: left;
  width: 20%;
  text-align: center;
}

.c_nav a + a {
  position: relative;
}

.c_nav a + a:before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -0.95rem;
  border-left: 1px solid #f0f0f0;
  height: 1.9rem;
}

.c_nav a:first-child i {
  padding: 0.275rem;
  background: #ffc107;
}

.c_nav a:nth-child(2) i {
  padding: 0.375rem;
  width: 1rem;
  height: 1rem;
  font-size: 1rem;
  background: #91a7ff;
}

.c_nav a:nth-child(3) i {
  padding: 0.25rem 0.275rem 0.3rem;
  background: #ef5388;
}

.c_nav a:nth-child(4) i {
  padding: 0.15rem 0.25rem 0.4rem;
  background: #a36feb;
}

.c_nav a:nth-child(5) i {
  padding: 0.2rem 0.275rem 0.35rem;
  background: #ff8861;
}

.c_nav a i {
  display: inline-block;
  height: 1.2rem;
  font-size: 1.2rem;
  line-height: normal;
  width: 1.2rem;
  border-radius: 50%;
  margin-bottom: 0.25rem;
  padding: 0.375rem;
  color: #fff;
}

.c_nav a b {
  font-size: 0.6rem;
  color: #828282;
}
.t_3column {
  margin-top: 0.5rem;
}
.t_3column,
.t_bgw {
  background: #fff;
  overflow: hidden;
}

.t_3column a {
  float: left;
}

.t_3column a + a {
  border-left: 1px solid #e4e4e4;
}

.t_3column a img {
  display: block;
  width: 100%;
}

.t_3column a {
  width: 5.35rem;
}

.t_3column a + a {
  margin-left: -2px;
}

.t_3column a:last-child {
  float: right;
}

.t_3column a img {
  height: 7rem;
}
.t_2column {
    margin-top: .25rem;
        border: solid #e4e4e4;
    border-width: 1px 0;
    overflow: hidden;
}
.t_2column a {
    width: 50%;
    float: left;
}

.t_2column a+a {
    border-left: 1px solid #e4e4e4;
    margin-left: -1px;
}

.t_2column.s_2row a:first-child img {
    height: 10rem
}

.t_2column.s_2row a+a {
    margin-top: -1px;
    border-top: 1px solid #e4e4e4
}

.t_2column img {
    height: 5rem
}
</style>