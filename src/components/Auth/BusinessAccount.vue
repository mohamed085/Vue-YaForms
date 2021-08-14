<template>
  <div>
    <div class="body en animate__animated animate__backInLeft" v-if="getLang === 'en'">
      <main class="main-content">
        <div class="main-content-container container">
          <div class="img">
            <b-form @submit="uploadPhoto">
              <avatar></avatar>
              <b-button class="btn" type="submit">Upload photo</b-button>
            </b-form>
          </div>
          <div class="personalInfo p-4">
            <div class="header">
              <h1>Company Details</h1>
            </div>
            <b-form @submit="addCompany">
              <div class="form-group">
                <i class="fas fa-building"></i>
                <b-form-input v-model="company.name" placeholder="Company Name"></b-form-input>
              </div>
              <div class="form-group">
                <i class="fas fa-venus-mars"></i>
                <b-form-select class="w-100" v-model="company.businessCategory" :options="businessCategoryOptions"></b-form-select>
              </div>
              <div class="form-group">
                <i class="fas fa-users"></i>
                <b-form-input type="number" v-model="company.numOfEmployees" placeholder="Number Of Employees"></b-form-input>
              </div>
              <div class="form-group">
                <i class="far fa-flag"></i>
                <b-form-select class="w-100" v-model="company.country" :options="countryOptions"></b-form-select>
              </div>
              <div class="form-group">
                <i class="fas fa-building"></i>
                <b-form-input v-model="company.url" placeholder="Company Web Site"></b-form-input>
              </div>
              <b-button class="btn" type="submit">Add Company</b-button>
            </b-form >
          </div>
        </div>
      </main>
    </div>

    <div class="body ar animate__animated animate__backInRight" v-if="getLang === 'ar'">
      <main class="main-content">
        <div class="main-content-container container">
          <div class="img">
            <b-form @submit="uploadPhoto">
              <avatar></avatar>
              <b-button class="btn" type="submit">حمل الصورة</b-button>
            </b-form>
          </div>
          <div class="personalInfo p-4">
            <div class="header">
              <h1>تفاصيل الشركة</h1>
            </div>
            <b-form @submit="addCompany">
              <div class="form-group">
                <i class="fas fa-building"></i>
                <b-form-input v-model="company.name" placeholder="اسم الشركة"></b-form-input>
              </div>
              <div class="form-group">
                <i class="fas fa-venus-mars"></i>
                <b-form-select class="w-100" v-model="company.businessCategory" :options="businessCategoryOptionsAr"></b-form-select>
              </div>
              <div class="form-group">
                <i class="fas fa-users"></i>
                <b-form-input type="number" v-model="company.numOfEmployees" placeholder="عدد الموظفين"></b-form-input>
              </div>
              <div class="form-group">
                <i class="far fa-flag"></i>
                <b-form-select class="w-100" v-model="company.country" :options="countryOptionsAR"></b-form-select>
              </div>
              <div class="form-group">
                <i class="fas fa-building"></i>
                <b-form-input v-model="company.url" placeholder="موقع الشركة"></b-form-input>
              </div>
              <b-button class="btn" type="submit">أضف شركة</b-button>
            </b-form >
          </div>
        </div>
      </main>
    </div>

  </div>
</template>

<script>
import Avatar from "../Ui/Avatar";
export default {
  name: "BusinessAccount",
  components: {
    Avatar
  },
  data() {
    return {
      company: {
        name: '',
        numOfEmployees: '',
        imgSrc: null,
        url: null,
        country: null,
        businessCategory: null,
      },
      businessCategoryOptions: [
        { value: null, text: 'Business Category' },
        { value: 'Male', text: 'Male' },
        { value: 'Female', text: 'Female' },
      ],
      businessCategoryOptionsAr: [
        { value: null, text: 'نوع العمل' },
        { value: 'Male', text: 'ذكر' },
        { value: 'Female', text: 'انثي' },
      ],
      countryOptions: [
        { value: null, text: 'Country' },
        { value: 'Male', text: 'Male' },
        { value: 'Female', text: 'Female' },
      ],
      countryOptionsAR: [
        { value: null, text: 'البلد' },
        { value: 'Male', text: 'Male' },
        { value: 'Female', text: 'Female' },
      ],
    }
  },
  methods: {
    uploadPhoto() {

    },
    addCompany() {

    }
  },
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@700&display=swap');

.body {
  width: 100%;
  padding: 20px 0 80px;
}

.ar {
  direction: rtl;
  text-align: right;
}

.main-content {
  width: 100%;
}

.header {
  color: #9c6d9e;
  font-style: italic;
  font-weight: 500;
  font-family: 'Bebas Neue', cursive;
  margin-bottom: 20px;
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
  width: 200px;
  height: 200px;
}

.main-content-container .personalInfo {
  width: 68%;
}

form {
  width: 95%;
}

.form-group {
  padding: 10px 0;
  margin: 0;
  display: flex;
  border-bottom: 1px solid #9d55a0;
}

.form-group input,
.form-group select {
  border: none;
  color: #5A5C6C;
  display: block;
}

.form-group select {
  margin: 5px 0;
}

.form-group i {
  margin: auto 5px;
  color: #9d55a0;
}

.btn {
  background-color: #9d55a0;
  color: #FFFFFF;
  border: none;
  margin: 10px 0;
}

.btn:hover {
  background-color: #FFFFFF;
  color: #9d55a0;
  border: none;
}

.ar .header {
  font-family: 'Cairo', sans-serif;
}


@media (max-width:1024px)  {
  .main-content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .main-content-container .img,
  .main-content-container .personalInfo {
    width: 100%;
  }

  .btn {
    margin-bottom: 10px;
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

  .header {
    margin: 0;
  }

}
</style>