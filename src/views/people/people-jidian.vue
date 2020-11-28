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

    <div>
      <a-collapse>
        <template #expandIcon="props">
          <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
        </template>
        <a-collapse-panel key="1" header="点击进行留言" class="customStyle">
          <a-comment>
            <div slot="content">
              <a-form-item>
                <span style="font-weight: bold">留言:</span>
                <a-textarea :rows="4" :value="value" @change="handleChange" allow-clear/>
                <span style="font-weight: bold">签名:</span>
                <a-input :name="name" @change="handleChange2" allow-clear/>
              </a-form-item>
              <a-form-item>
                <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
                  提交
                </a-button>
              </a-form-item>
            </div>
          </a-comment>
        </a-collapse-panel>

      </a-collapse>
    </div>


  </div>
</template>

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
      name: '',
      moment,
    };
  },
  methods: {
    handleSubmit() {
      if (!this.value||!this.name) {
        return;
      }

      this.submitting = true;

      setTimeout(() => {
        this.submitting = false;
        this.comments = [
          {
            author: this.name,
            avatar: 'http://www.tiantang6.com/pic/4/15.gif',
            content: this.value,
            datetime: moment().fromNow(),
          },
          ...this.comments,
        ];
        this.value = '';
        this.name = '@@@';
      }, 1000);
    },
    handleChange(e) {
      this.value = e.target.value;
    },
    handleChange2(e) {
      this.name = e.target.value;
    },
  },
};
</script>
<style scoped>
.customStyle{
  border-radius: 4px;
  margin-bottom: 24px;
  bordered: true;
  overflow: hidden;
}
</style>
