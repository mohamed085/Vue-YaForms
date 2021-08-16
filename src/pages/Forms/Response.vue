<template>
  <div :class="'home animate__animated animate__backInRight ' + form.styleTheme + ' ' + form.fontFamily ">
    <create-form-header
        :theme="form.styleTheme"
        avatar="https://pbs.twimg.com/media/E7yILDuVoAEOzoE?format=jpg&name=medium"
        name="Mohamed Emad"
        id="asdasd132"
        show="false"
    >
    </create-form-header>




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
        id: Date.now(),
        imageHeader: '',
        header: '',
        description: '',
        logo: 'https://placekitten.com/300/300',
        styleTheme: 'default',
        fontFamily: 'default-font',
        questions: [
          {
            id: Date.now(),
            type: 'question',
            question: '',
            description: '',
            questionType: 'null',
            required: '',
            focus: false,
            displayVideo: false,
            options: [
              {
                id: Date.now(),
                value: 'option 1',
                text: 'option 1'
              }
            ],
          }
        ]
      },
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
</style>