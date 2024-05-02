<script setup lang="ts">
import { ref } from 'vue';
const title = ref('Настройки профиля');
const items = ref([
  {
    text: 'Первичная настройка',
    isActive: true
  },
  {
    text: 'Профиль пользователя',
    isActive: false
  },
  {
    text: 'Изменение общих настроек',
    isActive: false
  },
  {
    text: 'Дополнительные возможности',
    isActive: false
  },
  {
    text: 'Отправка запросов',
    isActive: false
  },
  {
    text: 'Работа со статистикой',
    isActive: false
  }
])
</script>

<template>
  <div class="wrap-table">
    <h2>{{ title }}</h2>
    <ul class="table">
      <li class="table-item" :class="{ 'item-active': item.isActive }" v-for="item in items">
        <a>{{ item.text }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.wrap-table {
  margin: 0 40px;
  margin-right: 30px;
}

h2 {
  display: inline-block;
  width: 245px;
  margin: 0;
  margin-bottom: 30px;
  padding: 0;
  color: rgb(19, 21, 35);
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: left;
}

.table-item {
  width: 255px;
  display: flex;
}

.table-item a {
  width: 100%;
  padding: 12px 20px;
  padding-left: 18px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.3px;
  text-align: left;
  border-radius: 4px;
  cursor: pointer;
}

.item-active a {
  background-color: #1E5EFF;
  color: #FFF;
}
</style>