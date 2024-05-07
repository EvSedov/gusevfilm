<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="master">
    <h1>404 PAGE NOT FOUND</h1>
    <RouterLink to='/'>На Главную страницу</RouterLink>
  </div>
</template>

<style scoped>
.master {
  margin: 40px;
}

h1 {
  margin-bottom: 23px;
  font-size: 44px;
  color: brown;
}
</style>