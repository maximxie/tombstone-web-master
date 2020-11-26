<template>
  <div class="menu">
    <a-list
      size="large"
      bordered
      :data-source="menus"
    >
      <a-list-item
        slot="renderItem"
        slot-scope="item, index"
        class="item"
        :class="index == check?'active':''"
        @click="handleClick"
      >
        {{ item.title }}
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
export default {
  name: "LifeMenu",
  data() {
    const item = { title: "生命文化", href: "#", type: "mail" };
    return {
      check: 0,
      menus: Array(5).fill(item),
    };
  },
  methods: {
    handleClick(e) {
      console.log("click", e);
    },
  },
};
</script>

<style scoped>
.menu {
  background: #fff;
}

.item {
  cursor: pointer;
}

.active {
  background: #EFDBA7;
  color: #AB5844;
}
</style>
