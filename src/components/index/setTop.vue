<template>
  <div class="container">
    <div class="tag">博主置顶</div>
    <div class="title"><span>{{ '标题' }}</span></div>
    <p class="content">短时间内塞哦范德萨回复 iu 护发素和发死偶好的大 ious 的阿斯顿哈斯哦的是打碎啊啊大速度哈送的阿山东披萨独家啊分起飞哦第四大文化的我的</p>
  </div>
</template>

<script>
export default {
  name: "set-top",
  created(){
    // 请求置顶博文数据
  }
}
</script>

<style scoped lang="stylus">
.container
  width 100%
  box-sizing border-box
  padding 10px
  position relative
  margin-top 15px
  border-radius 5px
  border 1px solid #ccc
  background #fff
  .tag
    position absolute
    left 20px
    top 0
    background #f50
    padding 5px
    color #fff
  .title
    margin 25px 0 15px 0
    font-size 24px
    font-weight bold
  .content
    text-indent 2em
    color #333
</style>
