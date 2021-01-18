<template>
    <div class="home">
        <div style="height:1px"></div>
        <div class="pages" ref="pages">
            <div class="need">
                <div class="content">
                    <div class="title">{{title}}</div>
                    <div class="des">为了保证被保险人权益不受影响，请完整阅读以下内容</div>
                </div>
                <div class="list" ref="need">
                    <div class="imgList">
                        <img class="img" src="../assets/baiwan/bwylsm1.png" mode="widthFix">
                        <img class="img" src="../assets/baiwan/bwylsm2.png" mode="widthFix">
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
        mixins: [replay],
        data () {
            return {
                title: ''
            }
        },
        mounted () {
            const query = this.$route.query
            switch (query.pageName) {
                case 'stateFa': {
                    this.title = '富邦防癌医疗投保声明'
                    break
                }
                case 'stateJn': {
                    this.title = '富邦境内旅平险投保声明'
                    break
                }
                case 'stateJw': {
                    this.title = '富邦境外旅平险投保声明'
                    break
                }
                case 'stateJt': {
                    this.title = '交通守护·意外伤害保险投保声明'
                    break
                }
                case 'stateZz': {
                    this.title = '住宅小区守护神·家庭财产保险投保声明'
                    break
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../common/common.less';
</style>
