<template>
  <div class="question">
    <div class="section pagination-section">
      <div class="overflow-auto">
        <b-pagination-nav v-model="currentQuestion" :link-gen="linkGen" :number-of-pages="form.questionNum" use-router></b-pagination-nav>
      </div>
    </div>

    <div v-if="getLang === 'en'" class="form-view en animate__animated animate__backInLeft">
      <div class="form-content">
        <div class="section question-section">
          <div class="question-header">
            <p>Question {{ currentQuestion }}</p>
            <div v-if="!viewOptions" class="options">
              <span @click="displayOptions" v-if="form.questions[currentQuestion - 1].questionType === 'Multiple choice'" class="view-options">View options <i class="fas fa-chevron-down"></i></span>
              <span @click="displayOptions" v-if="form.questions[currentQuestion - 1].questionType === 'Checkboxes'" class="view-options">View options <i class="fas fa-chevron-down"></i></span>
              <span @click="displayOptions" v-if="form.questions[currentQuestion - 1].questionType === 'Dropdown'" class="view-options">View options <i class="fas fa-chevron-down"></i></span>
            </div>
            <div v-else class="options">
              <span @click="displayOptions" v-if="form.questions[currentQuestion - 1].questionType === 'Multiple choice'" class="view-options">Hide options <i class="fas fa-chevron-up"></i></span>
              <span @click="displayOptions" v-if="form.questions[currentQuestion - 1].questionType === 'Checkboxes'" class="view-options">Hide options <i class="fas fa-chevron-up"></i></span>
              <span @click="displayOptions" v-if="form.questions[currentQuestion - 1].questionType === 'Dropdown'" class="view-options">Hide options <i class="fas fa-chevron-up"></i></span>

            </div>
          </div>
          <p class="question-title">{{ form.questions[currentQuestion - 1].question }} ?</p>
          <div v-if="viewOptions" class="options-display">
            <p class="option" v-for="option in form.questions[currentQuestion - 1].options" :key="option.id">
              {{ option.value }}
            </p>
          </div>
        </div>
        <div v-if="form.questions[currentQuestion - 1].responses" class="response-content">
          <h4 class="section question-section">Answers</h4>
          <div class="section question-section" v-for="answer in form.questions[currentQuestion - 1].responses.responseAnswer" :key="answer.id">
            {{ answer.answer }}
            <div class="section-footer">
              {{ answer.responsenum }} response
            </div>
          </div>
        </div>
        <div v-else>
          <div class="section question-section no-response">
            No response yet
          </div>
        </div>
      </div>
    </div>

    <div v-if="getLang === 'ar'" class="form-view ar animate__animated animate__backInRight">
      <div class="form-content">
        <div class="section question-section">
          <div class="question-header">
            <p>السؤال الـ {{ currentQuestion }}</p>
            <div v-if="!viewOptions" class="options">
              <span @click="displayOptions" v-if="form.questions[currentQuestion - 1].questionType === 'Multiple choice'" class="view-options">عرض الخيارات <i class="fas fa-chevron-down"></i></span>
              <span @click="displayOptions" v-if="form.questions[currentQuestion - 1].questionType === 'Checkboxes'" class="view-options">عرض الخيارات <i class="fas fa-chevron-down"></i></span>
              <span @click="displayOptions" v-if="form.questions[currentQuestion - 1].questionType === 'Dropdown'" class="view-options">عرض الخيارات <i class="fas fa-chevron-down"></i></span>
            </div>
            <div v-else class="options">
              <span @click="displayOptions" v-if="form.questions[currentQuestion - 1].questionType === 'Multiple choice'" class="view-options">إخفاء الخيارات <i class="fas fa-chevron-up"></i></span>
              <span @click="displayOptions" v-if="form.questions[currentQuestion - 1].questionType === 'Checkboxes'" class="view-options">إخفاء الخيارات <i class="fas fa-chevron-up"></i></span>
              <span @click="displayOptions" v-if="form.questions[currentQuestion - 1].questionType === 'Dropdown'" class="view-options">إخفاء الخيارات <i class="fas fa-chevron-up"></i></span>

            </div>
          </div>
          <p class="question-title">{{ form.questions[currentQuestion - 1].question }} ؟</p>
          <div v-if="viewOptions" class="options-display">
            <p class="option" v-for="option in form.questions[currentQuestion - 1].options" :key="option.id">
              {{ option.value }}
            </p>
          </div>
        </div>
        <div v-if="form.questions[currentQuestion - 1].responses" class="response-content">
          <h4 class="section question-section">الاجابات</h4>
          <div class="section question-section" v-for="answer in form.questions[currentQuestion - 1].responses.responseAnswer" :key="answer.id">
            {{ answer.answer }}
            <div class="section-footer">
              الردود: {{ answer.responsenum }}
            </div>
          </div>
        </div>
        <div v-else>
          <div class="section question-section no-response">
            لا جواب بعد
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Question",
  data() {
    return {
      form: {
        id: '132165sda',
        styleTheme: 'default',
        fontFamily: 'default-font',
        responseNum: 8,
        questionNum: 7,
        acceptingResponses: true,
        questions: [
          {
            id: '16151sad',
            type: 'question',
            question: 'Untitled Short answer Question',
            description: '',
            questionType: 'Short answer',
            required: 'true',
            responses: {
              num: 5,
              responseAnswer: [
                { id: '516651',responsenum: 1, answer:'Short answer 1'},
                { id: '51662',responsenum: 2, answer:'Short answer 2'},
                { id: '51663',responsenum: 3, answer:'Short answer 3'},
                { id: '51664',responsenum: [4, 5], answer:'Short answer 4', repeat: 2},
              ]
            }
          },
          {
            id: '16152sad',
            type: 'question',
            question: 'Untitled Paragraph Question',
            description: '',
            questionType: 'Paragraph',
            required: 'true',
            responses: {
              num: 5,
              responseAnswer: [
                { id: '51661',responsenum: 1, answer:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 1'},
                { id: '51662',responsenum: 2, answer:'Lorem Ipsum is simply dummy text of the printing and typesetting industry 2'},
                { id: '51663',responsenum: 3, answer:'Lorem Ipsum is simply dummy text of the printing and typesetting industry 3'},
              ]
            }

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
            ],
            responses: {
              num: 5,
              responseAnswer: [
                { id: '516651',responsenum: 1, answer:'A'},
                { id: '51662',responsenum: 2, answer:'B'},
                { id: '51663',responsenum: [3, 4, 5], answer:'C', repeat: 3},
              ]
            }
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
            ],
            responses: {
              num: 5,
              responseAnswer: [
                { id: '516651',responsenum: 1, answer:'A'},
                { id: '51662',responsenum: 2, answer:'B'},
                { id: '51663',responsenum: [3, 4, 5], answer:'C', repeat: 3},
              ]
            }
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
            ],
            responses: {
              num: 5,
              responseAnswer: [
                { id: '516651',responsenum: 1, answer:'A'},
                { id: '51662',responsenum: 2, answer:'B'},
                { id: '51663',responsenum: [3, 4, 5], answer:'C', repeat: 3},
              ]
            }

          },
          {
            id: '16156sad',
            type: 'question',
            question: 'Date Question',
            description: '',
            questionType: 'Date',
            required: 'true',
            responses: {
              num: 5,
              responseAnswer: [
                { id: '516651',responsenum: 1, answer:'5 Aug 2024'},
                { id: '516651',responsenum: [2, 4], answer:'1 Aug 2025', repeat: 2},
                { id: '516651',responsenum: 5, answer:'2 Aug 2022'},
                { id: '516651',responsenum: 3, answer:'3 Aug 2023'},
              ]
            }
          },
          {
            id: '16157sad',
            type: 'question',
            question: 'Time Question',
            description: '',
            questionType: 'Time',
            required: 'true',
            responses: {
              num: 5,
              responseAnswer: [
                { id: '516651',responsenum: 1, answer:'02:20 am'},
                { id: '516651',responsenum: [2, 4], answer:'05:20 am', repeat: 2},
                { id: '516651',responsenum: 5, answer:'04:20 am'},
                { id: '516651',responsenum: 3, answer:'03:20 am'},
              ]
            }

          },
        ],
      },
      currentQuestion: 1,
      viewOptions: false,
    }
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
    displayOptions() {
      this.viewOptions = !this.viewOptions
    }
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
  padding: 20px;
}

.question-title, .answers {
  font-family: 'Google Sans',Roboto,Arial,sans-serif;
  font-size: 16px;
  letter-spacing: .1px;
  line-height: 24px;
  color: #202124;
  font-weight: 400;
  word-break: break-word;
  margin-bottom: 0;
}

.response-num {
  font-family: Roboto,Arial,sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: .3px;
  line-height: 16px;
  color: #70757a;
  margin-top: 0;
  padding: 5px;
}

.answer {
  margin: 10px;
  font-family: Roboto, Arial, sans-serif;
  font-size: 13px;
  font-weight: 300;
  letter-spacing: .2px;
  line-height: 20px;
  color: #202124;
  text-align: justify;
}

.pagination-section {
  padding: 0 8px;
  margin: 0;
  height: 40px;
}

.page-item.active .page-link {
  background-color: #9d55a0;
  border-color: #9d55a0;
}

.question-section {
  margin: 20px 0;
}

.question-header {
  font-family: 'Google Sans',Roboto,Arial,sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 28px;
  color: #202124;
  min-width: 0%;
  display: flex;
  justify-content: space-between;
}

.view-options {
  color: #1a73e8;
  font-family: 'Google Sans',Roboto,Arial,sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: .25px;
  line-height: 36px;
  margin: auto 10px;
  cursor: pointer;
}

.options-display {
  margin-top: 15px;
}

.option {
  margin: 5px 10px;
  padding: 0;
}

.section-footer {
  border-top: 1px solid #c4c4c4;
  padding-top: 10px;
  margin-top: 20px;
}

.no-response {
  display: flex;
  justify-content: center;
  color: #777777;
}

.ar {
  direction: rtl;
  text-align: right;
}
</style>