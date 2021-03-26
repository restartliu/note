<template>
  <div>
    <h2>I'm home page</h2>
    <p>I'm home page content</p>
    <router-link to="/home/news">news</router-link>
    <router-link to="/home/message">message</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      path: '/home/news'
    }
  },
  // 添加keep-alive可以使用以下两个函数
  activated () {
    this.$router.push(this.path)
  },
  deactivated () {},
  beforeRouteLeave (to, from, next) {
    this.path = this.$route.path
    next()
  }
}
</script>
