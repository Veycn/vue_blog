<template>
  <div class="about-wrapper">
    <div class="nav">
      <banner />
    </div>
    <div class="about-me">
      <p>我叫杨小平</p>
      <p>来自重庆，现就读于重庆邮电大学</p>
      <p>2018.02 开始学习自学前端开发，距今一年有余， 2020年我就毕业了</p>
      <p>前端是一个很神奇的东西，很对我胃口</p>
      <p>有一些审美， 但是没什么设计技术</p>
      <p>最开始是因为只需要简单的 HTML & CSS， 漂亮的页面就在手中诞生</p>
      <p>渐渐痴迷于 JavaScript 的给我的自由感觉， 尽管它有许多缺陷</p>
      <p>在自学的道路上，总是充满了坎坷的</p>
      <p>走到现在，迷茫过，憧憬过， 失意过</p>
      <p>但是依然热爱前端， 沉迷技术， 心系算法</p>
      <p>未来， 我希望自己一步一步走向全栈</p>
      <p>这也是我初入前端定下的梦想</p>
    </div>
  </div>
</template>

<script>
import banner from '../components/about/banner'
export default {
  name: "about",
  components: {
    banner
  }
}
</script>

<style scoped lang="stylus">
.about-wrapper
  width 100%
  margin-top 60px
  padding-top 20px
  .nav
    width 1180px
    margin 0 auto
    border 1px solid #ccc
    box-sizing border-box
    border-radius 5px
    padding 10px
    background #fff
  .about-me
    width 1180px
    margin 25px auto 20px auto
    text-align center
    p
      font-size 22px
      font-family cursive;
      box-sizing border-box
      padding 15px
</style>
