<template>
  <div id="main">
    <!--类别分类-->
    <div class="container">
      <!-- 头部区域插件 -->
      <div class="leftnav">
        <!-- 左边导航栏 -->
        <ul>
          <li :key="index"
              @click="nu=index"
              v-for="(item,index) in list"
              :class="{white:nu === index}">
            <a>{{item.name}}</a>
          </li>
        </ul>
      </div>
      <item :num="list[nu]"
            :nu1="nu"></item>
    </div>
  </div>
</template>
<script>
import item from "./cstlistitem";
export default {
  components: {
    item
  },
  data() {
    return {
      list: [],
      nu: 0
    };
  },
  created() {
    // 获取数据
    this.$axios
      .get("/index.php?api=index.index.getItems&_=1570672873913")
      .then(res => {
        this.list = res.data.response;
      });
  }
};
</script>
<style  lang="scss">
// 大盒子区域
.container {
  // 头部搜索框
  // 左边导航栏
  .leftnav {
    float: left;
    width: 5.165625rem;
    height: 52.375rem;
    > ul {
      > li {
        border-bottom: 1px solid #e4e4e4;
        .active {
          background: white;
        }
        > a {
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          height: 3.726875rem;
          width: 5.165625rem;
          line-height: 3.726875rem;
          text-align: center;
          font-size: 1rem;
          color: #a0a0a0;
        }
      }
    }
  }
}
.white {
  background: white;
}
</style>