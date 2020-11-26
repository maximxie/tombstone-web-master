<template>
  <div>
    <a-card title="帮助中心">
      <a-button type="link">
        <router-link to="/help">帮助中心</router-link>
      </a-button>
      <a-button type="link">
        在线咨询
      </a-button>
      <a-divider>关于本站</a-divider>
      <a-button type="link">
        服务介绍
      </a-button>
      <a-button type="link">
        服务公约
      </a-button>
      <a-button type="link">
        联系我们
      </a-button>
    </a-card>
  </div>
</template>

<script>
export default {
  name: "help-menu"
}
</script>

<style scoped>

</style>
