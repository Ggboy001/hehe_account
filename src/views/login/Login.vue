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
        <div class="top">登录</div>
        <div class="login">

          <hehe-input type="text" v-model:value="userLoginInfo.phone" placeholder="手机号"></hehe-input>
          <hehe-input type="password" v-model:value="userLoginInfo.password" placeholder="密码"></hehe-input>

          <div>
            <input class="remember" type="checkbox" name="" id="">
            <span class="agree">同意《注册协议》和《隐私政策》</span>
          </div>
          <input class="login-btn" @click="login" type="button" value="登录">
        </div>
        <div class="bottom">
          <div class="forgetPsw"><span>忘记密码？</span></div>
          <p>或登录方式</p>
          <div class="login-way">
            <button>手机验证码</button>
            <button>微博</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useRouter } from "vue-router";
import { ElMessage } from 'element-plus'
import { loginRequest } from "../../api/user";
import { reactive, ref } from "vue";
import heheInput from "../../components/common/hehe-input.vue";
const router = useRouter();
const userLoginInfo = reactive({
  phone: "",
  password: "",
});
const login = () => {
  loginRequest(userLoginInfo).then((res) => {
    if (res.data.code == 0) {
      router.push({ path: '/account' })
      ElMessage({
        message: '登录成功',
        type: 'success',
      })


    }
    else {
      ElMessage({
        message: '登录失败',
        type: 'error',
      })
      userLoginInfo.phone = ''
      userLoginInfo.password = ''
    }
  })
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
        font-size: 20px;
        margin-bottom: 30px;
      }



      .login {
        color: #ccc;
        display: flex;
        flex-direction: column;
        height: 300px;
        align-items: center;
        justify-content: space-around;

        div {
          margin-bottom: 20px;
          font: 14px;
          color: #ccc;
        }

        .remember {
          margin-right: 6px;
          height: 11px;
        }

        .agree {
          font-size: 14px;
        }

        .login-btn {
          width: 160px;
          height: 40px;
          background-color: #222;
          color: #fff;
          border-radius: 6px;
        }

        .login-btn:hover {
          cursor: pointer;
        }
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
            font-size: 12px;
            width: 100px;
            height: 26px;
            background-color: #fff;
            border-radius: 5px;
            transition: all 0.2s ease-in-out;
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