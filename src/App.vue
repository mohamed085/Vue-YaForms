<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import store from "@/store";

export default {
  created() {
    this.$store.dispatch('tryLogin');
    console.log(store.getters.isAuthenticated)
    console.log(store.getters.token)
  }
}
</script>

<style>
input {
  border: none;
}

input:focus {
  outline: none;
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>
