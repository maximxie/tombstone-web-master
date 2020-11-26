<template>
  <div class="people">
    <div class="bg"></div>
    <div class="menu-item">
      <router-link to="/people">生平简介</router-link>
      <router-link to="/people/jidian">祭奠留言</router-link>
      <router-link to="/people/picture">纪念相册</router-link>
      <router-link to="/people/article">纪念文章</router-link>
      <router-link to="/people/video">纪念视频</router-link>
      <router-link to="/">返回首页</router-link>
    </div>
    <div class="content">
      <div class="people-name">樊晓宇</div>
      <div class="people-avatar"><img alt src="/static/images/03.jpg" /></div>
      <div class="people-time">1939~2012</div>
      <div class="people-visit">到访:4288  墓地祭奠:4324   留言:1795</div>
      <div class="people-function">
        <div v-for="(item,index) in functions" :key="index" class="function-item"><img alt :src="item.img" /><div>{{item.text}}</div></div>
      </div>
      <div>
        <router-view />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'people',
  data(){
    return {
      functions: [
        {img: 'http://www.tiantang6.com/images/tag1.gif', text: '献花'},
        {img: 'http://www.tiantang6.com/images/tag3.gif', text: '点烛'},
        {img: 'http://www.tiantang6.com/images/tag4.gif', text: '上香'},
        {img: 'http://www.tiantang6.com/images/tag6.gif', text: '祭品'},
        {img: 'http://www.tiantang6.com/images/tag15.gif', text: '扫墓'},
        {img: 'http://www.tiantang6.com/images/tag2.gif', text: '献歌'},
        {img: 'http://www.tiantang6.com/images/tag16.gif', text: '留言'}
      ]
    }
  }
}
</script>

<style scoped>
  .people-dec-time{
    width: 100%;
    text-align: center;
    justify-content: center;
  }
  .function-item {
    display: flex;
    flex-wrap: wrap;
    width: 45px;
    cursor: pointer;
  }
  .content>div{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 5px;
  }
  .people-avatar img{
    width: 100px;
    height: 130px;
  }

  .people-name{
    font-size: 25px;
    text-align: center;
  }

  .menu-item{
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 15px;
  }
  .menu-item a{
    color: #EB5298;
    font-size: 18px;
    margin: 0 5px;
  }
  .bg{
    background-attachment: fixed;
    background-image: url(/static/images/08.jpg);
    background-repeat: no-repeat;
    background-position: left bottom;
    background-color: #fff;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: -1;
  }
</style>
