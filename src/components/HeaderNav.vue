<template>
  <div class="nav">
    <i class="fa fa-align-justify" @click="show"></i>
    <span class="title"> <slot></slot> </span>
    <i class="fa fa-user-o"></i>
  </div>
</template>
<script>
import bus from "../bus.js"
  export default{
    methods:{
      show:function () {
        bus.$emit("showMenu")
      }
    }
  }
</script>
<style scoped>
  *{
    box-sizing: border-box;
  }
  .nav{
    width: 100%;
    line-height: 45px;
    background-color: #2822828;
    background: #666;
    font-size: 2rem;
    padding: 0 15px;
    position: fixed;
    top: 0;
    z-index: 1;
  }
  .title{
    color: #fff;margin-left: 10px;
  }
  .fa-user-o{
    display: block;
    float: right;
    margin-top: 10px;
  }
  .fa-align-justify{
    cursor: pointer;
    /*color: red;*/
  }
</style>
