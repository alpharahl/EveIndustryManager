<template>
  <div>
    Please login
  </div>
</template>

<script>
  import {v4 as uuidv4 } from 'uuid';
  // scope=esi-characters.read_blueprints.v1&
  export default {
    name: "Login",
    mounted(){
      // window.location.replace("https://login.eveonline.com/v2/oauth/authorize/?response_type=code&redirect_url=" + encodeURIComponent("http://localhost:8080/callback/") + `&client_id=eb2f857d6cd54c2fb4b9d8462f8920fa&state=${uuidv4()}`)
      window.location.replace(`https://login.eveonline.com/v2/oauth/authorize/?response_type=code&redirect_uri=${encodeURIComponent("http://localhost:8080/callback/")}&client_id=${'eb2f857d6cd54c2fb4b9d8462f8920fa'}&scope=esi-characters.read_blueprints.v1&state=${uuidv4()}`)
    }
  }
</script>

<style scoped>

</style>
