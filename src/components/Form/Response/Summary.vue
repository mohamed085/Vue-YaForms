<template>
  <div class="summary">

    <div class="form-view en animate__animated animate__backInLeft">
      <div class="form-content">

        <div v-for="question in questions" :key="question.id">
          <div v-if="question.type === 'question'">

            <div class="section question-section" v-if="question.questionType === 'Short answer'">
              <p class="question-title">{{ question.question }} ?</p>
              <p class="response-num">{{ question.responses.num }} responses</p>
              <p class="answers">Answers</p>
              <p class="answer short-answer" v-for="answer in question.responses.responseAnswer" :key="answer.id">
                {{ answer.answer }} <span style="color: var(--var-main-color)" v-if="answer.repeat"> - Repeated {{ answer.repeat }}</span>
              </p>
            </div>

            <div class="section question-section" v-if="question.questionType === 'Paragraph'">
              <p class="question-title">{{ question.question }} ?</p>
              <p class="response-num">{{ question.responses.num }} responses</p>
              <p class="answers">Answers</p>
              <p class="answer short-answer" v-for="answer in question.responses.responseAnswer" :key="answer.id">
                {{ answer.answer }} <span style="color: var(--var-main-color)" v-if="answer.repeat"> - Repeated {{ answer.repeat }}</span>
              </p>
            </div>

            <div class="section question-section" v-if="question.questionType === 'Date'">
              <p class="question-title">{{ question.question }} ?</p>
              <p class="response-num">{{ question.responses.num }} responses</p>
              <p class="answers">Answers</p>
              <p class="answer short-answer" v-for="answer in question.responses.responseAnswer" :key="answer.id">
                {{ answer.answer }} <span style="color: var(--var-main-color)" v-if="answer.repeat"> - Repeated {{ answer.repeat }}</span>
              </p>
            </div>

            <div class="section question-section" v-if="question.questionType === 'Time'">
              <p class="question-title">{{ question.question }} ?</p>
              <p class="response-num">{{ question.responses.num }} responses</p>
              <p class="answers">Answers</p>
              <p class="answer short-answer" v-for="answer in question.responses.responseAnswer" :key="answer.id">
                {{ answer.answer }} <span style="color: var(--var-main-color)" v-if="answer.repeat"> - Repeated {{ answer.repeat }}</span>
              </p>
            </div>

            <div class="section question-section" v-if="question.questionType === 'Phone number'">
              <p class="question-title">{{ question.question }} ?</p>
              <p class="response-num">{{ question.responses.num }} responses</p>
              <p class="answers">Answers</p>
              <p class="answer short-answer" v-for="answer in question.responses.responseAnswer" :key="answer.id">
                {{ answer.answer }} <span style="color: var(--var-main-color)" v-if="answer.repeat"> - Repeated {{ answer.repeat }}</span>
              </p>
            </div>

            <div class="section question-section" v-if="question.questionType === 'Multiple choice'">
              <p class="question-title">{{ question.question }} ?</p>
              <p class="response-num">{{ question.responses.num }} responses</p>
              <v-chart class="chart" :option="question.option" />
            </div>

            <div class="section question-section" v-if="question.questionType === 'Checkboxes'">
              <p class="question-title">{{ question.question }} ?</p>
              <p class="response-num">{{ question.responses.num }} responses</p>
              <v-chart class="chart" :option="question.option" />
            </div>

            <div class="section question-section" v-if="question.questionType === 'Dropdown'">
              <p class="question-title">{{ question.question }} ?</p>
              <p class="response-num">{{ question.responses.num }} responses</p>
              <v-chart class="chart" :option="question.option" />
            </div>



          </div>

      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import { TitleComponent, TooltipComponent, LegendComponent } from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

export default {
  name: "Summary",
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: "dark"
  },
  data() {
    return {
      questions: [],
      isLoading: false
    }
  },
  computed: {
    getLang() {
      return this.$store.getters['main/getLang']
    },
  },
  created() {
    this.loadFormResponses(this.$route.params.id);
  },
  methods: {
    async loadFormResponses(id) {
      this.isLoading = true;

      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      let url = `https://ya-forms-api.herokuapp.com/api/form/` + id + `/responses/summary`;

      const response = await fetch(url, requestOptions);
      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to fetch!');
        throw error;
      }

      console.log(responseData)

      responseData.forEach(question => {
        // eslint-disable-next-line no-constant-condition
        if (question.questionType === "Short answer" || question.questionType === "Paragraph" || question.questionType === "Time" || question.questionType === "Date" || question.questionType === "Phone number") {
          let count = 0;
          let newQuestion = {
            id: question.id,
            question: question.question,
            type: question.type,
            questionType: question.questionType,
            required: question.required,
            responses: {
              num: '',
              responseAnswer: []
            }
          }
          question.response.forEach(response => {
            let newResponses;
            if (response.answer !== undefined) {
              if (newQuestion.responses.responseAnswer.length === 0) {
                count ++;
                newResponses = { id: response.id, answer: response.answer };
                newQuestion.responses.responseAnswer.push(newResponses);
              }
              else {
                let flag = 0;
                newQuestion.responses.responseAnswer.forEach(responseAnswer => {
                  if (response.answer === responseAnswer.answer) {
                    flag = 1;
                    count ++;
                    if (responseAnswer.repeat) responseAnswer.repeat++;
                    else responseAnswer.repeat = 2;
                  }
                })
                if (flag === 0) {
                  count ++;
                  newResponses = { id: response.id, answer: response.answer };
                  newQuestion.responses.responseAnswer.push(newResponses);
                }
              }

            }
          })
          newQuestion.responses.num = count;
          this.questions.push(newQuestion)
        }

        if (question.questionType === "Multiple choice" || question.questionType === "Dropdown") {
          let count = 0;
          let newQuestion = {
            id: question.id,
            question: question.question,
            type: question.type,
            questionType: question.questionType,
            required: question.required,
            responses: {
              num: '',
            },
            option: {
              title: {
                text: question.question,
                left: "center"
              },
              tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              legend: {
                orient: "vertical",
                left: "left",
                data: question.options.value
              },
              series: [
                {
                  name: question.question,
                  type: "pie",
                  radius: "55%",
                  center: ["50%", "60%"],
                  data: [],
                  emphasis: {
                    itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: "rgba(0, 0, 0, 0.5)"
                    }
                  }
                }
              ]
            },
          }
          question.response.forEach(response => {
            let newData;
            if (response.answer !== undefined) {
              if (newQuestion.option.series[0].data.length === 0) {
                count ++;
                newData = { value: 1, name: response.answer };
                newQuestion.option.series[0].data.push(newData);
              }
              else {
                let flag = 0;
                newQuestion.option.series[0].data.forEach(data => {
                  if (response.answer === data.name) {
                    flag = 1;
                    count ++;
                    newData = { value: data.value++, name: data.name };
                  }
                })
                if (flag === 0) {
                  count ++;
                  newData = { value: 1, name: response.answer };
                  newQuestion.option.series[0].data.push(newData);
                }
              }
            }
          })

          newQuestion.responses.num = count
          this.questions.push(newQuestion)
        }

        if (question.questionType === "Checkboxes") {
          let count = 0;
          let newQuestion = {
            id: question.id,
            question: question.question,
            type: question.type,
            questionType: question.questionType,
            required: question.required,
            responses: {
              num: '',
            },
            option: {
              title: {
                text: question.question,
                left: "center"
              },
              tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              legend: {
                orient: "vertical",
                left: "left",
                data: question.options.value
              },
              series: [
                {
                  name: question.question,
                  type: "pie",
                  radius: "55%",
                  center: ["50%", "60%"],
                  data: [],
                  emphasis: {
                    itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: "rgba(0, 0, 0, 0.5)"
                    }
                  }
                }
              ]
            },
          }
          question.response.forEach(response => {
            response.answer.forEach(answer => {
              let newData;
              if (response.answer !== undefined) {
                if (newQuestion.option.series[0].data.length === 0) {
                  count ++;
                  newData = { value: 1, name: answer };
                  newQuestion.option.series[0].data.push(newData);
                }
                else {
                  let flag = 0;
                  newQuestion.option.series[0].data.forEach(data => {
                    if (answer === data.name) {
                      flag = 1;
                      count ++;
                      newData = { value: data.value++, name: data.name };
                    }
                  })
                  if (flag === 0) {
                    count ++;
                    newData = { value: 1, name: answer };
                    newQuestion.option.series[0].data.push(newData);
                  }
                }
              }
            })
          })

          newQuestion.responses.num = count
          this.questions.push(newQuestion)
        }


      });
      this.isLoading = false;
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

.chart {
  width: 95%;
  height: 400px;
  margin: 10px auto;
}

.ar {
  direction: rtl;
  text-align: right;
}
</style>