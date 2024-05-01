<script setup lang="ts"></script>

<template>
  <header class="header container">

    <div class="wrap">
      <a class="logo">
        <img src="/logo.svg" alt="Логотип">
        <span>GUSEVFILM</span>
      </a>
    </div>

    <div class="search">
      <svg class="search-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <mask id="mask_1_274" fill="white">
          <path id="color"
            d="M10.5 3C14.6421 3 18 6.35785 18 10.5C18 12.2101 17.4276 13.7866 16.464 15.0483L19.7072 18.2929C20.0977 18.6834 20.0977 19.3166 19.7072 19.7071C19.3467 20.0676 18.7794 20.0953 18.3871 19.7903L18.2928 19.7071L15.0482 16.464C13.7866 17.4276 12.2102 18 10.5 18C6.35791 18 3 14.6422 3 10.5C3 6.35785 6.35791 3 10.5 3ZM5 10.5C5 7.46246 7.4624 5 10.5 5C13.5376 5 16 7.46246 16 10.5C16 11.8511 15.5128 13.0885 14.7041 14.0446C14.5536 14.091 14.412 14.1738 14.2928 14.2929C14.1738 14.412 14.0911 14.5536 14.0459 14.7045C13.0885 15.5128 11.8512 16 10.5 16C7.4624 16 5 13.5375 5 10.5Z"
            clip-rule="evenodd" fill="" fill-opacity="1.000000" fill-rule="evenodd" />
        </mask>
        <path id="color"
          d="M10.5 3C14.6421 3 18 6.35785 18 10.5C18 12.2101 17.4276 13.7866 16.464 15.0483L19.7072 18.2929C20.0977 18.6834 20.0977 19.3166 19.7072 19.7071C19.3467 20.0676 18.7794 20.0953 18.3871 19.7903L18.2928 19.7071L15.0482 16.464C13.7866 17.4276 12.2102 18 10.5 18C6.35791 18 3 14.6422 3 10.5C3 6.35785 6.35791 3 10.5 3ZM5 10.5C5 7.46246 7.4624 5 10.5 5C13.5376 5 16 7.46246 16 10.5C16 11.8511 15.5128 13.0885 14.7041 14.0446C14.5536 14.091 14.412 14.1738 14.2928 14.2929C14.1738 14.412 14.0911 14.5536 14.0459 14.7045C13.0885 15.5128 11.8512 16 10.5 16C7.4624 16 5 13.5375 5 10.5Z"
          clip-rule="evenodd" fill="#7E84A3" fill-opacity="1.000000" fill-rule="evenodd" mask="url(#mask_1_274)" />
        <path id="color" d="" fill="#979797" fill-opacity="0.000000" fill-rule="nonzero" />
      </svg>

      <input type="text" name="search" id="search-input" placeholder="Поиск...">
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

.logo:hover {}

.logo span {
  margin-top: 18px;
  margin-bottom: 19px;
  margin-left: 11.7px;
}

.search {
  position: relative;
  margin-left: 91px;
}

#search-input {
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  padding-left: 35px;
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

.search-icon {
  position: absolute;
  top: 7px;
  left: 7px;
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
