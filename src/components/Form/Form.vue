<template>
  <div v-if="addForm" class="form-content">
    <div class="form">
      <router-link to="/createForm">
        <i class="fas fa-plus"></i>
      </router-link>
    </div>
    <div class="title">
      <router-link to="/createForm">Blank form</router-link>
    </div>
  </div>
  <div v-else-if="contactForm" class="form-content">
    <div class="form">
      <router-link to="/createContactForm">
        <img src="../../assets/images/form-1.png">
      </router-link>
    </div>
    <div class="title">
      <router-link to="/createContactForm">Contact form</router-link>
    </div>
  </div>
  <div v-else-if="hiringForm" class="form-content">
    <div class="form">
      <router-link to="/createHiringForm">
        <img src="../../assets/images/form-1.png">
      </router-link>
    </div>
    <div class="title">
      <router-link to="/createHiringForm">Hiring form</router-link>
    </div>
  </div>
  <div v-else-if="orderForm" class="form-content">
    <div class="form">
      <router-link to="/createOrderForm">
        <img src="../../assets/images/form-1.png">
      </router-link>
    </div>
    <div class="title">
      <router-link to="/createOrderForm">Order form</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    addForm: {
      type: Boolean,
      required: false,
    },
    contactForm: {
      type: Boolean,
      required: false,
    },
    hiringForm: {
      type: Boolean,
      required: false,
    },
    orderForm: {
      type: Boolean,
      required: false,
    },

  }
}
</script>

<style scoped>
.form-content {
  width: 24%;
  margin-right: 1%;
  height: 250px;
  display: flex;
  flex-direction: column;
  background-color: #dddddd;
  margin-bottom: 20px;
}

.form-content .form {
  height: 88%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 2px -2px rgba(0,0,0,.2);
}

.form-content .form i {
  font-size: 300%;
  font-weight: 600;
  color: #9d55a0;
}

.form-content .form img {
  height: 200px;
}

.form-content .title {
  margin-top: 2%;
  height: 10%;
  padding: 0 10px;
}

.form-content .title a {
  text-decoration: none;
  color: #111111;
  font-weight: 600;
}

.form-content .title a:hover {
  color: #9d55a0;
}
</style>