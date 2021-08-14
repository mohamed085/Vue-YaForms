<template>
  <div>
    <div class="body en animate__animated animate__backInLeft" v-if="getLang === 'en'">
      <div class="header">
        <h1>Personal Account</h1>
      </div>
      <b-form @submit="addAccount" @reset="reset">
        <div class="form-group">
          <i class="fas fa-user-edit"></i>
          <b-form-input v-model="user.name" placeholder="Name"></b-form-input>
        </div>
        <div class="form-group dob">
          <i class="fas fa-baby"></i>
          <b-form-select v-model="user.yearDOB" :options="YearOptions"></b-form-select>
          <b-form-select v-model="user.monthDOB" :options="monthOption"></b-form-select>
          <b-form-select v-model="user.dayBOB" :options="dayOption"></b-form-select>
        </div>
        <div class="form-group">
          <i class="fas fa-venus-mars"></i>
          <b-form-select class="w-100" v-model="user.gender" :options="genderOptions"></b-form-select>
        </div>
        <div class="form-group">
          <i class="far fa-flag"></i>
          <b-form-select class="w-100" v-model="user.country" :options="countryOptions"></b-form-select>
        </div>
        <div class="form-group">
          <i class="fas fa-mobile-alt"></i>
          <b-form-input v-model="user.phone" placeholder="Mobile number"></b-form-input>
        </div>
        <div class="form-button d-flex flex-row justify-content-around">
          <button type="reset" class="btn"><i class="fas fa-arrow-left"></i> Prev</button>
          <button type="submit" class="btn">Next <i class="fas fa-arrow-right"></i></button>
        </div>
      </b-form>
    </div>

    <div class="body ar animate__animated animate__backInRight" v-if="getLang === 'ar'">
      <div class="header">
        <h1>حساب شخصي</h1>
      </div>
      <b-form @submit="addAccount" @reset="reset">
        <div class="form-group">
          <i class="fas fa-user-edit"></i>
          <b-form-input v-model="user.name" placeholder="الاسم"></b-form-input>
        </div>
        <div class="form-group dob">
          <i class="fas fa-baby"></i>
          <b-form-select v-model="user.yearDOB" :options="YearOptionsAr"></b-form-select>
          <b-form-select v-model="user.monthDOB" :options="monthOptionAr"></b-form-select>
          <b-form-select v-model="user.dayBOB" :options="dayOptionAr"></b-form-select>
        </div>
        <div class="form-group">
          <i class="fas fa-venus-mars"></i>
          <b-form-select class="w-100" v-model="user.gender" :options="genderOptionsAr"></b-form-select>
        </div>
        <div class="form-group">
          <i class="far fa-flag"></i>
          <b-form-select class="w-100" v-model="user.country" :options="countryOptionsAr"></b-form-select>
        </div>
        <div class="form-group">
          <i class="fas fa-mobile-alt"></i>
          <b-form-input v-model="user.phone" placeholder="رقم الهاتف"></b-form-input>
        </div>
        <div class="form-button d-flex flex-row justify-content-around">
          <button type="reset" class="btn"> <i class="fas fa-arrow-right"></i> السابق </button>
          <button type="submit" class="btn"> التالي <i class="fas fa-arrow-left"></i></button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndividualAccount",
  data() {
    return {
      user: {
        name: '',
        phone: '',
        yearDOB: null,
        monthDOB: null,
        dayBOB: null,
        gender: null,
        country: null,

      },
      YearOptions:  [
        { value: null, text: 'Year' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      YearOptionsAr:  [
        { value: null, text: 'سنة' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      monthOption:  [
        { value: null, text: 'Month' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      monthOptionAr:  [
        { value: null, text: 'شهر' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      dayOption:  [
        { value: null, text: 'Day' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      dayOptionAr:  [
        { value: null, text: 'يوم' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      genderOptions: [
        { value: null, text: 'Gender' },
        { value: 'Male', text: 'Male' },
        { value: 'Female', text: 'Female' },
      ],
      genderOptionsAr: [
        { value: null, text: 'الجنس' },
        { value: 'Male', text: 'Male' },
        { value: 'Female', text: 'Female' },
      ],
      countryOptions: [
        { value: null, text: 'Country' },
        { value: 'Male', text: 'Male' },
        { value: 'Female', text: 'Female' },
      ],
      countryOptionsAr: [
        { value: null, text: 'البلد' },
        { value: 'Male', text: 'Male' },
        { value: 'Female', text: 'Female' },
      ],
    }
  },
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    }
  },
  methods: {
    addAccount() {
      alert("sadsa")
    },
    reset() {
      this.$router.push('/register');
    }
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

  .dob {
    display: flex;
    flex-direction: column;
  }
}
</style>