<template>
  <div class="stone-type">
    <div class="stone" v-for="(item,index) in stones" :key="index">
      <img class="stone-image" alt :src="item.image" />
      <div class="stone-dec">
        <p>墓型：{{ item.type }}</p>
        <p>墓区：{{ item.site }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "stone-type",
  data(){
    return {
      stones: [
        { image: "/static/images/04.jpg", type: "圣经碑", site: "锡安园A区"},
        { image: "/static/images/04.jpg", type: "圣经碑", site: "锡安园A区"},
        { image: "/static/images/04.jpg", type: "圣经碑", site: "锡安园A区"}
      ]
    }
  }
}
</script>

<style scoped>
  .stone-type{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .stone{
    position: relative;
    margin: 10px;
    width: 200px;
    height: 250px;
  }
  .stone-image{
    width: 100%
  }
  .stone-dec{
    position: absolute;
    background: rgba(171,88,68,.8);
    color: #ffffff;
    bottom: 13px;
    width: 200px;
    text-align: center;
  }
  .stone-dec p{
    margin: 2px;
  }
</style>
