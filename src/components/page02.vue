<template>
  <div>
    <h1>{{$router.params.name}}</h1>
    <h2 class="text-center">{{title}}</h2>
    <router-link to="/page1">跳转</router-link>
    <button @click="gopage1">编程式跳转</button>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        title: '好好学《小半》别闹'
      }
    },
    methods: {
      gopage1: function () {
        this.$router.push({path: '/page1'})
      }
    },
    components: {}
  }
</script>
