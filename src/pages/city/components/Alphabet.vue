<template>
    <ul class="list">
        <li class="item" v-for='item of itemList' :key='item.id'>{{item.name}}</li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  data () {
    return {
      itemList: [{
        id: '0001',
        name: 'A'
      }, {
        id: '0002',
        name: 'B'
      }, {
        id: '0003',
        name: 'C'
      }, {
        id: '0004',
        name: 'D'
      }, {
        id: '0005',
        name: 'E'
      }, {
        id: '0006',
        name: 'F'
      }, {
        id: '0007',
        name: 'G'
      }, {
        id: '0008',
        name: 'H'
      }, {
        id: '0009',
        name: 'J'
      }, {
        id: '0010',
        name: 'K'
      }, {
        id: '0011',
        name: 'L'
      }, {
        id: '0012',
        name: 'M'
      }, {
        id: '0013',
        name: 'N'
      }, {
        id: '0014',
        name: 'P'
      }, {
        id: '0015',
        name: 'Q'
      }, {
        id: '0016',
        name: 'R'
      }, {
        id: '0017',
        name: 'S'
      }, {
        id: '0018',
        name: 'T'
      }, {
        id: '0019',
        name: 'W'
      }, {
        id: '0020',
        name: 'X'
      }, {
        id: '0021',
        name: 'Y'
      }, {
        id: '0022',
        name: 'Z'
      }]
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/variables.styl'
  .list
    display: flex
    justify-content: center
    flex-direction: column
    position: absolute
    right: 0
    bottom: 0
    top: 1.70rem
    width: .44rem
    font-size: .36rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
