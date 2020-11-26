<template>
  <div class="online">
    <div
      v-for="(item,index) in peoples"
      :key="index"
      class="frame"
    >
      <img
        class="frame-bord"
        alt
        src="../../../assets/images/frame2.png"
      >
      <img
        class="frame-avatar"
        alt
        :src="item.avatar"
      />
      <div class="frame-name">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "new-people",
  data() {
    const item = { name: "樊晓宇", avatar: "/static/images/03.jpg", id: 1 };
    return {
      peoples: Array(20).fill(item),
    };
  },
};
</script>

<style scoped>
.online {
  display: flex;
  flex-wrap: wrap;
}
.frame {
  width: 100px;
  margin: 10px;
}
.frame-name {
  text-align: center;
  font-size: 15px;
  font-weight: 700;
}
.frame-bord {
  position: absolute;
  width: 100px;
  height: 120px;
}
.frame-avatar {
  width: 100px;
  height: 120px;
}
</style>