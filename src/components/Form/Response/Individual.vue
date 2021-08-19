<template>
  <div class="individual">
    <div v-if="getLang === 'en'" class="form-view en animate__animated animate__backInLeft">
      <div v-if="form.length !== 0" class="section pagination-section">
        <div class="overflow-auto">
          <b-pagination-nav v-model="currentQuestion" :link-gen="linkGen" :number-of-pages="form.length" use-router></b-pagination-nav>
        </div>
      </div>

      <div v-if="form[currentQuestion - 1].imageHeader" class="form-image-header question-section section">
        <img :src="form[currentQuestion - 1].imageHeader">
      </div>

      <div class="form-title section question-section">
        <div class="titles">
          <p class="cannot-edited">Responses cannot be edited</p>
          <p class="title">{{ form[currentQuestion - 1].header }}</p>
          <p class="description">{{ form[currentQuestion - 1].description }}</p>
        </div>
        <div class="logo">
          <img :src="form[currentQuestion - 1].logo">
        </div>
      </div>

      <div v-for="question in form[currentQuestion - 1].questions" :key="question.id">

        <div v-if="question.type === 'question'">

          <div class="section question " v-if="question.questionType === 'Short answer'">
            <p class="question-title short-answer-title">{{ question.question }} ?</p>

            <b-form-input
                class="input question-short-answer"
                type="text"
                placeholder="Your answer"
                v-model="question.response"
                disabled
            ></b-form-input>
          </div>

          <div class="question-title section question-section question " v-if="question.questionType === 'Paragraph'">
            <p class="paragraph-title">{{ question.question }} ?</p>
            <b-form-input
                class="input paragraph-answer"
                type="text"
                placeholder="Your answer"
                v-model="question.response"
                disabled
            ></b-form-input>
          </div>

          <div class="section question-section question " v-if="question.questionType === 'Multiple choice'">
            <p class="question-title multiple-choice-title">{{ question.question }} ?</p>
            <b-form-radio-group
                :options="question.options"
                stacked
                v-model="question.response"
                disabled
            ></b-form-radio-group>
          </div>

          <div class="section question-section question " v-if="question.questionType === 'Checkboxes'">
            <p class="question-title checkboxes-title">{{ question.question }} ?</p>
            <b-form-checkbox-group
                class="checkbox-select"
                :options="question.options"
                stacked
                v-model="question.response"
                disabled
            ></b-form-checkbox-group>

          </div>

          <div class="section question-section question " v-if="question.questionType === 'Dropdown'">
            <p class="question-title dropdown-title">{{ question.question }} ?</p>
            <b-form-select
                class="dropdown-select"
                :options="question.options"
                v-model="question.response"
                disabled
            ></b-form-select>


          </div>

          <div class="section question-section question " v-if="question.questionType === 'Date'">
            <p class="question-title short-answer-title">{{ question.question }} ?</p>
            <b-form-input
                class="input date-answer"
                type="date"
                v-model="question.response"
                disabled
            ></b-form-input>
          </div>

          <div class="section question-section question " v-if="question.questionType === 'Time'">
            <p class="question-title short-answer-title">{{ question.question }} ?</p>
            <b-form-input
                class="input time-answer"
                type="time"
                v-model="question.response"
                disabled
            ></b-form-input>
          </div>

        </div>

        <div v-if="question.type === 'title'" class="section question-section question title-description">
          <p class="question-title title">{{ question.question }}</p>
          <p class="description">{{ question.description }}</p>
        </div>

        <div v-if="question.type === 'image'" class="section question-section question image">
          <p class="question-title title">{{ question.question }}</p>
          <img :src="question.description">
        </div>

        <div v-if="question.type === 'video'" class="section question-section question video">
          <p class="question-title title">{{ question.question }}</p>
          <iframe class="p-3" :src="question.description"></iframe>
        </div>

        <div v-else></div>

      </div>

      <p class="Submitted">Submitted 8/17/21, 12:29 PM</p>

      <div v-if="form.length === 0">
        <div class="section question-section no-response">
          No response yet
        </div>
      </div>

    </div>

    <div v-if="getLang === 'ar'" class="form-view en animate__animated animate__backInRight">
      <div v-if="form.length !== 0" class="section pagination-section">
        <div class="overflow-auto">
          <b-pagination-nav v-model="currentQuestion" :link-gen="linkGen" :number-of-pages="form.length" use-router></b-pagination-nav>
        </div>
      </div>

      <div v-if="form[currentQuestion - 1].imageHeader" class="form-image-header question-section section">
        <img :src="form[currentQuestion - 1].imageHeader">
      </div>

      <div class="form-title section question-section">
        <div class="titles">
          <p class="cannot-edited">لا يمكن تعديل الردود</p>
          <p class="title">{{ form[currentQuestion - 1].header }}</p>
          <p class="description">{{ form[currentQuestion - 1].description }}</p>
        </div>
        <div class="logo">
          <img :src="form[currentQuestion - 1].logo">
        </div>
      </div>

      <div v-for="question in form[currentQuestion - 1].questions" :key="question.id">

        <div v-if="question.type === 'question'">

          <div class="section question " v-if="question.questionType === 'Short answer'">
            <p class="question-title short-answer-title">{{ question.question }} ؟</p>

            <b-form-input
                class="input question-short-answer"
                type="text"
                placeholder="Your answer"
                v-model="question.response"
                disabled
            ></b-form-input>
          </div>

          <div class="question-title section question-section question " v-if="question.questionType === 'Paragraph'">
            <p class="paragraph-title">{{ question.question }} ؟</p>
            <b-form-input
                class="input paragraph-answer"
                type="text"
                placeholder="Your answer"
                v-model="question.response"
                disabled
            ></b-form-input>
          </div>

          <div class="section question-section question " v-if="question.questionType === 'Multiple choice'">
            <p class="question-title multiple-choice-title">{{ question.question }} ؟</p>
            <b-form-radio-group
                :options="question.options"
                stacked
                v-model="question.response"
                disabled
            ></b-form-radio-group>
          </div>

          <div class="section question-section question " v-if="question.questionType === 'Checkboxes'">
            <p class="question-title checkboxes-title">{{ question.question }} ؟</p>
            <b-form-checkbox-group
                class="checkbox-select"
                :options="question.options"
                stacked
                v-model="question.response"
                disabled
            ></b-form-checkbox-group>

          </div>

          <div class="section question-section question " v-if="question.questionType === 'Dropdown'">
            <p class="question-title dropdown-title">{{ question.question }} ؟</p>
            <b-form-select
                class="dropdown-select"
                :options="question.options"
                v-model="question.response"
                disabled
            ></b-form-select>


          </div>

          <div class="section question-section question " v-if="question.questionType === 'Date'">
            <p class="question-title short-answer-title">{{ question.question }} ؟</p>
            <b-form-input
                class="input date-answer"
                type="date"
                v-model="question.response"
                disabled
            ></b-form-input>
          </div>

          <div class="section question-section question " v-if="question.questionType === 'Time'">
            <p class="question-title short-answer-title">{{ question.question }} ؟</p>
            <b-form-input
                class="input time-answer"
                type="time"
                v-model="question.response"
                disabled
            ></b-form-input>
          </div>

        </div>

        <div v-if="question.type === 'title'" class="section question-section question title-description">
          <p class="question-title title">{{ question.question }}</p>
          <p class="description">{{ question.description }}</p>
        </div>

        <div v-if="question.type === 'image'" class="section question-section question image">
          <p class="question-title title">{{ question.question }}</p>
          <img :src="question.description">
        </div>

        <div v-if="question.type === 'video'" class="section question-section question video">
          <p class="question-title title">{{ question.question }}</p>
          <iframe class="p-3" :src="question.description"></iframe>
        </div>

        <div v-else></div>

      </div>

      <p class="Submitted">تم التقديم 8/17/21, 12:29 PM</p>

      <div v-if="form.length === 0">
        <div class="section question-section no-response">
          No response yet
        </div>
      </div>

    </div>



  </div>

</template>

<script>
export default {
  name: "Individual",
  data() {
    return {
      currentQuestion: 1,
      form: [
          {
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
                questionType: 'Short answer',
                required: 'true',
                response: 'Short answer 1'
              },
              {
                id: '16152sad',
                type: 'question',
                question: 'Untitled Paragraph Question',
                questionType: 'Paragraph',
                required: 'true',
                response: 'Lorem Ipsum is simply dummy text of the printing and typesetting'
              },
              {
                id: '16153sad',
                type: 'question',
                question: 'Multiple choice Question',
                questionType: 'Multiple choice',
                required: 'true',
                options: [
                  { id: '1', value: 'A', text: 'A' },
                  { id: '2', value: 'B', text: 'B' },
                  { id: '3', value: 'C', text: 'C' },
                ],
                response: 'A'
              },
              {
                id: '161554sad',
                type: 'question',
                question: 'Checkboxes Question',
                questionType: 'Checkboxes',
                required: 'true',
                options: [
                  { id: '1', value: 'A', text: 'A' },
                  { id: '2', value: 'B', text: 'B' },
                  { id: '3', value: 'C', text: 'C' },
                ],
                response: ['B', 'A']
              },
              {
                id: '16154sad',
                type: 'question',
                question: 'Dropdown Question',
                questionType: 'Dropdown',
                required: 'true',
                options: [
                  { id: '1', value: 'A', text: 'A' },
                  { id: '2', value: 'B', text: 'B' },
                  { id: '3', value: 'C', text: 'C' },
                ],
                response: 'A'
              },
              {
                id: '16156sad',
                type: 'question',
                question: 'Date Question',
                questionType: 'Date',
                required: 'true',
                response: ''
              },
              {
                id: '16157sad',
                type: 'question',
                question: 'Time Question',
                description: '',
                questionType: 'Time',
                required: 'true',
                response: ''
              },
            ],
          },
          {
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
                questionType: 'Short answer',
                required: 'true',
                response: 'Short answer 1'
              },
              {
                id: '16152sad',
                type: 'question',
                question: 'Untitled Paragraph Question',
                questionType: 'Paragraph',
                required: 'true',
                response: 'Lorem Ipsum is simply dummy text of the printing and typesetting'
              },
              {
                id: '16153sad',
                type: 'question',
                question: 'Multiple choice Question',
                questionType: 'Multiple choice',
                required: 'true',
                options: [
                  { id: '1', value: 'A', text: 'A' },
                  { id: '2', value: 'B', text: 'B' },
                  { id: '3', value: 'C', text: 'C' },
                ],
                response: 'A'
              },
              {
                id: '161554sad',
                type: 'question',
                question: 'Checkboxes Question',
                questionType: 'Checkboxes',
                required: 'true',
                options: [
                  { id: '1', value: 'A', text: 'A' },
                  { id: '2', value: 'B', text: 'B' },
                  { id: '3', value: 'C', text: 'C' },
                ],
                response: ['B', 'A']
              },
              {
                id: '16154sad',
                type: 'question',
                question: 'Dropdown Question',
                questionType: 'Dropdown',
                required: 'true',
                options: [
                  { id: '1', value: 'A', text: 'A' },
                  { id: '2', value: 'B', text: 'B' },
                  { id: '3', value: 'C', text: 'C' },
                ],
                response: 'A'
              },
              {
                id: '16156sad',
                type: 'question',
                question: 'Date Question',
                questionType: 'Date',
                required: 'true',
                response: ''
              },
              {
                id: '16157sad',
                type: 'question',
                question: 'Time Question',
                description: '',
                questionType: 'Time',
                required: 'true',
                response: ''
              },
            ],
          },
          {
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
                questionType: 'Short answer',
                required: 'true',
                response: 'Short answer 1'
              },
              {
                id: '16152sad',
                type: 'question',
                question: 'Untitled Paragraph Question',
                questionType: 'Paragraph',
                required: 'true',
                response: 'Lorem Ipsum is simply dummy text of the printing and typesetting'
              },
              {
                id: '16153sad',
                type: 'question',
                question: 'Multiple choice Question',
                questionType: 'Multiple choice',
                required: 'true',
                options: [
                  { id: '1', value: 'A', text: 'A' },
                  { id: '2', value: 'B', text: 'B' },
                  { id: '3', value: 'C', text: 'C' },
                ],
                response: 'A'
              },
              {
                id: '161554sad',
                type: 'question',
                question: 'Checkboxes Question',
                questionType: 'Checkboxes',
                required: 'true',
                options: [
                  { id: '1', value: 'A', text: 'A' },
                  { id: '2', value: 'B', text: 'B' },
                  { id: '3', value: 'C', text: 'C' },
                ],
                response: ['B', 'A']
              },
              {
                id: '16154sad',
                type: 'question',
                question: 'Dropdown Question',
                questionType: 'Dropdown',
                required: 'true',
                options: [
                  { id: '1', value: 'A', text: 'A' },
                  { id: '2', value: 'B', text: 'B' },
                  { id: '3', value: 'C', text: 'C' },
                ],
                response: 'A'
              },
              {
                id: '16156sad',
                type: 'question',
                question: 'Date Question',
                questionType: 'Date',
                required: 'true',
                response: ''
              },
              {
                id: '16157sad',
                type: 'question',
                question: 'Time Question',
                description: '',
                questionType: 'Time',
                required: 'true',
                response: ''
              },
            ],
          },
        ]
    }
  },
  created() {
    console.log(this.form.length);
  },
  computed: {
    getLang() {
      return this.$store.getters['main/getLang'];
    },
  },
  methods: {
    linkGen(pageNum) {
      return `?question=${pageNum}`
    },
  }
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

.section {
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  background-color: #FFFFFF;
}

.question-section {
  margin: 20px 0;
}

.pagination-section {
  padding: 0 8px;
  margin: 0;
  height: 40px;
}

.form-image-header {
  width: 100%;
  height: 180px;
  margin: 30px 0;
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

.form-title {
  padding: 20px 15px;
  border-top: 8px solid var(--var-main-color);
  background-color: #FFFFFF;
  display: flex;
}

.form-title .titles {
  width: 70%;
}

.form-title .cannot-edited {
  margin: 0;
  padding: 0 ;
  color: #777777;
  font-size: 12px;
}

.form-title .title {
  font-family: var(--var-font);
  font-size: 32px;
  padding-bottom: 0;
  margin-bottom: 0;
}

.form-title .description,
.title-description .description {
  font-size: 16px;
  padding: 0 5px;
  margin: 0;

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


.no-response {
  color: #777777;
  display: flex;
  justify-content: center;
}

.Submitted {
  color: rgba(0,0,0,.54);
  display: flex;
  font-size: 14px;
  font-style: italic;
  justify-content: flex-end;
  padding: 0 10px 10px 0;

}
</style>