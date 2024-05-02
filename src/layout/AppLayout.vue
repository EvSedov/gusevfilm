<script setup lang="ts">
import TheHeader from '../components/TheHeader.vue';
import MainMenu from '../components/MainMenu.vue';
import SubMenuSection from '../components/SubMenuSection.vue';
import TableOfContents from '../components/TableOfContents.vue';
import TheArticle from '../components/Article.vue';
import HelpArticle from '../components/HelpArticle.vue';
import Card from '../components/Card.vue';
import Search from '../components/Search.vue';
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
const thirdTabs = {
  titles: ['Пункт 11', 'Пункт 10', 'Пункт 9'],
  paragraphs: [
    'Контент для пункта 11. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis minima necessitatibus ducimus illo sed quo deserunt excepturi sunt non enim inventore aliquam esse asperiores ea dolorem quibusdam est. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, doloribus, nulla. Soluta error repudiandae cumque veniam fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis minima necessitatibus ducimus illo sed quo deserunt excepturi sunt non enim inventore aliquam esse asperiores ea dolorem quibusdam est. Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    'Контент для пункта 10',
    'Контент для пункта 9'],
  checked: [true, false, false]
}

const cards = [
  {
    title: 'Сообщество GusevFilm',
    text: 'Обращайтесь за помощью к членам сообщества, задавайте любые вопросы и получайте ответы.',
    link: {
      href: '',
      text: 'Присоединиться к сообществу'
    }
  },
  {
    title: 'GusevFilm Connect',
    text: 'Пользуйтесь всеми возможностями GB. Пройдите регистрацию в GB Connect.',
    link: {
      href: '',
      text: 'Регистрация'
    }
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
      <div class="main-articles">
        <TableOfContents />
        <div class="articles">
          <Search />
          <div class="articles-content">
            <TheArticle class="content" :title="firstTitle" :btn="firstBtn" :paragraphs="firstParagraphs"
              :recommendations="firstRecommendations" />
            <TheArticle class="content" :title="secondTitle" :paragraphs="secondParagraphs" :lists="secondLists" />
            <TheArticle class="content" :title="thirdTitle" :tabs="thirdTabs" />
            <HelpArticle />
          </div>

          <div class="cards">
            <Card :cardTitle="card.title" :cardText="card.text" :cardLink="card.link" v-for="(card, index) in cards"
              :key="index" />
          </div>

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

.articles-content {
  margin-bottom: 30px;
  padding: 28px;
  padding-top: 20px;
  background-color: #FFF;
  border-radius: 6px;
  box-shadow: 0px 1px 4px 0px rgba(21, 34, 50, 0.08);
}

.articles {
  width: 825px;
  margin-top: 23px;
}

.cards {
  display: flex;
  gap: 39px;
}
</style>