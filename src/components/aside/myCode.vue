<template>
  <div class="container">
    <div class="container">
      <div class="title"><span>微信二维码</span></div>
      <div class="content">
        <img src='../../assets/code.png' alt="">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "myCode"
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
    img
      width 100%
      height 100%
</style>
