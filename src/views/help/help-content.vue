<template>
  <div class="content-box box-padding">
    <div class="help-title">忘记用户名密码怎么办？</div>
    <a-divider></a-divider>
    <div class="help-content">
      <b>忘记密码：</b>可以到“忘记密码”栏目，第一步输入登录用户名，第二步输入手机号码验证并重设密码。
      <br>
      <br>
      <b>忘记登录用户名：</b>可以联系客服，提供(手机/注册邮箱/纪念馆编号等)帮查询用户名。
    </div>
  </div>
</template>

<script>
export default {
  name: "help"
}
</script>

<style scoped>
.content-box{
  margin: 0 0 10px 0;
  border: #DCD7C2 1px solid;
  background: #fff;
}
.box-padding{
  padding: 10px 20px 22px 20px;
}
.help-title{
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin-bottom: -10px;
}
</style>
