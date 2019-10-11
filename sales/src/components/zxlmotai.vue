<template>
  <div>
    <div class="f_cover s_info" @click="change"></div>
    <div class="f_fixed s_info" style>
      <div class="u_optionBox">
        <div class="u_optionBox_item">
          <div class="g_goodsInfo">
            <img :src="'https://img2.yidejia.com/'+com" alt />
            <h3>{{infor.goods_name}}</h3>
            <em>￥{{infor.price}}</em>
          </div>
          <div class="l_stock">
            库存
            <em>充足</em>
          </div>
        </div>
        <div class="c_buyNum">
          购买数量
          <span class="t_addSub">
            <a href="javascript:;" class="S_gray">
             <van-icon name="arrow-left" @click="num--"/>
            </a>
            <input type="text" :value="num" />
            <a href="javascript:;" class>
             <van-icon @click="num++" name="arrow" />
            </a>
          </span>
        </div>
      </div>
      <div class="g_buy">
        <a class="S_gray" @click="add">加入购物车</a>
        <router-link class="S_gray" to="/car" @click="dd">立即购买</router-link>
        <!-- <a class="S_gray" href="/car" @click="dd">立即购买</a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        change(){
            this.$emit('haha')
        },
        add(){
           return  this.$store.commit('add',{
                infor:this.infor,
                num:this.num
            })
            
        },
        dd(){
console.log(this.$store.getters.data)
        }
    },
   data(){
       return {
           infor:'',
           num:1
       }
   },
    computed:{
     com(){
         if(this.infor.img_name){
             return this.infor.img_name
         }else if(this.infor.imgname){
           return this.infor.imgname
         }else{
             return this.infor.carousel_image[0]
         }
     }
 },
  created(){
       this.infor=this.$route.query.item
       console.log(this.infor)
   },
};
</script>

<style>
.f_cover.s_info {
    z-index: 1;
}
.f_cover {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 3;
    left: 0;
    top: 0;
    background: rgba(0,0,0,.5);
}
.f_fixed.s_info {
    box-sizing: border-box;
    position: fixed;
    z-index: 2;
    right: 0;
    top: 0;
    padding-bottom: 2.575rem;
    width: 12.5rem;
    height: 100%;
    background: #fff
}

.f_fixed.s_info .u_optionBox {
    box-sizing: border-box;
    padding: .75rem;
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch
}

.f_fixed.s_info .u_optionBox .u_optionBox_item+.u_optionBox_item {
    margin-top: .75rem;
    border-top: 1px solid #e4e4e4;
    padding-top: .75rem
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .g_goodsInfo {
    padding-left: 3.5rem
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .g_goodsInfo img {
    width: 2.95rem;
    height: 2.95rem;
    border: 1px solid #e4e4e4;
    float: left;
    margin-left: -3.5rem
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .g_goodsInfo h3 {
    height: 2rem;
    overflow: hidden
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .g_goodsInfo em {
    color: #ec5196
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .c_dl {
    margin-top: .75rem
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .c_dl dd {
    padding: 0 0 0 .75rem
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .c_dl dd .e_option {
    float: left;
    margin: .5rem .5rem 0 0;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    height: 1.25rem;
    line-height: 1.25rem;
    color: #828282;
    white-space: nowrap
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .c_dl dd .e_option.S_checked {
    border-color: #ec5196
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .c_dl dd .e_option.S_disabled {
    border-style: dashed;
    color: #ccc
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .c_dl dd .e_option.S_disabled img {
    opacity: .5
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .c_dl dd .e_option em {
    padding: 0 .75rem
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .c_dl dd .e_option b,.f_fixed.s_info .u_optionBox .u_optionBox_item .c_dl dd .e_option img {
    float: left
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .c_dl dd .e_option img {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 3px 0 0 3px
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .c_dl dd .e_option b {
    padding: 0 .5rem
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .l_stock {
    margin-top: .9rem
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .l_stock em {
    color: #ec5196
}

.f_fixed.s_info .u_optionBox .c_buyNum {
    margin-top: .75rem;
    border-top: 1px solid #e4e4e4;
    padding-top: .75rem
}

.f_fixed.s_info .u_optionBox .c_buyNum .t_addSub {
    margin-left: .5rem;
    vertical-align: middle
}

.f_fixed.s_info .g_buy {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    bottom: 0;
    border-top: 1px solid #e4e4e4;
    padding: .5rem;
    width: 100%;
    background: #fff;
    text-align: center
}

.f_fixed.s_info .g_buy a {
    width: 4.5rem;
    height: 1.55rem;
    line-height: 1.55rem;
    text-align: center;
    display: inline-block;
    border-radius: 4px;
    color: #fff
}

.f_fixed.s_info .g_buy a:first-child {
    background: #eda948
}

.f_fixed.s_info .g_buy a+a {
    margin-left: .5rem;
    background: #ec5196
}

.f_fixed.s_info .g_buy a.S_gray {
    background: #999
}
</style>