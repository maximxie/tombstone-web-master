<template>
  <div class="logo-content">
    <img alt class="logo" src="../../assets/images/logo.png" />
    <div class="search-box">
      <a-input-search placeholder="查找纪念馆" enter-button />
    </div>
  </div>
</template>

<script>
export default {
  name: "logo-content"
}
</script>

<style scoped>
  .logo-content{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo{
    margin-right: 500px;
  }
</style>
