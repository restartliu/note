<template>
  <div>
    <h2>I'm user page</h2>
    <p>I'm user {{ userId }} page content</p>
  </div>
</template>

<script>
export default {
  name: 'User',
  computed: {
    userId () {
      // 这个route对象是当前处于活跃状态下的路由
      // 通过这个对象可以拿到传递过来的值
      return this.$route.params.userId
    }
  }
}
</script>
