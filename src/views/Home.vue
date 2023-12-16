<template>
    <!-- 最上面的背景块 -->
    <div class="back">
        <div class="left">致力于智能识别票据和清晰的可视化账单展示</div>
        <div class="bottom">轻松记账，让您的生活更加美好。</div>
        <button class="click">忍不住要去记一笔<i class="iconfont-hehe ">&#xe8f4;</i></button>
    </div>

    <!-- 我们的追求模块 -->
    <div class="seek">
        <div style="padding-left: 5vw;padding-top: 15px;font-size: 30px;font-weight: 600;font-style: italic;">我们的追求：</div>
        <div style="padding-left: 20vw;padding-top: 5px;font-size: 36px;font-weight: 700;font-style: italic;">
            --让您的记账更加轻松，更加快捷</div>
    </div>

    <!-- 优势模块 -->
    <div class="advantage">
        <div class="top">我们对用户进行了深度调研，根据用户的需求而设计的，因此</div>
        <!-- 中间禾禾记账优势和立即体验按钮 -->
        <div style="padding-left: 20vw;padding-right: 18vw;padding-top: 20px;">
            <div style="float: left;font-size: 35px;font-weight: 600;">禾禾记账的优势<i class="iconfont-hehe"
                    style="font-size: 30px;">&#xec7f;</i>
            </div>
            <button
                style="float: right;width:10vw;height: 60px;font-size: 18px;font-weight: 600;background-color:rgb(204,204,204);border: 0;border-radius: 10px;">立即体验
            </button>
        </div>
        <!-- 下面的点击切换介绍按钮 -->
        <div style="clear: both;padding-left: 15vw;padding-right:15vw;padding-top: 15px;">
            <div style="background-color: white;height: 650px;border-radius: 10px;">
                <div id="complex">
                    <button @click="changejustify">智能识别<i class="iconfont-hehe" style="color:black;">&#xe633;</i></button>
                    <button @click="changeshow">可视化展示<i class="iconfont-hehe">&#xe90a;</i></button>
                    <button @click="changeshare">共享账单<i class="iconfont-hehe">&#xe62d;</i></button>
                    <button @click="changeanalysis">智能分析<i class="iconfont-hehe">&#xeb48;</i></button>
                </div>
                <div style="padding-left:11vw;height: 300px;">
                    <div style="padding-top: 90px;">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 微信小程序展示 -->
    <div style="height: 890px;background-color: rgb(235, 230, 230);border-radius: 20px;border-top: 2px solid white;">
        <div style="font-size: 30px;float: left;margin-left: 15vw;margin-top: 60px;font-weight: 600;">禾禾记账--微信小程序版<i
                class="iconfont-hehe" style="font-size: 30px;">&#xe60f;</i></div>
        <div style="float: right;margin-top: 30px;">
            <div
                style="width: 100px;height: 100px;border-radius: 20px;background-color: white;text-align: center;line-height: 100px;font-size: 20px;margin-right: 15vw;">
                二维码</div>
            <div style="width: 80px;font-size: 20px;margin-left: 10px;">微信扫码体验一下</div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();
const changejustify = () => {
    router.push('/justify')
}
const changeanalysis = () => {
    router.push('/analysis')
}
const changeshare = () => {
    router.push('/share')
}
const changeshow = () => {
    router.push('/show')
}
</script>

<style  scoped>
.back {
    width: 100vw;
    height: 720px;
    background-image: url(../assets/picture/home.png);
    background-size: 100vw;
    font-style: italic;

    .left {
        width: 38vw;
        padding-left: 12vw;
        padding-top: 300px;
        font-size: 45px;
        font-weight: 900;
    }

    .bottom {
        padding-left: 21vw;
        padding-top: 30px;
        font-size: 18px;
        font-weight: 600;
    }

    .click {
        font-size: 17px;
        font-weight: 550;
        font-style: italic;
        position: absolute;
        left: 65vw;
        top: 470px;
        width: 12vw;
        height: 53px;
        border-radius: 22.5px;
        border: 0;
        background-color: rgb(58, 135, 212);
    }

}

.seek {
    height: 148px;
    margin: 0 8vw;
    border-radius: 30px;
    background-color: rgb(240, 237, 237);
}

.advantage {
    height: 890px;
    background-color: rgb(235, 230, 230);
    border-radius: 20px;

    .top {
        padding-left: 30vw;
        padding-right: 30vw;
        padding-top: 20px;
        font-size: 40px;
        font-weight: 700;
    }

    #complex {
        margin-left: 7vw;

        button {
            font-size: 30px;
            font-weight: 600;
            border: 0;
            padding-left: 2vw;
            width: 14vw;
            height: 80px;
            background-color: white;
            border-bottom: 3px solid black;
        }

        button:hover {
            border-bottom: 3px solid lightblue;
        }

        button i {
            font-size: 27px;
        }
    }

    .move {
        float: left;
        overflow: hidden;
    }
}
</style>