<template>
  <div class="memorial">
    <image-carousel />
    <div style="display: flex;justify-content: center;">
      <div class="content">
        <a-divider
          orientation="left"
          style="color: #AB5844"
        >
          网上纪念馆
        </a-divider>
        <online-memorial />
        <a-divider
          orientation="left"
          style="color: #AB5844"
        >
          纪念文章
        </a-divider>
        <memorial-article />
        <a-divider
          orientation="left"
          style="color: #AB5844"
        >
          纪念相册
        </a-divider>
        <memorial-photos />
      </div>

    </div>
  </div>
</template>

<script>
import ImageCarousel from "@/components/content/index/image-carousel"
import OnlineMemorial from "@/components/content/memorial/online-memorial"
import MemorialArticle from "@/components/content/memorial/memorial-article.vue"
import MemorialPhotos from "@/components/content/memorial/memorial-photos.vue"

export default {
  name: "Memorial",
  components: {
    ImageCarousel,
    OnlineMemorial,
    MemorialArticle,
    MemorialPhotos,
  },
};
</script>

<style  scoped>
.content {
  width: 60%;
}
</style>
