<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="handleclick"></button>
    <router-view/>
  </div>
</template>

<script>
import router from './router'
export default {
  name: 'App',
  // router,
  methods:{
    handleclick:function(){
      this.$router.push({name:'fo',params:{id:123}})
      // console.log($route)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
