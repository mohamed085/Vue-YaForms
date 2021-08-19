<template>
  <div>
    <div class="body p-4 en animate__animated animate__backInLeft" v-if="getLang === 'en'">
      <div class="header">
        <h1>Account Scope</h1>
      </div>
      <div class="accounts">
        <router-link to="/register/individual-account">
          <div class="accountType">
            <i class="fas fa-male"></i>
            <span>Individual Account</span>
          </div>
        </router-link>
        <router-link to="/register/business-account">
          <div class="accountType">
            <i class="fas fa-building"></i>
            <span>Business Account</span>
          </div>
        </router-link>
      </div>
    </div>

    <div class="body p-4 ar animate__animated animate__backInRight" v-if="getLang === 'ar'">
      <div class="header">
        <h1>نطاق الحساب</h1>
      </div>
      <div class="accounts">
        <router-link to="/register/individual-account">
          <div class="accountType">
            <i class="fas fa-male"></i>
            <span>حساب فرد</span>
          </div>
        </router-link>
        <router-link to="/register/business-account">
          <div class="accountType">
            <i class="fas fa-building"></i>
            <span>حساب شركة</span>
          </div>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "SelectAccount",
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    }
  },

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.body {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.header {
  color: #9c6d9e;
  font-style: italic;
  font-weight: 500;
  font-family: 'Bebas Neue', cursive;
  margin-bottom: 20px;
}

.accounts {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.accounts a {
  color: #9d55a0;
  text-decoration: none;
}

.accountType {
  width: 300px;
  height: 250px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
}

.accounts a:hover .accountType {
  color: #dddddd;
  background-color: #9d55a0;
  width: 320px;
  height: 260px;
}

.accountType i {
  display: flex;
  justify-content: center;
  font-size: 300%;
  font-weight: 900;
  cursor: pointer;
  margin: 25px 0;
}

.accountType span {
  font-size: 24px;
  font-weight: 600;
}

@media (max-width:1024px) {
  .header {
    margin: 0;
    font-size: 300%;
  }
}

</style>