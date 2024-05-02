<script setup lang="ts">
defineProps<{
  title?: string
  subMenuItems?: {
    text: string
    path: string
    alt: string
    isActive: boolean
  }[]
}>()


</script>

<template>
  <p class="title">{{ title }}</p>
  <ul class="sub-menu">
    <li class="item-sub-menu" :class="{ 'item-active': item.isActive }" v-if="subMenuItems"
      v-for="item in subMenuItems">
      <a href="#">
        <img :src="item.path" :alt="item.alt">
        <span>{{ item.text }}</span>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.sub-menu {
  padding: 0 16px;
  margin-bottom: 26px;
  list-style-type: none;
}

.title {
  color: rgb(161, 167, 196);
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  text-align: left;
  margin-bottom: 12px;
  padding-left: 32px;
}

.item-sub-menu {
  width: 218px;
}

.item-sub-menu a {
  display: flex;
  margin: 0;
  padding: 0;
  border-radius: 4px;
}

.item-sub-menu img {
  margin: 11px 16px;
}

.item-sub-menu span {
  padding: 12px 0;
  display: inline-block;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 1px;
  text-align: left;
}

.item-active a {
  background-color: #1E5EFF;
  color: #FFF;
}
</style>