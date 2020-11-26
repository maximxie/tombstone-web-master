<template>
  <div
    class="login"
    style="display: flex;justify-content: center;"
  >
    <h2 style="text-align:center;margin-top:20px;">注册用户</h2>
    <div id="loginbox">

      <a-card title="注册">
        <a-divider
          orientation="left"
          style="color: #AB5844"
        >
          设置登陆账号
        </a-divider>
        <a-form
          :form="form"
          :layout="formLayout"
          @submit="handleSubmit"
        >
          <a-form-item
            label="手机号"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-input
              placeholder="输入手机号"
              v-decorator="['nickname', { rules: [{ required: true, message: '请输入用户名' }] }]"
            >

            </a-input>
          </a-form-item>
          <a-form-item
            label="验证码"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-input-search
              placeholder="验证码"
              v-decorator="['nickname', { rules: [{ required: true, message: '请输入用户名' }] }]"
            >

              <a-button
                type="primary"
                slot="enterButton"
              >
                获取手机验证码
              </a-button>
            </a-input-search>

          </a-form-item>
          <a-form-item
            label="登陆密码"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-input-password
              placeholder="登陆密码"
              v-decorator="['password', { rules: [{ required: true, message: '请输入密码' }] }]"
            >
              <a-icon
                slot="prefix"
                type="lock"
                style="color:rgba(0,0,0,.25)"
              />
            </a-input-password>
          </a-form-item>
          <a-form-item
            label="昵称"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-input
              placeholder="昵称"
              v-decorator="['nickname', { rules: [{ required: true, message: '请输入昵称' }] }]"
            >

            </a-input>
          </a-form-item>
        </a-form>

        <!-- 会员核实资料 -->
        <a-divider
          orientation="left"
          style="color: #AB5844;"
        >
          设置会员核实资料:
          <a-checkbox
            style="padding-left:16px;"
            v-model="isMore"
          >
            暂不填写
          </a-checkbox>
        </a-divider>

        <a-form v-if="!isMore">
          <a-form-item
            label="真实姓名"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-input v-decorator="['nickname', { rules: [{ required: true, message: '请输入用户名' }] }]">

            </a-input>
          </a-form-item>
          <a-form-item
            label="性别"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-select
              default-value="lucy"
              style="width: 120px"
            >
              <a-select-option value="jack">
                男
              </a-select-option>
              <a-select-option value="lucy">
                女
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item
            label="邮箱地址"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-input v-decorator="['nickname', { rules: [{ required: true, message: '请输入用户名' }] }]">

            </a-input>
          </a-form-item>
          <a-form-item
            label="证件号码"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-input v-decorator="['nickname', { rules: [{ required: true, message: '请输入用户名' }] }]">

            </a-input>
          </a-form-item>
          <a-form-item
            label="联系电话"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-input v-decorator="['nickname', { rules: [{ required: true, message: '请输入用户名' }] }]">

            </a-input>
          </a-form-item>
          <a-form-item
            label="通信地址"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-input v-decorator="['nickname', { rules: [{ required: true, message: '请输入用户名' }] }]">

            </a-input>
          </a-form-item>

        </a-form>
        <a-form-item
          label="服务条款"
          :label-col="formItemLayout.labelCol"
          :wrapper-col=" { span: 16 }"
        >
          <a-checkbox>
            阅读并同意天堂网服务条款！提交注册资料表示已同意。
          </a-checkbox>
        </a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          style="margin-right:10px;"
        >
          提交注册
        </a-button>
      </a-card>
    </div>
    <div class="footer">
      <p
        align="center"
        class="top50"
      >
        <router-link to="/">首页</router-link> |
        <router-link to="/memorial/">网上纪念馆</router-link> |
        <router-link to="/add/">快速建馆</router-link> |
        <router-link to="/culture/">民俗文化</router-link> |
        <router-link to="/life/">生命文化</router-link> |
        <router-link to="/info/">天堂资讯</router-link> |
        <router-link to="/help/">帮助中心</router-link> |
        <router-link to="/router-linkbout/">关于天堂网</router-link>
      </p>
      <p
        align="center"
        class="footext"
      >Copyright © 2006- 2020 <router-link to="/">天堂网</router-link> www.tiantang6.com All Rights Reserved. </p>
    </div>
  </div>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 8 },
};

export default {
  name: "Login",
  data() {
    return {
      isMore: false,
      formItemLayout,
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
    };
  },
  methods: {
    handleSubmit() {
      this.form.validateFields(["nickname", "password"], { force: true });
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#loginbox {
  width: 882px;
  margin: 64px auto;
  border: #E8E8E8 8px solid;
}

.footer a {
  color: #4F4F4F;
}
</style>