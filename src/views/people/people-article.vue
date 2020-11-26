<template>

<div class="article">
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
</template>

<script>
const data = [
  {
    title: 'Ant Design Title 1',
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
