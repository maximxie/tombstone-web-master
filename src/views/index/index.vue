<template>
  <div class="home">
    <image-carousel />
    <div style="display: flex;justify-content: center;">
      <div class="left-item">
        <a-divider
          orientation="left"
          style="color: #AB5844"
        >
          最新祭奠
        </a-divider>
        <new-people />
        <a-divider
          orientation="left"
          style="color: #AB5844"
        >
          墓位类型
        </a-divider>
        <stone-type />
        <a-divider
          orientation="left"
          style="color: #AB5844"
        >
          寄存位置
        </a-divider>
        <stone-position />
        <a-divider
          orientation="left"
          style="color: #AB5844"
        >
          价格对照表
        </a-divider>
        <price-list />
      </div>
      <div class="right-item">
        <login-box />
      </div>
    </div>
  </div>
</template>

<script>
import ImageCarousel from "@/components/content/index/image-carousel"
import NewPeople from "@/components/content/index/new-people"
import LoginBox from "@/components/content/index/login-box"
import StoneType from "@/components/content/index/stone-type"
import StonePosition from "@/components/content/index/stone-position"
import PriceList from "@/components/content/index/price-list";
export default {
  name: "Home",
  components: {
    PriceList,
    StonePosition,
    StoneType,
    LoginBox,
    NewPeople,
    ImageCarousel,
  },
};
</script>

<style scoped>
.left-item {
  width: 40%;
}
.right-item {
  width: 20%;
}
</style>
