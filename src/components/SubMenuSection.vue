<script setup lang="ts">
import { RouterLink } from 'vue-router';
defineProps<{
  title?: string
  subMenuItems?: {
    text: string
    link: string
    path: string
    alt: string
  }[]
}>()


</script>

<template>
  <p class="title">{{ title }}</p>
  <ul class="sub-menu">
    <li class="item-sub-menu" v-if="subMenuItems" v-for="item in subMenuItems">
      <RouterLink :to="item.link">
        <img :src="item.path" :alt="item.alt">
        <span>{{ item.text }}</span>
      </RouterLink>
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
</style>