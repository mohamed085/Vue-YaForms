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
          <b-form @submit="editAvatar">
            <avatar :default-src="user.imgSrc"></avatar>
            <b-button class="mt-2 btn" type="submit">Save photo</b-button>
          </b-form>
        </div>
        <div class="personalInfo p-4">
          <h2>Edit Personal Info</h2>
          <b-form>
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
                <b-form-select v-model="user.monthDOB" :options="monthOption"></b-form-select>
                <b-form-select v-model="user.dayBOB" :options="dayOption"></b-form-select>
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
                <b-form-input v-model="user.phone"></b-form-input>
              </div>
            </div>

            <b-button class="mt-3 btn" @click="editPersonalInfo">Edit personal information</b-button>
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
      error: '',
      YearOptions:  [
        { value: null, text: 'Year' },
        { value: '1990', text: '1990' },
        { value: '1991', text: '1991' },
        { value: '1992', text: '1992' },
        { value: '1993', text: '1993' },
        { value: '1994', text: '1994' },
        { value: '1995', text: '1995' },
        { value: '1996', text: '1996' },
        { value: '1997', text: '1997' },
        { value: '1998', text: '1998' },
        { value: '1999', text: '1999' },
        { value: '2000', text: '2000' },
        { value: '2001', text: '2001' },
        { value: '2002', text: '2002' },
        { value: '2003', text: '2003' },
        { value: '2004', text: '2004' },
        { value: '2005', text: '2005' },
        { value: '2006', text: '2006' },
        { value: '2007', text: '2007' },
        { value: '2008', text: '2008' },
        { value: '2009', text: '2009' },
        { value: '2010', text: '2010' },
        { value: '2011', text: '2011' },
        { value: '2012', text: '2012' },
        { value: '2013', text: '2013' },
        { value: '2014', text: '2014' },
        { value: '2015', text: '2015' },
        { value: '2016', text: '2016' },
        { value: '2017', text: '2017' },
        { value: '2018', text: '2018' },
        { value: '2019', text: '2019' },
        { value: '2020', text: '2020' },
        { value: '2021', text: '2021' },
        { value: '2022', text: '2022' },
      ],
      YearOptionsAr:  [
        { value: null, text: 'سنه' },
        { value: '1990', text: '1990' },
        { value: '1991', text: '1991' },
        { value: '1992', text: '1992' },
        { value: '1993', text: '1993' },
        { value: '1994', text: '1994' },
        { value: '1995', text: '1995' },
        { value: '1996', text: '1996' },
        { value: '1997', text: '1997' },
        { value: '1998', text: '1998' },
        { value: '1999', text: '1999' },
        { value: '2000', text: '2000' },
        { value: '2001', text: '2001' },
        { value: '2002', text: '2002' },
        { value: '2003', text: '2003' },
        { value: '2004', text: '2004' },
        { value: '2005', text: '2005' },
        { value: '2006', text: '2006' },
        { value: '2007', text: '2007' },
        { value: '2008', text: '2008' },
        { value: '2009', text: '2009' },
        { value: '2010', text: '2010' },
        { value: '2011', text: '2011' },
        { value: '2012', text: '2012' },
        { value: '2013', text: '2013' },
        { value: '2014', text: '2014' },
        { value: '2015', text: '2015' },
        { value: '2016', text: '2016' },
        { value: '2017', text: '2017' },
        { value: '2018', text: '2018' },
        { value: '2019', text: '2019' },
        { value: '2020', text: '2020' },
        { value: '2021', text: '2021' },
        { value: '2022', text: '2022' },
      ],
      monthOption:  [
        { value: null, text: 'Month' },
        { value: 'January ', text: 'January' },
        { value: 'February ', text: 'February' },
        { value: 'March ', text: 'March' },
        { value: 'April ', text: 'April' },
        { value: 'May ', text: 'May' },
        { value: 'June ', text: 'June' },
        { value: 'July ', text: 'July' },
        { value: 'August ', text: 'August' },
        { value: 'September ', text: 'September' },
        { value: 'October ', text: 'October' },
        { value: 'November ', text: 'November' },
        { value: 'December ', text: 'December' },
      ],
      monthOptionAr:  [
        { value: null, text: 'شهر' },
        { value: 'January ', text: 'يناير' },
        { value: 'February ', text: 'فبراير' },
        { value: 'March ', text: 'مارس' },
        { value: 'April ', text: 'ابريل' },
        { value: 'May ', text: 'مايو' },
        { value: 'June ', text: 'يونيو' },
        { value: 'July ', text: 'يوليو' },
        { value: 'August ', text: 'اغسطس' },
        { value: 'September ', text: 'سبتمبر' },
        { value: 'October ', text: 'اكتوبر' },
        { value: 'November ', text: 'نوفمبر' },
        { value: 'December ', text: 'ديسمبر' },
      ],
      dayOption:  [
        { value: null, text: 'Day' },
        { value: '1', text: '1' },
        { value: '12', text: '2' },
        { value: '13', text: '3' },
        { value: '14', text: '4' },
        { value: '15', text: '5' },
        { value: '16', text: '6' },
        { value: '17', text: '7' },
        { value: '18', text: '8' },
        { value: '19', text: '9' },
        { value: '10', text: '10' },
        { value: '11', text: '11' },
        { value: '12', text: '12' },
        { value: '13', text: '13' },
        { value: '14', text: '14' },
        { value: '15', text: '15' },
        { value: '16', text: '16' },
        { value: '17', text: '17' },
        { value: '18', text: '18' },
        { value: '19', text: '19' },
        { value: '20', text: '20' },
        { value: '21', text: '21' },
        { value: '22', text: '22' },
        { value: '23', text: '23' },
        { value: '24', text: '24' },
        { value: '25', text: '25' },
        { value: '26', text: '26' },
        { value: '27', text: '27' },
        { value: '28', text: '28' },
        { value: '29', text: '29' },
        { value: '30', text: '30' },
        { value: '31', text: '31' },
      ],
      dayOptionAr:  [
        { value: null, text: 'يوم' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      genderOptionsAr: [
        { value: null, text: 'النوع' },
        { value: 'ذكر', text: 'ذكر' },
        { value: 'انثي', text: 'انثي' },
      ],
      genderOptions: [
        { value: null, text: 'Gender' },
        { value: 'Male', text: 'Male' },
        { value: 'Female', text: 'Female' },
      ],
      countryOptions: [
        { value: null, text: 'Country' },
      ],
      countryOptionsAr: [
        { value: null, text: 'البلد' },
      ],
      businessCategoryOptions: [
        { value: null, text: 'Business Category' },
      ],
      businessCategoryOptionsAr: [
        { value: null, text: 'نوع العمل' },
      ],
    }
  },
  methods: {
    async loadUser() {
      let token = this.$route.params.id;

      let myHeaders = new Headers();
      myHeaders.append("Token", token);
      myHeaders.append("Content-Type", "application/json");

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      const response = await fetch("https://ya-forms-api.herokuapp.com/API/user", requestOptions);

      const responseData = await response.json();

      this.user = responseData;

    },
    async editAvatar() {

    },
    async editPersonalInfo() {
      let token = this.$route.params.id;

      let myHeaders = new Headers();
      myHeaders.append("Token", token);
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        "name" : this.user.name,
        "yearDOB" : this.user.yearDOB,
        "monthDOB" : this.user.monthDOB,
        "dayBOB" : this.user.dayBOB,
        "gender" : this.user.gender,
        "phone" : this.user.phone,
        "email" : this.user.email
      });

      let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      const response = await fetch("https://ya-forms-api.herokuapp.com/API/user", requestOptions);

      const responseData = await response.json();

      console.log(responseData)

      if (!response.ok) {
        this.error = responseData.message || 'Failed to  authenticate. Check your login data.';
      }

      await this.$router.push("/profile/" + token);

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

