<template>
  <div class="hots">

    <header-nav>首页</header-nav>
    <div class="roomlist">

      <room-list v-for="room in rooms" :room="room"></room-list>

    </div>
    <p class="refresh">
      <i class="fa fa-refresh fa-spin"></i>
    </p>
  </div>
</template>
<script>
  import RoomList from "../components/roomlist"
  import HeaderNav from "../components/HeaderNav"
  export default{
    data: function () {
      return {
        status: "loading",
        rooms: [],
        isloadingMore:false
      }
    },
    components: {
      HeaderNav,RoomList
    },

    created: function () {
      this.$http.get("/douyuapi/api/RoomApi/live/").then(function (res) {
//        console.log(res.body)
        if(res.body.error == 0){
          this.rooms = res.body.data
          this.status = "success"
        }else{
            alert("获取数据错误!")
        }

      })
      window.onscroll = this.loadMore
    },
    methods:{
        loadMore:function () {
          var contentHeight = document.body.offsetHeight
          var scrollTop =  document.body.scrollTop || document.documentElement.scrollTop
          var windowH = window.innerHeight
            if(scrollTop + windowH > contentHeight ){
              this.$http.get("/douyuapi/api/RoomApi/live/",{
                params:{
                  offset:this.rooms.length / 30
                }
              }).then(function (res) {
                if(res.body.error == 0){
                  this.rooms = this.rooms.concat(res.body.data)
                  this.status = "success"
                  console.log(this.rooms.length)
                }else{
                  alert("获取数据错误!")
                }
              })
            }
        }
    }


  }

</script>
<style scoped>
*{
  box-sizing: border-box;
}
  .roomlist{
    margin-top: 45px;display: flex;flex-flow: row wrap;justify-content: center;
  }
  .refresh{
    text-align: center;
  }
  .refresh i{
    font-size: 2.6rem;
  }
</style>
