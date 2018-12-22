<template>
    <div>
        <div class="banner" @click='handleGallaryClick'>
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/201301/07/69da98fb12514e4893835fbb.jpg_600x330_8f75f5c0.jpg" alt="">
            <div class="banner-info">
                <div class="banner-title">
                    招宝山(AAAA景区)
                </div>
                <div class="banner-pic">
                    <i class="iconfont">&#xe6ab;</i>
                    5
                </div>
            </div>
        </div>
        <common-gallary v-show='showGallary' @close='handleGallaryClose'></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handleGallaryClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    overflow: hidden
    position: relative
    width: 100%
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      overflow: hidden
      position: relative
      bottom: 1rem
      left: 0
      right: 0
      height: .6rem
      line-height: .6rem
      padding-left: .2rem
      box-sizing: border-box
      .banner-title
        color: #fff
        font-size: .36rem
      .banner-pic
        position: absolute
        box-sizing: border-box
        height: .36rem
        line-height: .36rem
        width: .9rem
        text-align: center
        background: rgba(255, 255, 255, .2)
        top: .2rem
        right: .7rem
        color: #fff
        font-size: .26rem
        border-radius: .2rem
        .iconfont
          color: #fff
          font-size: .26rem
</style>
