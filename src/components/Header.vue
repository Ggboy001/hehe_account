<template>
  <div style="position: sticky;z-index: 1">
    <div class="header1">
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
    <div class="header2">
      <el-dropdown @command="handleCommand" style="float: left">
    <span class="el-dropdown-link">
      <i class="iconfont-hehe manage" >&#xe60e;</i><el-icon class="el-icon--right"></el-icon>
    </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command=1>首页</el-dropdown-item>
            <el-dropdown-item command=2>账目</el-dropdown-item>
            <el-dropdown-item command=3>票据</el-dropdown-item>
            <el-dropdown-item command=4>帖子</el-dropdown-item>
            <el-dropdown-item command=5>登录</el-dropdown-item>
            <el-dropdown-item command=6>注册</el-dropdown-item>
            <el-dropdown-item command=7>个人中心</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <div class="left">
        <router-link to="/">
          <i class="iconfont-hehe icon-logo">&#xe618;</i>禾禾账目</router-link>
      </div>
      <div class="personal">
        <router-link to="/user"><i class="iconfont-hehe" style="font-size: 24px">&#xe653;</i></router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const handleCommand = (command) => {
  switch (command) {
    case '1':router.push('/');break;
    case '2':router.push('/account');break;
    case '3':router.push('/ticket');break;
    case '4':router.push('/post');break;
    case '5':router.push('/login');break;
    case '6':router.push('/register');break;
    case '7':router.push('/user')
  }
}
</script>

<style lang="less" scoped>
.icon-logo {
  font-size: 24px;
  color: #004751;
  margin-right: 5px;
}


.header1 {
  position: relative;
  width: 100%;
  height: 60px;
  background-color: #e3eeff;
}

.header1 .left {
  font-size: 24px;
  line-height: 24px;
  position: absolute;
  left: 10%;
  top: 16px;
}

.header1 .middle {
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

.header1 .right {
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

.header1 .login-btn {
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
.header2 {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 60px;
  background-color: #e3eeff;
  .manage  {
    position: absolute;
    left: 5px;
    top: 16px;
    font-size: 30px;
  }
  .left {
    font-size: 24px;
    line-height: 24px;
    position: absolute;
    left: 40%;
    top: 16px;
  }
  .personal {
    font-size:24px;
    line-height: 24px;
    position: absolute;
    right:10px;
    top: 16px;
  }
}
@media screen and (max-width: 800px) {
  .header1 {
    display: none;
  }
}
@media  screen and (min-width: 800px){
  .header2 {
    display: none;
  }
}
</style>