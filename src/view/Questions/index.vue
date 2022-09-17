<template>
  <div class="question">
    <header>
      <h3>问题</h3>
    </header>
    <div class="content">
      <van-collapse v-model="activeNames">
        <van-collapse-item :title="item.question" :name="index+1" v-for="(item,index) in questionData" :key="item._id">
          <div v-for="item1 in item.answers" :key="item1._id">
            <div class="flex">
              <span>{{item1.answerAuthor}}</span><span>{{item1.answerDate}}</span>
            </div>
            <div class="item-content">回复：{{item1.content}}</div>
          </div>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs } from 'vue'
import { getQuestions } from '../../api/question.js'
export default defineComponent({
  name: 'question',
  setup () {
    const activeNames = ref(['0'])
    const res = reactive({
      questionData: []
    })
    const getQuestionData = async() => {
      const {data} = await getQuestions()
      res.questionData = data.data
      console.log(data.data);
    }
    getQuestionData()
    return {
      activeNames,
      ...toRefs(res)
    }
  }
})
</script>

<style scoped lang='less'>
  h3,
  h4 {
    margin: 0;
  }
  
  .question {
    header {
      h3 {
        height: 45px;
        line-height: 45px;
        background-color: #3296fa;
        color: #fff;
        font-size: 22px;
        text-align: center;
      }
    }
  
    .content {
           
      color: #888;
      .item-content {
        font-size: 16px; 
      }
      .flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 18px;
      }
    }
  }
  </style>
