<template>
    <div class="container">
        <div class="introduce border-bottom">
            <div class="left-item">
                <router-link tag='span' to='/comment' class="item-info">
                    <div class="score">
                        <p class="first-line">
                            <span class="first-line-num">4.8</span>
                            分&nbsp;&nbsp;&nbsp;很棒
                        </p>
                        <p class="comment">
                            449条评论
                        </p>
                    </div>
                    <div class="right-arrow">
                        <i class="iconfont">&#xe62f;</i>
                    </div>
                </router-link>
                <router-link tag='span' to='/detailPage' class="item-info">
                    <div class="score">
                        <p class="site-info">景点简介</p>
                        <p class="comment">开放时间、贴士</p>
                    </div>
                    <div class="right-arrow">
                        <i class="iconfont">&#xe62f;</i>
                    </div>
                </router-link>
            </div>
        </div>
        <router-link to="/map" tag="div" class="address border-bottom">
            <i class="iconfont">&#xe61b;</i>
            浙江省宁波市镇海区招宝山路10号&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="iconfont right-arrow">&#xe62f;</i>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'DetailInfo'
}
</script>

<style lang="stylus" scoped>
  .container
    overflow: hidden
    position: relative
    width: 100%
    height: 0
    padding-bottom: 31.25%
    .introduce
      overflow: hidden
      .item-info
        position: relative
        float: left
        display: inline-block
        padding-right: .6rem
        box-sizing: border-box
        width: 50%
        height: 0
        padding-bottom: 20%
        box-sizing: border-box
        font-size: .32rem
        .score
          position: absolute
          top: 50%
          margin-top: -.41rem
          width: 100%
          padding-left: .2rem
          height: .82rem
          .comment
            color: #888
            font-size: .24rem
            padding: .12rem 0
          .first-line
            color: #fa0
            .first-line-num
              font-size: .5rem
          .site-info
            font-size: .3rem
            color: #333
            padding-bottom: .15rem
        .right-arrow
          position: absolute
          top: 0
          bottom: 0
          right: 0
          width: .6rem
          .iconfont
            position: absolute
            right: .2rem
            top: 50%
            width: .4rem
            margin-top: -.2rem
    .address
      position: absolte
      bottom: 0
      left: 0
      right: 0
      height: .65rem
      font-size: .3rem
      line-height: .65rem
      padding-left: .2rem
      color: #888
      .iconfont
        font-size: .3rem
        color: #aaa
      .right-arrow
        float: right
        margin-right: .3rem
</style>
