<template>
  <div class="container">
    <div class="nav"><span><router-link to="/">首页</router-link></span> / <span>关于我</span></div>
    <span class="maxim">像“草根”一样，紧贴着地面，低调的存在，冬去春来，枯荣无恙。</span>
  </div>
</template>

<script>
export default {
  name: "banner"
}
</script>

<style scoped lang="stylus">
.container
  position relative
  .nav
    span
      font-weight 400
      a
        color #000
        text-decoration none
  .maxim
    display inline-block
    position absolute
    top: 4px
    right 10px
    font-size 12px
    color #666
    padding-bottom 10px
</style>
