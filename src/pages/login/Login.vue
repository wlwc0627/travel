<template>
    <div>
        <login-header></login-header>
        <login-content></login-content>
        <login-footer></login-footer>
    </div>
</template>

<script>
import LoginHeader from './components/Header'
import LoginContent from './components/Content'
import LoginFooter from './components/Footer'
export default {
  name: 'Login',
  components: {
    LoginHeader,
    LoginContent,
    LoginFooter
  }
}
</script>

<style lang='stylus' scoped>
</style>
