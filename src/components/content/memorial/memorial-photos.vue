<template>
  <div>
    <div class="photos">
      <div
        v-for="(item, index) in photos"
        :key="index"
        class="photo"
      >
        <a>
          <img :src="item.url">
          <span>{{ item.title }}</span>
        </a>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "MemorialPhotos",
  data() {
    const item = {
      url: "http://www.tiantang6.com/uptupian/mopic/p20201114143047.jpg",
      title: "药师佛圣诞放生",
    };
    return {
      photos: Array(4).fill(item),
    };
  },
};
</script>

<style scoped>
.photos {
  display: flex;
  justify-content: space-between;
}

.photo {
  padding: 10px;
}

.photo img {
  width: 100%;
  height: 120px;
}

.photo a {
  display: block;
  text-align: center;
}
</style>