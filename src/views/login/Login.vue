<template>
  <div class="mask">
    <div class="container">
      <div class="left">
        <div class="top">欢迎！</div>
        <div class="middle">
          禾禾账目.<i class="iconfont-hehe icon-logo">&#xe618;</i>
        </div>
        <div class="bottom" v-if="ways === 0" @click="changeWays1"><router-link to="/login/register">立即注册</router-link>
        </div>
        <div class="bottom" v-else><router-link @click="changeWays0" to="/login/password">立即登录</router-link></div>
      </div>
      <div class="right">
        <div class="top" v-if="ways === 0">登录<i @click="goBack" class="iconfont-hehe icon-chahao">&#xe68b;</i></div>
        <div class="top" v-if="ways === 1">注册<i @click="goBack" class="iconfont-hehe icon-chahao">&#xe68b;</i></div>
        <div class="top" v-if="ways === 2">重置密码<i @click="goBack" class="iconfont-hehe icon-chahao">&#xe68b;</i></div>
        <div class="login">
          <router-view></router-view>
        </div>
        <div class="bottom" v-show="ways === 0">
          <div class="forgetPsw"><span @click="forgetPsw">忘记密码?</span></div>
          <p>或登录方式</p>
          <div class="login-way">
            <button v-if="isPassword" @click="loginByPassword"><i class="iconfont-hehe icon-mima">&#xe615;</i>密码</button>
            <button v-else @click="loginByCode"><i class="iconfont-hehe icon-yanzhengma">&#xe615;</i>手机验证码</button>
            <button @click="loginByWeibo"><i class="iconfont-hehe icon-chahao">&#xe657;</i>微博</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useRouter, onBeforeRouteLeave } from "vue-router";
import { reactive, ref, onBeforeMount } from "vue";
//用于判断方式
const ways = ref(0)//0代表登录，1代表注册,2代表重置密码
//用于判断登录方式
const isPassword = ref(false)
const router = useRouter();
// 默认进入登录通过密码
onBeforeMount(() => {
  router.push({ path: '/login/password' })
})
// 切换为登录
const changeWays0 = () => {
  ways.value = 0
}
const changeWays1 = () => {
  ways.value = 1
}
const goBack = () => {
  router.push({ path: '/account' })
}
const forgetPsw = () => {
  router.push({ path: '/login/resetpsw' })
  ways.value = 2
}
const loginByCode = () => {
  router.push({ path: '/login/code' })
  isPassword.value = true
}
const loginByPassword = () => {
  router.push({ path: '/login/password' })
  isPassword.value = false
}
const loginByWeibo = () => { }

</script>

<style lang="less" scoped>
.mask {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  .container {

    margin: 80px auto;
    width: 900px;
    height: 560px;
    border-radius: 50px;
    background-color: #fff;

    >div {
      float: left;
    }

    .left {
      width: 48%;
      height: 100%;
      background-color: #e9e9e9;
      border-radius: 50px 0% 0% 50px;

      .top {
        font-style: italic;
        padding: 5rem;
        font-size: 24px;
        font-weight: 500;

      }



      .middle {
        padding: 10rem;
        font-size: 26px;
        font-weight: bold;
        position: relative;

        i {
          position: absolute;
          top: 98px;
          font-size: 40px;
          color: #004751
        }
      }

      .bottom {
        padding: 5rem;
        font-size: 12px;

        :hover {
          border-bottom: #004751 solid 2px;
        }
      }
    }

    .right {
      width: 52%;
      height: 100%;
      padding: 5rem 8rem;
      padding-bottom: 0;
      background-color: #fff;
      border-radius: 0 50px 50px 0;

      .top {
        position: relative;
        font-size: 20px;
        padding-bottom: 30px;

        .icon-chahao {

          position: absolute;
          top: 0;
          right: 0;
          font-size: large;
          color: #ccc;
          cursor: pointer;
        }
      }



      .login {
        color: #ccc;
        height: 350px;
      }

      .bottom {
        .forgetPsw {
          font-size: 12px;
          text-align: right;

          :hover {
            cursor: pointer;
            border-bottom: #222 solid 2px;
          }
        }

        p {
          font-size: 12px;
          margin: 5px;
        }

        .login-way {
          height: 60px;
          padding: 20px;
          display: flex;
          flex-direction: row;
          width: 300px;
          align-items: center;
          justify-content: space-around;



          button {
            font-size: 14px;
            width: 100px;
            height: 26px;
            background-color: #fff;
            border-radius: 5px;
            transition: all 0.2s ease-in-out;

            i {
              margin-right: 5px;
              font-size: 14px;
            }
          }

          button:hover {
            background-color: #222;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>