<template>
  <div id="main">
    <div class="nav">
      <span>{{list[0]}}</span>
      <span v-if="list.length==3?'isShow':''">
        <router-link :to="list[2]">{{list[1]}}</router-link>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: Array
  },
  data() {
    return {
      isShow: true
    };
  }
};
</script>
<style lang="scss">
.nav {
  position: relative;
  height: 3.21875rem;
  line-height: 3.21875rem;
  span:nth-of-type(1) {
    font-size: 1.25rem;
  }
  span:nth-of-type(2) {
    position: absolute;
    right: 0.625rem;
    font-size: 1rem;
    color: #999;
  }
}
</style>
