<template>
    <div>
      <img class="life-icon" alt src="http://www.tiantang6.com/m/moban/1/img/pictt.gif">
      <div style="background-color: #ececec; padding: 20px;">
        <a-row :gutter="16">
          <a-col :span="8">
            <a-card hoverable>
              <img
                   alt="example"
                   class="life-icon"
                   src="http://localhost:8080/static/images/03.jpg" width="100dp">
              <template slot="actions" class="ant-card-actions">
              </template>
            </a-card>
          </a-col>
          <a-col :span="8">
            <a-card title="Card title" :bordered="false">
              <img class="life-icon" alt src="http://localhost:8080/static/images/03.jpg" width="100dp">
            </a-card>
          </a-col>
          <a-col :span="8">
            <a-card title="Card title" :bordered="false">
              <img class="life-icon" alt src="http://localhost:8080/static/images/03.jpg" width="100dp">
            </a-card>
          </a-col>
        </a-row>
      </div>

    </div>
</template>

<script>
export default {
  name: "people-photo"

}
</script>

<style scoped>

</style>
