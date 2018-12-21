<template>
    <div class="header">
        城市选择
        <router-link to='/' class="header-left">
            <i class="iconfont">&#xe606;</i>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang='stylus' scoped>
  @import '~styles/variables.styl'
  .header
    position: relative
    width: 100%
    height: $headerHeight
    line-height $headerHeight
    background: $bgColor
    color: #d1fafd
    font-size: .32rem
    text-align: center
    .header-left
      position: absolute
      left: .1rem
      top: 0
      width: .6rem
      text-decoration: none
      .iconfont
        font-size: .42rem
        color: #fff
</style>
