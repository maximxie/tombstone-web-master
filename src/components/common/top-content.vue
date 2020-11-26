<template>
  <div class="top-content">
    <span class="declare">天堂网 — 创建于2006年，大型网上纪念馆平台，绿色网上祭奠、网上扫墓</span>

    <span class="link-other">
      <router-link to="/login">用户登录</router-link>
      <a-divider type="vertical" />
      <router-link to="/register">免费注册</router-link>
      <a-divider type="vertical" />
      <router-link to="/help">帮助中心</router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: "top-content"
}
</script>

<style scoped>
.top-content{
  height: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: #DCD7C2 1px solid;
  font-size: 13px;
  color: #8C847B;
}
.declare{
  margin-right: 500px;
}

</style>
