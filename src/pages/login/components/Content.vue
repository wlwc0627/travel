<template>
    <div class="container">
        <form action="#" method="post">
            <div class="wrapper">
                <i class="iconfont">&#xe6c0;</i>
                <input type="text" class="username" placeholder="请输入用户名">
            </div>
            <div class="wrapper">
                <i class="iconfont">&#xe620;</i>
                <input type="password" class="password" placeholder="请输入密码">
            </div>
            <button>登&nbsp;录</button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'LoginContent'
}
</script>

<style lang='stylus' scoped>
.container
  position: fixed
  top: 50%
  left: 50%
  margin-top: -2.6rem
  margin-left: -2rem
  width: 4rem
  height: 4rem
  .wrapper
    width: 100%
    padding: 0 .1rem
    box-sizing: border-box
    input
      box-sizing: border-box
      width: 3rem
      height: .6rem
      margin-left: -.2rem
      padding-left: .2rem
      font-size: .26rem
      border: .02rem solid #333
    .iconfont
      display: inline-block
      width: .4rem
      height: .52rem
      font-size: .4rem
      margin-left: .2rem
  button
    width: 2rem
    height: .6rem
    line-height: .6rem
    text-align: center
    background: #12b5d7
    border: none
    margin-left: 1rem
    color: #fff
    border-radius: .2rem
</style>
