<template>
    <div class="container">
        <div class="recommend">
            <i class="iconfont">&#xe63b;</i>
            去哪儿推荐
        </div>
        <div class="recommend-wrapper">
            <div class="recommend-item">
                <div class="item left">
                    1
                </div>
                <router-link to='/detail' tag="div" class="item right">
                    2
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailRecommend'
}
</script>

<style lang="stylus" scoped>
  .container
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 71.256%
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
        padding-left: .2rem
        width: 100%
        height: 1.68rem
        border: .02rem solid red
        .item
          float: left
</style>
