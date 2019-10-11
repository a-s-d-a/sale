<template>
  <div class="rightnav">
    <ul>
      <li v-for="(item,index) in num.list"
          :key="index">
        <a>
          <div class="imgbox">
            <img :src="'https://img2.yidejia.com/'+item.image">
          </div>

        </a>
        <!-- 点击跳转页面 -->
        <!--标题 -->
        <h3>
          <!-- 像cstlistadd传参 -->
          <router-link :to="'/cstlistadd/'+nu1">{{item.name}}</router-link>
        </h3>
        <!-- 副标题 -->
        <h4><a class="desc">{{item.desc}}</a></h4>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    num: Object,
    nu1: 0
  }
};
</script>
<style lang="scss">
.rightnav {
  float: left;
  width: 18.284375rem;
  background: white;
  > ul {
    > li {
      position: relative;
      margin-left: 0.625rem;
      height: 5.18125rem;
      border-bottom: 1px solid #e4e4e4;
      padding: 0 0.625rem;
      line-height: 5.18125rem;
      display: flex;
      // 图片盒子
      .imgbox {
        border: 1px solid #e4e4e4;
        margin-top: 0.625rem;
        width: 3.715625rem;
        height: 3.715625rem;
        > img {
          width: 100%;
          height: 100%;
        }
      }
      > h3 {
        width: 12.42rem;
        height: 1.889375rem;
        line-height: 1.889375rem;
        text-align: left;
        margin-left: 0.625rem;
        margin-top: 1.25rem;
        > a {
          color: #333;
        }
      }
      .desc {
        display: inline-block;
        line-height: 1.889375rem;
        height: 1.889375rem;
        position: absolute;
        left: 5rem;
        top: 3.125rem;
        font-size: 0.875rem;
      }
    }
  }
}
</style>