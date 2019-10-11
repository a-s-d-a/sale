<template>
  <div id="main">
    <div class="top_nav">
      <ul>
        <li v-for="(item,index) in arr"
            :key="index"
            @click="add(nu=index)"
            :class="nu===index?'active':''"><a style="color:#ec5196">{{item}}</a></li>
      </ul>
    </div>
    <cstadd1 :arr="arr2"></cstadd1>
  </div>
</template>
<script>
import cstadd1 from "./cstlistadd1";
export default {
  components: {
    cstadd1
  },
  data() {
    return {
      arr: ["综合", "销量", "价格", "评论"],
      nu: 0,
      num: 0,
      arr2: []
    };
  },
  created() {
    this.$axios
      .get("/index.php?brand=acymer&api=index.index.getList&_=1570624003367")
      .then(res => {
        this.arr2 = res.data.response.data;
      });
  },
  mounted() {
    // 根据cstlistitem传来的值发起不同的请求
    this.num = this.$route.params.nu1;
    if (this.num == 1) {
      this.$axios
        .get(
          "/index.php?brand=acymer&cosmetics_sort=-1&api=index.index.getList&_=1570696241014"
        )
        .then(res => {
          this.arr2 = res.data.response.data;
        });
    }
    if (this.num == 2) {
      this.$axios
        .get(
          "/index.php?brand=inerbty&ntwy=-1&api=index.index.getList&_=1570696478537"
        )
        .then(res => {
          this.arr2 = res.data.response.data;
        });
    }
    if (this.num == 3) {
      this.$axios
        .get(
          "/index.php?brand=inerbty&ntwy=-1&api=index.index.getList&_=1570696410196"
        )
        .then(res => {
          this.arr2 = res.data.response.data;
        });
    }
    if (this.num == 4) {
      this.$axios
        .get(
          "/index.php?brand=yinishang&api=index.index.getList&_=1570696617516"
        )
        .then(res => {
          this.arr2 = res.data.response.data;
        });
    }
  },
  updated() {},
  methods: {
    // 筛选条件时间
    add() {
      if (this.nu == 1) {
        this.arr2.sort((a, b) => {
          return b.sells - a.sells;
        });
      } else if (this.nu == 2) {
        this.arr2.sort((a, b) => {
          return b.price - a.price;
        });
      } else if (this.nu == 3) {
        this.arr2.sort((a, b) => {
          return b.remarks - a.remarks;
        });
      }
    }
  }
};
</script>
<style lang="scss">
body {
  background: white !important;
}
.top_nav {
  height: 3.240625rem;
  border-bottom: 1px solid #e4e4e4;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    li {
      float: left;
      text-align: center;
      line-height: 3.22375rem;
      width: 5rem;
      height: 3.22375rem;
      a {
        font-size: 1.125rem;
        color: #bbb;
      }
    }
  }
}
.active {
  color: #ec5196;
  border-bottom: 2px solid #ec5196;
}
.active1 {
  color: #ec5196;
}
</style>