<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from '../components/TheHeader.vue';
import MainMenu from '../components/MainMenu.vue';
import SubMenuSection from '../components/SubMenuSection.vue';
import svgQuestion from '/question.svg';
import svgMedal from '/medal.svg';
import svgMan from '/man.svg';
import svgGear from '/gear.svg';

const titleSubMenuInfo = 'Информация';
const itemsSubMenuInfo = [
  {
    text: 'База знаний',
    link: '/base',
    path: svgQuestion,
    alt: 'Пункт база знаний информационного меню',
  },
  {
    text: 'Обновления',
    link: '/update',
    path: svgMedal,
    alt: 'Пункт обновления информационного меню',
  }
]

const titleSubMenuSettings = 'Настройки';
const itemsSubMenuSettings = [
  {
    text: 'Профиль',
    link: '/profile',
    path: svgMan,
    alt: 'Пункт профиль меню настроек',
  },
  {
    text: 'Общие настройки',
    link: '/settings',
    path: svgGear,
    alt: 'Пункт общие настройки меню настроек',
  }
];
</script>

<template>
  <TheHeader />
  <main class="main container">
    <div class="main-menu">
      <MainMenu />
      <SubMenuSection :title="titleSubMenuInfo" :subMenuItems="itemsSubMenuInfo" />
      <SubMenuSection :title="titleSubMenuSettings" :subMenuItems="itemsSubMenuSettings" />
    </div>

    <div class="main-content">
      <div class="back">
        <span>
          <svg width="13.000000" height="10.000000" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <path id="color"
              d="M4.38 0.2L4.29 0.29L0.29 4.29C-0.07 4.65 -0.1 5.22 0.2 5.61L0.29 5.7L4.29 9.7C4.68 10.09 5.31 10.09 5.7 9.7C6.06 9.34 6.09 8.77 5.79 8.38L5.7 8.29L3.41 5.99L12 6C12.55 6 13 5.55 13 5C13 4.44 12.55 4 12 4L3.41 3.99L5.7 1.7C6.06 1.34 6.09 0.77 5.79 0.38L5.7 0.29C5.34 -0.07 4.77 -0.1 4.38 0.2Z"
              fill="#7E84A3" fill-opacity="1.000000" fill-rule="evenodd" />
            <path id="color"
              d="M4.29 0.29L0.29 4.29C-0.07 4.65 -0.1 5.22 0.2 5.61L0.29 5.7L4.29 9.7C4.68 10.09 5.31 10.09 5.7 9.7C6.06 9.34 6.09 8.77 5.79 8.38L5.7 8.29L3.41 5.99L12 6C12.55 6 13 5.55 13 5C13 4.44 12.55 4 12 4L3.41 3.99L5.7 1.7C6.06 1.34 6.09 0.77 5.79 0.38L5.7 0.29C5.34 -0.07 4.77 -0.1 4.38 0.2L4.29 0.29Z"
              stroke="#979797" stroke-opacity="0" stroke-width="0.000000" />
          </svg>
          Назад
        </span>
      </div>
      <div class="page">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<style scoped>
.main,
.page {
  display: flex;
}

.main {
  min-height: 100vh;
  box-shadow: 0px 1px 4px 0px rgba(21, 34, 50, 0.08);
  padding-right: 40px;
}

.main-menu {
  border-right: 1px solid rgba(21, 34, 50, 0.08);
}

.main-content {
  margin-bottom: 40px;
}

.back {
  padding-top: 29px;
  padding-left: 40px;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: #5A607F;
}

.back span {
  cursor: pointer;
}
</style>