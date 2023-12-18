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
        <div style="clear: both;padding-left: 10vw;padding-right:10vw;padding-top: 15px;">
            <div style="background-color: white;height: 620px;border-radius: 10px;">
                <div style="height: 25px;"></div>
                <div id="complex">
                    <button @click="changejustify">智能识别<i class="iconfont-hehe" style="color:black;">&#xe633;</i></button>
                    <button @click="changeshow">可视化展示<i class="iconfont-hehe">&#xe90a;</i></button>
                    <button @click="changeshare">共享账单<i class="iconfont-hehe">&#xe62d;</i></button>
                    <button @click="changeanalysis">智能分析<i class="iconfont-hehe">&#xeb48;</i></button>
                </div>
                <div style="padding-left:11vw;height: 300px;">
                    <div style="padding-top: 40px;">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 微信小程序展示 -->
    <div style="height:930px;background-color: rgb(235, 230, 230);border-radius: 20px;border-top: 2px solid white;">
        <div>
            <div style="font-size: 30px;float: left;margin-left: 15vw;margin-top: 60px;font-weight: 600;">禾禾记账--微信小程序版<i
                    class="iconfont-hehe" style="font-size: 30px;">&#xe60f;</i></div>
            <div style="float: right;margin-top: 30px;">
                <div style=" width: 100px;height: 100px;border-radius: 20px;background-color: white;
                text-align: center;line-height: 100px;font-size: 20px;margin-right: 15vw;">
                    二维码</div>
                <div style="width: 80px;font-size: 20px;margin-left: 10px;">微信扫码体验一下</div>
            </div>
        </div>
        <div
            style="width: 70vw;margin-left: 15vw;margin-top: 20px;background-color: white;height: 700px;margin-top: 200px;padding-left:7.8vw;padding-right:5vw;padding-top:60px; border-radius: 20px;">
            <el-carousel trigger="click" height="600px">
                <el-carousel-item>
                    <img src="../assets/picture/homephone1.jpg" alt="" style="height: 550px;width: 15vw;">
                    <div style="display: inline-block;width: 5vw;"></div>
                    <img src="../assets/picture/homephone2.jpg" alt="" style="height: 550px;width: 15vw;">
                    <div style="display: inline-block;width: 5vw;"></div>
                    <img src="../assets/picture/homephone3.jpg" alt="" style="height: 550px;width: 15vw;">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="../assets/picture/homephone4.jpg" alt="" style="height: 550px;width: 15vw;">
                    <div style="display: inline-block;width: 5vw;"></div>
                    <img src="../assets/picture/homephone5.jpg" alt="" style="height: 550px;width: 15vw;">
                    <div style="display: inline-block;width: 5vw;"></div>
                    <img src="../assets/picture/homephone6.jpg" alt="" style="height: 550px;width: 15vw;">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="../assets/picture/homephone7.jpg" alt="" style="height: 550px;width: 15vw;">
                    <div style="display: inline-block;width: 5vw;"></div>
                    <img src="../assets/picture/homephone8.jpg" alt="" style="height: 550px;width: 15vw;">
                    <div style="display: inline-block;width: 5vw;"></div>
                    <img src="../assets/picture/homephone9.jpg" alt="" style="height: 550px;width: 15vw;">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
    <div style="height:750px;background-color: rgb(235, 230, 230);border-top: 1px solid white;">
        <div style="font-size:30px;margin-left: 15.5vw;padding-top: 30px;line-height: 70px;">用户对我们的评价 <i
                class="iconfont-hehe" style="font-size: 20px;">&#xe650;</i>
        </div>

        <!-- 用户评价模块 -->
        <div
            style="margin-left: 15vw;margin-right: 15vw;background-color: rgb(228,232,193);height: 600px;border-radius: 20px;position: relative;">
            <comment style="position: absolute;top: 20px;left:5vw;"></comment>
            <comment style="position: absolute;top: 400px;left:15vw;"></comment>
            <comment style="position: absolute;top: 240px;left:25vw;"></comment>
            <comment style="position: absolute;top: 150px;left:20vw;"></comment>
            <comment style="position: absolute;top: 320px;left:39vw;"></comment>
            <comment style="position: absolute;top: 465px;left:50vw;"></comment>
            <comment style="position: absolute;top: 100px;left:36vw;"></comment>
            <comment style="position: absolute;top: 240px;left:4.5vw;"></comment>
            <comment style="position: absolute;top: 160px;left:52vw;"></comment>
        </div>
    </div>
    <!-- 建议模块 -->
    <div style="height: 640px;background-color:rgb(235, 230, 230);border-top: 1px solid white;">
        <div style="text-align: center;font-size: 35px;margin-top: 30px;line-height: 70px;font-weight: 600;">
            CONTACT&nbsp;&nbsp;&nbsp;US
        </div>
        <div class="paragraph">我们十分在意用户的体验</div>
        <div class="paragraph">请提出您的宝贵建议</div>
        <div
            style="margin-top: 10px;background-color: white;width: 40vw;height: 400px;border-radius: 10px;margin-left: 30vw;border-top: 1px solid white;">
            <div
                style="width: 30vw;margin-top:20px;margin-left: 5vw;font-size: 25px;background-color: rgb(204,204,204);height: 50px;line-height:50px;text-indent: 2vw;border-radius: 5px;">
                您的邮箱:&nbsp;&nbsp;<input type="text"
                    style="border: 0;height: 35px;vertical-align:text-top;background-color: rgb(204,204,204);">
            </div>
            <div
                style="width: 30vw;margin-top:20px;margin-left: 5vw;font-size: 25px;background-color: rgb(204,204,204);height: 170px;line-height:50px;text-indent: 2vw;border-radius: 5px;">
                您的建议:&nbsp;&nbsp;<textarea
                    style="border: 0;height: 150px;width: 18vw;vertical-align:text-top;background-color: rgb(204,204,204);"></textarea>
            </div>
            <div style="text-align: center;margin-top:30px;"><button
                    style="width: 15vw;height:60px;background-color:rgb(184,234,242);border-radius: 30px;font-size: 20px;">提交</button>
            </div>
        </div>
    </div>
    <div style="height: 50px;background-color: rgb(227,238,255);font-size: 12px;color: rgb(175,176,178);line-height: 25px;">
        <i class="iconfont-hehe"
            style="float: left;font-size: 30px;margin-left: 32vw;margin-top: 15px;color: rgb(106,146,213);">&#xe75d;</i>
        <div style="margin-left: 39vw;">首页 | 联系 | 使用帮助 | 关于我们</div>
        <div style="margin-left: 39vw;">Copyright&nbsp;&nbsp;&nbsp;2023禾禾账目.皖ICP备2022005194号&nbsp;&nbsp;版本:v1.0.0</div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Comment from '../components/home-part/comment.vue'
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
        width: 45vw;
        padding-left: 10vw;
        padding-top: 300px;
        font-size: 45px;
        font-weight: 900;
    }

    .bottom {
        padding-left: 23vw;
        padding-top: 40px;
        font-size: 18px;
        font-weight: 600;
    }

    .click {
        font-size: 17px;
        font-weight: 550;
        font-style: italic;
        position: absolute;
        left: 65vw;
        top: 450px;
        width: 13vw;
        height: 55px;
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
        margin-left: 13vw;

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
}

.paragraph {
    font-size: 30px;
    text-align: center;
}
</style>