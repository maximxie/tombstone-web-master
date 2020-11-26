<template>
  <div>
    <div class="content-box box-padding">
      <div>常见问题</div>
      <a-divider></a-divider>
      <div class="link-box">
        <router-link class="link" v-for="(item,index) in helpList" :key="index" :to="item.url">{{item.text}}</router-link>
      </div>
    </div>
    <div class="content-box tab-padding">
      <a-tabs type="card">
        <a-tab-pane key="1" tab="纪念馆问题">
          <a class="link" v-for="(item,index) in helpList" :key="index" :href="item.url">{{item.text}}</a>
        </a-tab-pane>
        <a-tab-pane key="2" tab="用户问题">
          <a class="link" v-for="(item,index) in helpList" :key="index" :href="item.url">{{item.text}}</a>
        </a-tab-pane>
      </a-tabs>
    </div>
    <div class="content-box box-padding">
      <div>在线咨询</div>
      <a-divider></a-divider>
      <div class="link-box">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "help-center",
  data() {
    return {
      helpList: [
        { text: '忘记用户名密码怎么办？', url: '/help/content/1'},
        { text: '找不到纪念馆怎么办？', url: ''},
        { text: '怎么上传照片？', url: ''},
        { text: '如何升级纪念馆？', url: ''},
        { text: '怎么进行网上祭奠？', url: ''},
        { text: '怎么访问手机版？', url: ''},
      ]
    }
  }
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
  .tab-padding{
    padding-bottom: 10px;
  }
  .link{
    padding: 10px;
    color: #4F4F4F;
  }
  .link:hover{
    color: #F16C20;
  }
</style>
