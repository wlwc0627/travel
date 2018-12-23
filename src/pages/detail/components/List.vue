<template>
    <div class="container">
        <div class="wrapper" v-for='(item, index) of list' :key='index'>
            <div class="single-item border-bottom">
                <i class="iconfont">&#xe610;</i>
                {{item.title}}
            </div>
        </div>
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
  .single-item
    font-size: .3rem
    padding: .1rem .2rem
    background: #eee
    color: #333
    .iconfont
      color: red
</style>
