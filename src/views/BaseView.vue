<script setup lang="ts">
import TableOfContents from '../components/TableOfContents.vue';
import TheArticle from '../components/Article.vue';
import HelpArticle from '../components/HelpArticle.vue';
import Card from '../components/Card.vue';
import Search from '../components/Search.vue';

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
</template>

<style scoped>
.articles {
  width: 825px;
}

.articles-content {
  margin-bottom: 30px;
  padding: 28px;
  padding-top: 20px;
  background-color: #FFF;
  border-radius: 6px;
  box-shadow: 0px 1px 4px 0px rgba(21, 34, 50, 0.08);
}

.cards {
  display: flex;
  gap: 32px;
}
</style>