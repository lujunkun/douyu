<template>
  <div class="list">
    <img :src="placeholder" alt="" v-if="isshow" @load="imgLoaded">
    <router-link :to=" '/room/' + rooms.game_name + '/'  +  rooms.cate_id ">
      <img :src="rooms.game" alt="" v-if="!isshow">
    </router-link>
    <p class="rname">
      {{rooms.game_name}}
    </p>
  </div>
</template>
<script>
  import placeholder from "../assets/wrait.gif"
  import Vue from "vue"
  Vue.filter('toPersent', function(val){
    if( val > 10000 ){
      val = val / 10000
      return val.toFixed(2) + "w"
    }else{
      return val
    }
  })

  export default{
    props:["rooms"],
    data:function () {
      return {
        isshow:true,
        placeholder
      }
    },
    methods:{
      imgLoaded:function () {
        this.isshow = false
      }
    }
  }
</script>
<style scoped>
  *{
    box-sizing: border-box;
  }
  .list{
    width: 122px;
    height: 170px;
    margin: 13px;
  }
  .list img{
    width: 100%;
  }
  .list p{
    margin: 0;
    font-size: 1.3rem;
    line-height: 40px;
    text-align: center;
    background-color: white;
    white-space: normal;
    overflow: hidden;
  }
  .list:hover{
    box-shadow: 1px 1px 1px #666;
    -wekit-filter: blur(0.7px);
    -ms-filter: blur(0.7px);
    filter: blur(0.7px);
    -webkit-backdrop-filter: blur(0.7px);
    cursor: pointer;
  }


</style>
