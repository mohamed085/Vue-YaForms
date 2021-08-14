<template>
  <div :class="'home animate__animated animate__backInRight ' + form.styleTheme + ' ' + form.fontFamily ">

    <div v-if="getLang === 'en'" class="form-view en">

      <div v-if="form.imageHeader" class="form-image-header section">
        <img :src="form.imageHeader">
      </div>

      <div class="form-title section">
        <div class="titles">
          <p class="title">{{ form.header }}</p>
          <p class="description">{{ form.description }}</p>
        </div>
        <div class="logo">
          <img :src="form.logo">
        </div>
      </div>

      <div class="form-content">

        <div v-for="question in form.questions" :key="question.id">

          <div v-if="question.type === 'question'">

            <div class="section question " v-if="question.questionType === 'Short answer'">
              <p class="question-title short-answer-title">{{ question.question }} ?</p>
              <b-form-input
                  class="input question-short-answer"
                  type="text"
                  placeholder="Your answer"
              ></b-form-input>
            </div>

            <div class="question-title section question " v-if="question.questionType === 'Paragraph'">
              <p class="paragraph-title">{{ question.question }} ?</p>
              <b-form-input
                  class="input paragraph-answer"
                  type="text"
                  placeholder="Your answer"
              ></b-form-input>
            </div>

            <div class="section question " v-if="question.questionType === 'Multiple choice'">
              <p class="question-title multiple-choice-title">{{ question.question }} ?</p>
              <b-form-radio-group
                  :options="question.options"
                  stacked
              ></b-form-radio-group>
            </div>

            <div class="section question " v-if="question.questionType === 'Checkboxes'">
              <p class="question-title checkboxes-title">{{ question.question }} ?</p>
              <b-form-checkbox-group
                  class="checkbox-select"
                  :options="question.options"
                  stacked
              ></b-form-checkbox-group>

            </div>

            <div class="section question " v-if="question.questionType === 'Dropdown'">
              <p class="question-title dropdown-title">{{ question.question }} ?</p>
              <b-form-select
                  class="dropdown-select"
                  :options="question.options"
              ></b-form-select>


            </div>

            <div class="section question " v-if="question.questionType === 'Date'">
              <p class="question-title short-answer-title">{{ question.question }} ?</p>
              <b-form-input
                  class="input date-answer"
                  type="date"
              ></b-form-input>
            </div>

            <div class="section question " v-if="question.questionType === 'Time'">
              <p class="question-title short-answer-title">{{ question.question }} ?</p>
              <b-form-input
                  class="input time-answer"
                  type="time"
              ></b-form-input>
            </div>


          </div>

          <div v-if="question.type === 'title'" class="section question title-description">
            <p class="question-title title">{{ question.question }}</p>
            <p class="description">{{ question.description }}</p>
          </div>

          <div v-if="question.type === 'image'" class="section question image">
            <p class="question-title title">{{ question.question }}</p>
            <img :src="question.description">
          </div>

          <div v-if="question.type === 'video'" class="section question video">
            <p class="question-title title">{{ question.question }}</p>
            <iframe class="p-3" :src="question.description"></iframe>
          </div>

          <div v-else></div>

        </div>

      </div>

      <b-button type="submit" class="submit">Submit form</b-button>

    </div>

    <div v-if="getLang === 'ar'" class="form-view ar">

      <div v-if="form.imageHeader" class="form-image-header section">
        <img :src="form.imageHeader">
      </div>

      <div class="form-title section">
        <div class="titles">
          <p class="title">{{ form.header }}</p>
          <p class="description">{{ form.description }}</p>
        </div>
        <div class="logo">
          <img :src="form.logo">
        </div>
      </div>

      <div class="form-content">

        <div v-for="question in form.questions" :key="question.id">

          <div v-if="question.type === 'question'">

            <div class="section question " v-if="question.questionType === 'Short answer'">
              <p class="question-title short-answer-title">{{ question.question }} ؟</p>
              <b-form-input
                  class="input question-short-answer"
                  type="text"
                  placeholder="Your answer"
              ></b-form-input>
            </div>

            <div class="question-title section question " v-if="question.questionType === 'Paragraph'">
              <p class="paragraph-title">{{ question.question }} ؟</p>
              <b-form-input
                  class="input paragraph-answer"
                  type="text"
                  placeholder="Your answer"
              ></b-form-input>
            </div>

            <div class="section question " v-if="question.questionType === 'Multiple choice'">
              <p class="question-title multiple-choice-title">{{ question.question }}c</p>
              <b-form-radio-group
                  :options="question.options"
                  stacked
              ></b-form-radio-group>
            </div>

            <div class="section question " v-if="question.questionType === 'Checkboxes'">
              <p class="question-title checkboxes-title">{{ question.question }} ؟</p>
              <b-form-checkbox-group
                  class="checkbox-select"
                  :options="question.options"
                  stacked
              ></b-form-checkbox-group>

            </div>

            <div class="section question " v-if="question.questionType === 'Dropdown'">
              <p class="question-title dropdown-title">{{ question.question }} ؟</p>
              <b-form-select
                  class="dropdown-select"
                  :options="question.options"
              ></b-form-select>


            </div>

            <div class="section question " v-if="question.questionType === 'Date'">
              <p class="question-title short-answer-title">{{ question.question }} ؟</p>
              <b-form-input
                  class="input date-answer"
                  type="date"
              ></b-form-input>
            </div>

            <div class="section question " v-if="question.questionType === 'Time'">
              <p class="question-title short-answer-title">{{ question.question }} ؟</p>
              <b-form-input
                  class="input time-answer"
                  type="time"
              ></b-form-input>
            </div>


          </div>

          <div v-if="question.type === 'title'" class="section question title-description">
            <p class="question-title title">{{ question.question }}</p>
            <p class="description">{{ question.description }}</p>
          </div>

          <div v-if="question.type === 'image'" class="section question image">
            <p class="question-title title">{{ question.question }}</p>
            <img :src="question.description">
          </div>

          <div v-if="question.type === 'video'" class="section question video">
            <p class="question-title title">{{ question.question }}</p>
            <iframe class="p-3" :src="question.description"></iframe>
          </div>

          <div v-else></div>

        </div>

      </div>

      <b-button type="submit" class="submit">Submit form</b-button>

    </div>

    </div>
</template>

<script>
export default {
  name: "FormView",
  data() {
    return {
      form: {
        id: '15648964',
        imageHeader: 'https://lh3.googleusercontent.com/-QdAIymxsJlwHVBm6SqFSAi0aJK57Qy2JBB0wAQ8yXI3adtbAn5Ng2S-fqShC8STrgDEHWRElyC9DKlEwEZn49_3_rtEtOosQdPfqQk02ymnNVkeJs9XoGtPdasRUrJVI7bZQj9P1gt6cS2S',
        header: 'Untitled form',
        description: 'Form description',
        logo: 'https://placekitten.com/300/300',
        styleTheme: 'default',
        fontFamily: 'default-font',
        questions: [
          {
            id: '16151sad',
            type: 'question',
            question: 'Untitled Short answer Question',
            description: '',
            questionType: 'Short answer',
            required: 'true',
          },
          {
            id: '16152sad',
            type: 'question',
            question: 'Untitled Paragraph Question',
            description: '',
            questionType: 'Paragraph',
            required: 'true',
          },
          {
            id: '16153sad',
            type: 'question',
            question: 'Multiple choice Question',
            description: '',
            questionType: 'Multiple choice',
            required: 'true',
            options: [
              { id: '1', value: 'A', text: 'A' },
              { id: '2', value: 'B', text: 'B' },
              { id: '3', value: 'C', text: 'C' },
            ]
          },
          {
            id: '16154sad',
            type: 'question',
            question: 'Checkboxes Question',
            description: '',
            questionType: 'Checkboxes',
            required: 'true',
            options: [
              { id: '1', value: 'A', text: 'A' },
              { id: '2', value: 'B', text: 'B' },
              { id: '3', value: 'C', text: 'C' },
            ]
          },
          {
            id: '16154sad',
            type: 'question',
            question: 'Dropdown Question',
            description: '',
            questionType: 'Dropdown',
            required: 'true',
            options: [
              { id: '1', value: 'A', text: 'A' },
              { id: '2', value: 'B', text: 'B' },
              { id: '3', value: 'C', text: 'C' },
            ]
          },
          {
            id: '16156sad',
            type: 'question',
            question: 'Date Question',
            description: '',
            questionType: 'Date',
            required: 'true',
          },
          {
            id: '16157sad',
            type: 'question',
            question: 'Time Question',
            description: '',
            questionType: 'Time',
            required: 'true',
          },
          {
            id: '16157sad',
            question: 'Untitled Title',
            type: 'title',
            description: 'Description'
          },
          {
            id: '16157sad',
            question: 'Image Title',
            type: 'image',
            description: 'https://lh6.googleusercontent.com/1tXGYHM6EXavj4Qu3RBwaGJtApVJaEtNcSYhttHPfBLwhy7rEcZR9kUS3XaqnmxI18viMhlvU7I7CIRYAHP1Nx-iVf2BpFSlfHCgac_V2HdXhi51Xxxit08gaQ14xXYGvvv5TvLxzUTrPpul'
          },
          {
            id: '16157sad',
            question: 'Video Title',
            type: 'video',
            description: 'https://www.youtube.com/embed/tgbNymZ7vqY'
          },
        ]
      },
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
  display: flex;
  justify-content: center;
  background-color: var(--var-second-color);
}

.section {
  margin: 20px 0;
  border-radius: 15px;
  border: 1px solid #c4c4c4;
}

.input, .dropdown-select {
  border: none;
  border-bottom: 2px dotted #dddddd;
}

.input:focus, .dropdown-select:focus {
  outline: none;
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 2px solid var(--var-main-color);
}

.question {
  padding: 30px 20px;
  background-color: #FFFFFF;
}

.form-view {
  width: 60%;
  min-height: 100vh;
  padding: 20px;
}

.form-image-header {
  width: 100%;
  height: 180px;
}

.form-image-header img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

.form-title {
  padding: 20px 15px;
  border-top: 8px solid var(--var-main-color);
  background-color: #FFFFFF;
  display: flex;
}

.form-title .titles {
  width: 70%;
}

.form-title .title {
  font-family: var(--var-font);
  font-size: 32px;
}

.form-title .description,
.title-description .description {
  font-size: 16px;
  padding: 0 10px;
}

.form-title .logo {
  width: 28%;
  margin-right: 2%;
  max-height: 100px;
}

.form-title .logo img {
  width: 100%;
  max-height: 100%;
  border-radius: 15px;
}

.question-title {
  font-size: 16px;
  letter-spacing: .1px;
  line-height: 24px;
  color: #202124;
  font-weight: 400;
  word-break: break-word;
  font-family: var(--var-font);
}

.question-short-answer {
  width: 240px;
}

.dropdown-select, .date-answer, .time-answer {
  width: 250px;
}

.image img {
  border-radius: 15px;
  width: 100%;
  max-height: 500px;
}

.submit {
  color: var(--var-main-color);
  background-color: #FFFFFF;
  border: 1px solid var(--var-main-color);
  border-radius: 8px;
  padding: 8px 20px;
}

.submit:hover {
  background-color: var(--var-main-color);
  color: #FFFFFF;
  border: 1px solid var(--var-main-color);
}

.ar {
  direction: rtl;
  text-align: right;
}

@media (max-width:1024px) {
  .form-view {
    width: 95%;
  }

  .form-title {
    display: flex;
    flex-direction: column;
  }

  .form-title .titles {
    width: 98%;
  }

  .form-title .logo {
    margin: 0 20px;
  }
}
</style>