<template>
  <div>
    <!--
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




      <div v-if="form[currentQuestion - 1].phone" class="csv">
        <button class="phone-btn">Export numbers as csv</button>
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

          <div v-if="question.questionType === 'Phone number'" class="section question-section question">
            <p class="question-title short-answer-title">{{ question.question }} ?</p>
            <b-form-input
                class="input question-short-answer"
                type="text"
                placeholder="Your answer"
                v-model="question.response"
                disabled
            ></b-form-input>
          </div>

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

    -->





    <!--




    -->
  </div>
</template>

<script>
export default {
  name: "Test",
}
</script>

<style scoped>
</style>
