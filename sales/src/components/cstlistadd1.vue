<template>
  <div class="list">
    <ul>
      <li v-for="(item,index) in arr"
          :key="index">
        <img :src="'https://img2.yidejia.com/'+item.imgname"
             alt="">
        <!-- 详情页接口-->
        <h3><a>{{item.goods_name}}</a></h3>
        <span>￥{{item.price}}</span>
        <span>已售：{{item.sells}} 评价:{{item.remarks}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    arr: Array
  }
};
</script>
<style lang="scss">
.list {
  > ul {
    width: 100%;
    li {
      display: flex;
      position: relative;
      width: 100%;
      height: 9.625rem;
      line-height: 9.625rem;
      border-bottom: 1px solid #e4e4e4;
      img {
        width: 7.38rem;
        height: 7.38rem;
        border: 1px solid #e4e4e4;
        margin-top: 1.25rem;
        margin-left: 1.25rem;
      }
      h3 {
        position: absolute;
        left: 10.5rem;
        width: 11rem;
        height: 3.6875rem;
        line-height: 1rem;
        margin-top: 2.5rem;
        // margin-left: 1rem;
        text-align: left;
        > a {
          color: #333;
          font-size: 1rem;
        }
      }
      span {
        margin-top: 1rem;
        position: absolute;
        left: 10.5rem;
        display: inline-block;
        width: 11rem;
        height: 1.45rem;
        line-height: 1.45rem;
        text-align: left;
      }
      span:nth-of-type(1) {
        color: #ec5196;
        top: 5rem;
      }
      span:nth-of-type(2) {
        position: absolute;
        top: 7rem;
      }
    }
  }
}
</style>