<template>
  <div id="app">
    <a-locale-provider :locale="locale">
      <router-view/>
    </a-locale-provider>
  </div>
</template>
<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
export default {
  data() {
    return {
      locale: zhCN,
    };
  }
}
</script>
<style lang="less">
body {
  background: #F8F8F8 url(./assets/images/bodybg.jpg)
}
</style>
