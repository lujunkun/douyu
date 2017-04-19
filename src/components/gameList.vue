<template>
  <div class="list">
    <img :src="placeholder" alt="" v-if="isshow" @load="imgLoaded">
    <img :src="room.room_src" alt="" v-if="!isshow">
    <p class="rname">
      <span>{{room.room_name}}</span>
      <span>{{room.game_name}}</span>
    </p>
    <p class="uname">
      <span><i class="fa fa-user"></i> {{room.nickname}}</span>
      <span><i class="fa fa-user-md"></i> {{room.online | toPersent}}</span>
    </p>
    <p>房间名:{{room.room_id}}</p>
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
    props:["room"],
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
    width: 50%;
    padding: 10px;
  }
  .list img{
    width: 100%;
    height: 16rem;
  }
  .list p{
    margin: 0;
    font-size: 1.3rem;
    line-height: 30px;
  }
  .list p span:last-child{
    float: right;font-size: 1.3rem;
  }
  .list p span:first-child{
    width: 65%;display: inline-block;
  }
  .list p span {
    white-space: normal;text-overflow: ellipsis;overflow: hidden;
  }



</style>
