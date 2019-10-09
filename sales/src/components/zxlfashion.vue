<template>
  <div>
    <section class="section">
      <header>
        <h2>时装</h2>
        <a href="#/list?brand=yinishang">更多</a>
      </header>
      <div class="t_3column">
        <a href="#/info/17325">
          <img alt src="http://img2.yidejia.com/8/2019/03/08/12aa7d564372.jpg" />
        </a>
        <a href="#/info/17324">
          <img alt src="http://img2.yidejia.com/5/2019/03/08/12aea804da2a.jpg" />
        </a>
        <a href="#/info/15770">
          <img alt src="http://img2.yidejia.com/7/2019/03/08/baf23a1b282d.jpg" />
        </a>
      </div>
      <div class="t_2column">
        <a href="#/info/15767">
          <img alt src="http://img2.yidejia.com/7/2019/03/08/12b60387a88e.jpg" />
        </a>
        <a href="#/info/14852">
          <img alt src="http://img2.yidejia.com/1/2019/03/09/840c36c2c7f.jpg" />
        </a>
      </div>
    </section>
    <section class="section">
      <header>
        <h2>美妆</h2>
        <a href="#/list?brand=acymer">更多</a>
      </header>

        <div class="t_2column s_2row">
          <a href="#/info/15436" style>
            <img alt src="http://img2.yidejia.com/6/2019/03/08/afc42cd40ed7.jpg" />
          </a>
          <a href="#/info/10945" style>
            <img alt src="http://img2.yidejia.com/1/2019/03/08/1197cb907106.jpg" />
          </a>
          <a href="#/info/9028" style>
            <img alt src="http://img2.yidejia.com/5/2017/12/08/92595b86df2c.jpg" />
          </a>
        </div>
  
        <div class="t_3column">
          <a href="#/info/15764" style>
            <img alt src="http://img2.yidejia.com/6/2019/03/09/8b2fdc1ea35.jpg" />
          </a>
          <a href="#/info/13260" style>
            <img alt src="http://img2.yidejia.com/3/2019/03/09/8b51eced84d.jpg" />
          </a>
          <a href="#/info/13146" style>
            <img alt src="http://img2.yidejia.com/5/2019/03/09/5717301bb026.jpg" />
          </a>
        </div>
    
      <a class="e_banner" href="#/info/14950">
        <img src="https://img2.yidejia.com/4/2019/03/09/39a805bb28b5e.jpg" />
      </a>
    </section>
    <section class="section">
      <header>
        <h2>营养</h2>
        <a href="#/list?brand=inerbty">更多</a>
      </header>
        <div class="t_3column">
          <a :href="'#/info/'+item.goods_id" v-for="(item,index) in list.nutrition" :key="index">
            <img alt :src="'http://img2.yidejia.com/'+item.img_name" />
          </a>
        </div>
      <a class="e_banner" href="#/info/14950">
        <img alt src="https://img2.yidejia.com/4/2019/03/09/39a805bb28b5e.jpg" />
      </a>
    </section>
  </div>
</template>

<script>
export default {
    props:{
        list:{
            type:Object
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