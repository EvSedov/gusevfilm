<script setup lang="ts">
defineProps<{
  title?: string
  btn?: {
    text: string
  }
  paragraphs?: string[]
  lists?: string[]
  tabs?: {
    titles: string[]
    paragraphs: string[]
    checked: boolean[]
  }
  recommendations?: string[]
}>()
</script>

<template>
  <div class="card-article">
    <div v-if="title || btn" class="header-article">
      <h2 v-if="title">{{ title }}</h2>
      <button class="btn" v-if="btn">{{ btn.text }}</button>
    </div>
    <div class="paragraphs">
      <p class="text" v-if="paragraphs" v-for="content in paragraphs">{{ content }}</p>
    </div>
    <ol class="lists" v-if="lists">
      <li v-for="item in lists">{{ item }}</li>
    </ol>
    <div class="tabs" v-if="tabs">
      <template v-for="(title, index) in tabs.titles" :key="index">
        <input :checked="tabs.checked[index]" :id="`tab-btn-${index}`" name="tab-btn" type="radio" value="">
        <label :for="`tab-btn-${index}`">{{ title }}</label>
      </template>
      <div class="tab-content" :id="`content-${index}`" v-for="(tabText, index) in tabs.paragraphs" :key="index">
        {{ tabText }}
      </div>
    </div>
    <div class="recommendations" v-if="recommendations">
      <p class="text">Рекомендации:</p>
      <p class="text" v-for="recom in recommendations">{{ recom }}</p>
    </div>
    <div class="line"></div>
  </div>
</template>

<style scoped>
.card-article {
  padding-bottom: 0;
  background: rgb(255, 255, 255);
  color: rgb(19, 21, 35);

}

.header-article {
  width: 100%;
  margin-bottom: 22px;
  display: flex;
  align-items: center;
}

h2 {
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
}

.btn {
  margin-left: auto;
  margin-right: 3px;
  padding: 9px 32px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: #FFFFFF;
  background-color: #1E5EFF;
}

.paragraphs {
  margin-bottom: 24px;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  text-align: left;
  letter-spacing: .5px;
}

.lists {
  list-style-type: none;
  counter-reset: num;
  margin-left: 60px;
  padding: 0 0 5px 0;
  font-size: 16px;
}

.lists li {
  position: relative;
  margin: 0 0 0 0;
  padding: 0 0 24px 0;
  line-height: 1.4;
  letter-spacing: .5px;
}

.lists li::before {
  content: counter(num);
  counter-increment: num;
  display: inline-block;
  position: absolute;
  top: 0;
  left: -59px;
  width: 36px;
  height: 36px;
  background: #F5F6FA;
  color: #000;
  text-align: center;
  line-height: 32px;
  font-size: 16px;
  border-radius: 50%;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 28px;
}

.tabs>input[type="radio"] {
  display: none;
}

.tab-content {
  display: none;
  width: 100%;
  margin-top: -13px;
}

#tab-btn-0:checked~#content-0,
#tab-btn-1:checked~#content-1,
#tab-btn-2:checked~#content-2 {
  display: block;
}

.tabs>label {
  padding-top: 0.2rem;
  padding-bottom: 0.9rem;
  cursor: pointer;
  transition: color .15s ease-in-out, border-color .15s ease-in-out;
  color: #5A607F;
  background: 0 0;
  border-bottom: 0.125rem solid transparent;
}

.tabs>input[type="radio"]:checked+label {
  cursor: default;
  font-weight: bold;
  color: #1E5EFF;
  border-bottom-color: #1E5EFF;
}

.recommendations {
  margin-bottom: 28px;
  padding: 20px;
  border-radius: 4px;
  font-weight: 500;
  letter-spacing: .5px;
  background-color: #F5F6FA;
  color: rgb(90, 96, 127);
}

.recommendations>.text {
  margin-bottom: 4px;
}

.line {
  margin-bottom: 40px;
  border-bottom: 1px solid #F5F6FA;
}
</style>