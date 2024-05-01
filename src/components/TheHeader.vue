<script setup lang="ts"></script>

<template>
  <header class="header container">

    <div class="wrap">
      <div class="logo">
        <img src="/logo.svg" alt="Логотип">
        <span>GUSEVFILM</span>
      </div>
    </div>

    <div class="search">
      <input type="text" name="search" id="search" placeholder="Поиск...">
    </div>

    <div class="user-profile">
      <img class="message" src="/chat.svg" alt="">
      <img class="alerts" src="/alert.svg" alt="">
      <div class="profile">
        <div class="user-icon"></div>
        <div class="user-name">Саша Опытная</div>
      </div>
    </div>

  </header>
</template>

<style scoped>
.wrap,
.logo,
.user-profile,
.profile {
  display: flex;
}

.header {
  display: flex;
  background-color: #FFF;
  align-items: center;
  padding-left: 20px;
  padding-right: 28px;
}

.logo {
  font-size: 21.7px;
  text-align: center;
  font-weight: 700;
  line-height: 31px;
  letter-spacing: 0px;
  text-align: left;
}

input[type="text"] {
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 0.876rem;
  font-weight: 400;
  line-height: 1.5;
  color: #5A607F;
  background-color: #fff;
  background-clip: padding-box;
  border: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.logo span {
  margin-top: 18px;
  margin-bottom: 19px;
  margin-left: 11.7px;
}

.search {
  margin-left: 91px;
}

.user-profile {
  margin-left: auto;
}

.message {
  margin-right: 20px;
}

.alerts {
  margin-right: 34px;
}

.profile {
  align-items: center;
}

.user-icon {
  height: 39px;
  width: 39px;
  margin-right: 11px;
  background-color: rgb(191, 182, 182);
  border-radius: 50%;
}
</style>
