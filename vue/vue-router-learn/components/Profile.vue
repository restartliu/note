<template>
  <div>
    <h2>I'm profile component</h2>
    <ul>
      <li v-for="(value, key) in $route.query" :key="value">
        {{ key }}: {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>
