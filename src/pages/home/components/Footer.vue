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
                    <router-link tag='li' to='/'>
                        登录
                    </router-link>
                    <router-link tag='li' to='/'>
                        我的订单
                    </router-link>
                    <router-link tag='li' to='/'>
                        最近浏览
                    </router-link>
                    <router-link tag='li' to='/'>
                        关于我们
                    </router-link>
                </ul>
            </div>
            <div class="entry">

            </div>
        </div>
        <div class="footer-bottom">

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
    height: 1.5rem
    background: #eee
    .item
      float: left
      width: 25%
      height: .7rem
      color: #333
      font-size: .26rem
      line-height: .7rem
      text-align: center
</style>
