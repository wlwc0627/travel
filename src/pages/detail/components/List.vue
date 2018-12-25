<template>
    <div class="container border-top">
        <div class="title">门票</div>
        <div class="wrapper" v-for='(item, index) of list' :key='index'>
            <div class="single-item border-bottom">
                <i class="iconfont">&#xe610;</i>
                {{item.title}}
            </div>
        </div>
        <div class="moreInfo border-bottom">查看更多 · · · </div>
    </div>
</template>

<script>
export default {
  name: 'DetailList',
  data () {
    return {
      list: [{
        id: '0001',
        title: '成人票'
      }, {
        id: '0002',
        title: '儿童票'
      }, {
        id: '0003',
        title: '特惠票'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  margin-top: .24rem
  .title
    font-size: .32rem
    height: .8rem
    line-height: .8rem
    padding-left: .3rem
    color: #333
  .single-item
    font-size: .3rem
    padding: .2rem .2rem
    color: #333
    .iconfont
      color: red
  .moreInfo
    width: 100%
    text-align: center
    font-size: .3rem
    color: #666
    height: .8rem
    line-height: .8rem
</style>
