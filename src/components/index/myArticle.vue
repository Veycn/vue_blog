<template>
  <div class="container">
    <div class="title">
      <h2>使用 Nginx 实现 tomcat、glassfish 等 web 服务器负载均衡</h2>
    </div>
    <div class="tags">
      <span>Nginx</span>
      <span>负载均衡</span>
    </div>
    <div class="content">
      <p>1.web服务器负载均衡简介web服务器负载均衡是指将多台可用单节点服务器组合成web服务器集群，然后通过负载均衡器将客户端请求均匀的转发到不同的单节点web服务器上，从而增加整个web服务器集群的吞吐量</p>
    </div>
    <div class="info">
      <i class="el-icon-star-off"></i><span class="author"> vey</span>
      <i class="el-icon-view"></i><span> views: 3306</span>
      <i class="el-icon-edit"></i><span> 评论：38条</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "myArticle"
}
</script>

<style scoped lang="stylus">
.container
  width 100%
  box-sizing border-box
  padding 10px
  border 1px solid #ccc
  border-radius 8px
  transition 0.3s
  box-shadow 3px 4px 6px rgba(0, 0, 0, .05)
  margin-bottom 20px
  &:hover {
    box-shadow 3px 4px 10px rgba(0, 0, 0, .2)
  }
  .title
    h2
      margin 10px 0
      font-size 22px
      font-weight 400
  .tags
    margin 15px 10px
    span
      background #777
      padding 0 5px
      border-radius 3px
  .content
    p
      color #5f5f5f
      font-size 16px
      line-height 20px
      letter-spacing 1px
  .info
    margin-top 12px
    font-size 12px
</style>
