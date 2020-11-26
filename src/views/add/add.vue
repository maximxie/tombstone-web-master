<template>
  <div class="add-content">
    <div class="add-text">新建网上纪念馆</div>
    <div class="add-from">
      <a-divider orientation="left">
        纪念馆信息
      </a-divider>
      <add-from></add-from>
    </div>
  </div>
</template>

<script>
import AddFrom from "@/components/content/add/add-from";
export default {
  name: "add",
  components: {AddFrom}
}
</script>

<style scoped>
  .add-content{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .add-from{
    width: 840px;
    border: #DCD7C2 1px solid;
    padding: 0 20px;
    background: #fff;
  }
  .add-text{
    width: 80%;
    margin: 0 50px;
    text-align: center;
    line-height: 50px;
    font-size: 22px;
    font-weight: bold;
  }
</style>
