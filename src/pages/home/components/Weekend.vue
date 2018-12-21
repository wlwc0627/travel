<template>
    <div>
        <div class="weekend-title">
            周末去哪儿
        </div>
        <ul>
            <li class="item" v-for='item of weekendList' :key='item.id'>
                <div class="img-wrapper">
                    <img class="img" :src="item.imgUrl" />
                </div>
                <div class="item-info">
                    <p class="item-title">
                        {{item.title}}
                    </p>
                    <p class="item-desc">
                        {{item.desc}}
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/65/70e96eb29d7ea5.jpg_r_640x214_2df4cbcd.jpg',
        title: '最爱的温泉',
        desc: '一边泡热汤一边欣赏外面的绮丽风景，在森林中洗涤身心，融于大自然幸福满满'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/b2/5e303795b9aadf.jpg_r_640x214_50ec7a9c.jpg',
        title: '宁波必打卡',
        desc: '宁波美腻到骨子里，不可言喻'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg',
        title: '美丽普陀山',
        desc: '人间仙境杭州，佛教圣地普陀山等你来玩！在这里静心接收佛家的洗礼，用心感受佛文化'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1510/c1/afe3ab32b3bc23.jpg_r_640x214_beb61760.jpg',
        title: '青山秀水，精致暖汤',
        desc: '天然高品质温泉，这是冬天秀美容颜首选之地，让你疲惫的身影在这里消失的无影无踪'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1509/fb/c45a951a9b4305.jpg_r_640x214_26fcfd26.jpg',
        title: '温州动人秋色',
        desc: '细数温州那些美到陶醉的赏秋地'
      } ]
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/mixins.styl'
  .weekend-title
    width: 100%
    height: .8rem
    line-height: .8rem
    font-size: .28rem
    text-indent: .2rem
    background: #eee
  .item
    .img-wrapper
      width: 100%
      height: 0
      padding-bottom: 37.1%
      .img
        width: 100%
    .item-info
      text-indent: .2rem
      padding-top: .1rem
      padding-bottom: .12rem
      .item-title
        font-size: .32rem
        line-height: .4rem
        color: #333
      .item-desc
        width: 90%
        height: .36rem
        font-size: .3rem
        color: #888
        line-height: .36rem
        ellipsis()
</style>
