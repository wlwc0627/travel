<template>
  <div class="header">
    <div class="header-left">
     <i class="iconfont">&#xe606;</i>
    </div>
    <div class="header-input">
      <i class="iconfont">&#xe62b;</i>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <i class="iconfont">&#xe6bd;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang='stylus' scoped>
  @import '~styles/variables.styl'
  .header
    display: flex
    height: .88rem
    line-height .88rem
    background: $bgColor
    color: #d1fafd
    font-size: .32rem
    .header-left
      float: left
      width: .66rem
      text-align: center
      .iconfont
        font-size: .4rem
    .header-input
      flex: 1
      background: #fff
      border-radius: .12rem
      color: #ccc
      height: .66rem
      line-height: .66rem
      margin-top: .1rem
      margin-left: .2rem
      font-size: .3rem
      padding-left: .24rem
      .iconfont
        font-size: .3rem
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      font-size: .3rem
      .iconfont
        font-size: .2rem
</style>
