<template>
  <div :class="'home animate__animated animate__backInRight ' + form.styleTheme + ' ' + form.fontFamily ">
    <create-form-header
        :theme="form.styleTheme"
        avatar="https://pbs.twimg.com/media/E7yILDuVoAEOzoE?format=jpg&name=medium"
        name="Mohamed Emad"
        :id=form.id
        show="false"
        :responseNum="form.responseNum"
    >
    </create-form-header>

    <div class="container form-response">

      <div v-if="getLang === 'en'" class="en animate__animated animate__backInLeft">

        <div class="section responseNum-section">
          <div class="responseNum-section-row1">
            <div class="responseCount">
              {{ form.responseNum }} responses
            </div>
          </div>
          <div class="responseNum-section-row2">
            <div class="accepting-responses d-flex">
              <p>Accepting responses</p>
              <label class="switch mt-auto mb-auto">
                <input type="checkbox" v-model="form.acceptingResponses">
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          <div v-if="form.responseNum !== 0" class="responseNum-section-row3">
            <div class="response-type">
              <router-link exact :to="'/form/response/' + form.id  ">Summary</router-link>
            </div>
            <div class="response-type">
              <router-link :to="'/form/response/' + form.id + '/question' ">Question</router-link>
            </div>
            <div class="response-type">
              <router-link :to="'/form/response/' + form.id + '/individual' ">Individual</router-link>
            </div>
          </div>
        </div>

        <div v-if="form.responseNum !== 0" class="response-content">

          <router-view></router-view>

        </div>


        <div v-if="form.responseNum === 0" >
          <div class="section no-response-section">
            <p>Waiting for responses</p>
          </div>
        </div>
      </div>

      <div v-if="getLang === 'ar'" class="ar animate__animated animate__backInRight">

        <div class="section responseNum-section">
          <div class="responseNum-section-row1">
            <div class="responseCount">
              0 ردود
            </div>
          </div>
          <div class="responseNum-section-row2">
            <div class="accepting-responses d-flex">
              <p>قبول الردود</p>
              <label class="switch mt-auto mb-auto">
                <input type="checkbox" v-model="form.acceptingResponses">
                <span class="slider round"></span>
              </label>
            </div>
          </div>

        </div>

        <div v-if="form.responseNum === 0" >
          <div class="section no-response-section">
            <p>في انتظار الردود</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import CreateFormHeader from "../../components/Form/CreateFormHeader";
export default {
  name: "Response",
  components: {
    CreateFormHeader
  },
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    }
  },
  data() {
    return {
      form: {
        id: '132165sda',
        styleTheme: 'default',
        fontFamily: 'default-font',
        responseNum: 8,
        acceptingResponses: true,
      },
      displaySummary: true,
      displayTheme: false,
      displaySend: false,
    }
  },

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Style+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

.default {
  --var-main-color: #9d55a0;
  --var-second-color: #dddddd;
}
.theme-1 {
  --var-main-color: #db4437;
  --var-second-color: #fae3e1;
}
.theme-2 {
  --var-main-color: #673ab7;
  --var-second-color: #c2c0c6;
}

.theme-3 {
  --var-main-color: #3f51b5;
  --var-second-color: #c2c0c6;
}

.theme-4 {
  --var-main-color: #4285f4;
  --var-second-color: #c2c0c6;
}

.theme-5 {
  --var-main-color: #03a9f4;
  --var-second-color: #d5ebf5;
}

.theme-6 {
  --var-main-color: #ff5722;
  --var-second-color: #ffeee0;
}

.theme-7 {
  --var-main-color: #ff9800;
  --var-second-color: #ffdcab;
}

.theme-8 {
  --var-main-color: #009688;
  --var-second-color: #cefcf9;
}

.theme-9 {
  --var-main-color: #4caf50;
  --var-second-color: #9fb89f;
}

.theme-10 {
  --var-main-color: #607d8b;
  --var-second-color: #ddd;
}

.theme-11 {
  --var-main-color: #9e9e9e;
  --var-second-color: #ddd;
}

.default-font {
  --var-font: 'Google Sans', Roboto, Helvetica, Arial, sans-serif;
}

.Playful {
  --var-font: 'Style Script', cursive;
}

.Roboto-Mono {
  --var-font: 'Roboto Mono', monospace;
}

.home {
  background-color: var(--var-second-color);
  min-height: 100vh;
}

.ar {
  direction: rtl;
  text-align: right;
}

.form-response {
  width: 60%;
  padding-bottom: 60px;
}

.section {
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  background-color: #FFFFFF;
  margin-bottom: 20px;
}

.responseNum-section {
  padding-bottom: 0;
  margin-bottom: 0;
}

.responseCount {
  font-family: 'Google Sans',Roboto,Arial,sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  color: #202124;
}

.accepting-responses {
  margin-bottom: 20px;
}

.accepting-responses p {
  margin: auto 0 auto auto;
  font-weight: 500;
}

.ar .accepting-responses p {
  margin: auto auto auto 0;
  font-weight: 500;
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
  margin: 0 18px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: var(--var-main-color);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--var-main-color);
}

input:checked + .slider:before {
  -webkit-transform: translateX(16px);
  -ms-transform: translateX(16px);
  transform: translateX(16px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.no-response-section {
  margin-top: 20px;
  font-family: Roboto,Arial,sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: .3px;
  line-height: 16px;
  color: #70757a;
  border-radius: 8px;
  margin-bottom: 12px;
  padding: 24px;
  text-align: center;
}

.no-response-section p {
  margin: auto 0;
}

.responseNum-section-row3 {
  display: flex;
  margin: 50px 0 0;
}

.responseNum-section-row3 .response-type {
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
}

.responseNum-section-row3 a {
  text-decoration: none;
  color: #111111;
  padding: 0 4px 10px;
  margin: 0;
}

.responseNum-section-row3 a.active,
.responseNum-section-row3 a:hover,
.responseNum-section-row3 a.router-link-active {
  border-bottom: 3px solid #9d55a0;
  border-radius: 3px;
}




@media (max-width:1024px) {
  .form-response {
    width: 90%;
  }



}
</style>