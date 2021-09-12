<template>
  <div class="home animate__animated animate__fadeIn">
    <main class="en animate__animated animate__backInLeft" v-if="getLang === 'en'">
      <router-link to="/" class="img">
        <img src="../../assets/images/ya_logo_lg.png">
      </router-link>
      <div class="form">
        <p class="forgetText">Reset your password</p>
        <p class="valid" v-if="!isValid">{{ errorEn }}</p>
        <div class="input">
          <span><i class="fas fa-unlock-alt"></i></span>
          <input v-model.trim="password" type="password" placeholder="Password">
        </div>
        <div class="input">
          <span><i class="fas fa-unlock-alt"></i></span>
          <input @input="changePassword" v-model.trim="confirmPassword" type="password" placeholder="Confirm password">
          <p class="valid mt-2" v-if="confirmPasswordErrorEn">{{ confirmPasswordErrorEn }}</p>
        </div>
        <button @click="login" class="submit mb-3" type="submit">Reset password</button>
      </div>
    </main>

    <main class="ar animate__animated animate__backInRight" v-if="getLang === 'ar'">
      <router-link to="/" class="img">
        <img src="../../assets/images/ya_logo_lg.png">
      </router-link>
      <div class="form">
        <p class="forgetText">اعد ضبط كلمه السر</p>
        <p class="valid" v-if="!isValid">{{ errorAr }}</p>
        <div class="input">
          <span><i class="fas fa-unlock-alt"></i></span>
          <input v-model.trim="password" type="password" placeholder="كلمة المرور">
        </div>
        <div class="input">
          <span><i class="fas fa-unlock-alt"></i></span>
          <input @input="changePassword" v-model.trim="confirmPassword" type="password" placeholder="تأكيد كلمة المرور">
          <p class="valid mt-2" v-if="confirmPasswordErrorAr">{{ confirmPasswordErrorAr }}</p>
        </div>
        <button @click="login" class="submit" type="submit">Reset password</button>
      </div>
    </main>

    <div class="footer">
      <main-footer></main-footer>
    </div>

  </div>

</template>

<script>
import MainFooter from "../../components/Main/MainFooter";
export default {
  name: "ResetPassword",
  components: {MainFooter},
  data() {
    return {
      password: '',
      confirmPassword: '',
      isValid: true,
      errorEn: '',
      errorAr: '',
      confirmPasswordErrorEn: '',
      confirmPasswordErrorAr: ''
    }
  },
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    }
  },
  methods: {
    changePassword() {
      if (this.password !== this.confirmPassword) {
        this.confirmPasswordErrorEn = 'Password not confirm';
        this.confirmPasswordErrorAr = 'كلمة المرور غير لا تطابق';
      } else {
        this.confirmPasswordErrorEn = '';
        this.confirmPasswordErrorAr = '';
      }
    },
    async login() {
      const token = this.$route.params.token;

      if (this.password === '' || this.confirmPassword === '') {
        this.isValid = false;
        this.errorEn = 'You must add password'
        this.errorAr = 'يجب عليك إضافة كلمة المرور'
        return;
      }


      if (this.password.length < 6) {
        this.isValid = false;
        this.errorEn = 'Password not valid (password must be greater than 6 digit)'
        this.errorAr = 'كلمة المرور غير صالحة (يجب أن تكون كلمة المرور أكبر من 6 أرقام)'
        return;
      }


      this.isLoading = true;
      try {
        await  this.$store.dispatch('forget', {
          email: this.email,
          token: token
        })


      } catch (e) {
        this.error = e.message || 'Failed to authenticate.';
      }

      this.isLoading = false;


    }
  }

}
</script>

<style scoped>
.home {
  height: 100vh;
}

.ar {
  direction: rtl;
}

.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
}

main {
  margin: 35px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.img {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.img img {
  height: 250px;
  width: 250px;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.form p {
  font-size: 18px;
  font-weight: 500;
}

.input {
  border-bottom: solid 1px #9c6d9e2a;
  width: 50%;
}

.input span {
  color: #9d55a0;
}
.input input {
  margin: 10px;
  width: 80%;
  padding: 8px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-clip: padding-box;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  text-rendering: auto;
}

.submit {
  padding: 10px 0;
  cursor: pointer;
  color: #e8d4e9;
  display: block;
  width: 20%;
  background-color: #9d55a0;
  box-shadow: 0 0 2px grey;
  font-weight: 400;
  border: 1px solid transparent;
  line-height: 1.5;
  border-radius: .25rem;
  margin: 20px;
}

.submit:hover {
  color: #9d55a0;
  background-color: #e8d4e9;
}

.forgetText {
  width: 50%;
  color: #6c757d!important;
  text-align: center!important;
  font-weight: 400;
}

footer {
  position: fixed;
  bottom: 0;
  margin-top: 20px;
}


.valid {
  border: 1px solid #ff6b6b;
  background: #ff6b6b;
  border-radius: 5px;
  color: #FFFFFF;
  padding: 10px 30px;
  font-size: 14px;
  font-weight: 400;

}

@media (max-width:1024px)  {

  main .img img{
    width: 200px;
    height: 200px;
  }

  .form {
    width: 100%;
  }

  .input {
    width: 70%;
  }

}

</style>
