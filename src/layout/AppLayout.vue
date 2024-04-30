<script setup lang="ts">
import TheHeader from '../components/TheHeader.vue';
import MainMenu from '../components/MainMenu.vue';
import SubMenuSection from '../components/SubMenuSection.vue';
import TableOfContents from '../components/TableOfContents.vue';
import TheArticle from '../components/Article.vue';

const titleSubMenuInfo = 'Информация';
const itemsSubMenuInfo = [
  {
    text: 'База знаний',
    path: '/question.svg',
    alt: 'Пункт база знаний информационного меню',
    isActive: true,
  },
  {
    text: 'Обновления',
    path: '/medal.svg',
    alt: 'Пункт обновления информационного меню',
    isActive: false,
  }
]

const titleSubMenuSettings = 'Настройки';
const itemsSubMenuSettings = [
  {
    text: 'Профиль',
    path: '/man.svg',
    alt: 'Пункт профиль меню настроек',
    isActive: false,
  },
  {
    text: 'Общие настройки',
    path: '/gear.svg',
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
      <div class="back">Назад</div>
      <div class="main-articles">
        <TableOfContents />
        <div class="article">
          <TheArticle class="content" :title="firstTitle" :btn="firstBtn" :paragraphs="firstParagraphs"
            :recommendations="firstRecommendations" />
          <TheArticle class="content" :title="secondTitle" :paragraphs="secondParagraphs" />
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

.back {
  padding-top: 29px;
  padding-left: 40px;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: #5A607F;
}

.article {
  width: 100%;
  gap: 30px;
  background-color: #FFF;
}
</style>