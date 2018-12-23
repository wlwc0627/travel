<template>
    <div>
        <router-link to='/detail/0001' tag='div' class="header-left">
            <i class="iconfont">&#xe606;</i>
        </router-link>
        <div class="header">点评</div>
        <router-link to="/detail/0001" tag="div" class="no-comments">
            <div class="info">
                评论正在加载中···
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'Comment'
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
      position: absolute
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
  .no-comments
    position: fixed
    z-index: 5
    top: 0
    bottom: 0
    left: 0
    right: 0
    background: rgba(0,0,0, .4)
    .info
      position: absolute
      top: 50%
      left: 50%
      margin-left: -2.5rem
      margin-top: -1rem
      width: 5rem
      height: 2rem
      line-height: 2rem
      text-align: center
      background: #fff
      font-size: .4rem
      border-radius: .25rem
      color: #555
</style>
