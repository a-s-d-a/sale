<template>
  <div class="ccenter">
    <cnav :list="list"></cnav>
    <div class="box">
      <div>{{list[1]}}</div>
    </div>
  </div>
</template>
<script>
import cnav from "./cstnav";
export default {
  components: {
    cnav
  },
  data() {
    return {
      list: []
    };
  },
  created() {
    this.list = this.$route.params.lst.split(",");
  }
};
</script>
<style lang="scss">
.box {
  border: 1px solid #eee;
  width: 100%;
  line-height: 7rem;
  text-align: center;
  margin-top: 0.625rem;
  div {
    color: #ccc;
  }
}
</style>