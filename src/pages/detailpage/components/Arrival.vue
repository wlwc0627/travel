<template>
    <div class="container">
        <div class="tips">
            <div class="tips-title border-bottom">温馨提示</div>
            <div class="more-info">
                <p class="title">注意事项</p>
                <p class="item">1、出行前对于当地的气候，景区以及交通要有所了解；</p>
                <p class="item">2、每到一处旅游地点最好购买一份当地地图，以便游玩；</p>
                <p class="item">3、在景区不要乱扔杂物，尤其是不要乱扔烟头；</p>
                <p class="item">4、在名胜古迹的禁止乱涂乱抹，拍照取景不要随意攀爬古迹建筑等。</p>
            </div>
        </div>
        <div class="grayLine"></div>
        <div class="arrival">
          <div class="tips-title">交通和到达</div>
          <div class="more-info">
                <p class="title">公交路线</p>
                <p class="item">宁波公交541路，341路。从宁波出发转入镇海按公路指示牌走县道即可至景区。</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailpageArrival'
}
</script>

<style lang="stylus" scoped>
  .tips-title
    width: 100%
    height: .9rem
    line-height: .9rem
    box-sizing: border-box
    font-size: .32rem
    padding-left: .3rem
    font-weight: bold
  .more-info
    padding: .1rem .3rem
    font-size: .3rem
    line-height: .5rem
    .title
      color: #333
      font-weight: bold
    .item
      color: #666
  .grayLine
    width: 100%
    height: .24rem
    background: #eee
</style>
