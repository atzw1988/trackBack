<template>
    <div class="home">
        <div style="height:1px"></div>
        <div class="pages" ref="pages">
            <div class="need">
                <div class="content">
                    <div class="title">关爱e生.防癌医疗综合保险条款</div>
                    <div class="des">为了保证被保险人权益不受影响，请完整阅读以下内容</div>
                </div>
                <div class="list" ref="need">
                    <div class="imgList">
                        <img class="img" src="../../assets/fangai/fangaixianrule1.png" mode="widthFix">
                        <img class="img" src="../../assets/fangai/fangaixianrule2.png" mode="widthFix">
                        <img class="img" src="../../assets/fangai/fangaixianrule3.png" mode="widthFix">
                        <img class="img" src="../../assets/fangai/fangaixianrule4.png" mode="widthFix">
                        <img class="img" src="../../assets/fangai/fangaixianrule5.png" mode="widthFix">
                        <img class="img" src="../../assets/fangai/fangaixianrule6.png" mode="widthFix">
                        <img class="img" src="../../assets/fangai/fangaixianrule7.png" mode="widthFix">
                        <img class="img" src="../../assets/fangai/fangaixianrule8.png" mode="widthFix">
                        <img class="img" src="../../assets/fangai/fangaixianrule9.png" mode="widthFix">
                        <img class="img" src="../../assets/fangai/fangaixianrule10.png" mode="widthFix">
                        <img class="img" src="../../assets/fangai/fangaixianrule11.png" mode="widthFix">
                        <img class="img" src="../../assets/fangai/fangaixianrule12.png" mode="widthFix">
                        <img class="img" src="../../assets/fangai/fangaixianrule13.png" mode="widthFix">
                        <img class="img" src="../../assets/fangai/fangaixianrule14.png" mode="widthFix">
                        <img class="img" src="../../assets/fangai/fangaixianrule15.png" mode="widthFix">
                        <img class="img" src="../../assets/fangai/fangaixianrule16.png" mode="widthFix">
                        <img class="img" src="../../assets/fangai/fangaixianrule17.png" mode="widthFix">
                        <img class="img" src="../../assets/fangai/fangaixianrule18.png" mode="widthFix">
                        <img class="img" src="../../assets/fangai/fangaixianrule19.png" mode="widthFix">
                        <img class="img" src="../../assets/fangai/fangaixianrule20.png" mode="widthFix">
                        <img class="img" src="../../assets/fangai/fangaixianrule21.png" mode="widthFix">
                        <img class="img" src="../../assets/fangai/fangaixianrule22.png" mode="widthFix">
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
