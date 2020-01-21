<template>
  <div class="container-fluid">
    <div class="row d-flex flex-row justify-content-between">
      <div class="col offset-2 d-flex flex-row justify-content-start">
        <div class="logo">
          <img src="../assets/logo.svg" alt="" />
        </div>
      </div>
      <div class="col-3 offset-2 d-flex flex-row justify-content-start">
        <div class="profile d-flex justify-content-center align-items-center">
          <img src="../assets/profile.svg" alt="" />
          <a href="#">Личный кабинет</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.profile a {
  padding-left: 10px;
  color: #fff;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  font-size: 15px;
  text-decoration: none;
}
.container-fluid {
  margin-top: 31px;
}
</style>
