<template>
  <div class="home animate__animated animate__fadeIn">

    <div class="nav">
      <profile-header
          :avatar="user.imgSrc"
          :name="user.name"
          :id=$store.getters.token
      ></profile-header>
    </div>

    <main class="main-content en animate__animated animate__backInLeft" v-if="getLang === 'en'">
      <div class="main-content-container container">
        <div class="img">
          <b-button class="avatar-btn" v-b-modal.modal-1>
            <b-avatar class="avatar" :src=user.imgSrc></b-avatar>
          </b-button>

          <b-modal id="modal-1" title="Profile image" ok-only>
            <div class="img-container">
              <img class="model-img" :src=user.imgSrc>
            </div>
          </b-modal>
          <h2 class="name mt-2">{{user.name}}</h2>
        </div>
        <div class="personalInfo p-4">
          <h2>Personal Info</h2>
          <div class="container">
            <div class="personalInfo-row mt-4 mb-4">
              <i class="fas fa-user-edit"></i>
              <h4>Name: <span>{{user.name}}</span></h4>
            </div>
            <div class="personalInfo-row mt-4 mb-4">
              <i class="fas fa-baby"></i>
              <h4>Birth of date: <span>{{user.yearDOB + " " + user.monthDOB + " " + user.dayBOB}}</span></h4>
            </div>
            <div class="personalInfo-row mt-4 mb-4">
              <i class="far fa-flag"></i>
              <h4>Country: <span>{{user.country}}</span></h4>
            </div>
            <div class="personalInfo-row mt-4 mb-4">
              <i class="fas fa-venus-mars"></i>
              <h4>Gender: <span>{{user.gender}}</span></h4>
            </div>
            <div class="personalInfo-row mt-4 mb-4">
              <i class="fas fa-mobile-alt"></i>
              <h4>Mobile number: <span>{{user.phone}}</span></h4>
            </div>
          </div>
        </div>
      </div>
    </main>

    <main class="main-content ar animate__animated animate__backInRight" v-if="getLang === 'ar'">
      <div class="main-content-container container">
        <div class="img">
          <b-button class="avatar-btn" v-b-modal.modal-1>
            <b-avatar class="avatar" :src=user.imgSrc></b-avatar>
          </b-button>

          <b-modal id="modal-1" title="الصورة الشخصية" ok-only>
            <div class="img-container">
              <img class="model-img" :src=user.imgSrc>
            </div>
          </b-modal>
          <h2 class="name mt-3">{{user.name}}</h2>
        </div>
        <div class="personalInfo p-4">
          <h2 class="mb-4" style="font-family: 'Cairo', sans-serif;">معلومات شخصية</h2>
          <div class="container">
            <div class="personalInfo-row mt-4 mb-4">
              <i class="fas fa-user-edit"></i>
              <h4>الاسم: <span>{{user.name}}</span></h4>
            </div>
            <div class="personalInfo-row mt-4 mb-4">
              <i class="fas fa-baby"></i>
              <h4>تاريخ الميلاد: <span>{{user.yearDOB + " " + user.monthDOB + " " + user.dayBOB}}</span></h4>
            </div>
            <div class="personalInfo-row mt-4 mb-4">
              <i class="far fa-flag"></i>
              <h4>البلد: <span>{{user.country}}</span></h4>
            </div>
            <div class="personalInfo-row mt-4 mb-4">
              <i class="fas fa-venus-mars"></i>
              <h4>الجنس: <span>{{user.gender}}</span></h4>
            </div>
            <div class="personalInfo-row mt-4 mb-4">
              <i class="fas fa-mobile-alt"></i>
              <h4>رقم الهاتف: <span>{{user.phone}}</span></h4>
            </div>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
import ProfileHeader from "../../components/Profile/ProfileHeader";
import store from "@/store";
import router from "@/router";
export default {
  name: "ProfileIndex",
  components: {
    ProfileHeader
  },
  async created() {
    if (!store.getters.isAuthenticated) {
      router.push('/login')
    }
    await this.loadUser();
  },
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    }
  },
  data() {
    return {
      user: '',
      isLoading: false
    }
  },
  methods: {
    async loadUser() {
      let token = this.$route.params.id;


      let myHeaders = new Headers();
      myHeaders.append("Token", token);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      const response = await fetch("https://ya-forms-api.herokuapp.com/API/user", requestOptions);

      const responseData = await response.json();

      this.user = responseData;

      console.log(this.user)

    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@700&display=swap');

main {
  margin-top: 90px;
}

.nav {
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
}

.footer {
  position: fixed;
  bottom: 0;
}


.main-content {
  width: 100%;
}

.main-content-container {
  display: flex;
}

.main-content-container .img {
  padding: 10px 0;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
}

.main-content-container .img .avatar {
  width: 250px;
  height: 250px;
}

.main-content-container .personalInfo {
  width: 68%;
  margin: 10px 0;
}

.main-content-container .personalInfo h2 {
  font-family: 'Bebas Neue', cursive;
}

.main-content-container .personalInfo .personalInfo-row {
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid #9d55a0;
}

.main-content-container .personalInfo .personalInfo-row i {
  color: #9d55a0;
  margin: auto 5px;
  width: 5%;
}

.main-content-container .personalInfo .personalInfo-row h4 {
  margin: auto 5px;
}

.main-content-container .personalInfo .personalInfo-row h4 span {
  color: #5A5C6C;
}

.avatar-btn {
  border-radius: 50%;
  background: none;
  border: none;
  padding: 0;
}

.img-container {
  height: 65vh;
}

.model-img {
  height: 100%;
  width: 100%;
  border-radius: 15px;
}

.model button {
  background-color: #9d55a0;
}

.ar {
  direction: rtl;
  text-align: right;
}
@media (max-width:1024px) {
  .home {
    margin-bottom: 200px;
  }

  .main-content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .main-content-container .img,
  .main-content-container .personalInfo {
    width: 100%;
  }


  .main-content-container .img .avatar {
    width: 200px;
    height: 200px;
  }

  .main-content-container .personalInfo .personalInfo-row h4 {
    display: block;
  }
}

</style>