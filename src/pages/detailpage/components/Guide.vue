<template>
    <div class="guide-wrapper">
        <div class="garden border-bottom">
            入园参考
        </div>
        <div class="time border-bottom">
            <p class="time-title">开放时间</p>
            <p class="time-content">08:30 ~ 16:00 开放</p>
        </div>
        <div
          class="more-info border-bottom"
          v-show='showInfo'
          @click='handleItemClick'
        >
            展开更多
            <i class="iconfont">&#xe680;</i>
        </div>
        <div class="more-info-list border-bottom" v-show='!showInfo'>
            <p class="title">免费政策</p>
            <p class="content">1、身高1.2米—1.5米儿童半价，1.2米以下免票;</p>
            <p class="content">2、70周岁以上老人持老人证免票。</p>
            <p class="content">以上优惠政策请直接去景区购买</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailpageGuide',
  data () {
    return {
      showInfo: true
    }
  },
  methods: {
    handleItemClick () {
      this.showInfo = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .guide-wrapper
    padding-top: $headerHeight
    .garden
      width: 100%
      height: .9rem
      line-height: .9rem
      font-size: .32rem
      padding-left: .3rem
      box-sizing: border-box
      font-weight: bold
    .time
      height: 1.16rem
      width: 100%
      font-size: .32rem
      padding-left: .3rem
      padding-top: .2rem
      box-sizing: border-box
      .time-title
        font-size: .32rem
        line-height: .4rem
        font-weight: bold
      .time-content
        font-size: .24rem
        line-height: .4rem
        color: #888
    .more-info
      width: 100%
      height: .88rem
      line-height: .88rem
      text-align: center
      font-size: .26rem
      color: #888
    .more-info-list
      width: 100%
      padding-left: .2rem
      padding-top: .2rem
      .title
        font-size: .3rem
        font-weight: bold
        line-height: .46rem
      .content
        font-size: .26rem
        padding: .12rem
        color: #666
</style>
