<template>
  <div class="home animate__animated animate__fadeIn">
    <div class="nav">
      <forms-header
          avatar="https://pbs.twimg.com/media/E7yILDuVoAEOzoE?format=jpg&name=medium"
          name="Mohamed Emad"
          id="asdasd132"
      ></forms-header>
    </div>

    <main class="en animate__animated animate__backInLeft" v-if="getLang === 'en'">
      <div class="container">
        <div class="start-form">
          <div class="header d-flex justify-content-between">
            <div>
              <h4>Start your form</h4>
            </div>
            <router-link to="/" class="d-flex">
              <h4>Show all forms</h4>
              <i class="fas fa-arrow-alt-circle-right"></i>
            </router-link>
          </div>
          <div class="forms">
            <Form class="form" add-form="true"></Form>
            <Form class="form" contact-form="true"></Form>
            <Form class="form"  hiring-form="true"></Form>
            <Form class="form" order-form="true"></Form>
          </div>
          <div class="recent-form mt-5">
            <div class="header d-flex justify-content-between">
              <div>
                <h4>Recent form</h4>
              </div>
            </div>
            <div class="forms">
              <p class="no-form">No form selected yet</p>
            </div>
          </div>
        </div>

      </div>
    </main>

    <main class="ar animate__animated animate__backInLeft" v-if="getLang === 'ar'">
      <div class="container">
        <div class="start-form">
          <div class="header d-flex justify-content-between">
            <div>
              <h4>ابدأ الفورم الخاص بك</h4>
            </div>
            <router-link to="/" class="d-flex">
              <h4>إظهار كل الفورمز</h4>
              <i class="fas fa-arrow-alt-circle-left"></i>
            </router-link>
          </div>
          <div class="forms">
            <Form class="form" add-form="true"></Form>
            <Form class="form" contact-form="true"></Form>
            <Form class="form"  hiring-form="true"></Form>
            <Form class="form" order-form="true"></Form>
          </div>
          <div class="recent-form mt-5">
            <div class="header d-flex justify-content-between">
              <div>
                <h4>الفورمز الجديده</h4>
              </div>
            </div>
            <div class="forms">
              <p class="no-form">لم يتم تحديد أي فورم حتى الآن</p>
            </div>
          </div>
        </div>

      </div>
    </main>

  </div>
</template>

<script>
import FormsHeader from "../../components/Form/FormsHeader";
import Form from "../../components/Form/Form";
export default {
  name: "Forms",
  components: {
    FormsHeader,
    Form
  },
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald&family=Rubik:wght@500&display=swap');

main {
  margin-top: 80px;
}

.ar {
  direction: rtl;
  text-align: right;
}

.nav {
  position: fixed;
  top: 0;
  width: 100%;
}

.footer {
  position: fixed;
  bottom: 0;
}

.header {
  color: #111111;
  font-family: 'Rubik', sans-serif;
}

.header i {
  font-size: 150%;
  margin: auto 5px;
}

.header a {
  text-decoration: none;
  color: #111111;
}

.header h4 {
  margin: auto 0;
}

.header a:hover {
  color: #9d55a0;
}

.forms {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  justify-content: center;
  align-items: center;
}

.form {
  width: 260px;
}

.forms .no-form {
  font-weight: 600;
  color: #5A5C6C;
  font-size: 120%;
}

@media (max-width:1024px) {
  .home {
    margin-bottom: 200px;
  }

  .header {
    padding: 10px 0;
  }

  .header h4,
  .header i {
    font-size: 100%;
    margin: auto 0;
  }
}
</style>