<template>
    <div>
        <div class="recommend-title">
            热销推荐
        </div>
        <ul>
            <li
              class="item border-bottom"
              v-for='item of recommendList'
              :key='item.id'
            >
                <img class="item-img" :src="item.imgUrl" />
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">
                        <i class="iconfont">&#xe60c;</i>
                        <i class="iconfont">&#xe60c;</i>
                        <i class="iconfont">&#xe60c;</i>
                        <i class="iconfont">&#xe60c;</i>
                        <i class="iconfont">&#xe60c;</i>
                        {{item.comments}}条评论
                    </p>
                    <p class="item-price">
                        <i class="iconfont">&#xe66b;</i>
                        <span class="price-num">{{item.priceNum}}</span>&nbsp;起
                        <span class="item-city">{{item.city }}</span>
                    </p>
                </div>
            </li>
        </ul>
        <div class="more-item border-bottom">
            <a href="#" class="item-url">更多推荐</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        title: '招宝山',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201301/07/69da98fb12514e4893835fbb.jpg_200x200_e2b4d1e8.jpg',
        comments: '96',
        priceNum: '30',
        city: '镇海区'
      }, {
        id: '0002',
        title: '天一阁',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1808/df/dfe6d033f26a9955a3.img.jpg_200x200_b8c937c3.jpg',
        comments: '4168',
        priceNum: '27',
        city: '海曙区'
      }, {
        id: '0003',
        title: '四明山森林公园',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/37/37b8877cd2c8055e90.water.jpg_200x200_faf644e9.jpg',
        comments: '528',
        priceNum: '45',
        city: '余姚市'
      }, {
        id: '0004',
        title: '象山影视城',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1605/52/525ddf1c4ea1e22e90.img.jpg_200x200_d7ca9d71.jpg',
        comments: '4850',
        priceNum: '70',
        city: '象山县'
      }, {
        id: '0005',
        title: '东钱湖',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/b6/b60b5c3acd9845de90.water.jpg_200x200_362a96e9.jpg',
        comments: '2317',
        priceNum: '18',
        city: '鄞州区'
      }]
    }
  }
}
</script>

<style lang='stylus' scoped>
  .recommend-title
    width: 100%
    height: .8rem
    line-height: .8rem
    font-size: .28rem
    text-indent: .2rem
    background: #eee
  .item
    overflow: hidden
    position: relative
    height: 2.24rem
    display: flex
    box-sizing: border-box
    padding: .12rem
    .item-img
      width: 2rem
      height: 2rem
      margin-right: .1rem
    .item-info
      flex: 1
      .item-title
        width: 80%
        height: .4rem
        font-size: .36rem
        margin-top: .2rem
        text-indent: .2rem
        color: #222
      .item-desc
        font-size: .28rem
        text-indent: .2rem
        padding-top: .15rem
        ellipsis()
        color: #888
        .iconfont
          color: #fbd041
      .item-price
        position: absolute
        bottom: .3rem
        left: 2.4rem
        right: .2rem
        top: 1.4rem
        font-size: .24rem
        line-height: .48rem
        color: #666
        .iconfont
          color: #fbd041
          font-size: .3rem
          margin-right: 0
        .item-city
          position: absolute
          right: .2rem
          bottom: 0
        .price-num
          font-size: .45rem
          color: #fbb041
  .more-item
    width: 100%
    height: .7rem
    line-height: .6rem
    font-size: .26rem
    text-align: center
    .item-url
      text-decoration: none
</style>
