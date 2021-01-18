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
                        <img class="img" src="../../assets/chihuo/chihuorule1.png" mode="widthFix">
                        <img class="img" src="../../assets/chihuo/chihuorule2.png" mode="widthFix">
                        <img class="img" src="../../assets/chihuo/chihuorule3.png" mode="widthFix">
                        <img class="img" src="../../assets/chihuo/chihuorule4.png" mode="widthFix">
                        <img class="img" src="../../assets/chihuo/chihuorule5.png" mode="widthFix">
                        <img class="img" src="../../assets/chihuo/chihuorule6.png" mode="widthFix">
                        <img class="img" src="../../assets/chihuo/chihuorule7.png" mode="widthFix">
                        <img class="img" src="../../assets/chihuo/chihuorule8.png" mode="widthFix">
                        <img class="img" src="../../assets/chihuo/chihuorule9.png" mode="widthFix">
                        <img class="img" src="../../assets/chihuo/chihuorule10.png" mode="widthFix">
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
