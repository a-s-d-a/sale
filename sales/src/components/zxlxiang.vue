<template>
   <div class="S_active u_details">
        <div class="m_info">
          <div class="c_carousel">
            <img :src="'https://img2.yidejia.com/'+com" />
          </div>
          <h2>{{iteminfo.goods_name}}</h2>
          <div class="l_price">
            <em class="e_price">￥{{iteminfo.price}}</em>
            <span @click="ha">规格：{{iteminfo.spec}}</span>
          </div>
        </div>
        <a class="t_choice l_filter" href="javascript:;">
          选择：
          <em>1件</em>
          <!-- <i @click="ha" class="e_stretch"></i> -->
          <van-icon  @click="ha" class="e_stretch1" name="arrow" />
        </a>
        <div class="c_about">
          <section>
            <span>
              <van-icon name="success" />
              <b>正品保证</b>
            </span>
            <span>
            <van-icon name="success" />
              <b>实物拍摄</b>
            </span>
            <span>
            <van-icon name="success" />
              <b>299包邮</b>
            </span>
          </section>
        </div>
        <div class="m_newestComment">
          <a class="t_choice l_filter" href="javascript:;">
            累计评价：(17)
            <i class="e_stretch">已售1913</i>
          </a>
          <ol class="t_commentList"></ol>
        </div>
        <div class="t_mightLike">
          <h2>您可能喜欢</h2>
          <div class="t_mightLike_main t_goTopElement">
            <ol>
              <li>
                <a href="#/info/17584">
                  <img src="https://img2.yidejia.com/4/2019/06/22/a74ed9b1560a.png!200" alt />
                  <footer>
                    <h3>YQ02 眼唇按摩导入仪</h3>
                    <em>￥88.00</em>
                  </footer>
                </a>
              </li>
              <li>
                <a href="#/info/20910">
                  <img src="https://img2.yidejia.com/6/2019/08/06/351d89ebcf3ec.jpg!200" alt />
                  <footer>
                    <h3>D190851-1 初见倾心心机毛衫 浅杏 S</h3>
                    <em>￥229.00</em>
                  </footer>
                </a>
              </li>
              <li>
                <a href="#/info/20946">
                  <img src="https://img2.yidejia.com/4/2019/07/29/d4532e18816.jpg!200" alt />
                  <footer>
                    <h3>积分兑换 EO007 活性炭除湿盒 230g*9</h3>
                    <em>￥0.00</em>
                  </footer>
                </a>
              </li>
              <li>
                <a href="#/info/6188">
                  <img src="https://img2.yidejia.com/7/2016/05/17/6827ece6d2c9b.jpg!200" alt />
                  <footer>
                    <h3>YCAL6-1906 小香风时尚背心 黑色 L</h3>
                    <em>￥229.00</em>
                  </footer>
                </a>
              </li>
              <li>
                <a href="#/info/15399">
                  <img src="https://img2.yidejia.com/1/2018/12/21/7f9e962b864f.jpg!200" alt />
                  <footer>
                    <h3>D18181206-2 收腰显瘦澳毛呢大衣 香槟粉 XS</h3>
                    <em>￥1300.00</em>
                  </footer>
                </a>
              </li>
              <li>
                <a href="#/info/6150">
                  <img src="https://img2.yidejia.com/6/2016/03/22/a1d5840dbe9.jpg!200" alt />
                  <footer>
                    <h3>YCAL2-3900 精致撞色花瓣雪纺连衣裙 天蓝色 S</h3>
                    <em>￥399.00</em>
                  </footer>
                </a>
              </li>
              <li>
               <a>
                  <footer>
                    <h3>D17021-03 白色毛织背心 白色 L</h3>
                    <em>￥149.00</em>
                  </footer>
                </a>
              </li>
              <li>
                <a href="#/info/17507">
                  <img src="https://img2.yidejia.com/6/2019/04/27/56f6ea75768a.jpg!200" alt />
                  <footer>
                    <h3>YYAJ-0029 印花圆领宽松显瘦韩版男T 白色 2XL</h3>
                    <em>￥99.00</em>
                  </footer>
                </a>
              </li>
              <li>
                <a href="#/info/5003">
                  <img src="https://img2.yidejia.com/1/2016/10/27/c292ac21809.jpg!200" alt />
                  <footer>
                    <h3>YCDW9-0013b 小A型荷叶边俏皮精致双面呢外套 大红色 M</h3>
                    <em>￥509.00</em>
                  </footer>
                </a>
              </li>
              <li>
                <a href="#/info/15818">
                  <img src="https://img2.yidejia.com/4/2019/01/09/600f5d1641c2.jpg!200" alt />
                  <footer>
                    <h3>D190202-1 时尚修身斜纹西装外套 果肉粉 XL</h3>
                    <em>￥499.00</em>
                  </footer>
                </a>
              </li>
            </ol>
          </div>
        </div>
        <motai @haha='ha' v-if="isshow" ></motai>
      </div>
</template>

<script>
import motai from '../components/zxlmotai'
export default {
    components:{
        motai:motai
    },
    methods:{
        ha(){
            this.isshow=!this.isshow
        }
    },
data(){
     return{
         iteminfo:'',
         isshow:false
     }
 },
 computed:{
     com(){
         if(this.iteminfo.imgname){
             return this.iteminfo.imgname;
         }else if(this.iteminfo.img_name){
           return this.iteminfo.img_name
         }else{
             return this.iteminfo.carousel_image[0];
         }
     }
 },
   created(){
       this.iteminfo=this.$route.query.item
       console.log(this.iteminfo)
      
   },
  
}
</script>

<style>
.u_details{
    margin-top: 58.59px;
}
 .u_details,.main.s_info .center .u_imgText {
    display: none;
    padding-bottom: 2.225rem
}

 .u_details.S_active,.main.s_info .center .u_imgText.S_active {
    display: block
}

 .u_details .m_info {
    border-bottom: 1px solid #e4e4e4;
    background: #fff
}

 .u_details .m_info .c_carousel img {
    display: block;
    width: 100%
}
 .u_details .m_info h2 {
    margin-top: .25rem;
    padding: .5rem;
    font-size: .8rem;
    line-height: 1.25rem
}

 .u_details .m_info .l_price {
    padding: 0 .5rem .375rem;
    overflow: hidden;
}
 .u_details .m_info .l_price em {
    float: left;
    font-size: .85rem
}

 .u_details .m_info .l_price em.e_price {
    color: #ec5196
}

 .u_details .m_info .l_price em.e_point {
    color: #217d00
}

 .u_details .m_info .l_price em.e_point small {
    font-size: .6rem
}

 .u_details .m_info .l_price span {
    float: right;
    color: #9f9f9f
}
.t_choice .e_stretch1 {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    margin-top: -1.1rem;    font-size: 1rem;
    vertical-align: -2px;
    margin-top: -12px;
    }
.u_details .m_info .l_price a {
    float: right
}
 .u_details .m_info .l_price a i {
    display: inline-block;
    height: 1rem;
    font-size: 1rem;
    line-height: normal
}
.t_choice{
    display: block;
    position: relative;
    margin-top: .25rem;
    border: 1px solid #e4e4e4;
    border-width: 1px 0;
    padding: 0 2rem 0 .5rem;
    line-height: 2.2rem;
    background: #fff;
}
.u_details .l_filter em {
    margin-right: .5rem;
    color: #ec5196
}

.u_details .c_about {
    margin-top: .25rem;
    border: 1px solid #e4e4e4;
    border-width: 1px 0;
    padding: 0 .5rem;
    background: #fff
}

 .u_details .c_about section {
    line-height: 2rem
}

 .u_details .c_about section:first-child span b,.main.s_info .center .u_details .c_about section:first-child span i {
    vertical-align: middle
}

 .u_details .c_about section:first-child span i {
    width: .65rem;
    height: .65rem;
    line-height: .65rem;
    text-align: center;
    display: inline-block;
    border-radius: 50%;
    padding: .125rem;
    font-size: .65rem;
    color: #fff;
    background: #ec5196
}

 .u_details .c_about section:first-child span i:before {
  
    vertical-align: 1px
}
 .u_details .c_about section span {
    margin-right: 1rem
}

 .u_details .m_newestComment .t_choice .e_stretch {
    color: #9f9f9f
}

 .u_details .t_mightLike {
    margin-top: .5rem;
    border-top: 1px solid #e4e4e4
}
</style>