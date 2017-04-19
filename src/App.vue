<template>
  <div id="app">
    <transition name="slide">
      <side-meau   v-show="isshow" @hideItem='hideItems'></side-meau >
    </transition>
    <router-view></router-view>

  </div>
</template>

<script>
  import SideMeau from "./components/sideMeau"
  import bus from "./bus"
export default {
  name: 'app',
  data:function () {
    return {
        isshow: false
    }
  },
  methods:{
    hideItems:function () {
        this.isshow = false
    },
    showItem:function () {
      this.isshow = true
    }

  },
  mounted:function () {
      var that = this
            bus.$on("showMenu",function () {
              that.showItem()
             }
            )
  },
  components:{
    SideMeau
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
.slide-enter,.slide-leave-active{
  transform: translate( -100% );
  opacity:0
}
  .slide-enter-active,.slide-leave-active{
    transition: all .7s;
  }
</style>
