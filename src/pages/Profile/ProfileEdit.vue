<template>
  <div class="home animate__animated animate__fadeIn">

    <div class="nav">
      <profile-header
          :avatar="user.imgSrc"
          :name="user.name"
          :id="user.id"
      ></profile-header>
    </div>

    <main class="main-content en animate__animated animate__backInLeft" v-if="getLang === 'en'">
      <div class="main-content-container container">
        <div class="img">
          <b-form @submit="editAvatar">
            <avatar :default-src="user.imgSrc"></avatar>
            <b-button class="mt-2 btn" type="submit">Save photo</b-button>
          </b-form>
        </div>
        <div class="personalInfo p-4">
          <h2>Edit Personal Info</h2>
          <b-form @submit="editPersonalInfo">
            <div class="form-group">
              <label>Your name</label>
              <div>
                <b-form-input v-model="user.name"></b-form-input>
              </div>
            </div>

            <div class="form-group dob">
              <label>Your birthdate</label>
              <div class="select-dob">
                <b-form-select v-model="user.yearDOB" :options="YearOptions"></b-form-select>
                <b-form-select v-model="user.monthDOB" :options="monthOptions"></b-form-select>
                <b-form-select v-model="user.dayDOB" :options="dayOptions"></b-form-select>
              </div>
            </div>

            <div class="form-group">
              <label>Your Country</label>
              <div>
                <b-form-select class="w-100" v-model="user.country" :options="countryOptions"></b-form-select>
              </div>
            </div>

            <div class="form-group">
              <label>Your Gender</label>
              <div>
                <b-form-select class="w-100" v-model="user.gender" :options="genderOptions"></b-form-select>
              </div>
            </div>

            <div class="form-group">
              <label>Your phone</label>
              <div>
                <b-form-input v-model="user.mobileNumber"></b-form-input>
              </div>
            </div>

            <b-button class="mt-3 btn" type="submit">Edit personal information</b-button>
          </b-form >
        </div>
      </div>
    </main>

    <main class="main-content ar animate__animated animate__backInRight" v-if="getLang === 'ar'">
      <div class="main-content-container container">
        <div class="img">
          <b-form @submit="editAvatar">
            <avatar :default-src="user.imgSrc"></avatar>
            <b-button class="mt-2 btn" type="submit">تعديل الصورة الشخصية</b-button>
          </b-form>
        </div>
        <div class="personalInfo  p-4">
          <h2 class="mb-2" style="font-family: 'Cairo', sans-serif;">تعديل البيانات الشحصية</h2>
          <b-form @submit="editPersonalInfo">
            <div class="form-group">
              <label>الاسم</label>
              <div>
                <b-form-input v-model="user.name"></b-form-input>
              </div>
            </div>

            <div class="form-group dob">
              <label>تاريح الميلاد</label>
              <div class="select-dob">
                <b-form-select v-model="user.yearDOB" :options="YearOptions"></b-form-select>
                <b-form-select v-model="user.monthDOB" :options="monthOptions"></b-form-select>
                <b-form-select v-model="user.dayDOB" :options="dayOptions"></b-form-select>
              </div>
            </div>

            <div class="form-group">
              <label>البلد</label>
              <div>
                <b-form-select class="w-100" v-model="user.country" :options="countryOptions"></b-form-select>
              </div>
            </div>

            <div class="form-group">
              <label>الجنس</label>
              <div>
                <b-form-select class="w-100" v-model="user.gender" :options="genderOptions"></b-form-select>
              </div>
            </div>

            <div class="form-group">
              <label>رقم الهاتف</label>
              <div>
                <b-form-input v-model="user.mobileNumber"></b-form-input>
              </div>
            </div>

            <b-button class="mt-3 btn" type="submit">تعديل المعلومات الشخصية</b-button>
          </b-form >
        </div>
      </div>
    </main>

  </div>
</template>

<script>
import Avatar from "../../components/Ui/Avatar";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import store from "@/store";
import router from "@/router";

export default {
  name: "ProfileEdit",
  components: {
    ProfileHeader,
    Avatar
  },
  created() {
    if (!store.getters.isAuthenticated) {
      router.push('/login')
    }
  },
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    }
  },
  data() {
    return {
      user: {
        id: '161565asd',
        imgSrc: 'https://pbs.twimg.com/media/E7yILDuVoAEOzoE?format=jpg&name=medium',
        name: 'Mohamed Emad',
        yearDOB: 1999,
        monthDOB: 'May',
        dayDOB: 1,
        country: 'Egypt',
        gender: 'Male',
        mobileNumber: '0100000000'
      },
      YearOptions:  [
        { value: null, text: 'Year' },
        { value: 1999, text: '1999' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      monthOptions:  [
        { value: null, text: 'Month' },
        { value: 'May', text: 'May' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      dayOptions:  [
        { value: null, text: 'Day' },
        { value: 1, text: '1' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      genderOptions: [
        { value: null, text: 'Gender' },
        { value: 'Male', text: 'Male' },
        { value: 'Female', text: 'Female' },
      ],
      countryOptions: [
        { value: null, text: 'Country' },
        { value: 'Egypt', text: 'Egypt' },
        { value: 'Female', text: 'Female' },
      ],
    }
  },
  methods: {
    editAvatar() {

    },
    editPersonalInfo() {

    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@700&display=swap');

main {
  margin-top: 80px;
  padding: 20px 0 60px;
}

.nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
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
}

.main-content-container .personalInfo h2 {
  font-family: 'Bebas Neue', cursive;
}

.main-content-container .form-group {
  display: flex;
  margin-top: 10px;
}

.main-content-container .select-dob {
  display: flex;
}

.main-content-container .form-group label {
  width: 20%;
  margin: auto 0;
  font-weight: 600;
}

.main-content-container .form-group div {
  width: 79%;
}


.btn {
  background-color: #9d55a0;
  color: #FFFFFF;
  border: none;
}

.btn:hover {
  background-color: #FFFFFF;
  color: #9d55a0;
  border: none;
}

.ar {
  direction: rtl;
  text-align: right;
}

@media (max-width:1024px)  {
  .home {
    min-height: 100vh;
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


  .main-content-container .img form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .main-content-container .img .avatar {
    width: 100px;
    height: 100px;
  }

  .main-content-container .personalInfo form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .dob {
    display: flex;
    flex-direction: column;
  }

  .main-content-container .form-group {
    display: flex;
    flex-direction: column;
  }

  .main-content-container .form-group label,
  .main-content-container .form-group div {
    width: 100%;
  }
}
</style>

