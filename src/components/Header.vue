<template>
  <div class="header">
    <div class="left">
      <router-link to="/">
        <i class="iconfont-hehe icon-logo">&#xe618;</i>禾禾账目</router-link>
    </div>
    <div class="middle">
      <div class="home"><router-link to="/">首页</router-link></div>
      <div class="account">
        <router-link to="/account">账目<i class="iconfont-hehe icon-right">&#xe673;</i></router-link>
      </div>
      <div class="ticket">
        <router-link to="/ticket">票据<i class="iconfont-hehe icon-right">&#xe673;</i></router-link>
      </div>
      <div class="post"><router-link to="/post">帖子</router-link></div>
    </div>
    <div class="right">
      <div class="right-item1">
        <div class="messages">
          <i class="iconfont-hehe icon-messages">&#xe611;</i>
        </div>
        <div class="personal">
          <router-link to="/user">个人中心</router-link>
        </div>
        <div class="logout">
          <i class="iconfont-hehe icon-logout">&#xe609;</i>
        </div>
      </div>
    </div>
    <div class="login-btn">
      <button class="login"><router-link to="/login">登录</router-link></button>
      <button class="register">
        <router-link to="/register">注册</router-link>
      </button>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.icon-logo {
  font-size: 24px;
  color: #004751;
  margin-right: 5px;
}


.header {
  position: relative;
  width: 100%;
  height: 60px;
  background-color: #e3eeff;
}

.header .left {
  font-size: 24px;
  line-height: 24px;
  position: absolute;
  left: 10%;
  top: 16px;
}

.header .middle {
  position: absolute;
  left: 40%;
  top: 20px;

  div {
    float: left;
    width: 6rem;
    text-align: center;
    font-size: 16px;
    height: 36px;
  }

  div:hover {
    border-bottom: 3px solid #000;
  }
}

.header .right {
  position: absolute;
  left: 70%;
  top: 20px;

  div {
    float: left;
    font-size: 16px;
  }

  .right-item1 {
    .personal {
      padding: 0 10px;
      margin: 0 10px;
      border-left: #a69f9f solid 1px;
      border-right: #a69f9f solid 1px;
    }

    .icon-logout {
      font-size: 16px;
      color: #a69f9f;
    }
  }
}

.header .login-btn {
  position: absolute;
  right: 5%;
  top: 18px;

  .login {
    width: 50px;
    height: 30px;
    border: 0;
    background-color: #e3eeff;
  }

  .register {
    width: 50px;
    height: 30px;
    border-radius: 5px;
    background-color: #e3eeff;
  }
}
</style>