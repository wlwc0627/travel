<template>
    <div class="search">
        <input type="text" class="search-input" placeholder="请输入城市名称" />
    </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang='stylus' scoped>
  @import '~styles/variables.styl'
  .search
    position: relative
    width: 100%
    height: .8rem
    line-height: .8rem
    background: $bgColor
    text-align: center
    .search-input
      position: absolute
      box-sizing: border-box
      top: .06rem
      left: 1%
      width: 98%
      height: .68rem
      outline: none
      border-radius: .1rem
      text-align: center
      color: #666
      font-size: .3rem
      padding: 0 .2rem
</style>
