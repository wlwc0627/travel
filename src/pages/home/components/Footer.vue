<template>
    <div class="foot-wrapper">
        <div class="grayLine"></div>
        <div class="footer-top">
            <p class="notice border-bottom">票面价是指通过景区指定窗口售卖的纸质门票上标注的价格</p>
            <div class="icons">
                <ul>
                    <li class="item">
                        <i class="iconfont">&#xe63c;</i>飞机
                    </li>
                    <li class="item">
                        <i class="iconfont">&#xe655;</i>酒店
                    </li>
                    <li class="item">
                        <i class="iconfont">&#xe60e;</i>公寓
                    </li>
                    <li class="item">
                        更多<i class="iconfont">&#xe6bd;</i>
                    </li>
                </ul>
            </div>
            <div class="entry">
                <router-link tag='div' class="entry-port" to='/login'>
                    登录
                </router-link>
                <router-link tag='div' class="entry-port" to='/'>
                    我的订单
                </router-link>
                <router-link tag='div' class="entry-port" to='/'>
                    最近浏览
                </router-link>
                <router-link tag='div' class="entry-port" to='/about'>
                    关于我们
                </router-link>
            </div>
        </div>
        <div class="footer-bottom">
            <router-link to='/' tag='div' class="change active">触屏版</router-link>
            <router-link to='/' tag='div' class="change">电脑版</router-link>
            <p class="icp">Qunar 京ICP备05021087意见反馈</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeFooter'
}
</script>

<style lang="stylus" scoped>
  .grayLine
    width: 100%
    height: .2rem
    background: #eee
  .notice
    font-size: .26rem
    padding: .12rem .2rem .12rem .3rem
    line-height: .4rem
    color: #888
  .icons
    width: 100%
    height: .7rem
    background: #eee
    .item
      float: left
      width: 25%
      height: .7rem
      color: #333
      font-size: .26rem
      line-height: .7rem
      text-align: center
  .entry
    background: #eee
    width: 100%
    height: .5rem
    line-height: .5rem
    .entry-port
      width: 25%
      float: left
      font-size: .24rem
      text-align: center
      color: #12bffd
  .footer-bottom
    overflow: hidden
    width: 100%
    height: 1.16rem
    text-align: center
    color: #333
    .change
      width: 50%
      height: .48rem
      float: left
      font-size: .26rem
      padding: .1rem .2rem 0 .3rem
      box-sizing: border-box
    .icp
      width: 100%
      height: .8rem
      line-height: .8rem
      font-size: .24rem
      padding-bottom: .3rem
  .active
    color: #12bffd
</style>
