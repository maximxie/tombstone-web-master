<template>
  <div class="article">
    <a-divider
      orientation="left"
      style="color: #AB5844"
    >
      生命文化
    </a-divider>

    <div class="article-list">
      <div
        class="article-item"
        v-for="(item, index) in articles"
        :key="index"
      >
        <h3>{{item.title}}</h3>
        <p>
          <img
            :src="item.img"
            alt=""
            width="90"
            height="60"
            class=""
          >
          {{item.summary}}
        </p>
        <div style="text-align:right">
          <span>{{item.time}}</span>
        </div>
        <a-divider dashed />
      </div>
      <a-pagination
        v-model="current"
        :total="50"
        show-less-items
        style="text-align:center;"
      />
    </div>
  </div>
</template>


<script>
export default {
  name: "LifeArticle",
  data() {
    const item = {
      title: "青春作伴过清明",
      img: "http://www.tiantang6.com/pic/4/15.gif",
      summary:
        "岁岁清明，今又清明，万株杨柳属流莺。千百年来，清明不仅见证了华夏民族的根脉情深，传承了千年古国的文化基因，在漫长的时间中更积蓄了沉甸甸的民俗、文化内涵，已绵延成为中华儿女缅怀先祖、寄托思念的一场几近虔诚与近乎唯美的文化仪式。",
      time: "2019/03/25",
    };
    return {
      articles: Array(10).fill(item),
      current: 2,
    };
  }
};
</script>


<style scoped>
.article {
  background: #fff;
  padding: 8px;
}

.article-list {
  padding-left: 16px;
  padding-right: 16px;
}

.article-item img {
  float: left;
  margin-right: 16px;
}
</style>
