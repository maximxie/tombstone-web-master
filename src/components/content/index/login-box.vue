<template>
  <div class="box">
    <div class="login-title">用户登录</div>
    <div class="login-box">
      <a-input class="login-item" placeholder="用户名">
        <a-icon slot="prefix" type="user" />
      </a-input>
      <a-input class="login-item" placeholder="密码">
        <a-icon slot="prefix" type="lock" />
      </a-input>
      <a-button class="login-item" type="primary">登录</a-button>
      <a-button class="login-item" type="link">注册账户</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login-box"
}
</script>

<style scoped>
  .login-title{
    text-align: center;
    font-size: 20px;
    color: #AB5844;
    margin: 10px 0;
  }
  .box{
    margin: 20px;
    background-color: #F5EAC3;
    border: 1px solid #AB5844;
  }
  .login-item{
    width: 80%;
    margin: 5px 0;
  }
  .login-box{
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
  }
</style>
