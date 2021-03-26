<template>
  <div id="app">
    <h1>HEAD</h1>
    <!-- router-vue默认渲染为a标签，可以通过tag属性规定渲染方式 -->
    <!-- 更改默认跳转设置，history.pushState => replaceState -->
    <!-- 使用active-class属性更改标签默认class属性 -->
    <div>
      routerView:
      <br />
      <router-link to="/home" tag="button" replace active-class="active"
        >home</router-link
      >
      <!-- 更改默认渲染标签 -->
      <router-link to="/about" tag="button" replace>about</router-link>
      <router-link :to="'/user/' + userId" tag="button" replace
        >user</router-link
      >
      <!-- 使用query的形式传递参数（对象的方式书写） -->
      <router-link
        :to="{
          path: '/profile',
          query: { name: 'why', age: 18, height: 1.88 }
        }"
        tag="button"
        replace
        >profile</router-link
      >
    </div>
    <!-- <div>
      button:
      <br />
      <button @click="homeClick">home</button>
      <button @click="aboutClick">about</button>
    </div> -->
    <!-- keep-alive是vue内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染 -->
    <!-- router-view也是一个组件，如果直接被包在keep-alive里面，所有路径匹配到的视图组件都会被缓存 -->
    <!-- keep-alive中的两个属性，include、exclude -->
    <!-- include、exclude中使用逗号隔开待匹配串时禁止添加空格 -->
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>
    <h2>TAIL</h2>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      userId: 'lisi'
    }
  },
  methods: {
    homeClick () {
      // 通过代码的方式修改路由
      // this.$router.push('/home') pushState方式
      // replaceState方式
      this.$router.replace('/home')
      console.log('homeClick')
    },
    aboutClick () {
      this.$router.push('/about')
      console.log('aboutClick')
    }
  }
}
</script>

<style>
.active {
  color: blue;
}
</style>
