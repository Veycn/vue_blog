<template>
  <div class="container">
    <div class="header-wrapper">
      <header class="header">
        <div class="logo">
          <img src="../assets/vip.png" alt=""><span>Vey's Blog</span>
        </div>
        <div class="nav">
          <ul class="nav-ul">
            <li class="item"><router-link to="/">首页</router-link></li>
            <li class="item"><router-link to="/about">关于</router-link></li>
            <li class="item"><router-link to="/">留言</router-link></li>
            <li class="item"><router-link to="/">随笔</router-link></li>
            <li class="item"><router-link to="/">文档</router-link></li>
          </ul>
        </div>
        <div class="search-wrapper">
          <input v-model="key" class="ipt" type="text" placeholder="输入关键字搜索">
          <button class="btn" @click="search">搜索</button>
        </div>
      </header>
    </div>
    <router-view></router-view>
    <footer class="footer">
      <p></p>
      <p>copyright &copy;2018-2019 渝ICP备18017046号 <a href="#">www.veyxp.com</a></p>
    </footer>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "default",
    data () {
      return {
        key: ''
      }
    },
    methods: {
      search () {
        axios.get('http://127.0.0.1:12306/queryEveryDay')
          .then(res=>{
            console.log(res)
          })
      }
    }
  }
</script>

<style scoped lang="stylus">
.container
  width 100%
  background #ededed
  .header-wrapper
    width 100%
    height 60px
    background #222
    opacity 0.9
    position fixed
    left 0
    top 0
    z-index 9999
    .header
      width 1180px
      margin 0 auto
      display flex
      .logo
        height 100%
        display flex
        justify-content center
        align-items center
        min-width 300px
        img
          width 40px
          height 40px
          margin-top 5px
        span
          margin-left 10px
          font-size 26px
          font-weight bold
          line-height 60px
          color: #e6e6e6
          font-family "Courier New"
      .nav
        flex 1
        .nav-ul
          height 100%
          display flex
          .item
            flex 1
            float left
            line-height 60px
            text-align center
            a
              color #e6e6e6
              text-decoration none
              width 100%
              height 100%
      .search-wrapper
        height 60px
        min-width 330px
        line-height 60px
        display flex
        justify-content center
        align-items center
        .ipt
          border 1px solid #ccc
          width 200px
          height 30px
          box-sizing border-box
          padding 0 15px
          outline none
        .btn
          width 60px
          height 30px
          cursor pointer
  .footer
    margin-top 15px
    width 100%
    height 50px
    background #222
    opacity 0.9
    text-align center
    line-height 50px
    color: #eee
    a
      color beige
</style>
