<template>
  <div class="container">
    <div class="title"><span>随机标签云</span></div>
    <div class="tag-wrapper">
      <span>dhaoidh</span>
      <span>dhaoidh</span>
      <span>dhaoidh</span>
      <span>dhaoidh</span>
      <span>dhaoidh</span>
      <span>dhaoidh</span>
      <span>dhaoidh</span>
      <span>dhaoidh</span>
      <span>dhaoidh</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "tags",
  created(){

  }
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
  .tag-wrapper
    box-sizing border-box
    padding 20px
    background #fff
    span
      background #777
      border-radius 3px
      display inline-block
      padding 5px 10px
      margin-bottom 6px
      color #fff
      font-weight 600
</style>
