<template>
  <div class="mask">
    <div class="container">
      <div class="left">
        <div class="top">欢迎！</div>
        <div class="middle">
          禾禾账目.<i class="iconfont-hehe icon-logo">&#xe618;</i>
        </div>
        <div class="bottom"><router-link to="/register">立即注册</router-link></div>
      </div>
      <div class="right">
        <div class="top">登录<i @click="goBack" class="iconfont-hehe icon-chahao">&#xe68b;</i></div>
        <div class="login">
          <router-view></router-view>
        </div>
        <div class="bottom">
          <div class="forgetPsw"><span>忘记密码？</span></div>
          <p>或登录方式</p>
          <div class="login-way">
            <button @click="loginByCode"><i class="iconfont-hehe icon-chahao">&#xe615;</i>手机验证码</button>
            <button><i class="iconfont-hehe icon-chahao">&#xe657;</i>微博</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useRouter } from "vue-router";
import { reactive, ref, onBeforeMount } from "vue";

const router = useRouter();
// 默认进入登录通过密码
onBeforeMount(() => {
  router.push({ path: '/login/password' })
})

const goBack = () => {
  router.back()
}
const loginByCode = () => {
  router.push({ path: '/login/code' })
} 
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
        height: 300px;
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