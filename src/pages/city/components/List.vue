<template>
    <div class='list' ref='wrapper'>
        <div>
            <div class='area'>
                <div class='title border-topbottom'>当前城市</div>
                <div class='button-list'>
                    <div class='button'>北京</div>
                </div>
            </div>
            <div class='area'>
                <div class='title border-topbottom'>热门城市</div>
                <div class='button-list'>
                    <div class='button' v-for='item of hotCities' :key='item.id'>
                      {{item.name}}
                    </div>
                </div>
            </div>
            <div class='area' v-for='(item, key, i) of allCities' :key='i'>
                <div class='title border-topbottom'>
                {{key}}
                </div>
                <div class='item-list'>
                    <div
                      class='item border-bottom'
                      v-for='innerText of item'
                      :key='innerText.id'
                    >
                      {{innerText.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  data () {
    return {
      hotCities: [{
        id: 1,
        name: '北京'
      }, {
        id: 3,
        name: '上海'
      }, {
        id: 47,
        name: '西安'
      }, {
        id: 239,
        name: '三亚'
      }, {
        id: 188,
        name: '丽江'
      }, {
        id: 125,
        name: '桂林'
      }],
      allCities: {
        A: [{
          id: '0001',
          name: '安庆'
        }],
        B: [{
          id: '0002',
          name: '北京'
        }, {
          id: '00021',
          name: '北海'
        }],
        C: [{
          id: '0003',
          name: '长沙'
        }, {
          id: '00031',
          name: '长春'
        }, {
          id: '00032',
          name: '成都'
        }],
        D: [{
          id: '0004',
          name: '大连'
        }, {
          id: '00041',
          name: '东莞'
        }, {
          id: '00042',
          name: '大理'
        }],
        E: [{
          id: '0005',
          name: '鄂州'
        }],
        F: [{
          id: '0006',
          name: '福州'
        }],
        G: [{
          id: '0007',
          name: '广州'
        }],
        H: [{
          id: '0008',
          name: '哈尔滨'
        }],
        J: [{
          id: '0010',
          name: '荆州'
        }],
        K: [{
          id: '0011',
          name: '凯里'
        }],
        L: [{
          id: '0012',
          name: '丽水'
        }],
        M: [{
          id: '0013',
          name: '马鞍山'
        }],
        N: [{
          id: '0014',
          name: '宁波'
        }],
        P: [{
          id: '0015',
          name: '盘锦'
        }],
        Q: [{
          id: '0016',
          name: '泉州'
        }],
        R: [{
          id: '0017',
          name: '日照'
        }],
        S: [{
          id: '0018',
          name: '上海'
        }],
        T: [{
          id: '0019',
          name: '天津'
        }],
        W: [{
          id: '0020',
          name: '武汉'
        }],
        X: [{
          id: '0021',
          name: '厦门'
        }],
        Y: [{
          id: '0022',
          name: '扬州'
        }],
        Z: [{
          id: '0023',
          name: '肇庆'
        }, {
          id: '00231',
          name: '郑州'
        }]
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang='stylus' scoped>
  .border-topbottom
    &:before
      background: #777
    &:after
      background: #777
  .border-bottom
    &:before
      background: #eee
  .list
    position: absolute
    overflow: hidden
    left: 0
    top: 1.68rem
    bottom: 0
    right: 0
    .title
      width: 100%
      padding: .12rem .2rem
      font-size: .30rem
      background: #eee
      color: #666
    .button-list
      overflow: hidden
      box-sizing: border-box
      padding: .1rem .4rem .1rem .2rem
      .button
        float: left
        width: 25%
        font-size: .36rem
        padding: .12rem .1rem
        margin: .12rem .1rem
        border: .02rem solid #888
        text-align: center
        color: #888
        border-radius: .06rem
    .item-list
      .item
        line-height: .72rem
        padding-left: .24rem
        font-size: .28rem
        color: #333
</style>
