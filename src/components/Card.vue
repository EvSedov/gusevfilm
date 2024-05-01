<script setup lang="ts">
defineProps<{
  cardTitle?: string
  cardText?: string
  cardLink?: {
    href: string
    text: string
  }
}>()
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h2>{{ cardTitle }}</h2>
    </div>
    <div class="card-body">
      <p>{{ cardText }}</p>
    </div>
    <div class="card-footer">
      <a :href="cardLink?.href">{{ cardLink?.text }}</a>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 398px;
  padding: 28px;
  border-radius: 6px;
  box-shadow: 0px 1px 4px 0px rgba(21, 34, 50, 0.08);
  background: rgb(255, 255, 255);
}

.card-header h2 {
  margin-bottom: 12px;
  color: rgb(19, 21, 35);
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
}

.card-body {
  margin-bottom: 20px;
  color: rgb(19, 21, 35);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

.card-footer a {
  color: rgb(30, 94, 255);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}
</style>