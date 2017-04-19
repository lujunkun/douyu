<template>
  <div class="side" @click="hide">
    <div>
      <ul>
        <li><router-link to="/">首页 <i class="fa fa-angle-right"></i> </router-link></li>
        <li><router-link to="/fenlei">全部分类 <i class="fa fa-angle-right"></i> </router-link></li>
        <li>推荐 <i class="fa fa-angle-right"></i> </li>
        <li>个人中心 <i class="fa fa-angle-right"></i> </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Hot from "../pages/Hot"
  import fenL from "../pages/fenL"
  export default{
        methods:{
            hide:function () {
              this.$emit("hideItem")
            },
          components: {
            fenL,Hot
          }
        }
  }
</script>
<style scoped>
  *{
    box-sizing: border-box;
  }
  .side{
    width: 100%;height: 100vh;position: fixed;overflow: hidden;z-index: 2;
    top: 0;
  }
  .side div{
    position: absolute;
    width: 60%;
    top: 46px;
  }
.side ul{
  margin: 0;
  padding: 0;list-style: none;background-color: #282828;
  color: #666;border-top: 1px solid #8c8c8c;
  width: calc(100% - 100px);
  height: 100vh;font-size: 2rem;
}
  .side li {
    line-height: 50px;
    border-bottom: 1px solid #AAA;padding-left: 20px;
  }
  .fa-angle-right{
    display: block;
    float: right;
    padding-right: 15px;
  }
</style>
