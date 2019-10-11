<template>
  <header class="top">
      <div class="g_left">
        <!-- <a class="e_back" href="/" ><van-icon name="arrow-left" /></a> -->
     
         <router-link class="e_back" to="/"><van-icon name="arrow-left" /></router-link>
      </div>
      <nav class="t_navTab">
        <!-- <a href="/xiang" class="S_active">详情</a> -->
       
        <router-link class="S_active" to="/xiang">详情</router-link>
        <!-- <a  href="/tu" class>图文</a> -->
         <router-link to="/tu">图文</router-link>
          <router-link to="/ping">评价</router-link>
         
        <!-- <a href="/ping" class>评价</a> -->
      </nav>
      <div class="g_right">
      </div>
    </header>
</template>

<script>
export default {
data(){
    return {

    }
}
}
</script>

<style>

</style>