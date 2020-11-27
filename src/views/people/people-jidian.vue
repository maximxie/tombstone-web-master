<!--<template>-->
<!--  <div class="article">-->
<!--    <img class="life-icon" alt src="http://www.tiantang6.com/m/moban/1/img/dltt.gif">-->

<!--    <div class="article-list">-->
<!--      <div-->
<!--        class="article-item"-->
<!--        v-for="(item, index) in articles"-->
<!--        :key="index"-->
<!--      >-->
<!--        <h3>签名：{{item.name}}</h3>-->
<!--        <p>-->
<!--          <img-->
<!--            :src="item.img"-->
<!--            alt=""-->
<!--            width="90"-->
<!--            height="60"-->
<!--            class=""-->
<!--          >-->
<!--          {{item.summary}}-->
<!--        </p>-->
<!--        <div style="text-align:right">-->
<!--          <span>{{item.time}}</span>-->
<!--        </div>-->
<!--        <a-divider dashed />-->
<!--      </div>-->
<!--      <a-pagination-->
<!--        v-model="current"-->
<!--        :total="50"-->
<!--        show-less-items-->
<!--        style="text-align:center;"-->
<!--      />-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<template>
  <div style="width: 50%">
    <img class="life-icon" alt src="http://www.tiantang6.com/m/moban/1/img/dltt.gif">

    <a-list
      v-if="comments.length"
      :data-source="comments"
      :header="`留言数： ${comments.length} `"
      item-layout="horizontal"
    >


      <a-list-item slot="renderItem" slot-scope="item">
        <a-comment
          :author="item.author"
          :avatar="item.avatar"
          :content="item.content"
          :datetime="item.datetime"
        />
      </a-list-item>
    </a-list>
    <a-comment>
      <div slot="content">
        <a-form-item>
          <a-textarea :rows="4" :value="value" @change="handleChange" placeholder="留言处" style="resize:none;"/>
        </a-form-item>
        <a-form-item>
          <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
            提交
          </a-button>
        </a-form-item>
      </div>
    </a-comment>
  </div>
</template>
<!--<script>-->

<!--export default {-->
<!--  name: "people-jidian",-->
<!--  data() {-->
<!--    const item = {-->
<!--      name: "父亲",-->
<!--      img: "http://www.tiantang6.com/pic/4/15.gif",-->
<!--      summary:-->
<!--        "岁岁清明，今又清明，万株杨柳属流莺。千百年来，清明不仅见证了华夏民族的根脉情深，传承了千年古国的文化基因，在漫长的时间中更积蓄了沉甸甸的民俗、文化内涵，已绵延成为中华儿女缅怀先祖、寄托思念的一场几近虔诚与近乎唯美的文化仪式。",-->
<!--      time: "2019/03/25",-->
<!--    };-->
<!--    return {-->
<!--      articles: Array(5).fill(item),-->
<!--      current: 2,-->
<!--    };-->
<!--  }-->
<!--}-->
<!--</script>-->
<script>
import moment from 'moment';
export default {
  data() {
    return {
      comments: [
        {
          author: 'Han Solo',
          avatar: 'http://www.tiantang6.com/pic/4/15.gif',
          content: '一路走好',
          datetime: moment().fromNow(),
        },
        {
          author: 'Han Solo',
          avatar: 'http://www.tiantang6.com/pic/4/15.gif',
          content: '一路走好',
          datetime: moment().fromNow(),
        }
      ],
      submitting: false,
      value: '',
      moment,

    };
  },
  methods: {
    handleSubmit() {
      if (!this.value) {
        return;
      }

      this.submitting = true;

      setTimeout(() => {
        this.submitting = false;
        this.comments = [
          {
            author: 'Han Solo',
            avatar: 'http://www.tiantang6.com/pic/4/15.gif',
            content: this.value,
            datetime: moment().fromNow(),
          },
          ...this.comments,
        ];
        this.value = '';
      }, 1000);
    },
    handleChange(e) {
      this.value = e.target.value;
    },
  },
};
</script>
<style scoped>

</style>
