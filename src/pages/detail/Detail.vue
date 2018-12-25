<template>
    <div>
        <detail-header></detail-header>
        <detail-banner></detail-banner>
        <detail-info></detail-info>
        <detail-recommend></detail-recommend>
        <detail-list></detail-list>
        <home-footer></home-footer>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailInfo from './components/Info'
import DetailList from './components/List'
import DetailRecommend from './components/Recommend'
import HomeFooter from '../home/components/Footer'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailInfo,
    DetailList,
    DetailRecommend,
    HomeFooter
  }
}
</script>

<style lang="stylus" scoped>
</style>
