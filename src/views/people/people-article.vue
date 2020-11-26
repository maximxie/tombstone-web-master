<template>

<div class="article">
  <img class="life-icon" alt src="http://www.tiantang6.com/m/moban/1/img/watt.gif">
  <div>
    <a-button style="margin-left:650px;">发表文章</a-button>
  </div>
  <div>
    <a-list item-layout="horizontal" :data-source="data" :pagination="pagination">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta
          description="2018/6/29"
        >
          <a slot="title" href="/people/detail">{{ item.title }}</a>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </div>

</div>
</template>

<script>
const data = [
  {
    title: '妈妈，您永远是我心中思念！',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
export default {
  name: "people-article",
  data() {
    return {
      data,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      },
    };
  },
}
</script>

<style scoped>
  .article {
    width: 50%;
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
