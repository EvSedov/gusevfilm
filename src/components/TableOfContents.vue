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
  <div class="table">
    <h2>{{ title }}</h2>
    <ul class="table-items">
      <li :class="{ activeItem: item.isActive }" v-for="item in items">
        <span>{{ item.text }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.table {
  width: 335px;
  margin: 0 40px;

}

h2 {
  margin: 0;
  margin-bottom: 30px;
  padding: 0;
  color: rgb(19, 21, 35);
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: left;
}

.table-items li {
  display: flex;
}
</style>