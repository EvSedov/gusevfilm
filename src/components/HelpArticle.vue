<script setup lang="ts">
import { ref } from 'vue';
const count = ref(50)
</script>

<template>
  <h2>Вам помогла эта статья?</h2>
  <button @click="count++">Да</button>
  <button @click="count--">Нет</button>
  <p>{{ count }} людям помогла эта статья</p>
</template>

<style scoped>
h2 {
  margin-bottom: 20px;
  color: rgb(19, 21, 35);
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;
}

button {
  margin-right: 12px;
  margin-bottom: 12px;
  box-sizing: border-box;
  border: 1px solid rgb(215, 219, 236);
  border-radius: 4px;
  background: rgb(255, 255, 255);
  padding: 8px 23px;

  color: rgb(30, 94, 255);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
}

button:hover {
  box-shadow: 0px 1px 4px 0px rgba(21, 34, 50, 0.08);
}

p {
  color: rgb(90, 96, 127);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
}
</style>