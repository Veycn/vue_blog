<template>
  <div class="content-wrapper">
    <div class="content-left">
      <div class="carousel">
        <el-carousel>
          <el-carousel-item class="item" v-for="item in imgArr" :key="item">
            <img :src='item.src' alt="" style="width: 100%">
          </el-carousel-item>
        </el-carousel>
      </div>
      <set-top />
      <div class="articleList">
        <div class="title"><span>最新发布</span></div>
        <div class="articles">
          <my-article />
          <my-article />
          <my-article />
          <my-article />
          <my-article />
          <my-article />
          <my-article />
        </div>
      </div>
    </div>
    <div class="content-right">
      <tags />
      <div class="recent-hot mt">
        <recent-hot />
      </div>
      <div class="friend mt">
        <friend-link />
      </div>
      <div class="code mt">
        <my-code />
      </div>
    </div>
  </div>
</template>

<script>
import setTop from '../components/index/setTop'
import myArticle from '../components/index/myArticle'
import tags from '../components/aside/tags'
import recentHot from '../components/aside/recent_hot'
import friendLink from '../components/aside/friend_link'
import myCode from '../components/aside/myCode'
import mt from '../assets/img/mt.png'
import db from '../assets/img/db.png'
import jd from '../assets/img/jd.png'
// import carousel from '../components/carousel'
export default {
  name: "index",
  data () {
    return {
      imgArr: [
        {
          id: 1,
          src: mt
        },
        {
          id: 2,
          src: jd
        },
        {
          id: 3,
          src: db
        }
      ]
    }
  },
  components: {
    setTop,
    myArticle,
    tags,
    recentHot,
    friendLink,
    myCode
  }
}
</script>

<style scoped lang="stylus">
.mt
  margin-top 20px
.content-wrapper
  width 1180px
  margin 60px auto 0 auto
  padding-top 20px
  display flex
  border-radius 3px
  justify-content space-between
  .content-left
    width 72%
    .carousel
      height 300px
      .item
        height 100%
        background #ccc
    .articleList
      box-sizing border-box
      width 100%
      border-radius 3px
      border 1px solid #ccc
      margin-top 20px
      background #fff
      .title
        line-height 40px
        background #ddd
        border-bottom 1px solid #ccc
        span
          margin-left 20px
          color #393939
          font-weight bold
      .articles
        width 100%
        padding 10px 15px
        box-sizing border-box
  .content-right
    width  25%
    border-radius 5px
</style>
