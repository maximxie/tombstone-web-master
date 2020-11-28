<template>
    <div>
      <img class="life-icon" alt src="http://www.tiantang6.com/m/moban/1/img/pictt.gif">
      <div>
        <a-upload-list class="uuu">
          <a-list-item class="lll">
            <a-card hoverable style="width: 140px">
              <img
                slot="cover"
                alt="example"
                src="http://localhost:8081/static/images/03.jpg"
              />
              <a-card-meta title="相册1">
                <template slot="description">
                  <a href="/people/people-picture-1">点击查看</a>
                </template>
              </a-card-meta>
            </a-card>
          </a-list-item>
          <a-list-item class="lll">
            <a-card hoverable style="width: 140px">
              <img
                slot="cover"
                alt="example"
                src="http://localhost:8081/static/images/03.jpg"
              />
              <a-card-meta title="相册1">
                <template slot="description">
                  <a href="/people">点击查看</a>
                </template>
              </a-card-meta>
            </a-card>
          </a-list-item>
        </a-upload-list>
      </div>




<!--      <img class="life-icon" alt src="http://www.tiantang6.com/m/moban/1/img/pictt.gif">-->
<!--      <div style="background-color: #ececec; padding: 20px;">-->
<!--        <a-row :gutter="16">-->
<!--          <a-col :span="8">-->
<!--            <a-card hoverable>-->
<!--              <img-->
<!--                   alt="example"-->
<!--                   class="life-icon"-->
<!--                   src="http://localhost:8080/static/images/03.jpg" width="100dp">-->
<!--              <template slot="actions" class="ant-card-actions">-->
<!--              </template>-->
<!--            </a-card>-->
<!--          </a-col>-->
<!--          <a-col :span="8">-->
<!--            <a-card title="Card title" :bordered="false">-->
<!--              <img class="life-icon" alt src="http://localhost:8080/static/images/03.jpg" width="100dp">-->
<!--            </a-card>-->
<!--          </a-col>-->
<!--          <a-col :span="8">-->
<!--            <a-card title="Card title" :bordered="false">-->
<!--              <img class="life-icon" alt src="http://localhost:8080/static/images/03.jpg" width="100dp">-->
<!--            </a-card>-->
<!--          </a-col>-->
<!--        </a-row>-->
<!--      </div>-->

    </div>
</template>

<script>

export default {
  name: "people-picture"
}
</script>

<style scoped>

  .uuu {
    list-style: none;
    margin-left: 50px;
  }

  .lll {
    display: inline;
    line-height: 40px;
    float:left
  }
</style>
