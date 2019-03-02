<template>
    <div class="container">
      <div class="title"><span>友情链接</span></div>
      <div class="content">
        <ul class="links">
          <li><a href="#">dfaosidfjaspdfjasdj</a></li>
          <li><a href="#">dfaosidfjaspdfjasdj</a></li>
          <li><a href="#">dfaosidfjaspdfjasdj</a></li>
          <li><a href="#">dfaosidfhiouyhiugi8guiygfuyfguyfgufdfctcjaspdfjasdj</a></li>
          <li><a href="#">dfaosidfjaspdfjasdj</a></li>
          <li><a href="#">dfaosidfjaspdfjasdj</a></li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
    name: "friend_link"
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
  .content
    box-sizing border-box
    padding 20px
    background #fff
    li
      list-style none
      border-radius 10px
      margin-bottom 15px
      padding 10px
      background azure
      a
        text-decoration none
        font-size 14px
        color #333
        display inline-block
        width 100%
        overflow hidden
        text-overflow ellipsis
</style>
