<template>
  <a-menu
    v-model="current"
    mode="horizontal"
    style="display: flex;justify-content: center;color: #451A12"
  >
    <a-menu-item key="index">
      <router-link to="/">
        <a-icon type="home" />首页
      </router-link>
    </a-menu-item>
    <a-menu-item key="house">
      <router-link to="/memorial">
        <a-icon type="bank" />纪念馆
      </router-link>
    </a-menu-item>
    <a-menu-item key="add">
      <router-link to="/add">
        <a-icon type="plus-circle" />新建纪念馆
      </router-link>
    </a-menu-item>
    <a-menu-item key="life">
      <router-link to="/life">
        <a-icon type="heart" />生命文化
      </router-link>
    </a-menu-item>
    <a-menu-item key="help">
      <router-link to="/help">
        <a-icon type="info-circle" />帮助中心
      </router-link>
    </a-menu-item>
  </a-menu>
</template>

<script>
export default {
  name: "index-nav",
  data() {
    return {
      current: ["index"],
    };
  },
};
</script>

<style scoped>
</style>
