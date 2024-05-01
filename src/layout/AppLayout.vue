<script setup lang="ts">
import TheHeader from '../components/TheHeader.vue';
import MainMenu from '../components/MainMenu.vue';
import SubMenuSection from '../components/SubMenuSection.vue';
import TableOfContents from '../components/TableOfContents.vue';
import TheArticle from '../components/Article.vue';
import svgQuestion from '/question.svg';
import svgMedal from '/medal.svg';
import svgMan from '/man.svg';
import svgGear from '/gear.svg';

const titleSubMenuInfo = 'Информация';
const itemsSubMenuInfo = [
  {
    text: 'База знаний',
    path: svgQuestion,
    alt: 'Пункт база знаний информационного меню',
    isActive: true,
  },
  {
    text: 'Обновления',
    path: svgMedal,
    alt: 'Пункт обновления информационного меню',
    isActive: false,
  }
]

const titleSubMenuSettings = 'Настройки';
const itemsSubMenuSettings = [
  {
    text: 'Профиль',
    path: svgMan,
    alt: 'Пункт профиль меню настроек',
    isActive: false,
  },
  {
    text: 'Общие настройки',
    path: svgGear,
    alt: 'Пункт общие настройки меню настроек',
    isActive: false,
  }
];

const firstTitle = 'Первичная настройка';
const firstBtn = { text: 'Редактировать' };
const firstParagraphs = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis minima necessitatibus ducimus illo sed quo deserunt excepturi sunt non enim inventore aliquam esse asperiores ea dolorem quibusdam labore quos facere iusto, obcaecati doloremque aliquid est.'];
const firstRecommendations = ['Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Fugiat.'];
const secondTitle = 'Начало работы';
const secondParagraphs = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sunt, iste animi, quia numquam, rerum veritatis itaque tempore facilis repellendus harum reiciendis.'];
const secondLists = [
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, doloribus, nulla. Soluta error repudiandae cumque veniam fugiat, voluptatem repellat provident, pariatur.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis harum delectus nemo iure praesentium amet, maxime veniam.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aut nam earum! Lorem ipsum dolor sit amet.',
]
const thirdTitle = 'Дополнительная информация';
const thirdParagraphs = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis minima necessitatibus ducimus illo sed quo deserunt excepturi sunt non enim inventore aliquam esse asperiores ea dolorem quibusdam est.',
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, doloribus, nulla. Soluta error repudiandae cumque veniam fugiat.'
];

</script>

<template>
  <TheHeader />
  <main class="main container">

    <div class="menu">
      <MainMenu />
      <SubMenuSection :title="titleSubMenuInfo" :subMenuItems="itemsSubMenuInfo" />
      <SubMenuSection :title="titleSubMenuSettings" :subMenuItems="itemsSubMenuSettings" />
    </div>

    <div>
      <div class="back">
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
      </div>
      <div class="main-articles">
        <TableOfContents />
        <div class="articles">
          <TheArticle class="content" :title="firstTitle" :btn="firstBtn" :paragraphs="firstParagraphs"
            :recommendations="firstRecommendations" />
          <TheArticle class="content" :title="secondTitle" :paragraphs="secondParagraphs" :lists="secondLists" />
          <TheArticle class="content" :title="thirdTitle" :paragraphs="thirdParagraphs" />
        </div>
      </div>
    </div>

  </main>

</template>

<style scoped>
.main,
.main-articles {
  display: flex;
}

.main,
.menu {
  box-shadow: 0px 1px 4px 0px rgba(21, 34, 50, 0.08);
}

.main {
  padding-right: 40px;
}

.back {
  padding-top: 29px;
  padding-left: 40px;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: #5A607F;
  cursor: pointer;
}

.articles {
  padding: 28px;
  background-color: #FFF;
  border-radius: 6px;
  box-shadow: 0px 1px 4px 0px rgba(21, 34, 50, 0.08);
}
</style>