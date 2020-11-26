<template>
  <div
    class="login"
    style="display: flex;justify-content: center;"
  >
    <div class="header">
      <router-link to="/">返回首页</router-link>
    </div>
    <div id="loginbox">
      <a-card title="登陆">
        <router-link
          slot="extra"
          to="/register"
        >注册</router-link>
        <a-form
          :form="form"
          :layout="formLayout"
          @submit="handleSubmit"
        >
          <a-form-item label="用户名">
            <a-input
              placeholder="用户名、手机号"
              v-decorator="['nickname', { rules: [{ required: true, message: '请输入用户名' }] }]"
            >
              <a-icon
                slot="prefix"
                type="user"
                style="color:rgba(0,0,0,.25)"
              />
            </a-input>
          </a-form-item>

          <a-form-item label="密码">
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
          <a-form-item>
            <a-button
              type="primary"
              html-type="submit"
              style="margin-right:10px;"
            >
              登录
            </a-button>
            <router-link to="#">忘记密码?</router-link>
          </a-form-item>
        </a-form>
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
export default {
  name: "Login",
  data() {
    return {
      formLayout: "vertical",
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

.header {
  text-align: right;
  padding: 16px;
  margin-top: 16px;
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