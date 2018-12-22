<template>
    <div>
        <router-link to='/' tag='div' class="header-left" v-show='!showHeader'>
            <i class="iconfont">&#xe606;</i>
        </router-link>
        <div class="header" v-show='showHeader' :style='opacityStyle'>景点详情</div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showHeader: false,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showHeader = true
      } else {
        this.showHeader = false
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/variables.styl'
  .header
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
      top: .22rem
      left: .22rem
      z-index: 2
      width: .7rem
      height: .7rem
      background: #333
      box-sizing: border-box
      border-radius: 50%
      .iconfont
        position: absolute
        top: .16rem
        left: .1rem
        color: #fff
        font-size: .4rem
</style>
