<template>
    <div class="container">
        <div class="header border-bottom">
            <router-link to="/" tag="div" class="header-left">
                <i class="iconfont">&#xe606;</i>
            </router-link>
            <div class="header-center">登&nbsp;录</div>
            <div class="register">注册</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'LoginHeader'
}
</script>

<style lang='stylus' scoped>
  @import '~styles/variables.styl'
  .header
    overflow: hidden
    display: flex
    height: $headerHeight
    line-height $headerHeight
    background: $bgColor
    color: #d1fafd
    font-size: .32rem
    .header-left
      float: left
      width: .66rem
      text-align: center
      .iconfont
        font-size: .4rem
    .header-center
      width: 100%
      text-align: center
      font-size: .36rem
      color: #fff
    .register
      float: right
      width: 1.2rem
      height: $headerHeight
      text-align: center
</style>
