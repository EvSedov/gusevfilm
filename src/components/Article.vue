<script setup lang="ts">
defineProps<{
  title?: string
  btn?: {
    text: string
  }
  paragraphs?: string[]
  list?: {
    text: string
  }
  tabs?: {
    title: string
    paragraphs?: string[]
  }
  recommendations?: string[]
}>()
</script>

<template>
  <div class="card-article">
    <div v-if="title || btn" class="header-article">
      <h2 v-if="title">{{ title }}</h2>
      <button v-if="btn">{{ btn.text }}</button>
    </div>
    <p class="text" v-if="paragraphs" v-for="content in paragraphs">{{ content }}</p>
    <ul v-if="list"></ul>
    <ul v-if="tabs"></ul>
    <div class="recommendations" v-if="recommendations">
      <p class="text">Рекомендации:</p>
      <p class="text" v-for="recom in recommendations">{{ recom }}</p>
    </div>
  </div>
</template>

<style scoped>
.header-article {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  text-align: left;
}

.recommendations {
  background-color: #F5F6FA;
}
</style>