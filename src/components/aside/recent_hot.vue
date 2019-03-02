<template>
  <div class="container">
    <div class="title"><span>最近热门</span></div>
    <div class="links">
      <li><a href="#">dfaosidfjaspdfjasdj</a></li>
      <li><a href="#">dfaosidfjaspdfjasdj</a></li>
      <li><a href="#">dfaosidfjaspdfjasdj</a></li>
      <li><a href="#">dfaosidfhiouyhiugi8guiygfuyfguyfgufdfctcjaspdfjasdj</a></li>
      <li><a href="#">dfaosidfjaspdfjasdj</a></li>
      <li><a href="#">dfaosidfjaspdfjasdj</a></li>
    </div>
  </div>
</template>

<script>
  export default {
    name: "recent_hot"
  }
</script>

<style scoped lang="stylus">
.container
  width 100%
  border-radius 3px
  border 1px solid #ccc
  .title
    line-height 40px
    background #ddd
    border-bottom 1px solid #ccc
    span
      margin-left 20px
      color #393939
      font-weight bold
  .links
    box-sizing border-box
    padding 20px
    background #fff
    li
      list-style none
      border-bottom 1px solid #d8e6f8
      padding 10px
      a
        text-decoration none
        font-size 14px
        color #333
        display inline-block
        width 100%
        overflow hidden
        text-overflow ellipsis

</style>
