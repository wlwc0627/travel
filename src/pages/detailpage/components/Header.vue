<template>
    <div>
        <router-link to='/detail/0001' tag='div' class="header-left">
            <i class="iconfont">&#xe606;</i>
        </router-link>
        <div class="header">景点详情</div>
    </div>
</template>

<script>
export default {
  name: 'DetailpageHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
  .header
    position: fixed
    z-index: 2
    top: 0
    left: 0
    width: 100%
    height: $headerHeight
    line-height $headerHeight
    background: $bgColor
    color: #d1fafd
    font-size: .32rem
    text-align: center
  .header-left
      position: fixed
      top: .12rem
      left: .22rem
      z-index: 3
      background: #333
      box-sizing: border-box
      .iconfont
        position: absolute
        top: .16rem
        left: .1rem
        color: #fff
        font-size: .4rem
</style>
