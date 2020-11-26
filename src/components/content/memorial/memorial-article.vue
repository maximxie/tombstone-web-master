<template>
  <div class="article">
    <ul class="newslist">
      <li
        v-for="(item, index) in newslist"
        :key="index"
      >
        <a
          href="#"
          target="_blank"
          class="title"
        >
          {{item.title}}
          <span class="place">
            [{{item.place}}]
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MemorialArticle",
  data() {
    const item = {
      title: "寒衣节一切安好",
      place: "张宏林纪念馆",
    };
    return {
      newslist: Array(16).fill(item),
    };
  },
};
</script>

<style scoped>
.newslist {
  -moz-columns: 2;
  -webkit-columns: 2;
  columns: 2;
}

.title {
  color: #4F4F4F;
}

.title:hover {
  color: #F16C20;
}

.place {
  color: #1F6374;
}
</style>