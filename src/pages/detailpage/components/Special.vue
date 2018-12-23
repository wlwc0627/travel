<template>
    <div class="container">
        <div class="grayLine"></div>
        <div class="desc" v-for='item of detailList' :key='item.id'>
            <div class="title">{{item.title}}</div>
            <div class="content">
                {{item.content}}
            </div>
        </div>
        <div class="img-wrapper">
            <img src="http://img1.qunarzz.com/sight/p0/201301/07/fbe0604e6d2d668293835fbb.jpg_710x420_a94aa893.jpg" class="pic" alt="">
            <img src="http://img1.qunarzz.com/sight/p0/201301/07/a272a054b166ecb093835fbb.jpg_710x420_fc08033f.jpg" class="pic" alt="">
        </div>
        <div class="grayLine"></div>
    </div>
</template>

<script>
export default {
  name: 'DetailpageSpecial',
  data () {
    return {
      detailList: [{
        id: '00011',
        title: '特色玩法',
        content: '招宝山是宁波市十大风景游览区之一，是宁波市集自然风光、人文景观、宗教文化于一体的综合性游览区，也是镇海口海防遗址的重要组成部分。招宝山距宁波市区15公里，位于宁波甬江出海口，是镇海关隘、甬江咽喉、海防要塞，素有“浙东门户”之称。招宝山因为“潮汐出入可经”，波涛汹涌，骇浪滔天，又名候涛山。又因山巅原建有“插天鳌柱塔”，故又称鳌柱山。其他处海口，“商舶所经、百轸交集”，改称招宝山，寓“招财进宝”之意。招宝山“固六邑之咽喉，全浙之关键，而为商船出入之要道也，历来是兵家的必争之地，为了抗击外来的侵略和骚扰，多少民族英雄和爱国志士，在这里写下了许多可歌可泣的历史篇章。招宝山山势峻险，景色秀丽。主要景点有“鳌柱插天”、“千帆破浪”、“蜃楼现幻”、“山楼观旭”、“龙洞出云”、“梵台秋月”、“棋子枰”、“半山亭”等。'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    width: 100%
    .grayLine
      width: 100%
      height: .3rem
      background: #eee
    .desc
      .title
        height: .9rem
        line-height: .9rem
        padding-left: .3rem
        font-size: .32rem
        font-weight: bold
        box-sizing: border-box
      .content
        padding: .1rem .3rem
        font-size: .26rem
        color: #888
        line-height: .4rem
        box-sizing: border-box
    .img-wrapper
      width: 100%
      padding: .12rem .2rem 0 .2rem
      box-sizing: border-box
      .pic
        width: 100%
</style>
