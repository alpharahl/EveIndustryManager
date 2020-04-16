<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Login v-if="loggedIn === false"/>
    <router-view/>
  </div>
</template>

<script>

import Login from "@/components/Login";
export default {
  name: 'App',
  components: {Login},
  data(){
    return {
      loggedIn: null
    }
  },

  mounted(){
    if (this.$route.query.code){
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}
</style>
