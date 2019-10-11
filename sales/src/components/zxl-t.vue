<template>
  <header class="top s_query s_red">
    <div class="cell_left">
      <img src="http://s1.yidejia.com/images/mobile/index/logo.png" alt />
    </div>
    <div class="cell_center">
      <div class="g_input">
        <input type="text" placeholder="搜索伊的家商品" />
        <span>
          <van-icon  name='search'/>
        </span>
      </div>
    </div>
    <div class="cell_right">
      
        <div>
          <a class="t_nav" @click="ha"><van-icon  name="bars"/></a>
          <nav class="g_navList" v-if="isshow">
            <a href="/2">
              <!-- <i class="s_index"></i> -->
              <van-icon class="s_index" name='wap-home-o'/>
              <b>首页</b>
            </a>
            
            <router-link to="/car"> <van-icon  name='shopping-cart-o'/>
              <b>购物车</b></router-link>
            <!-- <a href="/car">
              <i></i> 
               <van-icon  name='shopping-cart-o'/>
              <b>购物车</b>
            </a> -->
            <a href="/2">
              <!-- <i></i> -->
              <van-icon  name='manager-o'/>
              <b>个人中心</b>
            </a>
            <a href="#/search">
              <!-- <i></i> -->
               <van-icon  name='search'/>
              <b>搜索</b>
            </a>
            <a href="javascript:;">
              <!-- <i></i> -->
              <van-icon  name='replay'/>
              <b>刷新</b>
            </a>
            <a href="javascript:;">
              <!-- <i></i> -->
              <van-icon  name='goods-collect-o'/>
              <b>登录</b>
            </a>
          </nav>
        </div>
      
    </div>
  </header>
</template>

<script>
export default {
    data(){
        return {
            isshow:false,
        }
    },
    methods:{
        ha(){
            this.isshow=!this.isshow
        }
    }
};
</script>

<style>
.top {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    border-bottom: 1px solid #e4e4e4;
    width: 100%;
    height: 2.2rem;
    line-height: 2.2rem;
    background: #fff
}

.top.s_red {
    border-bottom: 0;
    color: #fff;
    background: #ec5196
}

.top.s_red .cell_left.s_prev .e_back,.top.s_red .e_back,.top.s_red .e_operate,.top.s_red .g_left,.top.s_red .g_left .t_nav,.top.s_red .g_right,.top.s_red .g_right .t_nav {
    color: #fff
}
.top.s_query {
    display: table;
    line-height: normal
}

.top .cell_center,.top .cell_left,.top .cell_right {
    display: table-cell;
    text-align: center;
    vertical-align: middle
}

.top .cell_left {
    text-align: center;
    width: 2.875rem
}

.top .cell_left.s_prev {
    width: 1.7rem
}

.top .cell_left.s_prev .e_back {
    display: block;
    position: static;
    color: #9f9f9f
}

.top .cell_left img {
    display: inline-block;
    text-align: center;
    width: 2.225rem
}

.top .cell_center .g_input {
    position: relative
}

.top .cell_center .g_input input {
    background: white;
    border: 0;
    border-radius: 4px;
    padding: 0 .25rem 0 1.575rem;
    width: 100%;
    height: 1.5rem;
    font-size: .65rem;
    color: #333;
    box-sizing: border-box
}

.top .cell_center .g_input input.s_bd {
    border: 1px solid #e4e4e4
}

.top .cell_center .g_input span {
    position: absolute;
    left: 0;
    top: 0;
    padding-top: .2875rem;
    width: 1.575rem;
    text-align: center;
    pointer-events: none
}

.top .cell_center .g_input span i {
    display: inline-block;
    height: .925rem;
    font-size: .925rem;
    line-height: normal;
    color: #bdbdbd
}

.top .cell_right {
    position: relative;
    width: 2.375rem
}

.top .cell_right .t_nav,.top .cell_right .t_word {
    color: #fff
}

.top .cell_right .t_nav {
    display: inline-block;
    height: 1.75rem;
    font-size: 1.75rem;
    line-height: normal;
   
}

.top .cell_right .t_word {
    padding: 0 .05rem;
    font-size: .85rem
}

.top .cell_right button.t_word {
    border: 0;
    color: #a0a0a0;
    background: none
}

.top .g_left,.top .g_right {
    position: absolute;
    top: 0;
    color: #a0a0a0
}

.top .g_left a,.top .g_right a {
    color: #a0a0a0
}

.top .g_left i,.top .g_right i {
    vertical-align: middle
}

.top .g_left .t_nav,.top .g_right .t_nav {
    color: #fff
}

.top .g_left {
    left: 0
}

.top .g_right {
    right: 0
}

.top .g_right .t_nav {
    display: block;
    padding: 0 .3rem;
    font-size: 1.75rem;
    color: #a0a0a0
}

.top .e_back {
    display: inline-block;
    padding: 0 .3rem;
    font-size: 1.1rem
}

.top .e_operate {
    display: inline-block;
    padding: 0 .5rem
}

.top .e_operate i.s_word {
    padding: 0 .05rem;
    font-size: .85rem
}

.top .e_operate i.s_cart {
    font-size: 1.375rem
}

.top h1 {
    font-size: .95rem;
    text-align: center
}

.top .g_navList {
    position: absolute;
    right: 0;
    top: 100%;
    border: 1px solid #e4e4e4;
    background: #fff;
    text-align: left;
    white-space: nowrap
}

.top .g_navList a {
    display: block;
    padding: 0 .5rem;
    line-height: 1.75rem;
    color: #a0a0a0
}
.top .g_navList b{
    font-weight: 400;
}
.top .g_navList a+a {
    border-top: 1px solid #e4e4e4
}

.top .g_navList a i {
    font-size: 1rem;
    vertical-align: middle;
}

.top .g_navList a i.s_index {
    font-size: .9rem
}
</style>