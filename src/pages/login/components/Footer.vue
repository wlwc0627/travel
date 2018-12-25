<template>
    <div class="container">
        <div class="top border-bottom">
            <span>
                电脑版
            </span>
            <span>
                关于我们
            </span>
        </div>
        <div class="bottom">
            <p class="icp">Qunar 京ICP备05021087意见反馈</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'LoginFooter'
}
</script>

<style lang='stylus' scoped>
  .container
    position: fixed
    bottom: 0
    width: 100%
    height: 1.6rem
    box-sizing: border-box
    .top
      overflow: hidden
      font-size: .3rem
      span
        float: left
        display: inline-block
        width: 50%
        line-height: .7rem
        text-align: center
        box-sizing: border-box
        color: #333
    .bottom
      font-size: .3rem
      padding: .3rem 0
      text-align: center
      color: #888
</style>
