<template>
  <div>
    <section class="section">
      <header>
        <h2>时装</h2>
        <a href="/1/list?brand=yinishang">更多</a>
      </header>
      <div class="t_3column">
         <a @click="ha('/xiang',item)"  v-for="(item,index) in list.fashion.slice(0,3)" :key="index">
          <img alt :src="'http://img2.yidejia.com/'+item.img_name" />
        </a>
      </div>
      <div class="t_2column">
        <a @click="ha('/xiang',item)"  v-for="(item,index) in list.fashion.slice(3,)" :key="index">
          <img alt :src="'http://img2.yidejia.com/'+item.img_name" />
        </a>
      </div>
    </section>
    <section class="section">
      <header>
        <h2>美妆</h2>
        <a >更多</a>
      </header>
        <div class="t_2column s_2row">
           <a @click="ha('/xiang',item)"  v-for="(item,index) in list.makeUp.slice(0,3)" :key="index">
          <img alt :src="'http://img2.yidejia.com/'+item.img_name" />
        </a>
        </div>
  
        <div class="t_3column">
          <a @click="ha('/xiang',item)"  v-for="(item,index) in list.makeUp.slice(3,)" :key="index">
          <img alt :src="'http://img2.yidejia.com/'+item.img_name" />
        </a>
        </div>
      <a class="e_banner" href="/1/info/14950">
        <img src="https://img2.yidejia.com/4/2019/03/09/39a805bb28b5e.jpg" />
      </a>
    </section>
    <section class="section">
      <header>
        <h2>营养</h2>
        <a href="/1/list?brand=inerbty">更多</a>
      </header>
        <div class="t_3column">
          <a @click="ha('/xiang',item)"  v-for="(item,index) in list.nutrition" :key="index">
            <img alt :src="'http://img2.yidejia.com/'+item.img_name" />
          </a>
        </div>
      <a class="e_banner" href="/1/info/14950">
        <img alt src="https://img2.yidejia.com/4/2019/03/09/39a805bb28b5e.jpg" />
      </a>
    </section>
  
  </div>
</template>

<script>
import zxlitem from './zxlitem'
export default {
  data(){
    return{
      item:Object,
     
      itemdata:''
    }
  },
  components:{
    zxlitem:zxlitem
  },
    props:{
        list:{
            type:Object
        }
    },
    methods:{
      ha(a,item){
        this.$axios.get("/index.php?api=index.product.get",{
          params:{
            'goods_id':item.goods_id,
          }
        }).then((res)=>{
          this.itemdata=res.data.response
          console.log(this.itemdata)
          this.$router.push({
            path:a,
            query:{
            'item':this.itemdata
          }
          })
        })
      }
    }
};
</script>

<style scoped>

.e_banner img {
  width: 100%;
}
.section {
  margin-top: 0.5rem;
}

.section header {
  border-bottom: 1px solid #e4e4e4;
  padding: 0 0.5rem;
  height: 2rem;
  line-height: 2rem;
  background: #fff;
  overflow: hidden;
}

.section header h2 {
  float: left;
  position: relative;
  padding-left: 0.35rem;
  font-size: 0.8rem;
}

.section header h2:before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -0.4rem;
  border-left: solid #ec5196;
  border-left-width: 0.1rem;
  height: 0.8rem;
}

.section header a {
  float: right;
  font-size: 0.65rem;
  color: #9f9f9f;
}

.section header a:after {
  content: ">";
  font-size: 0.75rem;
  margin-left: -0.1rem;
}
.t_3column {
  margin-top: 0 !important;
}
.t_3column a{
      border-bottom: 1px solid #e4e4e4;
}
.t_2column {
  margin-top: 0 !important;
}
</style>