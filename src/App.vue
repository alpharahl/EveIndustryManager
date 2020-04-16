<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Login/>
  </div>
</template>

<script>

import Login from "@/components/Login";
export default {
  name: 'App',
  components: {Login},
  mounted(){
    // eslint-disable-next-line no-debugger
    debugger;
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
