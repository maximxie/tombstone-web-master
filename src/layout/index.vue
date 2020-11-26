<template>
  <div>
    <top-content></top-content>
    <logo-content></logo-content>
    <index-nav></index-nav>
    <router-view></router-view>
    <footer-menu></footer-menu>
  </div>
</template>

<script>
import IndexNav from "@/components/common/index-nav"
import FooterMenu from "@/components/common/footer-menu";
import LogoContent from "@/components/common/logo-content";
import TopContent from "@/components/common/top-content";

export default {
  name: "index",
  components: {TopContent, LogoContent, FooterMenu, IndexNav}
}
</script>

<style scoped>

</style>
