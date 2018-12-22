<template>
    <ul class="list">
        <li class="item">A</li>
        <li class="item">B</li>
        <li class="item">C</li>
        <li class="item">D</li>
        <li class="item">E</li>
        <li class="item">F</li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet'
}
</script>

<style lang='stylus' scoped>
  @import '~styles/variables.styl'
  .list
    display: flex
    justify-content: center
    flex-direction: column
    position: absolute
    right: 0
    bottom: 0
    top: 1.70rem
    width: .44rem
    font-size: .36rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
