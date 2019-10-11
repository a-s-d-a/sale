<template>
  <div class="main s_info" style>
    <div class="center">
      <!-- <div class="S_active u_details">
        <headappdownload gid="15436">
          <div class="cc-head-appdownload">
            <a href="javascript:;" class="open-link">
              <img
                src="//dn-ydj-statics.qbox.me/h5/build/prod/img/c02062b3.dl-link.png"
                alt="点击下载app"
              />
            </a>
          </div>
        </headappdownload>
        <div class="m_info">
          <div class="c_carousel">
            <img :src="'https://img2.yidejia.com/'+com" alt />
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
          <i class="e_stretch"></i>
        </a>
        <div class="c_about">
          <section>
            <span>
              <i></i>
              <b>正品保证</b>
            </span>
            <span>
              <i></i>
              <b>实物拍摄</b>
            </span>
            <span>
              <i></i>
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
                <a href="#/info/9137">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAEECAYAAAG5D3qcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0QjhFMjBGMzBGNjgxMUU2QjkxNEJBMDBCMDQ4QzA0OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QjhFMjBGNDBGNjgxMUU2QjkxNEJBMDBCMDQ4QzA0OSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRCOEUyMEYxMEY2ODExRTZCOTE0QkEwMEIwNDhDMDQ5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRCOEUyMEYyMEY2ODExRTZCOTE0QkEwMEIwNDhDMDQ5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+s1B5bwAAIbhJREFUeNpi/P//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"
                    alt
                  />
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
      </div> -->
      <!-- <div class="u_imgText" v-if="isshow">
        <div class="c_img">
          <table id="__01" width="790" height="9891" border="0" cellpadding="0" cellspacing="0">
            <tbody>
              <tr>
                <td colspan="4">
                  <img src="//images.yidejia.com/new_6/T28/T28_01.jpg" width="790" height="997" />
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <img src="//images.yidejia.com/new_6/T28/T28_02.jpg" width="790" height="650" />
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <img src="//images.yidejia.com/new_6/T28/T28_03.jpg" width="790" height="669" />
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <img src="//images.yidejia.com/new_6/T28/T28_04.jpg" width="790" height="710" />
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <img src="//images.yidejia.com/new_6/T28/T28_05.jpg" width="790" height="557" />
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <img src="//images.yidejia.com/new_6/T28/T28_06.jpg" width="790" height="589" />
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <img src="//images.yidejia.com/new_6/T28/T28_07.jpg" width="790" height="529" />
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <img src="//images.yidejia.com/new_6/T28/T28_08.jpg" width="790" height="911" />
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <img src="//images.yidejia.com/new_6/T28/T28_09.jpg" width="790" height="909" />
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <img src="//images.yidejia.com/new_6/T28/T28_10.jpg" width="790" height="843" />
                </td>
              </tr>
              <tr>
                <td>
                  <a href="http://www.yidejia.com/product/15341.html">
                    <img
                      src="//images.yidejia.com/new_6/T28/T28-烟酰胺光透套装_11.jpg"
                      width="190"
                      height="641"
                    />
                  </a>
                </td>
                <td>
                  <a href="http://www.yidejia.com/product/15353.html">
                    <img
                      src="//images.yidejia.com/new_6/T28/T28-烟酰胺光透套装_12.jpg"
                      width="200"
                      height="641"
                    />
                  </a>
                </td>
                <td>
                  <a href="http://www.yidejia.com/product/15347.html">
                    <img
                      src="//images.yidejia.com/new_6/T28/T28-烟酰胺光透套装_13.jpg"
                      width="190"
                      height="641"
                    />
                  </a>
                </td>
                <td>
                  <a href="http://www.yidejia.com/product/15359.html">
                    <img src="//images.yidejia.com/new_6/T28/T28_14.jpg" width="210" height="641" />
                  </a>
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <img src="//images.yidejia.com/new_6/T28/T28_15.jpg" width="790" height="957" />
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <img src="//images.yidejia.com/new_6/T28/T28_16.jpg" width="790" height="929" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> -->
      <!-- <div class="u_comments t_goTopElement" style>
        <gotop>
          <div class="f_goTop" style="display: none;">
            <i></i>
          </div>
        </gotop>
        <div class="t_null">暂无评价</div>
      </div> -->
    </div>
    <footer class="bottom">
      <a href="javascript:;" class>
        <i></i>收藏
      </a>
      <a class href="javascript:;">加入购物车</a>
      <a class href="javascript:;">立即购买</a>
    </footer>
  </div>
</template>

<script>
export default {
 data(){
     return{
         iteminfo:'',
     }
 },
 computed:{
     com(){
         if(this.iteminfo.imgname){
             return this.iteminfo.imgname;
             
         }else{
             return this.iteminfo.carousel_image[0];
         }
     }
 },
   created(){
       this.iteminfo=this.$route.query.item
       console.log(this.iteminfo)
       console.log(com)
   },
  
};
</script>

<style>
.main.s_category .center ul li a h4,
.main.s_video .video-info-content .introduce .item,
.t_activitySummary header h2 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.t_star {
  display: inline-block;
  *zoom: 1;
  *display: inline;
}

.main.s_addressList .center ol,
.main.s_orderInfo .center {
  *zoom: 1;
}

.main.s_addressList .center ol:before,
.main.s_orderInfo .center:before {
  content: "";
  display: table;
}

.center.s_login .t_entryForm .c_pwdAbout,
.f_fixed.s_confirmExchange .u_optionBox .u_optionBox_item .c_dl dd,
.f_fixed.s_confirmExchange .u_optionBox .u_optionBox_item .g_goodsInfo,
.f_fixed.s_info .u_optionBox .u_optionBox_item .c_dl dd,
.f_fixed.s_info .u_optionBox .u_optionBox_item .g_goodsInfo,
.f_sort.s_list .u_sortBox .u_sortBox_item .c_dls dl dd,
.main.s_activityInfo .center ol,
.main.s_addressList .center ol li footer,
.main.s_assessInfo .center form,
.main.s_assessList .center .m_orderList > li .g_listHeader,
.main.s_cart .center,
.main.s_category .center ul li a,
.main.s_confirm .center .c_defaultInfo section,
.main.s_confirm .center .c_goods,
.main.s_confirm .center .l_coupon,
.main.s_confirmExchange .center,
.main.s_confirmExchange .center .t_orderList .c_goods ol li ul li,
.main.s_index .center .c_nav,
.main.s_index .center .m_recommend .g_links,
.main.s_info .center .u_details .m_info .l_price,
.main.s_orderInfo .center .c_address p,
.main.s_orderInfo .center .u_detail .c_about p,
.main.s_orderList .center .m_orderList > li .g_listHeader,
.main.s_pointsCoupon .center .u_coupon ol li,
.main.s_pointsCoupon .top .g_tab,
.main.s_rejectedList .center .m_orderList > li .c_sections section,
.main.s_rejectedList .center .m_orderList > li .g_listFooter,
.main.s_rejectedList .center .m_orderList > li .g_listHeader,
.main.s_rejectedSubmit .center .m_orderList > li .g_listHeader,
.main.s_rejectedSubmit .center .m_rejectedForm .c_sections section,
.main.s_search .center .c_searchHot nav,
.main.s_userIndex .center,
.main.s_userIndex .center .c_orderState nav,
.main.s_video .video-info-content .share .content,
.main.s_videoIndex .center .t_videoList .c_content_2 a,
.t_2column,
.t_3column,
.t_commentList li,
.t_entryForm .c_pwdAbout,
.t_goodInfo,
.t_goodInfo span.s_ca,
.t_mightLike_main ol,
.t_orderList .c_goods ol li .g_amount,
.t_videoList .c_content {
  *zoom: 1;
}

.center.s_login .t_entryForm .c_pwdAbout:after,
.f_fixed.s_confirmExchange .u_optionBox .u_optionBox_item .c_dl dd:after,
.f_fixed.s_confirmExchange .u_optionBox .u_optionBox_item .g_goodsInfo:after,
.f_fixed.s_info .u_optionBox .u_optionBox_item .c_dl dd:after,
.f_fixed.s_info .u_optionBox .u_optionBox_item .g_goodsInfo:after,
.f_sort.s_list .u_sortBox .u_sortBox_item .c_dls dl dd:after,
.main.s_activityInfo .center ol:after,
.main.s_addressList .center ol li footer:after,
.main.s_assessInfo .center form:after,
.main.s_assessList .center .m_orderList > li .g_listHeader:after,
.main.s_cart .center:after,
.main.s_category .center ul li a:after,
.main.s_confirm .center .c_defaultInfo section:after,
.main.s_confirm .center .c_goods:after,
.main.s_confirm .center .l_coupon:after,
.main.s_confirmExchange .center .t_orderList .c_goods ol li ul li:after,
.main.s_confirmExchange .center:after,
.main.s_index .center .c_nav:after,
.main.s_index .center .m_recommend .g_links:after,
.main.s_info .center .u_details .m_info .l_price:after,
.main.s_orderInfo .center .c_address p:after,
.main.s_orderInfo .center .u_detail .c_about p:after,
.main.s_orderList .center .m_orderList > li .g_listHeader:after,
.main.s_pointsCoupon .center .u_coupon ol li:after,
.main.s_pointsCoupon .top .g_tab:after,
.main.s_rejectedList .center .m_orderList > li .c_sections section:after,
.main.s_rejectedList .center .m_orderList > li .g_listFooter:after,
.main.s_rejectedList .center .m_orderList > li .g_listHeader:after,
.main.s_rejectedSubmit .center .m_orderList > li .g_listHeader:after,
.main.s_rejectedSubmit .center .m_rejectedForm .c_sections section:after,
.main.s_search .center .c_searchHot nav:after,
.main.s_userIndex .center .c_orderState nav:after,
.main.s_userIndex .center:after,
.main.s_video .video-info-content .share .content:after,
.main.s_videoIndex .center .t_videoList .c_content_2 a:after,
.t_2column:after,
.t_3column:after,
.t_commentList li:after,
.t_entryForm .c_pwdAbout:after,
.t_goodInfo:after,
.t_goodInfo span.s_ca:after,
.t_mightLike_main ol:after,
.t_orderList .c_goods ol li .g_amount:after,
.t_videoList .c_content:after {
  content: "";
  display: table;
  clear: both;
}

.f_goTop i,
.main.s_addressList .center ol li footer .g_btns a i,
.main.s_addressList .center ol li footer .t_checkbox i,
.main.s_cart .center .g_empty i,
.main.s_cart .center .t_orderList .c_goods ol li .g_right a,
.main.s_confirm .center .c_defaultInfo section span i,
.main.s_confirm .center .t_choice .e_info,
.main.s_confirmExchange .center .t_orderList .c_goods ol li ul li a,
.main.s_discountList .center ol li .t_goodInfo .e_img_2 i:before,
.main.s_favorite .center .m_favoriteList > li .t_orderList .g_collection i,
.main.s_index .center .c_nav a i,
.main.s_index .center .section header a:after,
.main.s_info .bottom a i,
.main.s_info .center .u_details .c_about section:first-child span i:before,
.main.s_info .center .u_details .m_info .l_price a i,
.main.s_userIndex .center .c_links a .e_gt:before,
.main.s_userIndex .center .c_links a .g_num i,
.main.s_userIndex .center .c_links a .g_text i,
.main.s_userIndex .center .c_orderState nav a i,
.t_addSub a i,
.t_checkbox b em,
.t_checkbox i:before,
.t_choice .e_stretch:after,
.t_entryForm .t_inputText.s_account .e_icon:before,
.t_entryForm .t_inputText.s_captcha .e_icon:before,
.t_entryForm .t_inputText.s_phone .e_icon:before,
.t_entryForm .t_inputText.s_pwd .e_icon:before,
.t_navTab.s_list a i,
.t_searchHistory nav span i b,
.t_star span i,
.t_videoList .e_img i,
.top .cell_center .g_input span i,
.top .cell_right .t_nav,
.top .e_back,
.top .e_operate i.s_cart,
.top .g_navList a i,
.top .g_right .t_nav {

  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.popup-dz .popup-dz-wrapper .popup-dz-header a.close-tag,
.third-part-login .third-part-login-content .l-wechat {
  font-family: iconfont-mobile-mall-new !important;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.u_screen {
  overflow: hidden;
}

.u_film_item {
  float: left;
}

blockquote,
body,
button,
code,
dd,
div,
dl,
dt,
fieldset,
figure,
form,
h1,
h2,
h3,
h4,
h5,
h6,
input,
legend,
li,
ol,
p,
pre,
select,
td,
textarea,
th,
ul {
  margin: 0;
  padding: 0;
}

fieldset,
img {
  border: 0;
}

:focus {
  outline: 0;
}

address,
cite,
code,
dfn,
em,
i,
var {
  font-style: normal;
}

b,
caption,
th {
  font-weight: 400;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: 400;
}

abbr,
acronym {
  border: 0;
  font-variant: normal;
}

button,
input,
optgroup,
option,
select,
textarea {
  font-family: inherit;
  *font-family: \\5fae\8f6f\96c5\9ed1, Microsoft YaHei;
  font-size: inherit;
  *font-size: 100%;
  font-style: inherit;
  font-weight: inherit;
  color: inherit;
}

big,
code,
kbd,
samp,
small,
tt {
  font-size: 100%;
}

body {
  line-height: 1.5;
  font: 12px \\5fae\8f6f\96c5\9ed1, Microsoft YaHei, Tahoma, Helvetica, Arial,
    sans-serif;
  color: #333;
}

ol,
ul {
  list-style: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

caption,
th {
  text-align: left;
}

sub,
sup {
  font-size: 100%;
  vertical-align: baseline;
}

:link,
:visited {
  text-decoration: none;
}

a,
a:active,
a:link,
a:visited {
  color: #333;
  text-decoration: none;
  outline: none;
}

a:hover {
  color: #333;
}

a {
  transition-property: border-color, color, background-color;
  transition-duration: 0.2s;
}

blockquote,
q {
  quotes: none;
}

blockquote:after,
blockquote:before,
q:after,
q:before {
  content: "";
  content: none;
}

[type="submit"],
button {
  cursor: pointer;
}

@font-face {
  font-family: iconfont;
  src: url("//at.alicdn.com/t/font_1457946492_301214.eot");
  src: url("//at.alicdn.com/t/font_1457946492_301214.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1457946492_301214.woff") format("woff"),
    url("//at.alicdn.com/t/font_1457946492_301214.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1457946492_301214.svg#iconfont") format("svg");
}

@font-face {
  font-family: iconfont-mobile-mall-new;
  src: url("//at.alicdn.com/t/font_pmul2d0roeuvunmi.eot");
  src: url("//at.alicdn.com/t/font_pmul2d0roeuvunmi.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_pmul2d0roeuvunmi.woff") format("woff"),
    url("//at.alicdn.com/t/font_pmul2d0roeuvunmi.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_pmul2d0roeuvunmi.svg#iconfont-mobile-mall-new")
      format("svg");
}

.AQ__auth-fixed {
  display: none;
}

.container,
body,
html {
  height: 100%;
}

html {
  font-size: 40px;
}

body {
  background: #f0f0f0;
  font-size: 0.7rem;
  line-height: 1rem;
}

.container {
  margin: auto;
  max-width: 640px;
  min-width: 320px;
}

.main {
  padding-top: 2.2rem;
}

.main,
.top {
  box-sizing: border-box;
}

.top {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  border-bottom: 1px solid #e4e4e4;
  width: 100%;
  height: 2.2rem;
  line-height: 2.2rem;
  background: #fff;
}

.top.s_red {
  border-bottom: 0;
  color: #fff;
  background: #ec5196;
}

.top.s_red .cell_left.s_prev .e_back,
.top.s_red .e_back,
.top.s_red .e_operate,
.top.s_red .g_left,
.top.s_red .g_left .t_nav,
.top.s_red .g_right,
.top.s_red .g_right .t_nav {
  color: #fff;
}

.top.s_query {
  display: table;
  line-height: normal;
}

.top .cell_center,
.top .cell_left,
.top .cell_right {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

.top .cell_left {
  width: 2.875rem;
}

.top .cell_left.s_prev {
  width: 1.7rem;
}

.top .cell_left.s_prev .e_back {
  display: block;
  position: static;
  color: #9f9f9f;
}

.top .cell_left img {
  width: 2.225rem;
}

.top .cell_center .g_input {
  position: relative;
}

.top .cell_center .g_input input {
  border: 0;
  border-radius: 4px;
  padding: 0 0.25rem 0 1.575rem;
  width: 100%;
  height: 1.5rem;
  font-size: 0.65rem;
  color: #333;
  box-sizing: border-box;
}

.top .cell_center .g_input input.s_bd {
  border: 1px solid #e4e4e4;
}

.top .cell_center .g_input span {
  position: absolute;
  left: 0;
  top: 0;
  padding-top: 0.2875rem;
  width: 1.575rem;
  text-align: center;
  pointer-events: none;
}

.top .cell_center .g_input span i {
  display: inline-block;
  height: 0.925rem;
  font-size: 0.925rem;
  line-height: normal;
  color: #bdbdbd;
}

.top .cell_right {
  position: relative;
  width: 2.375rem;
}

.top .cell_right .t_nav,
.top .cell_right .t_word {
  color: #fff;
}

.top .cell_right .t_nav {
  display: inline-block;
  height: 1.75rem;
  font-size: 1.75rem;
  line-height: normal;
}

.top .cell_right .t_word {
  padding: 0 0.05rem;
  font-size: 0.85rem;
}

.top .cell_right button.t_word {
  border: 0;
  color: #a0a0a0;
  background: none;
}

.top .g_left,
.top .g_right {
  position: absolute;
  top: 0;
  color: #a0a0a0;
}

.top .g_left a,
.top .g_right a {
  color: #a0a0a0;
}

.top .g_left i,
.top .g_right i {
  vertical-align: middle;
}

.top .g_left .t_nav,
.top .g_right .t_nav {
  color: #fff;
}

.top .g_left {
  left: 0;
}

.top .g_right {
  right: 0;
}

.top .g_right .t_nav {
  display: block;
  padding: 0 0.3rem;
  font-size: 1.75rem;
  color: #a0a0a0;
}

.top .e_back {
  display: inline-block;
  padding: 0 0.3rem;
  font-size: 1.1rem;
}

.top .e_operate {
  display: inline-block;
  padding: 0 0.5rem;
}

.top .e_operate i.s_word {
  padding: 0 0.05rem;
  font-size: 0.85rem;
}

.top .e_operate i.s_cart {
  font-size: 1.375rem;
}

.top h1 {
  font-size: 0.95rem;
  text-align: center;
}

.top .g_navList {
  position: absolute;
  right: 0;
  top: 100%;
  border: 1px solid #e4e4e4;
  background: #fff;
  text-align: left;
  white-space: nowrap;
}

.top .g_navList a {
  display: block;
  padding: 0 0.5rem;
  line-height: 1.75rem;
  color: #a0a0a0;
}

.top .g_navList a + a {
  border-top: 1px solid #e4e4e4;
}

.top .g_navList a i {
  font-size: 1rem;
}

.top .g_navList a i.s_index {
  font-size: 0.9rem;
}

.bottom {
  box-sizing: border-box;
  position: fixed;
  z-index: 1;
  left: 0;
  bottom: 0;
  border: solid #e4e4e4;
  border-width: 1px 0;
  width: 100%;
  line-height: 2.5rem;
  background: #f5f5f5;
  text-align: center;
}

.bottom.s_submit {
  padding: 0.5rem;
  line-height: 1.5rem;
  background: #fff;
  text-align: left;
}

.bottom.s_submit a {
  width: 4.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  float: right;
  border-radius: 2px;
  font-size: 0.75rem;
  color: #fff;
  background: #ec5196;
}

.bottom.s_submit .t_checkbox {
  margin-right: 0.5rem;
}

.bottom.s_submit em {
  font-size: 0.75rem;
  color: #ec5196;
  vertical-align: middle;
}

.bottom.s_order {
  padding: 0.5rem;
  line-height: 1.5rem;
  background: #fff;
  text-align: right;
}

.t_goTopElement {
  box-sizing: border-box;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.f_goTop {
  position: fixed;
  z-index: 1;
  left: 50%;
  margin-left: 5.5rem;
  bottom: 0.5rem;
}

.f_goTop i {
  border-radius: 50%;
  font-size: 2rem;
  color: #ec5196;
  background: #fff;
}

.f_goTop i:before {
  content: "\E62B";
}

.f_cover {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
}

.f_alert,
.f_confirm,
.f_tips {
  box-sizing: border-box;
  position: fixed;
  z-index: 4;
  left: 50%;
  top: 50%;
  margin: -2.275rem 0 0 -5rem;
  border-radius: 5px;
  width: 10rem;
  background: #fff;
  text-align: center;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
}

.f_alert header,
.f_confirm header,
.f_tips header {
  padding: 0.75rem 0.5rem;
  color: #9f9f9f;
  word-break: break-all;
}

.f_tips header {
  color: #ec5196;
}

.f_alert footer,
.f_confirm footer {
  border-top: 1px solid #e4e4e4;
  line-height: 2rem;
}

.f_alert footer a,
.f_confirm footer a {
  color: #ec5196;
}

.f_alert footer a {
  display: block;
}

.f_confirm footer a {
  float: left;
  width: 50%;
}

.f_confirm footer a + a {
  margin-left: -1px;
  border-left: 1px solid #e4e4e4;
}

.t_2column,
.t_3column,
.t_bgw {
  background: #fff;
}

.t_2column a,
.t_3column a {
  float: left;
}

.t_2column a + a,
.t_3column a + a {
  border-left: 1px solid #e4e4e4;
}

.t_2column a img,
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

.t_2column a {
  width: 50%;
}

.t_2column a + a {
  margin-left: -1px;
}

.t_2column.s_2row a:first-child img {
  height: 10rem;
}

.t_2column.s_2row a + a {
  margin-top: -1px;
  border-top: 1px solid #e4e4e4;
}

.t_2column img {
  height: 5rem;
}

.t_checkbox.S_checked i {
  border-color: #ec5196;
}

.t_checkbox.S_checked i:before {
  display: inline;
}

.t_checkbox.s_square i {
  width: 0.55rem;
  height: 0.55rem;
  line-height: 0.55rem;
  text-align: center;
  border-radius: 0;
  padding: 0.05rem;
  font-size: 0.55rem;
  background: #fff;
}

.t_checkbox.s_square i:before {
  vertical-align: 1px;
}

.t_checkbox.s_square b {
  color: #a0a0a0;
}

.t_checkbox b,
.t_checkbox i {
  vertical-align: middle;
}

.t_checkbox i {
  width: 0.75rem;
  height: 0.75rem;
  line-height: 0.75rem;
  text-align: center;
  display: inline-block;
  border: 1px solid #d5d5d5;
  border-radius: 50%;
  padding: 0.125rem;
  font-size: 0.75rem;
  color: #ec5196;
}

.t_checkbox i:before {
  content: "\E606";
  display: none;
  vertical-align: 0.05rem;
}

.t_checkbox b {
  margin-left: 0.1rem;
  font-size: 0.75rem;
  color: #424242;
}

.t_checkbox b em {
  display: inline-block;
  height: 1.05rem;
  font-size: 1.05rem;
  line-height: normal;
  margin: 0 0.15rem;
  color: #ec5196;
}

.t_checkbox b em.s_makeup {
  margin-right: 0.25rem;
}

.t_checkbox b em.s_clothing {
  height: 1.15rem;
  font-size: 1.15rem;
}

.t_checkbox input {
  display: none;
}

.t_addSub {
  display: inline-block;
  border: 1px solid #828282;
  border-radius: 4px;
}

.t_addSub a,
.t_addSub input {
  width: 1.5rem;
  height: 1.25rem;
  float: left;
}

.t_addSub a {
  line-height: 1.25rem;
  color: #ec5196;
  text-align: center;
}

.t_addSub a.S_gray {
  color: #828282;
}

.t_addSub a i {
  display: inline-block;
  height: 0.6rem;
  font-size: 0.6rem;
  line-height: normal;
}

.t_addSub input {
  border: 1px solid #828282;
  border-width: 0 1px;
  font-size: 0.85rem;
  color: #828282;
  text-align: center;
}

.t_orderList {
  border: solid #e4e4e4;
  border-width: 1px 0;
  padding: 0.5rem;
}

.t_orderList.s_check {
  padding-left: 1.75rem;
}

.t_orderList.s_check .t_checkbox {
  display: block;
}

.t_orderList .t_checkbox {
  display: none;
  float: left;
  margin-left: -1.75rem;
  width: 1.75rem;
  line-height: 3.5rem;
  text-align: center;
}

.t_orderList .c_goods {
  display: block;
}

.t_orderList .c_goods ol li {
  padding: 0.5rem 0 0.5rem 4rem;
}

.t_orderList .c_goods ol li:first-child {
  padding-top: 0;
}

.t_orderList .c_goods ol li + li {
  border-top: 1px solid #e4e4e4;
}

.t_orderList .c_goods ol li.s_pr {
  padding-right: 3.5rem;
}

.t_orderList .c_goods ol li img {
  width: 3.5rem;
  height: 3.5rem;
  float: left;
  margin-left: -4rem;
  border: 1px solid #e4e4e4;
}

.t_orderList .c_goods ol li h4 {
  height: 2rem;
  font-size: 0.7rem;
  line-height: 1rem;
  overflow: hidden;
}

.t_orderList .c_goods ol li .g_amount {
  margin-top: 0.75rem;
  font-size: 0.6rem;
  line-height: 0.75rem;
  color: #9f9f9f;
}

.t_orderList .c_goods ol li .g_amount span {
  float: left;
}

.t_orderList .c_goods ol li .g_amount span em {
  margin-left: 0.2rem;
  color: #333;
}

.t_orderList .c_goods ol li .g_amount .t_a {
  float: right;
  margin-top: -0.25rem;
}

.t_orderList .c_goods ol li .t_addSub {
  margin-top: 0.25rem;
}

.t_orderList .c_goods footer {
  margin-bottom: -0.075rem;
  line-height: 0.75rem;
  text-align: right;
}

.t_orderList .c_goods footer b {
  color: #9f9f9f;
}

.t_orderList .c_goods footer em {
  color: #ec5196;
}

.t_entryForm {
  padding: 1rem;
}

.t_entryForm .t_inputText {
  position: relative;
}

.t_entryForm .t_inputText.s_account .e_icon:before {
  content: "\E608";
  display: inline-block;
  height: 0.9rem;
  font-size: 0.9rem;
  line-height: normal;
}

.t_entryForm .t_inputText.s_account [type="text"] {
  border-bottom: 0;
}

.t_entryForm .t_inputText.s_pwd .e_icon:before {
  content: "\E609";
  display: inline-block;
  height: 1rem;
  font-size: 1rem;
  line-height: normal;
}

.t_entryForm .t_inputText.s_pwd [type="password"],
.t_entryForm .t_inputText.s_pwd [type="text"] {
  padding-right: 3.2rem;
}

.t_entryForm .t_inputText.s_pwd .g_switch {
  width: 2.1rem;
  height: 1.05rem;
  line-height: 1.05rem;
  text-align: center;
  position: absolute;
  right: 0.55rem;
  top: 50%;
  margin-top: -0.575rem;
  border: 0.05rem solid #ccc;
  border-radius: 1.1rem;
  font-size: 0.6rem;
  color: #fff;
  background: #ccc;
  cursor: pointer;
  overflow: hidden;
}

.t_entryForm .t_inputText.s_pwd .g_switch.S_green {
  border-color: #01b667;
  background: #01b667;
}

.t_entryForm .t_inputText.s_pwd .g_switch.S_green i {
  left: 50%;
}

.t_entryForm .t_inputText.s_pwd .g_switch b {
  display: block;
}

.t_entryForm .t_inputText.s_pwd .g_switch i {
  position: absolute;
  left: 0;
  top: 0;
  width: 1.05rem;
  height: 1.05rem;
  border-radius: 50%;
  background: #fff;
  transition: left 0.2s;
  -webkit-transition: left 0.2s;
}

.t_entryForm .t_inputText.s_phone .e_icon:before {
  content: "\E616";
  display: inline-block;
  height: 1rem;
  font-size: 1rem;
  line-height: normal;
}

.t_entryForm .t_inputText.s_captcha {
  padding-right: 6rem;
}

.t_entryForm .t_inputText.s_captcha .e_icon:before {
  content: "\E617";
  display: inline-block;
  height: 1rem;
  font-size: 1rem;
  line-height: normal;
}

.t_entryForm .t_inputText.s_captcha a {
  width: 5.75rem;
  height: 2.25rem;
  line-height: 2.25rem;
  text-align: center;
  float: right;
  margin-right: -6rem;
  color: #ec5196;
  background: #fff;
}

.t_entryForm .t_inputText .e_icon {
  width: 1.65rem;
  height: 2.15rem;
  line-height: 2.15rem;
  text-align: center;
  position: absolute;
  left: 2px;
  top: 2px;
  pointer-events: none;
}

.t_entryForm .t_inputText .e_icon:before {
  color: #a0a0a0;
}

.t_entryForm .t_inputText [type="password"],
.t_entryForm .t_inputText [type="text"] {
  display: block;
  box-sizing: border-box;
  border: 0.05rem solid #e4e4e4;
  padding: 0 0.35rem 0 1.65rem;
  width: 100%;
  height: 2.25rem;
  font-size: 0.7rem;
}

.t_entryForm .c_pwdAbout {
  margin-top: 0.75rem;
}

.t_entryForm .c_pwdAbout .t_checkbox {
  float: left;
}

.t_entryForm .c_pwdAbout .e_forget {
  float: right;
}

.t_entryForm button {
  height: 1.85rem;
  line-height: 1.85rem;
  text-align: center;
  display: block;
  margin-top: 1.175rem;
  border: 0;
  width: 100%;
  font-size: 0.95rem;
  color: #fff;
  background: #eda948;
}

.t_activitySummary {
  display: block;
  margin-top: 0.5rem;
  border: 1px solid #e4e4e4;
  border-width: 1px 0;
  background: #fff;
}

.t_activitySummary footer,
.t_activitySummary header {
  padding: 0 0.5rem;
}

.t_activitySummary header {
  height: 1.6rem;
  line-height: 1.6rem;
  font-size: 0.75rem;
  overflow: hidden;
}

.t_activitySummary header h2 {
  float: left;
  width: 10.75rem;
}

.t_activitySummary header em {
  float: right;
}

.t_activitySummary header em.s_gray {
  color: #9f9f9f;
}

.t_activitySummary header em.s_red {
  color: #ec5196;
}

.t_activitySummary img {
  display: block;
  width: 100%;
}

.t_activitySummary footer {
  font-size: 0.65rem;
  line-height: 1.1rem;
  color: #9f9f9f;
  text-align: right;
}

.t_explain h2 {
  margin-top: 0.5rem;
  border: 1px solid #e4e4e4;
  border-width: 1px 0;
  padding: 0 0.5rem;
  line-height: 1.7rem;
  background: #fff;
}

.t_explain h2 em {
  margin-left: 0.5rem;
  color: #ec5196;
}

.t_explain h3 {
  line-height: 2.2rem;
  text-align: center;
}

.t_explain article {
  margin-top: -0.5rem;
  padding: 0.5rem;
  font-size: 0.6rem;
  color: #9f9f9f;
}

.t_explain article dl + dl,
.t_explain article dl.s_multiLine dd + dd {
  margin-top: 0.5rem;
}

.t_explain article dl dt {
  margin-bottom: 0.25rem;
  font-weight: 700;
}

.t_explain article table {
  margin-top: 0.5rem;
  width: 100%;
  background: #fff;
}

.t_explain article table tbody tr td,
.t_explain article table tbody tr th {
  border: 1px solid #e4e4e4;
  height: 1.25rem;
  font-size: 0.6rem;
  color: #3e3e3e;
  text-align: center;
}

.t_explain article table tbody tr th {
  padding: 0 0.15rem;
}

.t_goodInfo img {
  width: 4.95rem;
  height: 4.95rem;
  float: left;
  border: 1px solid #e4e4e4;
}

.t_goodInfo h3 {
  height: 2rem;
  overflow: hidden;
}

.t_goodInfo .e_price {
  display: block;
  margin-top: 0.4rem;
  color: #ec5196;
}

.t_goodInfo span {
  display: block;
  margin-top: 0.4rem;
  font-size: 0.6rem;
  color: #828282;
}

.t_goodInfo span.s_ca {
  line-height: 1.4rem;
}

.t_goodInfo span.s_ca b {
  float: left;
}

.t_goodInfo span.s_ca a {
  width: 4rem;
  height: 1.4rem;
  line-height: 1.4rem;
  text-align: center;
  float: right;
  border-radius: 4px;
  font-size: 0.7rem;
  color: #fff;
  background: #ec5196;
}

.t_goodInfo span.s_ca a.s_gray {
  background: #828282;
}

.t_goodInfo span b + b {
  margin-left: 0.75rem;
}

.t_goodInfo span b em {
  color: #ec5196;
}

.t_star {
  position: relative;
}

.t_star span {
  display: block;
  white-space: nowrap;
  cursor: pointer;
}

.t_star span i {
  display: inline-block;
  height: 1rem;
  font-size: 1rem;
  line-height: normal;
  margin-right: 0.125rem;
  color: #fff;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.35);
}

.t_star span.S_pink {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  overflow: hidden;
  transition: width 0.8s;
  -webkit-transition: width 0.8s;
}

.t_star span.S_pink i {
  color: #ec5196;
}

.t_a,
a.t_a {
  width: 4.45rem;
  height: 1.45rem;
  line-height: 1.45rem;
  text-align: center;
  display: inline-block;
  margin-left: 0.5rem;
  border: 1px solid #bcbcbc;
  border-radius: 4px;
  font-size: 0.65rem;
  color: #9f9f9f;
}

.t_a + .t_a,
.t_a + a.t_a,
a.t_a + .t_a,
a.t_a + a.t_a {
  margin-left: 0.3rem;
}

.t_a.s_red,
a.t_a.s_red {
  border-color: #ec5196;
  color: #ec5196;
}

.t_a.s_yellow,
a.t_a.s_yellow {
  width: 4.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  border-color: #eda948;
  color: #eda948;
  background: #fff;
}

[type="submit"].t_a,
button.t_a {
  width: 4.5rem;
  height: 1.5rem;
}

.t_mightLike {
  overflow: hidden;
}

.t_mightLike h2 {
  padding: 0 0.5rem;
  font-size: 0.75rem;
  line-height: 2rem;
  background: #fff;
}

.t_mightLike_main {
  overflow: auto;
}

.t_mightLike_main ol {
  margin-top: 0.25rem;
  white-space: nowrap;
}

.t_mightLike_main ol li {
  display: inline-block;
  width: 6rem;
  background: #fff;
  white-space: normal;
}

.t_mightLike_main ol li + li {
  margin-left: 0.25rem;
}

.t_mightLike_main ol li a img {
  width: 6rem;
  height: 6rem;
  display: block;
}

.t_mightLike_main ol li a footer {
  padding: 0.175rem 0.35rem;
}

.t_mightLike_main ol li a footer em,
.t_mightLike_main ol li a footer h3 {
  font-size: 0.6rem;
  line-height: 0.8rem;
}

.t_mightLike_main ol li a footer h3 {
  height: 1.6rem;
  color: #828282;
  overflow: hidden;
}

.t_mightLike_main ol li a footer em {
  color: #ec5196;
}

.t_choice {
  display: block;
  position: relative;
  margin-top: 0.25rem;
  border: 1px solid #e4e4e4;
  border-width: 1px 0;
  padding: 0 2rem 0 0.5rem;
  line-height: 2.2rem;
  background: #fff;
}

.t_choice .e_stretch {
  position: absolute;
  right: 0.5rem;
  top: 50%;
  margin-top: -1.1rem;
  -webkit-transition-property: transform;
  -webkit-transition-duration: 0.2s;
  -webkit-transition-timing-function: linear;
}

.t_choice .e_stretch.S_rotate {
  -webkit-transform: rotate(90deg);
}

/* .t_choice .e_stretch:after {
  content: "\E60B";
  font-size: 1rem;
  color: #9f9f9f;
  vertical-align: -2px;
} */

.t_goodList {
  margin-top: 0.25rem;
  border: 1px solid #e4e4e4;
  border-width: 1px 0;
  background: #fff;
}

.t_goodList > header {
  height: 1.95rem;
  line-height: 1.95rem;
  border-bottom: 1px solid #e4e4e4;
  padding: 0 0.5rem;
  overflow: hidden;
}

.t_goodList .t_orderList {
  border-width: 0;
}

.t_goodList .t_orderList + .t_orderList {
  border-top-width: 1px;
}

.t_goodList .t_orderList .c_goods ol li {
  padding-bottom: 0;
}

.t_commentList {
  padding: 0 0.5rem;
  background: #fff;
}

.t_commentList li {
  padding: 0.5rem 0 0.5rem 2.55rem;
}

.t_commentList li + li {
  border-top: 1px solid #e4e4e4;
}

.t_commentList li img {
  width: 2rem;
  height: 2rem;
  float: left;
  margin-left: -2.55rem;
  border-radius: 50%;
}

.t_commentList li header {
  overflow: hidden;
}

.t_commentList li header em {
  float: left;
  max-width: 40%;
  font-size: 0.65rem;
}

.t_commentList li header .t_star {
  float: right;
}

.t_commentList li p,
.t_commentList li time {
  margin-top: 0.25rem;
  color: #828282;
}

.t_commentList li p {
  font-size: 0.65rem;
}

.t_commentList li time {
  float: right;
  margin-bottom: -0.25rem;
  font-size: 0.55rem;
  line-height: 0.85rem;
}

.t_null {
  font-size: 0.8rem;
  line-height: 5rem;
  color: #9f9f9f;
  background: #fff;
  text-align: center;
}

.t_choiceList {
  padding: 0 0.5rem;
}

.t_choiceList li {
  height: 2.25rem;
  line-height: 2.25rem;
  overflow: hidden;
}

.t_choiceList li + li {
  border-top: 1px solid #e4e4e4;
}

.t_navTab {
  text-align: center;
}

.t_navTab.s_list {
  border-bottom: 1px solid #e4e4e4;
}

.t_navTab.s_list a {
  margin: 0 0 -1px;
  width: 3.55rem;
  font-size: 0.75rem;
  color: #9f9f9f;
}

.t_navTab.s_list a i {
  display: inline-block;
  height: 0.7rem;
  font-size: 0.7rem;
  line-height: normal;
  margin-left: 0.05rem;
}

.t_navTab.s_list a i.S_desc {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}

.t_navTab.s_video {
  background: #fff;
  text-align: left;
  white-space: nowrap;
  overflow: auto;
}

.t_navTab.s_video a {
  width: auto;
  height: 1.6rem;
  line-height: 1.6rem;
  margin: 0 0.625rem;
  font-size: 0.75rem;
}

.t_navTab a {
  height: 2rem;
  line-height: 2rem;
  margin: 0 0.375rem;
  display: inline-block;
  border-top: 0.1rem solid transparent;
  border-bottom: 0.1rem solid transparent;
  width: 2.25rem;
  font-size: 0.9rem;
  color: #828282;
}

.t_navTab a.S_active {
  border-bottom-color: #ec5196;
  color: #ec5196;
}

.t_navTab.s_exchange a {
  margin: 0 0.5rem;
  width: auto;
  font-size: 0.8rem;
}

.t_focusCarousel {
  position: relative;
  height: 7.3rem;
  overflow: hidden;
}

.t_focusCarousel .c_imgs {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  white-space: nowrap;
  -webkit-transition-property: left;
  -webkit-transition-duration: 0.3s;
  -webkit-transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.t_focusCarousel .c_imgs a {
  display: inline-block;
  height: 100%;
}

.t_focusCarousel .c_imgs a img {
  width: 16rem;
  height: 100%;
  display: block;
}

.t_focusCarousel .g_page {
  position: absolute;
  left: 0;
  bottom: 0.5rem;
  width: 100%;
  text-align: center;
}

.t_focusCarousel .g_page em {
  width: 0.4rem;
  height: 0.4rem;
  opacity: 0.3;
  filter: alpha(opacity=30);
  display: inline-block;
  border-radius: 50%;
  background: #000;
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 0.3s;
}

.t_focusCarousel .g_page em.S_active {
  opacity: 0.6;
  filter: alpha(opacity=60);
}

.t_focusCarousel .g_page em + em {
  margin-left: 0.4rem;
}

.t_videoList {
  margin-top: 0.25rem;
  padding: 0.5rem;
  background: #fff;
  overflow: hidden;
}

.t_videoList h2 {
  padding-bottom: 0.5rem;
  font-size: 0.8rem;
  line-height: 1.25rem;
  color: #ec5196;
}

.t_videoList .e_img {
  position: relative;
  width: 100%;
  height: 4.5rem;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: 50%;
}

.t_videoList .e_img img {
  width: 100%;
  height: 4.5rem;
  display: block;
}

.t_videoList .e_img i {
  content: "";
  position: absolute;
  right: 0.25rem;
  bottom: 0.15rem;
  font-size: 0.85rem;
  line-height: normal;
  color: #fff;
}

.t_videoList h3,
.t_videoList p {
  height: 1.6rem;
  font-size: 0.55rem;
  line-height: 0.8rem;
  overflow: hidden;
}

.t_videoList .c_content {
  margin: -0.5rem 0 0;
}

.t_videoList .c_content a {
  float: left;
  margin: 0.5rem 0 0;
  width: 7.25rem;
}

.t_videoList .c_content a:nth-child(odd) {
  float: left;
}

.t_videoList .c_content a:nth-child(2n) {
  float: right;
}

.t_videoList .c_content a h3 {
  margin-top: 0.25rem;
}

.t_searchHistory nav {
  margin-top: 0.5rem;
  padding: 0 0.5rem;
}

.t_searchHistory nav span {
  display: block;
  border-bottom: 1px solid #e4e4e4;
  padding-right: 1.5rem;
  line-height: 1.5rem;
  color: #828282;
}

.t_searchHistory nav span i {
  float: right;
  margin-right: -1.5rem;
  width: 1.5rem;
  text-align: center;
  cursor: pointer;
}

.t_searchHistory nav span i b {
  display: inline-block;
  height: 0.85rem;
  font-size: 0.85rem;
  line-height: normal;
}

.t_searchHistory nav span a {
  display: block;
  color: #828282;
}

.t_searchHistory nav span a:hover {
  background: #f5f5f5;
}

.t_searchHistory .e_null {
  display: block;
  padding: 1.25rem 0 0.5rem;
  color: #bdbdbd;
  text-align: center;
}

.t_searchHistory .e_clear {
  display: block;
  margin: 1rem auto 0;
  width: 8rem;
  height: 1.45rem;
  line-height: 1.45rem;
  text-align: center;
  border: 1px solid #999;
  border-radius: 4px;
  font-size: 0.65rem;
  color: #999;
  background: #fff;
}

.loadmore {
  width: 100%;
  height: 1.7rem;
  margin-top: 1.5rem;
  border: 0;
  border-radius: 0.15rem;
  background-color: #ec5196;
  font-size: 0.65rem;
  color: #fff;
}

.main.s_index {
  height: 100%;
  padding-bottom: 2.75rem;
}

.main.s_index.S_pb0 {
  padding-bottom: 0;
}

.main.s_index .center {
  height: 100%;
  overflow: auto;
}

.main.s_index .center .c_nav {
  border-bottom: 1px solid #e4e4e4;
  padding: 0.5rem 0 0.25rem;
  background: #fff;
}

.main.s_index .center .c_nav a {
  float: left;
  width: 20%;
  text-align: center;
}

.main.s_index .center .c_nav a + a {
  position: relative;
}

.main.s_index .center .c_nav a + a:before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -0.95rem;
  border-left: 1px solid #f0f0f0;
  height: 1.9rem;
}

.main.s_index .center .c_nav a:first-child i {
  padding: 0.275rem;
  background: #ffc107;
}

.main.s_index .center .c_nav a:nth-child(2) i {
  padding: 0.375rem;
  width: 1rem;
  height: 1rem;
  font-size: 1rem;
  background: #91a7ff;
}

.main.s_index .center .c_nav a:nth-child(3) i {
  padding: 0.25rem 0.275rem 0.3rem;
  background: #ef5388;
}

.main.s_index .center .c_nav a:nth-child(4) i {
  padding: 0.15rem 0.25rem 0.4rem;
  background: #a36feb;
}

.main.s_index .center .c_nav a:nth-child(5) i {
  padding: 0.2rem 0.275rem 0.35rem;
  background: #ff8861;
}

.main.s_index .center .c_nav a i {
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

.main.s_index .center .c_nav a b {
  font-size: 0.6rem;
  color: #828282;
}

.main.s_index .center .m_hot .t_2column,
.main.s_index .center .m_hot .t_3column {
  border: solid #e4e4e4;
  border-width: 1px 0;
}

.main.s_index .center .m_hot .t_3column {
  margin-top: 0.5rem;
}

.main.s_index .center .m_hot .t_2column {
  margin-top: 0.25rem;
}

.main.s_index .center .section {
  margin-top: 0.5rem;
}

.main.s_index .center .section header {
  border-bottom: 1px solid #e4e4e4;
  padding: 0 0.5rem;
  height: 2rem;
  line-height: 2rem;
  background: #fff;
  overflow: hidden;
}

.main.s_index .center .section header h2 {
  float: left;
  position: relative;
  padding-left: 0.35rem;
  font-size: 0.8rem;
}

.main.s_index .center .section header h2:before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -0.4rem;
  border-left: solid #ec5196;
  border-left-width: 0.1rem;
  height: 0.8rem;
}

.main.s_index .center .section header a {
  float: right;
  font-size: 0.65rem;
  color: #9f9f9f;
}

.main.s_index .center .section header a:after {
  content: "\E61C";
  font-size: 0.75rem;
  margin-left: -0.1rem;
}

.main.s_index .center .section .t_2column a,
.main.s_index .center .section .t_3column a {
  border-bottom: 1px solid #e4e4e4;
}

.main.s_index .center .section .e_banner img {
  display: block;
  width: 100%;
  height: 4rem;
}

.main.s_index .center .m_recommend h3 {
  font-size: 0.65rem;
  line-height: 1.5rem;
  color: #828282;
  text-align: center;
}

.main.s_index .center .m_recommend .g_links {
  margin-top: -0.25rem;
}

.main.s_index .center .m_recommend .g_links a {
  margin-top: 0.25rem;
  border: 1px solid #e4e4e4;
  width: 7.85rem;
  background: #fff;
}

.main.s_index .center .m_recommend .g_links a:nth-child(odd) {
  float: left;
  border-left: 0;
}

.main.s_index .center .m_recommend .g_links a:nth-child(2n) {
  float: right;
  border-right: 0;
}

.main.s_index .center .m_recommend .g_links a img {
  width: 100%;
  display: block;
}

.main.s_index .center .m_recommend .g_links a footer {
  padding: 0.25rem;
}

.main.s_index .center .m_recommend .g_links a footer h4 {
  height: 2rem;
  font-size: 0.6rem;
  color: #828282;
  overflow: hidden;
}

.main.s_index .center .m_recommend .g_links a footer em {
  color: #ec5196;
}

.main.s_index .bottom.s_index {
  height: 2.75rem;
  line-height: normal;
  background: #333035;
}

.main.s_index .bottom.s_index i,
.main.s_index .bottom.s_index img {
  vertical-align: middle;
  cursor: pointer;
}

.main.s_index .bottom.s_index i {
  width: 0.95rem;
  height: 0.95rem;
  display: inline-block;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMTg3NkJDQTc3NjUxMUU0OUJGNzgzODczNTYyOEFCNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3NUE0REQyQzc3NjUxMUU0OUJGNzgzODczNTYyOEFCNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjExODc2QkM4Nzc2NTExRTQ5QkY3ODM4NzM1NjI4QUI1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjExODc2QkM5Nzc2NTExRTQ5QkY3ODM4NzM1NjI4QUI1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+NNpS8gAAA/ZJREFUeNrcmEtsElEUhqEUGCBgKbS8+8BFl1CVmtbSqq1JE8OGjQtduzFGkyaaGF010VUTjcaFWxfdNTEstQtLbSy4oDGmSWOhlEeBFoLDy0Kbeg8UnPIY5kGJ8WzIDGfmfnPuPefc/3Ivmi0clmZrcN/B5qWdTEDEErFBrVJZFEqFWSqVGkUikYzP5xf/LBQKnFwuh6dSKW98P+6JRKPubCYboAvKpRoxLpdr1+v1U8bzRrtC0a2mM0g8noh4t7yLwWBw6fj4eLFVYLbe3h6LyWyaRdERs5keFMXsumd9PhbbczeLIE+r1jX8s6Ojw24eNj0ymUx3hEIhn+1ihHf09fdNYiKsPxaNJVH0NmiDCQSC29aJ8bcajWaI02KTy+UGlVo1HQ6FQ0dHR98pgwHU5NWJd+eQcc7IUMKINVrNTDAQ9NeDqwHj8Xi3xq1XXnd1dZ0ZFHFqlT3KyQCCQ9P6gwzMNjxsnkVfMsRpk0HkMKFQu7sb2UOXm5X1TXSC7BsYHBjjtNlgTBj7VOIR6xSUBLIXpNPpwsHBwZnAwdjAUAMGxZOsTgHU8mfnXeey8yFdOPBfca7MQR1r5ANjA0M1mG3QOGgn7V2dfL5AwD+H4ykvHTjwA38oqlBcyXyhq5R7bxEMep9SqSBtMxgm5IxbrS9lMqmRKlwZCvzhuUsWyzMyf2h1EonEUAGDhkzl6+nAVUPBc/B8M1Opei0VMNglUF0vVOCYQhFZAMwmlcqMdBYzGRwbqJMkABZbR6nIYTK66Q2DWSdOw+E4nmUDVVzvYrGsMpXlTR6DlkKEe/Xp45IEfplClbK/s7byM4UbuTzynHgPrplA1VR+2A4zNVhTrjXXE+I9uGbaIQ4PD/+C5XK/caZQhDX1YPrGVAZ+6RZhomWzObwM5kilcC9LKGNprcnE1QlBF+6ExVGMGKgZtlCw1uokBG24MksRLBqNuVsB1SBbacGVWYpgmUwmsL8fj7QCig0cyDxgIZYLh8/ra6r33C73HBWoenD5fOFXPp/PkvmD9izLusrWGu2VML1eZyOTafJuuSWdSvlHx0ZfNIMiFkydXjdjMOhvonaDkWlOT2lbtFG9599Ag2Kg+5rpwnJ1plPNkfLikc6G+9t8Jp15U3fPD5u57W2/m9NmgzGRAF4lU0mbsVgMR8LgGqiXdkAlEom4a839tPpMo0ZXgr4Lh3dDIEZbcSzQ7CxjxfnlHmpDC5SUOCjjUDAURpG7jrHtxg0smUziCOo+ytT3tM4uEJxnZyfgEwoFWjhraCWUz+dbXfvqelwvUpROe2BaI0ghxxMJP4K7wHZqYeog+7Z+bi2gd3/4bw/u/u2jznYfDv8RYACbvKBwPkgmkQAAAABJRU5ErkJggg==);
  background-size: 0.95rem;
}

.main.s_index .bottom.s_index img {
  height: 100%;
}

.main.s_category {
  height: 100%;
  background: #fff;
}

.main.s_category .center {
  position: relative;
  padding: 0 0 0 3.525rem;
  height: 100%;
}

.main.s_category .center nav {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  border-right: 1px solid #e4e4e4;
  width: 3.525rem;
  height: 100%;
  background: #f0f0f0;
}

.main.s_category .center nav a {
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  display: block;
  border-bottom: 1px solid #e4e4e4;
  font-size: 0.7rem;
  color: #a0a0a0;
}

.main.s_category .center nav a.S_active {
  margin-right: -1px;
  color: #ec5196;
  background: #fff;
}

.main.s_category .center ul {
  height: 100%;
}

.main.s_category .center ul li {
  display: none;
  padding: 0 0.5rem;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.main.s_category .center ul li.S_active {
  display: block;
}

.main.s_category .center ul li a {
  display: block;
  border-top: 1px solid #e4e4e4;
  padding: 0.5rem 0 0.5rem 3rem;
}

.main.s_category .center ul li a:first-child {
  border-top: 0;
}

.main.s_category .center ul li a img {
  width: 2.45rem;
  height: 2.45rem;
  float: left;
  margin-left: -3rem;
  border: 1px solid #e4e4e4;
}

.main.s_category .center ul li a h3 {
  padding-top: 0.3rem;
  font-size: 0.7rem;
}

.main.s_category .center ul li a h4 {
  margin-top: 0.2rem;
  font-size: 0.6rem;
  color: #9f9f9f;
}

.main.s_search .center {
  padding: 1.25rem 0.5rem;
}

.main.s_search .center .c_searchHot {
  margin-top: 1.25rem;
}

.main.s_search .center .c_searchHot nav {
  padding: 0 0.5rem;
}

.main.s_search .center .c_searchHot nav a {
  height: 1.25rem;
  line-height: 1.25rem;
  float: left;
  margin: 0.5rem 0.5rem 0 0;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  padding: 0 0.5rem;
  font-size: 0.6rem;
  color: #9f9f9f;
  background: #fff;
  white-space: nowrap;
}

.main.s_list {
  height: 100%;
  background: #fff;
}

.main.s_list .center .c_list li {
  padding: 0 0.75rem;
}

.main.s_list .center .c_list li .t_goodInfo {
  display: block;
  border-bottom: 1px solid #e4e4e4;
  padding: 0.75rem 0 0.75rem 5.75rem;
}

.main.s_list .center .c_list li .t_goodInfo img {
  margin-left: -5.75rem;
}

.f_cover.s_list {
  z-index: 1;
}

.f_sort.s_list {
  box-sizing: border-box;
  position: fixed;
  z-index: 2;
  right: 0;
  top: 0;
  padding-bottom: 2.525rem;
  width: 13.75rem;
  height: 100%;
  background: #fff;
}

.f_sort.s_list .u_sortBox {
  height: 100%;
  overflow: auto;
}

.f_sort.s_list .u_sortBox .u_sortBox_item .t_choice {
  margin-top: 0;
  border-top: 0;
  line-height: 2.15rem;
  font-size: 0.85rem;
}

.f_sort.s_list .u_sortBox .u_sortBox_item .t_choice .e_dd {
  color: #ec5196;
}

.f_sort.s_list .u_sortBox .u_sortBox_item .t_choice .e_stretch {
  margin-right: -0.25rem;
}

.f_sort.s_list .u_sortBox .u_sortBox_item .t_choice .e_stretch:after {
  font-size: 0.85rem;
  color: #333;
}

.f_sort.s_list .u_sortBox .u_sortBox_item .c_dls {
  padding: 0 0.5rem 0.5rem;
}

.f_sort.s_list .u_sortBox .u_sortBox_item .c_dls dl + dl {
  margin-top: 0.25rem;
}

.f_sort.s_list .u_sortBox .u_sortBox_item .c_dls dl dt {
  line-height: 2rem;
}

.f_sort.s_list .u_sortBox .u_sortBox_item .c_dls dl dd {
  margin-top: -0.5rem;
  padding-left: 0.5rem;
}

.f_sort.s_list .u_sortBox .u_sortBox_item .c_dls dl dd .t_a {
  float: left;
  margin: 0.5rem 0.5rem 0 0;
  width: 3.4rem;
}

.f_sort.s_list .u_sortBox .u_sortBox_item .c_dls dl dd .t_a.S_active {
  border-color: #ec5196;
  color: #ec5196;
}

.f_sort.s_list .u_sortBox .u_sortBox_item ol li {
  padding: 0 1rem;
  line-height: 2.1rem;
}

.f_sort.s_list .u_sortBox .u_sortBox_item ol li + li {
  border-top: 1px solid #e4e4e4;
}

.f_sort.s_list .u_sortBox .u_sortBox_item ol li .t_checkbox b {
  color: #9f9f9f;
}

.f_sort.s_list footer {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
  border-top: 1px solid #e4e4e4;
  padding: 0.5rem;
  width: 100%;
  background: #fff;
  text-align: right;
}

.f_sort.s_list footer a {
  margin-left: 0.5rem;
}

.main.s_cart .center .g_empty {
  padding: 0.75rem 0 1.5rem;
  color: #c4c4c4;
  text-align: center;
}

.main.s_cart .center .g_empty i {
  display: inline-block;
  height: 4.75rem;
  font-size: 4.75rem;
  line-height: normal;
}

.main.s_cart .center .g_empty b {
  display: block;
  font-size: 0.75rem;
}

.main.s_cart .center .g_empty a {
  width: 5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  display: inline-block;
  margin-top: 0.5rem;
  color: #fff;
  background: #ec5196;
}

.main.s_cart .center .t_goodList:last-child {
  margin-bottom: 2.55rem;
}

.main.s_cart .center .t_orderList .c_goods ol li .g_right {
  float: right;
  margin-right: -3.5rem;
  width: 3.5rem;
  text-align: center;
}

.main.s_cart .center .t_orderList .c_goods ol li .g_right em {
  display: block;
  margin-bottom: 0.25rem;
  padding: 0.5rem 0;
  font-size: 0.7rem;
  line-height: 1rem;
  color: #ec5196;
}

.main.s_cart .center .t_orderList .c_goods ol li .g_right a {
  display: inline-block;
  height: 1.1rem;
  font-size: 1.1rem;
  line-height: normal;
  color: #bcbcbc;
}

.c_goods_items > span {
  display: block;
  overflow: hidden;
  font-size: 0.35rem;
  color: #7f7f7f;
}

.c_goods_items > span > em {
  color: #f33;
  padding: 0 3px;
}

.main.s_info,
.main.s_info .center {
  height: 100%;
}

.main.s_info .center .u_comments,
.main.s_info .center .u_details,
.main.s_info .center .u_imgText {
  display: none;
  padding-bottom: 2.225rem;
}

.main.s_info .center .u_comments.S_active,
.main.s_info .center .u_details.S_active,
.main.s_info .center .u_imgText.S_active {
  display: block;
}

.main.s_info .center .u_details .m_info {
  border-bottom: 1px solid #e4e4e4;
  background: #fff;
}

.main.s_info .center .u_details .m_info .c_carousel img {
  display: block;
  width: 100%;
}

.main.s_info .center .u_details .m_info h2 {
  margin-top: 0.25rem;
  padding: 0.5rem;
  font-size: 0.8rem;
  line-height: 1.25rem;
}

.main.s_info .center .u_details .m_info .l_price {
  padding: 0 0.5rem 0.375rem;
}

.main.s_info .center .u_details .m_info .l_price em {
  float: left;
  font-size: 0.85rem;
}

.main.s_info .center .u_details .m_info .l_price em.e_price {
  color: #ec5196;
}

.main.s_info .center .u_details .m_info .l_price em.e_point {
  color: #217d00;
}

.main.s_info .center .u_details .m_info .l_price em.e_point small {
  font-size: 0.6rem;
}

.main.s_info .center .u_details .m_info .l_price span {
  float: right;
  color: #9f9f9f;
}

.main.s_info .center .u_details .m_info .l_price a {
  float: right;
}

.main.s_info .center .u_details .m_info .l_price a i {
  display: inline-block;
  height: 1rem;
  font-size: 1rem;
  line-height: normal;
}

.main.s_info .center .u_details .l_filter em {
  margin-right: 0.5rem;
  color: #ec5196;
}

.main.s_info .center .u_details .c_about {
  margin-top: 0.25rem;
  border: 1px solid #e4e4e4;
  border-width: 1px 0;
  padding: 0 0.5rem;
  background: #fff;
}

.main.s_info .center .u_details .c_about section {
  line-height: 2rem;
}

.main.s_info .center .u_details .c_about section:first-child span b,
.main.s_info .center .u_details .c_about section:first-child span i {
  vertical-align: middle;
}

.main.s_info .center .u_details .c_about section:first-child span i {
  width: 0.65rem;
  height: 0.65rem;
  line-height: 0.65rem;
  text-align: center;
  display: inline-block;
  border-radius: 50%;
  padding: 0.125rem;
  font-size: 0.65rem;
  color: #fff;
  background: #ec5196;
}

.main.s_info .center .u_details .c_about section:first-child span i:before {
  content: "\E606";
  vertical-align: 1px;
}

.main.s_info .center .u_details .c_about section span {
  margin-right: 1rem;
}

.main.s_info .center .u_details .m_newestComment .t_choice .e_stretch {
  color: #9f9f9f;
}

.main.s_info .center .u_details .t_mightLike {
  margin-top: 0.5rem;
  border-top: 1px solid #e4e4e4;
}

.main.s_info .center .u_imgText .c_img table {
  width: 100%;
  height: auto;
}

.main.s_info .center .u_imgText .c_img img {
  display: block;
  max-width: 100%;
  height: auto;
}

.main.s_info .center .u_imgText .c_text {
  padding: 0.5rem;
}

.main.s_info .center .u_imgText .c_text > div {
  width: 15rem !important;
}

.main.s_info .center .u_imgText .c_text table {
  width: 100%;
}

.main.s_info .center .u_imgText .c_text img {
  width: 100% !important;
  height: auto !important;
}

.main.s_info .center .f_goTop {
  bottom: 3rem;
}

.main.s_info .bottom {
  border-width: 1px 0 0;
  line-height: 2.2rem;
  background: #fff;
}

.main.s_info .bottom a {
  float: left;
  width: 33.33%;
  color: #fff;
}

.main.s_info .bottom a:first-child {
  color: #828282;
}

.main.s_info .bottom a:nth-child(2) {
  background: #eda948;
}

.main.s_info .bottom a:nth-child(2).S_gray {
  background: #999;
}

.main.s_info .bottom a:nth-child(3) {
  background: #ee2a7b;
}

.main.s_info .bottom a:nth-child(3).S_gray {
  background: #888;
}

.main.s_info .bottom a.S_favorite {
  color: #ec5196;
}

.main.s_info .bottom a i {
  display: inline-block;
  height: 1rem;
  font-size: 1rem;
  line-height: normal;
}

.f_cover.s_info {
  z-index: 1;
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
  background: #fff;
}

.f_fixed.s_info .u_optionBox {
  box-sizing: border-box;
  padding: 0.75rem;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.f_fixed.s_info .u_optionBox .u_optionBox_item + .u_optionBox_item {
  margin-top: 0.75rem;
  border-top: 1px solid #e4e4e4;
  padding-top: 0.75rem;
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .g_goodsInfo {
  padding-left: 3.5rem;
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .g_goodsInfo img {
  width: 2.95rem;
  height: 2.95rem;
  border: 1px solid #e4e4e4;
  float: left;
  margin-left: -3.5rem;
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .g_goodsInfo h3 {
  height: 2rem;
  overflow: hidden;
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .g_goodsInfo em {
  color: #ec5196;
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .c_dl {
  margin-top: 0.75rem;
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .c_dl dd {
  padding: 0 0 0 0.75rem;
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .c_dl dd .e_option {
  float: left;
  margin: 0.5rem 0.5rem 0 0;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  height: 1.25rem;
  line-height: 1.25rem;
  color: #828282;
  white-space: nowrap;
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .c_dl dd .e_option.S_checked {
  border-color: #ec5196;
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .c_dl dd .e_option.S_disabled {
  border-style: dashed;
  color: #ccc;
}

.f_fixed.s_info
  .u_optionBox
  .u_optionBox_item
  .c_dl
  dd
  .e_option.S_disabled
  img {
  opacity: 0.5;
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .c_dl dd .e_option em {
  padding: 0 0.75rem;
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .c_dl dd .e_option b,
.f_fixed.s_info .u_optionBox .u_optionBox_item .c_dl dd .e_option img {
  float: left;
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .c_dl dd .e_option img {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 3px 0 0 3px;
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .c_dl dd .e_option b {
  padding: 0 0.5rem;
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .l_stock {
  margin-top: 0.9rem;
}

.f_fixed.s_info .u_optionBox .u_optionBox_item .l_stock em {
  color: #ec5196;
}

.f_fixed.s_info .u_optionBox .c_buyNum {
  margin-top: 0.75rem;
  border-top: 1px solid #e4e4e4;
  padding-top: 0.75rem;
}

.f_fixed.s_info .u_optionBox .c_buyNum .t_addSub {
  margin-left: 0.5rem;
  vertical-align: middle;
}

.f_fixed.s_info .g_buy {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
  border-top: 1px solid #e4e4e4;
  padding: 0.5rem;
  width: 100%;
  background: #fff;
  text-align: center;
}

.f_fixed.s_info .g_buy a {
  width: 4.5rem;
  height: 1.55rem;
  line-height: 1.55rem;
  text-align: center;
  display: inline-block;
  border-radius: 4px;
  color: #fff;
}

.f_fixed.s_info .g_buy a:first-child {
  background: #eda948;
}

.f_fixed.s_info .g_buy a + a {
  margin-left: 0.5rem;
  background: #ec5196;
}

.f_fixed.s_info .g_buy a.S_gray {
  background: #999;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px);
  }

  25% {
    transform: translate(-1px, -1px);
  }

  50% {
    transform: translate(0);
  }

  75% {
    transform: translate(1px, -1px);
  }

  to {
    transform: translate(-1px, 1px);
  }
}

.f_giftBox.s_info {
  visibility: hidden;
  opacity: 0;
  position: fixed;
  right: 0.75rem;
  bottom: 2.5rem;
  cursor: pointer;
  animation: shake 0.3s infinite;
  transition-property: opacity, visibility;
  transition-duration: 0.5s;
}

.f_giftBox.s_info.S_show {
  visibility: visible;
  opacity: 1;
}

.f_giftBox.s_info img {
  width: 5.8rem;
  height: 5.525rem;
  display: block;
}

.f_giftPop.s_info {
  width: 100%;
  height: 100%;
  visibility: hidden;
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  transition-property: visibility;
  transition-duration: 0.5s;
}

.f_giftPop.s_info.S_show {
  visibility: visible;
}

.f_giftPop.s_info.S_show .cover {
  opacity: 0.65;
}

.f_giftPop.s_info.S_show img {
  opacity: 1;
  transform: scale(1);
}

.f_giftPop.s_info .cover {
  width: 100%;
  height: 100%;
  background: #000;
  filter: alpha(opacity=65);
  opacity: 0;
  transition-property: opacity;
  transition-duration: 0.5s;
}

.f_giftPop.s_info img {
  width: 14.9rem;
  height: 15.075rem;
  position: fixed;
  left: 50%;
  top: 50%;
  margin: -7.5375rem 0 0 -7.45rem;
  opacity: 0;
  cursor: pointer;
  transform: scale(0.5);
  transition-property: opacity, transform;
  transition-duration: 0.5s;
}

.c_dz_count {
  line-height: 2rem;
  height: 2rem;
  background: #fff;
  margin-top: 0.5rem;
  border-top: 1px solid #e4e4e4;
  box-sizing: border-box;
  padding: 0 0.5rem;
}

.c_dz_count .t_addSub {
  vertical-align: middle;
}

.main.s_confirm {
  padding-bottom: 2.55rem;
}

.main.s_confirm .center .t_choice .e_info {
  display: inline-block;
  height: 1rem;
  font-size: 1rem;
  line-height: normal;
  color: #ec5196;
}

.main.s_confirm .center .t_choice .e_price {
  margin-left: 0.4rem;
  font-size: 0.6rem;
}

.main.s_confirm .center .t_choice .e_price em {
  color: #ec5196;
}

.main.s_confirm .center .c_defaultInfo section {
  line-height: 2rem;
}

.main.s_confirm .center .c_defaultInfo section + section {
  border-top: 1px solid #e4e4e4;
  padding: 0.25rem 0;
  line-height: 1.25rem;
}

.main.s_confirm .center .c_defaultInfo section span:first-child {
  float: left;
}

.main.s_confirm .center .c_defaultInfo section span + span {
  float: right;
}

.main.s_confirm .center .c_defaultInfo section span i {
  display: inline-block;
  height: 1rem;
  font-size: 1rem;
  line-height: normal;
  color: #ec5196;
}

.main.s_confirm .center .c_goods {
  padding: 0 3.95rem 0.25rem 0.5rem;
}

.main.s_confirm .center .c_goods.s_exchange {
  padding: 0 3.35rem 0.25rem 4.4rem;
}

.main.s_confirm .center .c_goods.s_exchange b {
  float: left;
  margin-left: -3.9rem;
  height: 2.75rem;
  line-height: 3rem;
}

.main.s_confirm .center .c_goods img {
  width: 2.5rem;
  height: 2.5rem;
  float: left;
  margin: 0.25rem 0.25rem 0 0;
}

.main.s_confirm .center .c_pay img {
  width: 1.35rem;
  height: 1.35rem;
  margin: 0 0.4rem;
  vertical-align: middle;
}

.main.s_confirm .center .c_delivery em {
  margin-left: 0.2rem;
  font-size: 0.5rem;
  color: #ec5196;
}

.main.s_confirm .center .l_coupon {
  padding-left: 3.4rem;
}

.main.s_confirm .center .l_coupon b {
  margin-left: -2.9rem;
  float: left;
}

.main.s_confirm .center .l_coupon em {
  display: block;
  padding: 0.6rem 0;
  line-height: 1rem;
}

.main.s_confirm .center .l_remark {
  margin: 0.25rem 0;
  border: 1px solid #e4e4e4;
  border-width: 1px 0;
  padding: 0.5rem;
  background: #fff;
}

.main.s_confirm .center .l_remark textarea {
  width: 14.35rem;
  height: 2rem;
  font-size: 0.7rem;
  line-height: 1rem;
  border: 1px solid #e4e4e4;
  padding: 0.15rem 0.3rem;
  display: block;
}

.main.s_confirmDelivery {
  height: 100%;
  background: #fff;
}

.main.s_confirmExpress {
  background: #fff;
}

.main.s_confirmExpress .center ol {
  padding: 0 0.5rem;
}

.main.s_confirmExpress .center ol li {
  padding: 0.375rem 0;
}

.main.s_confirmExpress .center ol li + li {
  border-top: 1px solid #e4e4e4;
}

.main.s_confirmExpress .center ol li .e_price {
  margin-left: 0.25rem;
}

.main.s_confirmExpress .center ol li .e_price em {
  color: #ec5196;
}

.main.s_confirmExpress .center ol li p {
  padding-left: 1.35rem;
  font-size: 0.5rem;
  line-height: 0.75rem;
  color: #828282;
}

.main.s_confirmPay {
  height: 100%;
  background: #fff;
}

.main.s_confirmPay .t_checkbox img {
  width: 1.35rem;
  height: 1.35rem;
  margin: 0 0.1rem 0 0.4rem;
  vertical-align: middle;
}

.main.s_confirmExchange .center .t_goodList:last-child {
  margin-bottom: 2.55rem;
}

.main.s_confirmExchange .center .t_goodList .t_choice {
  height: 1.95rem;
  line-height: 1.95rem;
  margin-top: 0;
  border: 0;
}

.main.s_confirmExchange .center .t_goodList .t_choice .e_dd {
  font-size: 0.75rem;
}

.main.s_confirmExchange .center .t_goodList .t_choice .e_stretch {
  margin-top: -0.975rem;
}

.main.s_confirmExchange .center .t_orderList:first-child {
  border-top-width: 1px;
}

.main.s_confirmExchange .center .t_orderList .c_goods ol li h4 {
  height: auto;
  max-height: 2rem;
}

.main.s_confirmExchange .center .t_orderList .c_goods ol li .l_sizeColor {
  display: block;
  margin-top: 0.05rem;
  font-size: 0.6rem;
  color: #9f9f9f;
}

.main.s_confirmExchange .center .t_orderList .c_goods ol li .l_sizeColor b + b {
  margin-left: 0.5rem;
}

.main.s_confirmExchange .center .t_orderList .c_goods ol li .e_point,
.main.s_confirmExchange .center .t_orderList .c_goods ol li .t_addSub {
  vertical-align: middle;
}

.main.s_confirmExchange .center .t_orderList .c_goods ol li .t_addSub {
  margin-right: 0.5rem;
}

.main.s_confirmExchange .center .t_orderList .c_goods ol li .e_point {
  display: inline-block;
  margin-top: 0.25rem;
  font-size: 0.85rem;
  color: #217d00;
}

.main.s_confirmExchange .center .t_orderList .c_goods ol li .e_point small {
  font-size: 0.6rem;
}

.main.s_confirmExchange .center .t_orderList .c_goods ol li ul li {
  padding: 0.5rem 0 0;
  display: table;
  width: 100%;
  border: none;
  border-bottom: 1px solid #e4e4e4;
}

.main.s_confirmExchange .center .t_orderList .c_goods ol li ul li span {
  font-size: 0.5rem;
  display: table-cell;
  vertical-align: middle;
  color: #ec5196;
}

.main.s_confirmExchange .center .t_orderList .c_goods ol li ul li span b {
  color: #787878;
}

.main.s_confirmExchange
  .center
  .t_orderList
  .c_goods
  ol
  li
  ul
  li
  span
  b:first-child {
  margin-left: 0;
}

.main.s_confirmExchange .center .t_orderList .c_goods ol li ul li a {
  float: right;
  padding: 0.25rem;
  display: block;
}

.main.s_confirmExchange .bottom.s_submit span + span {
  margin-left: 0.5rem;
}

.main.s_confirmExchange .bottom.s_submit span em {
  font-size: 0.85rem;
  color: #007c00;
}

.main.s_confirmExchange .bottom.s_submit span em small {
  font-size: 0.6rem;
}

.f_cover.s_confirmExchange {
  z-index: 1;
}

.f_fixed.s_confirmExchange {
  box-sizing: border-box;
  position: fixed;
  z-index: 2;
  right: 0;
  top: 0;
  padding-bottom: 2.575rem;
  width: 12.5rem;
  height: 100%;
  background: #fff;
}

.f_fixed.s_confirmExchange .u_optionBox {
  box-sizing: border-box;
  padding: 0.75rem;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.f_fixed.s_confirmExchange .u_optionBox .u_optionBox_item + .u_optionBox_item {
  margin-top: 0.75rem;
  border-top: 1px solid #e4e4e4;
  padding-top: 0.75rem;
}

.f_fixed.s_confirmExchange .u_optionBox .u_optionBox_item .g_goodsInfo {
  padding-left: 3.5rem;
}

.f_fixed.s_confirmExchange .u_optionBox .u_optionBox_item .g_goodsInfo img {
  width: 2.95rem;
  height: 2.95rem;
  border: 1px solid #e4e4e4;
  float: left;
  margin-left: -3.5rem;
}

.f_fixed.s_confirmExchange .u_optionBox .u_optionBox_item .g_goodsInfo h3 {
  height: 2rem;
  overflow: hidden;
}

.f_fixed.s_confirmExchange .u_optionBox .u_optionBox_item .g_goodsInfo em {
  font-size: 0.85rem;
  color: #217d00;
}

.f_fixed.s_confirmExchange
  .u_optionBox
  .u_optionBox_item
  .g_goodsInfo
  em
  small {
  font-size: 0.6rem;
}

.f_fixed.s_confirmExchange .u_optionBox .u_optionBox_item .c_dl {
  margin-top: 0.75rem;
}

.f_fixed.s_confirmExchange .u_optionBox .u_optionBox_item .c_dl dd {
  padding: 0 0 0 0.75rem;
}

.f_fixed.s_confirmExchange .u_optionBox .u_optionBox_item .c_dl dd .e_option {
  float: left;
  margin: 0.5rem 0.5rem 0 0;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  height: 1.25rem;
  line-height: 1.25rem;
  color: #828282;
  white-space: nowrap;
}

.f_fixed.s_confirmExchange
  .u_optionBox
  .u_optionBox_item
  .c_dl
  dd
  .e_option.S_checked {
  border-color: #ec5196;
}

.f_fixed.s_confirmExchange
  .u_optionBox
  .u_optionBox_item
  .c_dl
  dd
  .e_option.S_disabled {
  border-style: dashed;
  color: #ccc;
}

.f_fixed.s_confirmExchange
  .u_optionBox
  .u_optionBox_item
  .c_dl
  dd
  .e_option.S_disabled
  img {
  opacity: 0.5;
}

.f_fixed.s_confirmExchange
  .u_optionBox
  .u_optionBox_item
  .c_dl
  dd
  .e_option
  em {
  padding: 0 0.75rem;
}

.f_fixed.s_confirmExchange .u_optionBox .u_optionBox_item .c_dl dd .e_option b,
.f_fixed.s_confirmExchange
  .u_optionBox
  .u_optionBox_item
  .c_dl
  dd
  .e_option
  img {
  float: left;
}

.f_fixed.s_confirmExchange
  .u_optionBox
  .u_optionBox_item
  .c_dl
  dd
  .e_option
  img {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 3px 0 0 3px;
}

.f_fixed.s_confirmExchange .u_optionBox .u_optionBox_item .c_dl dd .e_option b {
  padding: 0 0.5rem;
}

.f_fixed.s_confirmExchange .u_optionBox .c_buyNum {
  margin-top: 0.75rem;
  border-top: 1px solid #e4e4e4;
  padding-top: 0.75rem;
}

.f_fixed.s_confirmExchange .u_optionBox .c_buyNum .t_addSub {
  margin-left: 0.5rem;
  vertical-align: middle;
}

.f_fixed.s_confirmExchange .g_buy {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
  border-top: 1px solid #e4e4e4;
  padding: 0.5rem;
  width: 100%;
  background: #fff;
  text-align: center;
}

.f_fixed.s_confirmExchange .g_buy a {
  width: 4.5rem;
  height: 1.55rem;
  line-height: 1.55rem;
  text-align: center;
  display: inline-block;
  border-radius: 4px;
  color: #fff;
  background: #ec5196;
}

.f_fixed.s_confirmExchange .g_buy a.S_gray {
  background: #999;
}

.main.s_userIndex .center .c_orderState {
  background-image: -webkit-linear-gradient(225deg, #e974aa, #aa79b5);
}

.main.s_userIndex .center .c_orderState .e_head {
  height: 6.55rem;
  text-align: center;
}

.main.s_userIndex .center .c_orderState .e_head i {
  width: 3.4rem;
  height: 3.4rem;
  display: inline-block;
  margin-top: 1rem;
  border: solid #ec86b9;
  border-width: 0.05rem;
  border-radius: 50%;
  padding: 0.125rem;
}

.main.s_userIndex .center .c_orderState .e_head i img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
}

.main.s_userIndex .center .c_orderState .e_head b {
  font-size: 0.6rem;
  color: #fff;
}

.main.s_userIndex .center .c_orderState nav {
  background: rgba(96, 0, 87, 0.2);
}

.main.s_userIndex .center .c_orderState nav a {
  display: table-cell;
  width: 3.2rem;
  height: 2.5rem;
  line-height: 0.8rem;
  color: #fff;
  text-align: center;
  vertical-align: middle;
}

.main.s_userIndex .center .c_orderState nav a i {
  font-size: 0.85rem;
}

.main.s_userIndex .center .c_orderState nav a b {
  font-size: 0.6rem;
}

.main.s_userIndex .center .c_links {
  border: 1px solid #e4e4e4;
  border-width: 1px 0;
  padding: 0 0.6rem 0 0.75rem;
  background: #fff;
}

.main.s_userIndex .center .c_links.s_1 {
  margin-top: 0.5rem;
}

.main.s_userIndex .center .c_links.s_2 {
  margin-top: 0.25rem;
}

.main.s_userIndex .center .c_links.s_3 {
  margin-top: 2.25rem;
}

.main.s_userIndex .center .c_links a {
  height: 2.2rem;
  line-height: 2.2rem;
  display: block;
  color: #838383;
  overflow: hidden;
}

.main.s_userIndex .center .c_links a + a {
  border-top: 1px solid #e4e4e4;
}

.main.s_userIndex .center .c_links a .e_gt,
.main.s_userIndex .center .c_links a .g_num {
  float: right;
}

.main.s_userIndex .center .c_links a .g_num b,
.main.s_userIndex .center .c_links a .g_text b {
  font-size: 0.7rem;
}

.main.s_userIndex .center .c_links a .g_text {
  float: left;
}

.main.s_userIndex .center .c_links a .g_text i {
  font-size: 0.85rem;
}

.main.s_userIndex .center .c_links a .g_num {
  color: #ec5196;
}

.main.s_userIndex .center .c_links a .g_num i {
  display: inline-block;
  height: 0.75rem;
  font-size: 0.75rem;
  line-height: normal;
  margin-left: 0.2rem;
}

.main.s_userIndex .center .c_links a .e_gt:before {
  content: "\E60B";
  font-size: 0.65rem;
  vertical-align: middle;
}

.main.s_userIndex .center .c_links a .e_tips {
  float: right;
  color: #ec5196;
}

.main.s_userIndex .center .e_logout {
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  display: block;
  margin: 0.75rem 0.5rem;
  font-size: 0.85rem;
  color: #fff;
  background: #ec5196;
}

.center.s_login .t_entryForm .c_pwdAbout .t_checkbox {
  float: left;
}

.center.s_login .t_entryForm .c_pwdAbout .e_forget {
  float: right;
  font-size: 0.75rem;
  color: #51b0ec;
}

.third-part-login {
  text-align: center;
}

.third-part-login h3 {
  font-size: 0.75rem;
}

.third-part-login .third-part-login-content {
  padding-top: 0.75rem;
}

.third-part-login .third-part-login-content i {
  display: block;
}

.third-part-login .third-part-login-content .l-wechat {
  display: inline-block;
  color: #0b650b;
  font-size: 1.25rem;
  box-sizing: border-box;
  padding: 0.25rem;
}

.main.s_register .center .t_entryForm .t_inputText + .t_inputText {
  margin-top: 0.5rem;
}

.main.s_register .center .t_entryForm .c_pwdAbout a {
  color: #ec5196;
  vertical-align: middle;
}

.main.s_register .imgCode .blocker {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.main.s_register .imgCode .con {
  position: absolute;
  left: 5%;
  top: 20%;
  width: 90%;
  height: auto;
  background-color: #fff;
  border: 1px solid #eda948;
  box-shadow: 0 0 10px #fff;
  box-sizing: border-box;
  padding: 10px;
}

.main.s_register .imgCode .con h2 {
  font-size: 1rem;
  line-height: 1.5;
  display: inline-block;
}

.main.s_register .imgCode .con .row {
  padding: 0.5rem 0;
  line-height: 0;
}

.main.s_register .imgCode .con .row img {
  width: 6rem;
  height: 2rem;
  display: inline-block;
  left: auto;
  margin: 0 auto;
}

.main.s_register .imgCode .con .row .changeLink {
  padding: 0 1rem;
  color: #51b0ec;
  height: 2rem;
  line-height: 2rem;
  display: inline-block;
  vertical-align: top;
}

.main.s_register .imgCode .con .row input {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  border: 1px solid #eee;
  border-radius: 2px;
  text-align: center;
}

.main.s_register .imgCode .con .row .btns {
  width: 50%;
  text-align: center;
  height: 2rem;
  line-height: 2rem;
  display: inline-block;
  box-sizing: border-box;
  color: #fff;
}

.main.s_register .imgCode .con .row .btns.btn_cancel {
  background-color: #9f9f9f;
}

.main.s_register .imgCode .con .row .btns.btn_sure {
  background-color: #eda948;
}

.main.s_forgot .center .t_entryForm .t_inputText + .t_inputText {
  margin-top: 0.5rem;
}

.main.s_forgot .center .t_entryForm .c_pwdAbout a {
  color: #ec5196;
  vertical-align: middle;
}

.main.s_forgot .imgCode .blocker {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.main.s_forgot .imgCode .con {
  position: absolute;
  left: 5%;
  top: 20%;
  width: 90%;
  height: auto;
  background-color: #fff;
  border: 1px solid #eda948;
  box-shadow: 0 0 10px #fff;
  box-sizing: border-box;
  padding: 10px;
}

.main.s_forgot .imgCode .con h2 {
  font-size: 1rem;
  line-height: 1.5;
  display: inline-block;
}

.main.s_forgot .imgCode .con .row {
  padding: 0.5rem 0;
  line-height: 0;
}

.main.s_forgot .imgCode .con .row img {
  width: 6rem;
  height: 2rem;
  display: inline-block;
  left: auto;
  margin: 0 auto;
}

.main.s_forgot .imgCode .con .row .changeLink {
  padding: 0 1rem;
  color: #51b0ec;
  height: 2rem;
  line-height: 2rem;
  display: inline-block;
  vertical-align: top;
}

.main.s_forgot .imgCode .con .row input {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  border: 1px solid #eee;
  border-radius: 2px;
  text-align: center;
}

.main.s_forgot .imgCode .con .row .btns {
  width: 50%;
  text-align: center;
  height: 2rem;
  line-height: 2rem;
  display: inline-block;
  box-sizing: border-box;
  color: #fff;
}

.main.s_forgot .imgCode .con .row .btns.btn_cancel {
  background-color: #9f9f9f;
}

.main.s_forgot .imgCode .con .row .btns.btn_sure {
  background-color: #eda948;
}

.main.s_addressList {
  height: 100%;
}

.main.s_addressList .center .t_null {
  margin-top: 0.5rem;
}

.main.s_addressList .center ol li {
  margin-top: 0.5rem;
  padding: 0.325rem 0.5rem 0;
  background: #fff;
}

.main.s_addressList .center ol li.S_check header {
  padding-left: 1.55rem;
}

.main.s_addressList .center ol li.S_check header .t_checkbox {
  display: block;
}

.main.s_addressList .center ol li.S_check footer .t_checkbox {
  display: none;
}

.main.s_addressList .center ol li header .t_checkbox {
  display: none;
  margin-left: -1.55rem;
  float: left;
}

.main.s_addressList .center ol li header h2,
.main.s_addressList .center ol li header p {
  font-size: 0.7rem;
  line-height: 1rem;
}

.main.s_addressList .center ol li header p {
  margin-top: 0.15rem;
  color: #9f9f9f;
}

.main.s_addressList .center ol li footer {
  height: 1.2rem;
  line-height: 1.2rem;
  margin: 0.275rem -0.5rem 0;
  border-top: 1px dotted #e4e4e4;
  padding: 0.35rem 0.5rem;
}

.main.s_addressList .center ol li footer .t_checkbox {
  float: left;
}

.main.s_addressList .center ol li footer .t_checkbox.S_checked i {
  border-color: #ec5196;
}

.main.s_addressList .center ol li footer .t_checkbox.S_checked b {
  color: #ec5196;
}

.main.s_addressList .center ol li footer .t_checkbox i {
  display: inline-block;
  height: 0.55rem;
  font-size: 0.55rem;
  line-height: normal;
  border: 1px solid #9f9f9f;
  padding: 0.125rem;
  width: 0.55rem;
  background: #fff;
}

.main.s_addressList .center ol li footer .t_checkbox b {
  font-size: 0.6rem;
  color: #9f9f9f;
}

.main.s_addressList .center ol li footer .g_btns {
  float: right;
}

.main.s_addressList .center ol li footer .g_btns a {
  width: 2.95rem;
  height: 1.15rem;
  line-height: 1.15rem;
  text-align: center;
  display: inline-block;
  margin-left: 0.4rem;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  color: #9f9f9f;
}

.main.s_addressList .center ol li footer .g_btns a i {
  display: inline-block;
  height: 0.65rem;
  font-size: 0.65rem;
  line-height: normal;
  margin-right: 0.1rem;
}

.main.s_addressList .center ol li footer .g_btns a b {
  font-size: 0.65rem;
}

.main.s_addressInfo .center {
  background: #fff;
}

.main.s_addressInfo .center form {
  padding: 0.6rem 0.5rem;
}

.main.s_addressInfo .center form table {
  width: 100%;
}

.main.s_addressInfo .center form table tbody tr td,
.main.s_addressInfo .center form table tbody tr th {
  padding: 0.125rem 0;
  font-size: 0.7rem;
}

.main.s_addressInfo .center form table tbody tr th {
  padding: 0.4rem 0.4rem 0.4rem 0;
  width: 5.1em;
  height: 1rem;
  color: #9f9f9f;
  vertical-align: top;
  text-align: right;
}

.main.s_addressInfo .center form table tbody tr td input,
.main.s_addressInfo .center form table tbody tr td select,
.main.s_addressInfo .center form table tbody tr td textarea {
  box-sizing: border-box;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  padding: 0 0.35rem;
  width: 100%;
  height: 1.55rem;
}

.main.s_addressInfo .center form table tbody tr td input,
.main.s_addressInfo .center form table tbody tr td textarea {
  background: #f3f3f3;
}

.main.s_addressInfo .center form table tbody tr td textarea {
  padding: 0.175rem 0.35rem;
  height: 3.35rem;
}

.main.s_addressInfo .center form table tbody tr td .t_checkbox {
  margin-left: 2.75rem;
}

.main.s_addressInfo .center form table tbody tr td .t_a {
  display: block;
  margin: 1rem auto 0;
  background: #fff;
}

.main.s_orderList {
  height: 100%;
}

.main.s_orderList .center .t_null {
  margin-top: 0.25rem;
}

.main.s_orderList .center .m_orderList > li {
  margin-top: 0.25rem;
  border: 1px solid #e4e4e4;
  border-width: 1px 0;
  background: #fff;
}

.main.s_orderList .center .m_orderList > li .g_listHeader {
  padding: 0 0.5rem;
  line-height: 1.95rem;
  color: #aeaeae;
  overflow: hidden;
}

.main.s_orderList .center .m_orderList > li .g_listHeader h3 {
  float: left;
  font-size: 0.7rem;
}

.main.s_orderList .center .m_orderList > li .g_listHeader span {
  float: right;
  font-size: 0.6rem;
}

.main.s_orderList .center .m_orderList > li .g_listFooter {
  padding: 0.5rem;
  text-align: right;
}

.main.s_orderInfo {
  padding-bottom: 2.525rem;
}

.main.s_orderInfo .center {
  font-size: 0.7rem;
}

.main.s_orderInfo .center .c_address,
.main.s_orderInfo .center .l_state,
.main.s_orderInfo .center .u_detail {
  margin-top: 0.25rem;
  border: 1px solid #e4e4e4;
  border-width: 1px 0;
  background: #fff;
}

.main.s_orderInfo .center .c_address,
.main.s_orderInfo .center .l_state {
  padding: 0 0.5rem;
  line-height: 1.7rem;
}

.main.s_orderInfo .center .l_state em {
  color: #ec5196;
}

.main.s_orderInfo .center .c_pay img {
  width: 1.35rem;
  height: 1.35rem;
  margin: 0 0.4rem;
  vertical-align: middle;
}

.main.s_orderInfo .center .c_address {
  color: #9f9f9f;
}

.main.s_orderInfo .center .c_address p + p {
  border-top: 1px solid #e4e4e4;
  padding-left: 3em;
}

.main.s_orderInfo .center .c_address p + p b {
  float: left;
  margin-left: -3em;
}

.main.s_orderInfo .center .c_address p + p em {
  padding: 0.35rem 0;
  display: block;
  line-height: 1.1rem;
}

.main.s_orderInfo .center .c_address p span.s_fl {
  float: left;
}

.main.s_orderInfo .center .c_address p span.s_fr {
  float: right;
}

.main.s_orderInfo .center .u_detail h3 {
  padding: 0 0.5rem;
  line-height: 1.95rem;
  color: #9f9f9f;
}

.main.s_orderInfo .center .u_detail .c_about {
  padding: 0.5rem 0.35rem;
}

.main.s_orderInfo .center .u_detail .c_about p {
  line-height: 1.1rem;
  color: #a6a6a6;
}

.main.s_orderInfo .center .u_detail .c_about p span.s_fl {
  float: left;
}

.main.s_orderInfo .center .u_detail .c_about p span.s_fr {
  float: right;
}

.main.s_logistics {
  min-height: 100%;
  background: #fff;
}

.main.s_logistics .center header {
  padding: 0.4rem 0 0.55rem 1.75rem;
}

.main.s_logistics .center header h2 {
  font-size: 0.75rem;
  line-height: 1.25rem;
}

.main.s_logistics .center header h2 em {
  color: #ec5196;
}

.main.s_logistics .center header p {
  font-size: 0.65rem;
  line-height: 1rem;
  color: #aeaeae;
}

.main.s_logistics .center ol {
  border-top: 1px solid #e4e4e4;
  padding: 1rem 0.9rem;
  color: #aeaeae;
}

.main.s_logistics .center ol li {
  position: relative;
  border-left: 2px dotted #35b862;
  padding: 0 0 0.625rem 0.85rem;
}

.main.s_logistics .center ol li:before {
  content: "";
  width: 0.45rem;
  height: 0.45rem;
  position: absolute;
  left: 0;
  top: 0;
  margin-left: -0.525rem;
  border: 0.275rem solid #b9fccd;
  border-radius: 50%;
  background: #5ee185;
}

.main.s_logistics .center ol li:first-child span {
  color: #333;
}

.main.s_logistics .center ol li:last-child {
  border-left-color: #fff;
}

.main.s_logistics .center ol li span,
.main.s_logistics .center ol li time {
  display: block;
}

.main.s_logistics .center ol li span {
  font-size: 0.7rem;
  line-height: 1rem;
}

.main.s_logistics .center ol li time {
  margin-top: 0.125rem;
  font-size: 0.6rem;
}

.main.s_rejectedSubmit {
  height: 100%;
}

.main.s_rejectedSubmit .center .m_orderList > li {
  margin-top: 0.25rem;
  border: 1px solid #e4e4e4;
  border-width: 1px 0;
  background: #fff;
}

.main.s_rejectedSubmit .center .m_orderList > li .g_listHeader {
  padding: 0 0.5rem;
  line-height: 1.95rem;
  color: #aeaeae;
  overflow: hidden;
}

.main.s_rejectedSubmit .center .m_orderList > li .g_listHeader h3 {
  float: left;
  font-size: 0.7rem;
}

.main.s_rejectedSubmit .center .m_orderList > li .g_listHeader span {
  float: right;
  font-size: 0.6rem;
}

.main.s_rejectedSubmit .center .m_orderList > li .g_listFooter {
  padding: 0.5rem;
  text-align: right;
}

.main.s_rejectedSubmit .center .m_rejectedForm .c_sections,
.main.s_rejectedSubmit .center .m_rejectedForm textarea {
  margin-top: 0.5rem;
  border: 1px solid #e4e4e4;
  border-width: 1px 0;
  background: #fff;
}

.main.s_rejectedSubmit .center .m_rejectedForm .c_sections {
  padding: 0 0.5rem;
}

.main.s_rejectedSubmit .center .m_rejectedForm .c_sections section {
  padding-left: 5em;
  font-size: 0.75rem;
  line-height: 2rem;
}

.main.s_rejectedSubmit .center .m_rejectedForm .c_sections section + section {
  border-top: 1px solid #e4e4e4;
}

.main.s_rejectedSubmit .center .m_rejectedForm .c_sections section b {
  float: left;
  margin-left: -5em;
  width: 5em;
  text-align: right;
}

.main.s_rejectedSubmit .center .m_rejectedForm .c_sections section input {
  display: block;
  border: 0;
  width: 100%;
  height: 2rem;
}

.main.s_rejectedSubmit .center .m_rejectedForm .c_sections section select {
  width: 6em;
}

.main.s_rejectedSubmit .center .m_rejectedForm textarea {
  box-sizing: border-box;
  padding: 0.35rem 0.5rem;
  width: 100%;
  height: 3.75rem;
  line-height: 1rem;
}

.main.s_rejectedSubmit .center .m_rejectedForm .t_a {
  display: block;
  margin: 0.75rem auto;
  border: 0;
  color: #fff;
  background: #ec5196;
}

.main.s_rejectedList {
  height: 100%;
}

.main.s_rejectedList .center .t_null {
  margin-top: 0.25rem;
}

.main.s_rejectedList .center .m_orderList > li {
  margin-top: 0.5rem;
  border: 1px solid #e4e4e4;
  border-width: 1px 0;
  background: #fff;
}

.main.s_rejectedList .center .m_orderList > li .g_listHeader {
  padding: 0 0.5rem;
  line-height: 1.95rem;
  color: #aeaeae;
  overflow: hidden;
}

.main.s_rejectedList .center .m_orderList > li .g_listHeader h3 {
  float: left;
  font-size: 0.7rem;
}

.main.s_rejectedList .center .m_orderList > li .g_listHeader span {
  float: right;
  font-size: 0.6rem;
}

.main.s_rejectedList .center .m_orderList > li .c_sections {
  border: 1px solid #e4e4e4;
  border-width: 1px 0;
  padding: 0 0.5rem;
}

.main.s_rejectedList .center .m_orderList > li .c_sections section {
  padding-left: 5.1em;
  line-height: 1.75rem;
}

.main.s_rejectedList .center .m_orderList > li .c_sections section + section {
  border-top: 1px solid #e4e4e4;
}

.main.s_rejectedList .center .m_orderList > li .c_sections section b {
  float: left;
  margin-left: -5.1em;
  width: 5.1em;
  text-align: right;
}

.main.s_rejectedList .center .m_orderList > li .c_sections section p {
  padding: 0.25rem;
  line-height: 1.25rem;
}

.main.s_rejectedList .center .m_orderList > li .g_listFooter {
  padding: 0.5rem;
}

.main.s_rejectedList .center .m_orderList > li .g_listFooter span {
  float: left;
  font-size: 0.6rem;
  color: #aeaeae;
}

.main.s_rejectedList .center .m_orderList > li .g_listFooter .t_a {
  float: right;
}

.main.s_assessList {
  height: 100%;
}

.main.s_assessList .center .t_null {
  margin-top: 0.25rem;
}

.main.s_assessList .center .m_orderList > li {
  margin-top: 0.25rem;
  border: 1px solid #e4e4e4;
  border-width: 1px 0;
  background: #fff;
}

.main.s_assessList .center .m_orderList > li .g_listHeader {
  padding: 0 0.5rem;
  line-height: 1.95rem;
  color: #aeaeae;
  overflow: hidden;
}

.main.s_assessList .center .m_orderList > li .g_listHeader h3 {
  float: left;
  font-size: 0.7rem;
}

.main.s_assessList .center .m_orderList > li .g_listHeader span {
  float: right;
  font-size: 0.6rem;
}

.main.s_assessList .center .m_orderList > li .g_listFooter {
  padding: 0.5rem;
  text-align: right;
}

.main.s_assessInfo {
  background: #fff;
}

.main.s_assessInfo .center .t_orderList .c_goods ol li:last-child {
  padding-bottom: 0;
}

.main.s_assessInfo .center form {
  padding: 0 0.5rem;
}

.main.s_assessInfo .center form header {
  height: 2.25rem;
  line-height: 2.25rem;
}

.main.s_assessInfo .center form textarea {
  width: 14.35rem;
  height: 3.15rem;
  font-size: 0.7rem;
  line-height: 1rem;
  border: 1px solid #e4e4e4;
  padding: 0.15rem 0.3rem;
  display: block;
}

.main.s_assessInfo .center form footer {
  padding: 0.5rem 0;
  text-align: right;
}

.main.s_favorite .center .t_null {
  margin-top: 0.25rem;
}

.main.s_favorite .center .m_favoriteList > li {
  margin-top: 0.25rem;
  background: #fff;
}

.main.s_favorite .center .m_favoriteList > li .t_orderList .g_collection {
  float: left;
  margin-left: -1.75rem;
  width: 1.75rem;
  line-height: 3.5rem;
  text-align: center;
  cursor: pointer;
}

.main.s_favorite .center .m_favoriteList > li .t_orderList .g_collection i {
  display: inline-block;
  height: 1rem;
  font-size: 1rem;
  line-height: normal;
  color: #ec5196;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.35);
}

.main.s_favorite
  .center
  .m_favoriteList
  > li
  .t_orderList
  .c_goods
  ol
  li:first-child {
  padding-bottom: 0;
}

.main.s_pointsCoupon {
  height: 100%;
}

.main.s_pointsCoupon .top .g_tab {
  width: 8rem;
  height: 1.35rem;
  line-height: 1.35rem;
  text-align: center;
  margin: 0.4rem auto 0;
  border: 1px solid #fff;
  border-radius: 4px;
}

.main.s_pointsCoupon .top .g_tab a {
  float: left;
  width: 50%;
  font-size: 0.85rem;
  color: #fff;
}

.main.s_pointsCoupon .top .g_tab a.S_active {
  color: #ec5196;
  background: #fff;
}

.main.s_pointsCoupon .center {
  height: 100%;
}

.main.s_pointsCoupon .center .u_coupon {
  padding: 0.5rem;
}

.main.s_pointsCoupon .center .u_coupon ol li {
  padding-left: 11rem;
  background: #fff;
}

.main.s_pointsCoupon .center .u_coupon ol li + li {
  margin-top: 0.5rem;
}

.main.s_pointsCoupon .center .u_coupon ol li.s_notUse {
  border: 1px solid #ec5196;
  border-radius: 4px;
  padding-left: 0;
  font-size: 1rem;
  line-height: 2.5rem;
  color: #ec5196;
  text-align: center;
  background-image: -webkit-linear-gradient(180deg, #fff, #f5f5f5);
}

.main.s_pointsCoupon .center .u_coupon ol li .g_left {
  float: left;
  margin-left: -11rem;
  border-radius: 4px;
  padding: 0 0.5rem;
  color: #fff;
  background-image: -webkit-linear-gradient(180deg, #5bd140, #49ad32);
}

.main.s_pointsCoupon .center .u_coupon ol li .g_left span {
  display: table-cell;
  height: 5rem;
  font-size: 0.6rem;
  line-height: 1rem;
  vertical-align: middle;
  text-align: center;
}

.main.s_pointsCoupon .center .u_coupon ol li .g_left span.s_1 {
  width: 5.75rem;
}

.main.s_pointsCoupon .center .u_coupon ol li .g_left span.s_1 small {
  font-size: 1rem;
}

.main.s_pointsCoupon .center .u_coupon ol li .g_left span.s_1 big {
  font-size: 2.5rem;
}

.main.s_pointsCoupon .center .u_coupon ol li .g_left span.s_2 {
  width: 4.25rem;
}

.main.s_pointsCoupon .center .u_coupon ol li .g_right {
  padding-top: 0.4rem;
  font-size: 0.6rem;
  text-align: center;
}

.main.s_pointsCoupon .center .u_coupon ol li .g_right time {
  display: block;
}

.main.s_pointsCoupon .center .u_coupon ol li .g_right .t_a {
  width: 2.4rem;
  height: 1rem;
  line-height: 1rem;
  display: none;
  margin: 0.175rem 0 0;
}

.main.s_pointsCoupon .center .u_coupon ol li .g_right .t_a.S_show {
  display: inline-block;
}

.p-third-part-connect .center .step-1 {
  text-align: center;
  padding-top: 5rem;
}

.p-third-part-connect .center .step-1 img {
  display: inline-block;
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 50%;
}

.p-third-part-connect .center .step-1 span {
  display: block;
  margin-bottom: 2.5rem;
}

.p-third-part-connect .center .step-1 a {
  display: inline-block;
  width: 80%;
  height: 2rem;
  line-height: 2rem;
  border: 1px solid #333;
  margin-top: 0.5rem;
}

.p-third-part-connect .center .step-1 a.primary {
  background: #ec5196;
  color: #fff;
  border: none;
}

.p-third-part-connect .center .step-2-1 button {
  background: #ec5196;
  color: #fff;
}

.p-third-part-connect .center .step-2-2 .t_inputText {
  margin-top: 0.5rem;
}

.p-third-part-connect .center .step-2-2 button {
  background: #ec5196;
  color: #fff;
}

.p-third-part-connect .center .step-2-2 .imgCode .blocker {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.p-third-part-connect .center .step-2-2 .imgCode .con {
  position: absolute;
  left: 5%;
  top: 20%;
  width: 90%;
  height: auto;
  background-color: #fff;
  border: 1px solid #eda948;
  box-shadow: 0 0 10px #fff;
  box-sizing: border-box;
  padding: 10px;
}

.p-third-part-connect .center .step-2-2 .imgCode .con h2 {
  font-size: 1rem;
  line-height: 1.5;
  display: inline-block;
}

.p-third-part-connect .center .step-2-2 .imgCode .con .row {
  padding: 0.5rem 0;
  line-height: 0;
}

.p-third-part-connect .center .step-2-2 .imgCode .con .row img {
  width: 6rem;
  height: 2rem;
  display: inline-block;
  left: auto;
  margin: 0 auto;
}

.p-third-part-connect .center .step-2-2 .imgCode .con .row .changeLink {
  padding: 0 1rem;
  color: #51b0ec;
  height: 2rem;
  line-height: 2rem;
  display: inline-block;
  vertical-align: top;
}

.p-third-part-connect .center .step-2-2 .imgCode .con .row input {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  border: 1px solid #eee;
  border-radius: 2px;
  text-align: center;
}

.p-third-part-connect .center .step-2-2 .imgCode .con .row .btns {
  width: 50%;
  text-align: center;
  height: 2rem;
  line-height: 2rem;
  display: inline-block;
  box-sizing: border-box;
  color: #fff;
}

.p-third-part-connect .center .step-2-2 .imgCode .con .row .btns.btn_cancel {
  background-color: #9f9f9f;
}

.p-third-part-connect .center .step-2-2 .imgCode .con .row .btns.btn_sure {
  background-color: #eda948;
}

.p-third-bind-set .curr_account {
  border-bottom: 1px solid #e4e4e4;
  background: #fff;
  height: 2rem;
  line-height: 2rem;
  padding: 0 0.5rem;
}

.p-third-bind-set .curr_account .i-r {
  float: right;
}

.p-third-bind-set .curr-bind {
  margin-top: 0.75rem;
  background: #fff;
  padding: 0 0.5rem;
  padding-bottom: 6.25rem;
}

.p-third-bind-set .curr-bind .title {
  font-size: 0.75rem;
}

.p-third-bind-set .curr-bind .title,
.p-third-bind-set .curr-bind li {
  border-bottom: 1px solid #e4e4e4;
  height: 2rem;
  line-height: 2rem;
  display: block;
}

.p-third-bind-set .curr-bind li > a {
  float: right;
  color: #ec5196;
}

.main.s_help .center {
  padding: 0.5rem;
}

.main.s_help .center h2 {
  font-size: 0.75rem;
  line-height: 1.25rem;
  text-align: center;
  font-weight: 700;
}

.main.s_help .center ol {
  margin-top: 0.625rem;
}

.main.s_help .center ol li {
  padding: 0.2rem 0;
  font-size: 0.6rem;
  line-height: 0.95rem;
  color: #9f9f9f;
}

.main.s_help .center h3 {
  font-size: 0.65rem;
  line-height: 1.2rem;
  text-align: left;
}

.main.s_help .center p {
  text-indent: 1.2rem;
  font-size: 0.6rem;
  line-height: 1.1rem;
  color: #9f9f9f;
  margin-bottom: 0.5rem;
}

.main.s_about .center {
  text-align: center;
  padding: 0.5rem;
}

.main.s_about .center img {
  width: 7.5rem;
  height: 7.5rem;
  margin-top: 1rem;
}

.main.s_about .center h2 {
  font-size: 0.75rem;
  line-height: 1.25rem;
  text-align: center;
  font-weight: 700;
}

.main.s_about .center h3 {
  font-size: 0.65rem;
  line-height: 1.2rem;
  text-align: left;
}

.main.s_about .center p {
  margin-top: 0.25rem;
  font-size: 0.65rem;
  text-align: left;
}

.main.s_about .center p.con {
  margin-top: 0;
  text-indent: 1.2rem;
  font-size: 0.6rem;
  line-height: 1.1rem;
  color: #9f9f9f;
  margin-bottom: 0.5rem;
}

.main.s_discountList,
.main.s_discountList .center {
  height: 100%;
}

.main.s_discountList .center ol li {
  margin-top: 0.25rem;
  border: 1px solid #e4e4e4;
  border-width: 1px 0;
  background: #fff;
}

.main.s_discountList .center ol li header {
  height: 1.75rem;
  line-height: 1.75rem;
  border-bottom: 1px solid #e4e4e4;
  padding: 0 0.5rem;
  font-size: 0.75rem;
}

.main.s_discountList .center ol li header span {
  float: left;
}

.main.s_discountList .center ol li header span em {
  margin: 0 0.15rem;
  color: #ec5196;
}

.main.s_discountList .center ol li header a {
  display: none;
  float: right;
  margin-top: 0.25rem;
  border-radius: 5px;
  padding: 0 0.3rem;
  font-size: 0.7rem;
  line-height: 1.25rem;
  color: #fff;
}

.main.s_discountList .center ol li header a.S_show {
  display: block;
}

.main.s_discountList .center ol li header a.s_red {
  background: #ec5196;
}

.main.s_discountList .center ol li header a.s_gray {
  background: #9f9f9f;
}

.main.s_discountList .center ol li .t_goodInfo {
  position: relative;
  padding: 0.5rem 0.5rem 0.5rem 6rem;
}

.main.s_discountList .center ol li .t_goodInfo img {
  border: 0;
}

.main.s_discountList .center ol li .t_goodInfo .e_img_1 {
  float: left;
  margin-left: -5.5rem;
}

.main.s_discountList .center ol li .t_goodInfo .e_img_1 img {
  display: block;
}

.main.s_discountList .center ol li .t_goodInfo .e_img_2 {
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
}

.main.s_discountList .center ol li .t_goodInfo .e_img_2 img {
  width: 2.5rem;
  height: 2.5rem;
}

.main.s_discountList .center ol li .t_goodInfo .e_img_2 i {
  position: absolute;
  right: 0;
  bottom: 0;
}

.main.s_discountList .center ol li .t_goodInfo .e_img_2 i:before {
  content: "\E61E";
  font-size: 0.85rem;
  color: #ec5196;
}

.main.s_activityInfo .center {
  overflow: hidden;
}

.main.s_activityInfo .center article {
  margin-top: 0.25rem;
  border: 1px solid #e4e4e4;
  border-width: 1px 0;
  padding: 0.3rem 0.5rem;
  background: #fff;
}

.main.s_activityInfo .center article h3 {
  border-bottom: 1px solid #e4e4e4;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.25rem;
}

.main.s_activityInfo .center article p {
  margin-top: 0.375rem;
  font-size: 0.65rem;
  color: #424242;
}

.main.s_activityInfo .center ol {
  margin: 0 -0.25rem 0 0;
}

.main.s_activityInfo .center ol li {
  float: left;
  margin: 0.25rem 0.25rem 0 0;
  width: 7.875rem;
  background: #fff;
}

.main.s_activityInfo .center ol li a {
  display: block;
  border: 1px solid #e4e4e4;
}

.main.s_activityInfo .center ol li a img {
  width: 100%;
  display: block;
}

.main.s_activityInfo .center ol li a em,
.main.s_activityInfo .center ol li a h3 {
  padding: 0 0.25rem;
}

.main.s_activityInfo .center ol li a h3 {
  height: 2rem;
  overflow: hidden;
}

.main.s_activityInfo .center ol li a em {
  line-height: 1.25rem;
  display: block;
  color: #ec5196;
}

.main.s_videoIndex {
  height: 100%;
}

.main.s_videoIndex .center .t_focusCarousel {
  height: 8rem;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}

.main.s_videoIndex .center .t_videoList .c_content_2 {
  margin-top: -0.5rem;
}

.main.s_videoIndex .center .t_videoList .c_content_2 a {
  display: block;
  padding: 0.5rem 0;
}

.main.s_videoIndex .center .t_videoList .c_content_2 a + a {
  border-top: 1px solid #ececec;
}

.main.s_videoIndex .center .t_videoList .c_content_2 a .e_img {
  float: left;
  width: 6.05rem;
  height: 3.75rem;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: 50%;
}

.main.s_videoIndex .center .t_videoList .c_content_2 a .e_img img {
  width: 100%;
  height: 3.75rem;
}

.main.s_videoIndex .center .t_videoList .c_content_2 a .g_text {
  margin-left: 6.55rem;
}

.main.s_videoIndex .center .t_videoList .c_content_2 a .g_text p {
  margin-top: 0.25rem;
  color: #aeadad;
}

.main.s_videoList {
  height: 100%;
}

.main.s_video,
.white {
  background: #fff;
}

.main.s_video .video-info-content {
  height: 8.95rem;
}

.main.s_video .video-info-content .video-player {
  position: relative;
  height: 100%;
}

.main.s_video .video-info-content .video-player .start {
  position: absolute;
  background: transparent;
  border: none;
  top: 20%;
  left: 34%;
}

.main.s_video .video-info-content .video {
  width: 100%;
  height: 8.95rem;
}

.main.s_video .video-info-content .video.hide {
  width: 1px;
  height: 1px;
}

.main.s_video .video-info-content .share {
  color: #6c6c6c;
  font-size: 0.6rem;
  margin: 0.375rem 0 0.275rem 0.875rem;
}

.main.s_video .video-info-content .share .content {
  margin-top: 0.325rem;
}

.main.s_video .video-info-content .share .content .item {
  float: left;
  margin-left: 0.5rem;
}

.main.s_video .video-info-content .share .content .item img {
  width: 1.375rem;
}

.main.s_video .video-info-content .banner {
  height: 0.25rem;
  background: #d8d8d8;
}

.main.s_video .video-info-content .introduce {
  margin-left: 0.75rem;
  margin-top: 0.55rem;
  line-height: 1.13rem;
}

.main.s_video .video-info-content .introduce .title {
  font-size: 0.7rem;
  font-weight: 600;
}

.main.s_video .video-info-content .introduce .detail,
.main.s_video .video-info-content .introduce .play,
.main.s_video .video-info-content .introduce .time {
  font-size: 0.625rem;
  color: #6c6c6c;
}

.main.s_video .video-info-content .introduce .detail .left,
.main.s_video .video-info-content .introduce .play .left,
.main.s_video .video-info-content .introduce .time .left {
  display: inline-block;
  color: #000;
  font-size: 500;
  vertical-align: top;
}

.main.s_video .video-info-content .introduce .detail .right,
.main.s_video .video-info-content .introduce .play .right,
.main.s_video .video-info-content .introduce .time .right {
  display: inline-block;
  vertical-align: top;
}

.main.s_video .video-info-content .introduce .detail .right {
  width: 85%;
}

.playLayer {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  text-align: center;
}

.playLayer img {
  height: 100%;
  width: auto;
}

.playLayer .icon {
  display: block;
  font-size: 3rem;
  color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -1.5rem;
  margin-left: -1.5rem;
}

.main.s_videoSearch .center .t_searchHistory {
  padding: 1.25rem 0.5rem 0;
}

.main.s_videoSearch .center .t_videoList {
  background: transparent;
}

.main.s_videoSearch .center .t_videoList h2 {
  font-size: 0.7rem;
}

.popup-dz .popup-dz-blocker {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
}

.popup-dz .popup-dz-wrapper {
  position: fixed;
  z-index: 1001;
  left: 50%;
  top: 50%;
  max-width: 15.15rem;
  margin-left: -7.575rem;
  background: #fff;
  border-radius: 0.25rem;
  overflow: hidden;
}

.popup-dz .popup-dz-wrapper .popup-dz-header {
  background: #f1f1f1;
  text-align: center;
  font-size: 0.65rem;
  color: #3b3b3b;
  height: 1.25rem;
  line-height: 1.25rem;
  position: relative;
}

.popup-dz .popup-dz-wrapper .popup-dz-header span {
  width: 100%;
  display: block;
}

.popup-dz .popup-dz-wrapper .popup-dz-header a.close-tag {
  position: absolute;
  z-index: 1002;
  top: 0;
  right: 0;
  padding: 0 0.5rem;
  box-sizing: border-box;
  height: 1.25rem;
  line-height: 1.25rem;
  font-size: 0.75rem;
  height: 100%;
}

.popup-dz .popup-dz-wrapper .popup-dz-header a.close-tag i {
  background: #fff;
  color: #2b2b2b;
}

.popup-dz .popup-dz-wrapper .popup-dz-content p.popup-dz-error-msg {
  display: block;
  width: 12.5rem;
  padding: 0.75rem;
  box-sizing: border-box;
  text-align: center;
  font-size: 0.5rem;
  color: #2b2b2b;
}

.popup-dz .popup-dz-wrapper .popup-dz-content .popup-dz-bodyinfo {
  width: 15.15rem;
}

.popup-dz .popup-dz-wrapper .popup-dz-content .popup-dz-bodyinfo table {
  width: 100%;
}

.popup-dz
  .popup-dz-wrapper
  .popup-dz-content
  .popup-dz-bodyinfo
  table
  thead
  td {
  width: 50%;
}

.popup-dz
  .popup-dz-wrapper
  .popup-dz-content
  .popup-dz-bodyinfo
  table
  tbody
  tr {
  border-bottom: 1px solid #999;
}

.popup-dz
  .popup-dz-wrapper
  .popup-dz-content
  .popup-dz-bodyinfo
  table
  tbody
  td {
  height: 1.25rem;
  line-height: 1.25rem;
  font-size: 0.5rem;
  color: #999;
  border-right: 1px solid #999;
  padding-left: 0.5rem;
  overflow: hidden;
}

.popup-dz
  .popup-dz-wrapper
  .popup-dz-content
  .popup-dz-bodyinfo
  table
  tbody
  td:last-child {
  border-right: none;
}

.popup-dz .popup-dz-wrapper .popup-dz-content .pupup-dz-btns {
  padding: 0.5rem 0;
  text-align: center;
}

.popup-dz .popup-dz-wrapper .popup-dz-content .pupup-dz-btns .popup-dz-btn {
  height: 1.3rem;
  line-height: 1.3rem;
  text-align: center;
  background: #fff;
  color: #ee2a7b;
  border: 1px solid #ee2a7b;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  display: inline-block;
  min-width: 5rem;
}

.popup-dz
  .popup-dz-wrapper
  .popup-dz-content
  .pupup-dz-btns
  .popup-dz-btn.primary {
  color: #fff;
  background: #ee2a7b;
  border: none;
}

.popup-dz
  .popup-dz-wrapper
  .popup-dz-content
  .pupup-dz-btns
  .popup-dz-btn
  + .popup-dz-btn {
  margin-left: 1.725rem;
}

#main {
  height: 100%;
}

@font-face {
  font-family: icomoon-mobile-mall;
  src: url(//dn-ydj-statics.qbox.me/h5/build/prod/c5dc46d41ea28fb6ca2102a0b76ed238.ttf)
      format("truetype"),
    url(//dn-ydj-statics.qbox.me/h5/build/prod/1365ecd2f5f8635e26daf0be4076723f.woff)
      format("woff"),
    url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bWV0YWRhdGE+R2VuZXJhdGVkIGJ5IEljb01vb248L21ldGFkYXRhPgo8ZGVmcz4KPGZvbnQgaWQ9Imljb21vb24tbW9iaWxlLW1hbGwiIGhvcml6LWFkdi14PSIxMDI0Ij4KPGZvbnQtZmFjZSB1bml0cy1wZXItZW09IjEwMjQiIGFzY2VudD0iOTYwIiBkZXNjZW50PSItNjQiIC8+CjxtaXNzaW5nLWdseXBoIGhvcml6LWFkdi14PSIxMDI0IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4MjA7IiBob3Jpei1hZHYteD0iNTEyIiBkPSIiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlYTE1OyIgZ2x5cGgtbmFtZT0icGxheSIgZD0iTTUxMiA5NjBjLTI4Mi43NyAwLTUxMi0yMjkuMjMtNTEyLTUxMnMyMjkuMjMtNTEyIDUxMi01MTIgNTEyIDIyOS4yMyA1MTIgNTEyLTIyOS4yMyA1MTItNTEyIDUxMnpNNTEyIDMyYy0yMjkuNzUgMC00MTYgMTg2LjI1LTQxNiA0MTZzMTg2LjI1IDQxNiA0MTYgNDE2IDQxNi0xODYuMjUgNDE2LTQxNi0xODYuMjUtNDE2LTQxNi00MTZ6TTM4NCA2NzJsMzg0LTIyNC0zODQtMjI0eiIgLz4KPC9mb250PjwvZGVmcz48L3N2Zz4=#icomoon-mobile-mall)
      format("svg");
  font-weight: 400;
  font-style: normal;
}

[class*=" icomm-"],
[class^="icomm-"] {
  font-family: icomoon-mobile-mall !important;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icomm-play:before {
  content: "\EA15";
}

.spinner-wrapper {
  width: 5rem;
  height: 4rem;
  margin-top: -2rem;
  margin-left: -2.5rem;
  background: hsla(0, 0%, 94%, 0.6);
}

.spinner,
.spinner-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10000;
}

.spinner {
  margin: 100px auto;
  width: 2rem;
  height: 2rem;
  margin-top: -1rem;
  margin-left: -1rem;
}

.spinner .container1 > div,
.spinner .container2 > div,
.spinner .container3 > div {
  width: 0.6rem;
  height: 0.6rem;
  background-color: #ec5196;
  border-radius: 100%;
  position: absolute;
  animation: bouncedelay 1.2s infinite ease-in-out;
  animation-fill-mode: both;
}

.spinner .spinner-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.spinner .circle1 {
  top: 0;
  left: 0;
}

.spinner .circle2 {
  top: 0;
  right: 0;
}

.spinner .circle3 {
  right: 0;
  bottom: 0;
}

.spinner .circle4 {
  left: 0;
  bottom: 0;
}

.spinner .container1 .circle2 {
  animation-delay: -0.9s;
}

.spinner .container1 .circle3 {
  animation-delay: -0.6s;
}

.spinner .container1 .circle4 {
  animation-delay: -0.3s;
}

.spinner .container2 {
  transform: rotate(45deg);
}

.spinner .container2 .circle1 {
  animation-delay: -1.1s;
}

.spinner .container2 .circle2 {
  animation-delay: -0.8s;
}

.spinner .container2 .circle3 {
  animation-delay: -0.5s;
}

.spinner .container2 .circle4 {
  animation-delay: -0.2s;
}

.spinner .container3 {
  transform: rotate(90deg);
}

.spinner .container3 .circle1 {
  animation-delay: -1s;
}

.spinner .container3 .circle2 {
  animation-delay: 0, 7s;
}

.spinner .container3 .circle3 {
  animation-delay: 0, 4s;
}

.spinner .container3 .circle4 {
  animation-delay: -0.1s;
}

@keyframes bouncedelay {
  0%,
  80%,
  to {
    transform: scale(0);
  }

  40% {
    transform: scale(1);
  }
}

.swipe {
  visibility: hidden;
}

.swipe,
.swipe-wrap {
  overflow: hidden;
  position: relative;
}

.swipe-wrap > a {
  float: left;
  width: 100%;
  position: relative;
}

.cc-head-appdownload > a {
  display: block;
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  font-size: 20px;
  color: #fff;
  background: #ec5196;
}
</style>