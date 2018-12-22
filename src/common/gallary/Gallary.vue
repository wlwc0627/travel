<template>
    <div class="container" @click='handleGallaryClose'>
        <div class="wrapper">
            <swiper :options='swiperOptions'>
                <swiper-slide v-for='(item, index) of gallaryList' :key='index'>
                    <img :src="item.imgUrl" alt="" class="swiper-img" />
                </swiper-slide>
                <div class="swiper-pagination" slot='pagination'></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      },
      gallaryList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201301/07/69da98fb12514e4893835fbb.jpg_r_800x800_b2b38eb9.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201301/07/a272a054b166ecb093835fbb.jpg_r_800x800_b364cc7b.jpg'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201301/07/7195d52817ffe47a93835fbb.jpg_r_800x800_aa26522b.jpg'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201301/07/982ee3c8af6ef58f93835fbb.jpg_r_800x800_50e33802.jpg'
      }]
    }
  },
  methods: {
    handleGallaryClose () {
      this.$emit('close')
    }
  }
}
</script>

<style lang='stylus' scoped>
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 9
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    background: #000
    .wrapper
      overflow: hidden
      width: 100%
      height: 0
      padding-bottom: 100%
      .swiper-img
        width: 100%
      .swiper-pagination
        color: #fff
        position: fixed
        bottom: 1rem
        font-size: .32rem
</style>
