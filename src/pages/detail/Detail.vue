<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <detail-info></detail-info>
        <detail-recommend></detail-recommend>
        <detail-list></detail-list>
        <div class="content"></div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import DetailInfo from './components/Info'
import DetailRecommend from './components/Recommend'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
    DetailInfo,
    DetailRecommend
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
