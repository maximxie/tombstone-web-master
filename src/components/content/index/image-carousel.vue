<template>
  <a-carousel class="carousel" :after-change="onChange" autoplay>
    <div class="image-item" v-for="(item,index) in images" :key="index"><img alt :src="item"></div>
  </a-carousel>
</template>
<script>
export default {
  name: 'image-carousel',
  data() {
    return {
      images : [
        "/static/images/01.jpg",
        "/static/images/02.jpg"
      ]
    }
  },
  methods: {
    onChange(a, b, c) {
      console.log(a, b, c);
    },
  },
};
</script>
<style scoped>
.carousel{
  margin-top: 10px;
}
.image-item{
  display: flex!important;
  justify-content: center;
}
</style>
