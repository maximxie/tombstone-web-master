<template>
  <div>
    <image-carousel />
    <div class="content">
      <div class="left-item">
        <help-menu />
      </div>
      <div class="right-item">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import ImageCarousel from "@/components/content/index/image-carousel";
import HelpMenu from "@/components/content/help/help-menu";
export default {
  name: "help",
  components: {HelpMenu, ImageCarousel}
}
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
