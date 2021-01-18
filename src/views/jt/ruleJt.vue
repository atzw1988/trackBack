<template>
    <div class="home">
        <div style="height:1px"></div>
        <div class="pages" ref="pages">
            <div class="need">
                <div class="content">
                    <div class="title">交通守护·意外伤害保险保险条款</div>
                    <div class="des">为了保证被保险人权益不受影响，请完整阅读以下内容</div>
                </div>
                <div class="list" ref="need">
                    <div class="imgList">
                        <img class="img" src="../../assets/jiaotong/jiaotongshouhurule1.png" mode="widthFix">
                        <img class="img" src="../../assets/jiaotong/jiaotongshouhurule2.png" mode="widthFix">
                        <img class="img" src="../../assets/jiaotong/jiaotongshouhurule3.png" mode="widthFix">
                        <img class="img" src="../../assets/jiaotong/jiaotongshouhurule4.png" mode="widthFix">
                        <img class="img" src="../../assets/jiaotong/jiaotongshouhurule5.png" mode="widthFix">
                        <img class="img" src="../../assets/jiaotong/jiaotongshouhurule6.png" mode="widthFix">
                        <img class="img" src="../../assets/jiaotong/jiaotongshouhurule7.png" mode="widthFix">
                        <img class="img" src="../../assets/jiaotong/jiaotongshouhurule8.png" mode="widthFix">
                        <img class="img" src="../../assets/jiaotong/jiaotongshouhurule9.png" mode="widthFix">
                        <img class="img" src="../../assets/jiaotong/jiaotongshouhurule10.png" mode="widthFix">
                        <img class="img" src="../../assets/jiaotong/jiaotongshouhurule11.png" mode="widthFix">
                        <img class="img" src="../../assets/jiaotong/jiaotongshouhurule12.png" mode="widthFix">
                        <img class="img" src="../../assets/jiaotong/jiaotongshouhurule13.png" mode="widthFix">
                        <img class="img" src="../../assets/jiaotong/jiaotongshouhurule14.png" mode="widthFix">
                        <img class="img" src="../../assets/jiaotong/jiaotongshouhurule15.png" mode="widthFix">
                        <img class="img" src="../../assets/jiaotong/jiaotongshouhurule16.png" mode="widthFix">
                        <img class="img" src="../../assets/jiaotong/jiaotongshouhurule17.png" mode="widthFix">
                        <img class="img" src="../../assets/jiaotong/jiaotongshouhurule18.png" mode="widthFix">
                        <img class="img" src="../../assets/jiaotong/jiaotongshouhurule19.png" mode="widthFix">
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
