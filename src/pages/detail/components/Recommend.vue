<template>
    <div class="container">
        <div class="grayLine"></div>
        <div class="recommend">
            <i class="iconfont">&#xe63b;</i>
            去哪儿推荐
        </div>
        <div class="recommend-wrapper">
            <div class="recommend-item border-bottom" v-for='item of RecommendList' :key='item.id'>
                <div class="item left">
                    <p class="title">{{item.title}}</p>
                    <p class="list">可订明日</p>
                    <p class="list">自营/随时退</p>
                </div>
                <div class="item right">
                    <p>
                        <i class="iconfont">&#xe66b;</i>
                        {{item.price}}
                    </p>
                    <div>预订</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailRecommend',
  data () {
    return {
      RecommendList: [{
        id: '0001',
        title: '镇海招宝山门票',
        price: '48'
      }, {
        id: '0002',
        title: '镇海招宝山门票儿童票',
        price: '48'
      }, {
        id: '0003',
        title: '招宝山(手机导游)不含门票',
        price: '3'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    overflow: hidden
    width: 100%
    margin-bottom: .12rem
    .grayLine
      width: 100%
      height: .2rem
      background: #eee
    .recommend
      font-size: .32rem
      color: #333
      background: #fff
      padding: .2rem .2rem
      .iconfont
        color: red
        font-size: .4rem
    .recommend-wrapper
      width: 100%
      .recommend-item
        overflowL: hidden
        box-sizing: border-box
        padding: .1rem .2rem
        width: 100%
        height: 1.68rem
        .item
          float: left
        .left
          width: 70%
          .title
            font-size: .32rem
            padding: .12rem .1rem
          .list
            font-size: .28rem
            padding: .08rem
            color: #1faffd
        .right
          width: 30%
          div
            width: 1.4rem
            height: .5rem
            text-align: center
            line-height: .5rem
            font-size: .3rem
            margin: 0 auto
            background: #ffd40a
            border-radius: .12rem
            color: #fff
          p
            padding-top: .2rem
            font-size: .5rem
            padding-bottom: .2rem
            color: #ffd400
            .iconfont
              padding-left: .4rem
              font-size: .32rem
              color: #ffd400
</style>
