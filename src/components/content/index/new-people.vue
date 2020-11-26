<template>
  <div class="new-people">
    <div v-for="(item,index) in peoples" :key="index" class="frame">
      <router-link to="/people">
        <img class="frame-bord" alt src="../../../assets/images/frame2.png">
        <img class="frame-avatar" alt :src="item.avatar" />
        <div class="frame-name">{{ item.name }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "new-people",
  data(){
    return{
      peoples : [
        { name: "樊晓宇", avatar: "/static/images/03.jpg", id: 1 },
        { name: "樊晓宇", avatar: "/static/images/03.jpg", id: 1 },
        { name: "樊晓宇", avatar: "/static/images/03.jpg", id: 1 },
        { name: "樊晓宇", avatar: "/static/images/03.jpg", id: 1 },
        { name: "樊晓宇", avatar: "/static/images/03.jpg", id: 1 },
        { name: "樊晓宇", avatar: "/static/images/03.jpg", id: 1 }
      ]
    }
  }
}
</script>

<style scoped>
  .new-people{
    margin-left: 40px;
    display: flex;
    flex-wrap: wrap;
  }
  .frame{
    width: 100px;
    margin: 10px;
  }
  .frame-name{
    text-align: center;
    font-size: 15px;
    font-weight: 700;
  }
  .frame-bord{
    position: absolute;
    width: 100px;
    height: 120px;
  }
  .frame-avatar{
    width: 100px;
    height: 120px;
  }
</style>
