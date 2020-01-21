<template>
  <div class="container">
    <div class="row">
      <div class="col offset-md-2">
        <div class="problem">
          <h2>
            Проблемы с учебой?<br />
            Поможем в написании <a href="#">контрольной</a>
          </h2>
        </div>
        <ul class="list">
          <li class="item">Скидка на первый заказ 500 руб.</li>
          <li class="item">По всем предметам любой сложности</li>
          <li class="item">Ваш заказ отправится на оценку 28 538 авторам</li>
          <li class="item">Отклики появятся уже в течение 10 минут</li>
          <li class="item">Оформление по методичке и ГОСТу</li>
        </ul>
        <div class="btn__access">
          <button>Получить доступ</button>
        </div>
        <div class="btn__footer">
          <p>
            <a href="#"> Зарегистрируйся на Студворк</a> это онлайн-сервис для
            студентов, где консультируют по учебе без посредников
          </p>
        </div>
      </div>
      <div class="col-4">
        <img src="../assets/task.svg" alt="" class="task" />
      </div>
    </div>
    <div class="row">
      <div class="col offset-2">
        <div class="menu">
          <div class="row">
            <div class="col">
              <a href="#" class="link">Гарантия</a>
              <a href="#" class="link">Быстро</a>
              <a href="#" class="link">Безопасно</a>
              <a href="#" class="link">% СКИДКИ</a>
              <a href="#" class="link">Уникально</a>
              <a href="#" class="link">Все вузы</a>
            </div>
            <div class="w-100"></div>
            <div class="col">
              <a href="#" class="link">Все предметы</a>
              <a href="#" class="link">Экспертно</a>
              <a href="#" class="link">Качественно</a>
              <a href="#" class="link">Анонимно</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer,
a {
  font-size: 14px;
  color: #b1afff;
}
.w-100 {
  padding: 5px 0px;
}
.menu {
  a {
    color: #aea8ff;
    text-decoration: none;
    border: 1px solid #aea8ff;
    box-sizing: border-box;
    border-radius: 50px;
    font-size: 15px;
    font-weight: 500;
    font-style: normal;
    padding: 5px 10px;
    margin: 15px 10px;
  }
}
.btn__footer {
  a {
    color: #fff;
    text-decoration: underline;
  }
}
.container {
  margin-top: 15px;
}
.task {
  width: 450px;
}
.list {
  margin-top: 24px;
}

.btn__access::before {
  content: "";
  display: block;
  margin: 20px auto;
  width: 138px;
  height: 137px;
  background: url("../assets/right.png");
  position: absolute;
  left: 250px;
  bottom: 125px;
}
.btn__access::after {
  content: "";
  display: block;
  margin: 20px auto;
  width: 95px;
  height: 114px;
  background: url("../assets/left.png");
  position: absolute;
  left: -65px;
  bottom: 25px;
}
.btn__access {
  button {
    margin-top: 75px;
    margin-bottom: 50px;
    background: #ffa726;
    box-shadow: 0px 0px 30px rgba(236, 233, 255, 0.49),
      inset 0px 0px 10px rgba(240, 244, 31, 0.48);
    border-radius: 5px;
    border: none;
    color: #fff;
    padding: 13px 40px;
  }
}
.item {
  list-style-image: url("../assets/copy.svg");
  padding: 10px 30px;
  font-size: 18px;
  font-weight: bold;
}
.problem {
  font-weight: bold;
  font-size: 50px;
  line-height: 60px;
  font-style: normal;
  a {
    color: #ffc96b;
    text-decoration: none;
  }
}
</style>
