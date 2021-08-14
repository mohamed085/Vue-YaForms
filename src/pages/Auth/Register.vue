<template>
  <div class="home animate__animated animate__fadeIn">
    <div class="nav">
      <main-header></main-header>
    </div>


    <main>
      <router-view />
    </main>


    <div class="footer">
      <main-footer></main-footer>
    </div>

  </div>
</template>

<script>
import MainHeader from "../../components/Main/MainHeader";
import MainFooter from "../../components/Main/MainFooter";
export default {
  name: "Register",
  components: {
    MainFooter,
    MainHeader
  },

}
</script>

<style scoped>

.nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.footer {
  position: fixed;
  width: 100%;
  bottom: 0;
}

main {
  margin-top: 80px;
}
</style>