<template>
    <div class="container">
        <router-link to='/' tag='div' class="header-left">
            <i class="iconfont">&#xe606;</i>
        </router-link>
        <div class="header">景点详情</div>
        <router-link to='/detail/0001' tag='div' class="img-wrapper">
            <div class="message">
                <p class="msg-info">地图数据正在加载中···</p>
                <p class='msg-back'>单击屏幕任意一处返回</p>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'Map'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    z-index: 2
    position: fixed
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
  .img-wrapper
    position: fixed
    z-index: 5
    top: 0
    bottom: 0
    right: 0
    left: 0
    background: rgba( 0, 0, 0, .5)
    .message
      position: absolute
      top: 50%
      left: 10%
      margin-top: -2rem
      padding: 1rem
      box-sizing: border-box
      border-radius: .3rem
      width: 80%
      height: 4rem
      background: #fff
      font-size: .32rem
      text-align: center
      .msg-info
        position: absolute
        top: 1rem
        left: 50%
        margin-left: -2rem
        color: #333
        font-size: .4rem
        line-height: 1rem
        width: 4rem
      .msg-back
        position: absolute
        bottom: 1.2rem
        left: 50%
        margin-left: -2rem
        width: 4rem
        color: #222
        font-size: .33rem
</style>
