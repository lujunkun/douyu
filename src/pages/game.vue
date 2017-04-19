<template>
  <div class="hots">
    <header-nav>全部分类</header-nav>
    <div class="roomlist">

      <game-list v-for="room in rooms" :rooms="room"></game-list>



    </div>
    <p class="refresh">
      <i class="fa fa-refresh fa-spin"></i>
    </p>
  </div>
</template>
<script>
  import HeaderNav from "../components/HeaderNav"
  import fenLList from "../components/fenLList"
  import GameList from "../components/gameList"
  export default{
    data: function () {
      return {
        status: "loading",
        rooms: [],
        isloadingMore:false
      }
    },
    components: {
      HeaderNav,GameList,fenLList
    },
    created: function () {
      this.$http.get("/douyuapi/api/RoomApi/room/" + this.$router.params.id).then(function (res) {
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
          this.$http.get("/douyuapi/api/RoomApi/room/",{
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
    margin-top: 45px;display: flex;flex-flow: row wrap;justify-content: flex-start;
    background-color: #eeeeee;
  }
  .refresh{
    text-align: center;
  }
  .refresh i{
    font-size: 2.6rem;
  }
</style>
