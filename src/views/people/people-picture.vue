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
                src="http://localhost:8080/static/images/03.jpg"
              />
              <a-card-meta title="相册1">
                <template slot="description">
                  <a href="/people">点击查看</a>
                </template>
              </a-card-meta>
            </a-card>
          </a-list-item>
          <a-list-item class="lll">
            <a-card hoverable style="width: 140px">
              <img
                slot="cover"
                alt="example"
                src="http://localhost:8080/static/images/03.jpg"
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
