<template>
    <div class="home">
        <div style="height:1px"></div>
        <div class="pages" ref="pages">
            <div class="need">
                <div class="content">
                    <div class="title">富邦百万医疗综合保险条款</div>
                    <div class="des">为了保证被保险人权益不受影响，请完整阅读以下内容</div>
                </div>
                <div class="list" ref="need">
                    <div class="imgList">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule1.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule2.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule3.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule4.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule5.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule6.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule7.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule8.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule9.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule10.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule11.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule12.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule13.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule14.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule15.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule16.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule17.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule18.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule19.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule20.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule21.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule22.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule23.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule24.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule25.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule26.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule27.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule28.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule29.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule30.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule31.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule32.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule33.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule34.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule35.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule36.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule37.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule38.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule39.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule40.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule41.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule42.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule43.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule44.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule45.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule46.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule47.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule48.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule49.png" mode="widthFix">
                        <img class="img" src="../../assets/baiwan/baiwanyiliaorule50.png" mode="widthFix">
                    </div>
                </div>
                <div class="btn" :class="{enble: enble}">我已仔细阅读全部内容</div>
            </div>
        </div>
        <div class="mask"></div>
        <video id="awesome" width="375" height="667" controls autoplay loop></video>
        <track-button @click="begin" :loading="loading"></track-button>
    </div>
</template>
<script>
import { replay } from '@/mixin/mixin.js'
export default {
    mixins: [replay]
}
</script>
<style lang="less" scoped>
    @import '../../common/common.less';
</style>
