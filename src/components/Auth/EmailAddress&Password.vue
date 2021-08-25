<template>
  <div>
    <div class="body en animate__animated animate__backInLeft" v-if="getLang === 'en'">
      <main class="main-content">
        <div class="main-content-container">
          <div class="personalInfo p-4">
            <div class="header">
              <h1>Email Address & Password</h1>
            </div>
            <b-form @submit="addAccount" @reset="reset">
              <div class="form-group">
                <i class="fas fa-building"></i>
                <b-form-input v-model="email" placeholder="Email address"></b-form-input>
              </div>
              <div class="form-group">
                <i class="fas fa-venus-mars"></i>
                <b-form-input v-model="password" placeholder="Password"></b-form-input>
              </div>
              <div class="form-group">
                <i class="fas fa-users"></i>
                <b-form-input v-model="confirmPassword" placeholder="Confirm password"></b-form-input>
              </div>
              <div class="form-button d-flex flex-row justify-content-around">
                <button type="reset" class="btn"><i class="fas fa-arrow-left"></i> Prev</button>
                <button type="submit" class="btn">Next <i class="fas fa-arrow-right"></i></button>
              </div>
            </b-form >
          </div>
        </div>
      </main>
    </div>

    <div class="body ar animate__animated animate__backInRight" v-if="getLang === 'ar'">
      <main class="main-content">
        <div class="main-content-container">
          <div class="personalInfo p-4">
            <div class="header">
              <h1>كلمة مرور البريد الإلكتروني</h1>
            </div>
            <b-form @submit="addAccount" @reset="reset">
              <div class="form-group">
                <i class="fas fa-building"></i>
                <b-form-input v-model="email" placeholder="عنوان البريد الإلكتروني"></b-form-input>
              </div>
              <div class="form-group">
                <i class="fas fa-venus-mars"></i>
                <b-form-input v-model="password" placeholder="كلمه السر"></b-form-input>
              </div>
              <div class="form-group">
                <i class="fas fa-users"></i>
                <b-form-input v-model="confirmPassword" placeholder="تأكيد كلمة المرور"></b-form-input>
              </div>
              <div class="form-button d-flex flex-row justify-content-around">
                <button type="reset" class="btn"> <i class="fas fa-arrow-right"></i> السابق </button>
                <button type="submit" class="btn"> التالي <i class="fas fa-arrow-left"></i></button>
              </div>
            </b-form >
          </div>
        </div>
      </main>
    </div>

  </div>

</template>

<script>
export default {
  name: "EmailAddress&Password",
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    },
  },
  methods: {
    addAccount() {

      this.$router.push('/forms');

    },
    reset() {
      this.$router.push('/register');
    },
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@700&display=swap');

.body {
  width: 100%;
  padding: 50px 0;
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
  display: flex;
  justify-content: center;
}

.main-content {
  width: 70%;
  display: flex;
  justify-content: center;

}

.main-content-container {
  width: 100%;
}

.personalInfo {
  display: flex;
  flex-direction: column;
  align-items: center;

}

form {
  width: 60%;
}

.form-group {
  padding: 10px 0;
  margin: 0;
  display: flex;
  border-bottom: 1px solid #9d55a0;
}

.form-group input {
  border: none;
  color: #5A5C6C;
  display: block;
}

.form-group i {
  margin: auto 5px;
  color: #9d55a0;
}


.form-button .btn {
  color: #fff;
  background-color: #9c6d9e;
  padding: 10px 20px;
  margin: 20px 0 30px;
}

.form-button .btn:hover {
  color: #9c6d9e;
  background-color: #fff;
}

.ar {
  direction: rtl;
  text-align: right;
}

.ar .header {
  font-family: 'Cairo', sans-serif;
}

@media (max-width:1024px) {
  form {
    width: 90%;
  }

  .header {
    margin: 0;
  }

}

</style>