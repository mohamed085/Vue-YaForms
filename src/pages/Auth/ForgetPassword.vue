<template>
  <div class="home">
    <main class="en animate__animated animate__backInLeft" v-if="getLang === 'en'">
      <router-link to="/" class="img">
        <img src="../../assets/images/ya_logo_lg.png">
      </router-link>
      <form method="POST">
        <p class="forgetText">Type your E-mail Address and you will receive email message to recover your password            </p>
        <div class="input">
          <span><i class="fas fa-at"></i></span>
          <input type="text" placeholder="Email address">
        </div>
        <button class="submit" type="submit">Next</button>
      </form>
    </main>

    <main class="ar animate__animated animate__backInRight" v-if="getLang === 'ar'">
      <router-link to="/" class="img">
        <img src="../../assets/images/ya_logo_lg.png">
      </router-link>
      <form method="POST">
        <p class="forgetText">اكتب عنوان بريدك الإلكتروني وستتلقى رسالة بريد إلكتروني لاستعادة كلمة المرور الخاصة بك</p>
        <div class="input">
          <span><i class="fas fa-at"></i></span>
          <input type="text" placeholder="البريد الالكتروني">
        </div>
        <button class="submit" type="submit">التالي</button>
      </form>
    </main>

    <div class="footer">
      <main-footer></main-footer>
    </div>

  </div>

</template>

<script>
import MainFooter from "../../components/Main/MainFooter";
export default {
  name: "ForgetPassword",
  components: {MainFooter},
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    }
  },
  methods: {
    login() {

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

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
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

@media (max-width:1024px)  {

  main .img img{
    width: 200px;
    height: 200px;
  }

  form {
    width: 100%;
  }

  .input {
    width: 70%;
  }

}

</style>