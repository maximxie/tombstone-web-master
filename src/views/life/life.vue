<template>
  <div class="lift">
    <image-carousel />
    <div class="content">
      <div class="left-item">
        <life-menu />
      </div>
      <div class="right-item">
        <life-article />
      </div>
    </div>
  </div>
</template>

<script>
import ImageCarousel from "@/components/content/index/image-carousel.vue"
import LifeMenu from "@/components/content/life/life-menu.vue"
import LifeArticle from "@/components/content/life/life-article.vue"
export default {
  components: { ImageCarousel, LifeMenu, LifeArticle },
  name: "Life",
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}
.left-item {
  width: 10%;
  margin-right: 24px;
}
.right-item {
  width: 50%;
}
</style>
