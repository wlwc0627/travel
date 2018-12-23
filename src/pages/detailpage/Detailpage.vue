<template>
    <div>
        <detailpage-header></detailpage-header>
        <detailpage-guide></detailpage-guide>
        <detailpage-special></detailpage-special>
        <detailpage-arrival></detailpage-arrival>
    </div>
</template>

<script>
import DetailpageHeader from './components/Header'
import DetailpageGuide from './components/Guide'
import DetailpageSpecial from './components/Special'
import DetailpageArrival from './components/Arrival'
export default {
  name: 'DetailPage',
  components: {
    DetailpageHeader,
    DetailpageGuide,
    DetailpageSpecial,
    DetailpageArrival
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 30rem
</style>
