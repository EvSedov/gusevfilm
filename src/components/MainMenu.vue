<script setup lang="ts">
import { ref } from 'vue';
const menuItems = ref([
  {
    title: 'Главная',
    link: '/',
    path: process.env.NODE_ENV === 'production' ? '/gusevfilm/home.svg' : '/home.svg',
    alt: 'Пункт основного меню для главной страницы',
    alert: {
      isAlerting: false,
      msg: 0,
    }
  },
  {
    title: 'Запросы',
    link: '/requests',
    path: process.env.NODE_ENV === 'production' ? '/gusevfilm/requests.svg' : '/requests.svg',
    alt: 'Пункт основного меню для страницы запросов',
    alert: {
      isAlerting: true,
      msg: 16,
    }
  },
  {
    title: 'Заметки',
    link: '/notes',
    path: '/notes.svg',
    alt: 'Пункт основного меню для страницы с заметками',
    alert: {
      isAlerting: false,
      msg: 0,
    }
  },
  {
    title: 'Категории',
    link: '/categories',
    path: '/folder.svg',
    alt: 'Пункт основного меню для страницы категорий',
    alert: {
      isAlerting: false,
      msg: 0,
    }
  },
  {
    title: 'Пользователи',
    link: '/users',
    path: '/users.svg',
    alt: 'Пункт основного меню для страницы пользователей',
    alert: {
      isAlerting: false,
      msg: 0,
    }
  },
  {
    title: 'Статистика',
    link: '/statistics',
    path: '/chart.svg',
    alt: 'Пункт основного меню для страницы статистики',
    alert: {
      isAlerting: false,
      msg: 0,
    }
  },
  {
    title: 'Избранное',
    link: '/favourites',
    path: '/star.svg',
    alt: 'Пункт основного меню для страницы статистики',
    alert: {
      isAlerting: false,
      msg: 0,
    }
  },
  {
    title: 'Поддержка',
    link: '/support',
    path: '/chat.svg',
    alt: 'Пункт основного меню для страницы поддержки',
    alert: {
      isAlerting: false,
      msg: 0,
    }
  },
])
</script>

<template>
  <ul class="main-menu">
    <li class="menu-item" v-for="(item, index) in menuItems" :key="index">
      <a :href="item.link">
        <img :src="item.path" :alt="item.alt">
        <span class="text">{{ item.title }}</span>
        <span class="msg" v-if="item.alert.isAlerting">{{ item.alert.msg }}</span>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.main-menu {
  display: flex;
  flex-direction: column;
  padding-bottom: 28px;
  list-style-type: none;
}

.menu-item {
  width: 218px;
  margin-left: 16px;
}

.menu-item a {
  align-items: center;
  display: flex;
  width: 100%;
  align-items: center;
}

.menu-item img {
  margin: 0;
  margin-left: 16px;
}

.text {
  margin: 12px 0;
  margin-left: 19px;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}

.msg {
  width: 26px;
  height: 16px;
  margin-left: auto;
  margin-right: 12px;
  display: inline-block;
  vertical-align: baseline;
  border-radius: 12px;
  background: rgb(19, 21, 35);
  color: rgb(255, 255, 255);
  font-family: Inter;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: center;
}
</style>