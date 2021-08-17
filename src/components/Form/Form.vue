<template>
  <router-link v-if="addForm" class="form-content" to="/create-form">
    <div class="form-content">
      <div class="form-img">
        <i class="fas fa-plus"></i>
      </div>
      <div class="form-footer">
        <p>Blank</p>
      </div>

    </div>
  </router-link>
  <router-link v-else-if="contactForm" class="form-content" to="/create-form">
    <div class="form-content">
      <div class="form-img">
        <img src="../../assets/images/form-1.png">
      </div>
      <div class="form-footer">
        <p>Contact Form</p>
      </div>

    </div>
  </router-link>
  <router-link v-else-if="hiringForm" class="form-content" to="/create-form">
    <div class="form-content">
      <div class="form-img">
        <img src="../../assets/images/form-1.png">
      </div>
      <div class="form-footer">
        <p>Hiring Form</p>
      </div>

    </div>
  </router-link>
  <router-link v-else-if="orderForm" class="form-content" to="/create-form">
    <div class="form-content">
      <div class="form-img">
        <img src="../../assets/images/form-1.png">
      </div>
      <div class="form-footer">
        <p>Order Form</p>
      </div>

    </div>
  </router-link>
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
a {
  color: #111111;
  text-decoration: none;
  height: 123px;
  width: 164px;
  margin: 0;
  padding: 0;
}

a:hover {
  color: #9d55a0;
  text-decoration: none;
}

a:hover .form-img {
  border: 1px solid #9d55a0;
}

a:hover .form-footer p {
  color: #9d55a0;
}

.form-content {
  height: 153px;
  width: 174px;
  margin: 10px;
}

.form-img {
  padding: 5px;
  width: 95%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dddddd;
}

.form-img i {
  font-size: 200%;
  color: #9d55a0;
}

.form-img img {
  width: 100%;
  height: 100%;
}

.form-footer p {
  font-weight: 500;
  color: #202124;
  font-family: "Google Sans",Roboto,Arial,sans-serif;
  font-size: 14px;
  height: 19px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 5px 10px;
}

</style>