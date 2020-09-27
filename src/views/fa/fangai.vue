<template>
    <div class="home">
        <div style="height:1px"></div>
        <div class="pages" ref="pages">
            <div class="box">
                <div class="pageTitle">{{pageTitle}}</div>
                <div class="page" ref="page">
                    <div class="test">
                        <img src="../../assets/fangai/banner.png" mode="widthFix">
                        <img src="../../assets/fangai/plan.png" mode="widthFix" alt="">
                        <img class="serve" src="../../assets/fangai/serve.png" mode="widthFix">
                        <img src="../../assets/fangai/price.png" mode="widthFix">
                        <div class="list">
                            <div class="tab">
                                <div class="tabItem">产品特色</div>
                                <div class="tabItem">理赔说明</div>
                                <div class="tabItem">我要投保</div>
                            </div>
                            <div class="imgList">
                                <img src="../../assets/fangai/product1.png" mode="widthFix">
                                <img src="../../assets/fangai/product2.png" mode="widthFix">
                                <img src="../../assets/fangai/product3.png" mode="widthFix">
                                <img src="../../assets/fangai/product4.png" mode="widthFix">
                                <img src="../../assets/fangai/product5.png" mode="widthFix">
                            </div>
                        </div>
                        <div class="liucheng">
                            <img src="../../assets/fangai/lipei.png">
                            <div class="question">
                                <div class="title">常见问题</div>
                                <div class="item">
                                    <div class="left">
                                        <div class="icon">Q</div>
                                        <div>本产品所承保的癌症医疗费用包含那些范围？</div>
                                    </div>
                                    <template v-if="question0">
                                        <div class="text">富邦关爱e生.防癌医疗险的癌症医疗费用涵盖了癌症（含恶性肿瘤及原位癌）确诊费用和癌症（含恶性肿瘤及原位癌）治疗费用。</div>
                                        <div class="text">癌症（含恶性肿瘤及原位癌）确诊费用：癌症确诊前30日发生的医生诊疗费和检查检验费，以及相关的合理且必须门急诊费用。</div>
                                        <div class="text">癌症（含恶性肿瘤及原位癌）治疗费用：1、住院医疗费用；2、特殊门诊医疗费用；3、住院前后30日门诊急诊医疗费用</div>
                                    </template>
                                </div>
                                <div class="item">
                                    <div class="left">
                                        <div class="icon">Q</div>
                                        <div>癌症住院期间的药品费包含靶向药物吗？社保外的药品费也可报销吗？</div>
                                    </div>
                                    <template v-if="question1">
                                        <div class="text">癌症住院期间的药品费是包含靶向药物，但是院外用药是不包含的。癌症住院期间社保外的药品费一样可以报销的。</div>
                                    </template>
                                </div>
                                <div class="item">
                                    <div class="left">
                                        <div class="icon">Q</div>
                                        <div>质子重离子的治疗是什么？那些医院适用？</div>
                                    </div>
                                    <template v-if="question2">
                                        <div class="text">质子和重离子技术是放疗中的一种，是国际公认的放疗尖端技术，质子和重离子同属于粒子线，与传统的光子线不同，能够在对肿瘤进行集中爆破的同时，减少对健康组织的伤害。</div>
                                        <div class="text">富邦关爱e生.防癌医疗险提供台湾林口长庚医院和上海质子重离子医院两家医院的质子重离子治疗费用报销。</div>
                                    </template>
                                </div>
                                <div class="item">
                                    <div class="left">
                                        <div class="icon">Q</div>
                                        <div>本产品是否有免赔额？</div>
                                    </div>
                                    <template v-if="question3">
                                        <div class="text">富邦关爱e生.防癌医疗险是没有免赔额的。</div>
                                    </template>
                                </div>
                            </div>
                        </div>
                        <div class="formTitle">填写保单信息</div>
                        <div class="formContent">
                            <div class="form">
                                <div class="title">
                                    <div class="no">1</div>
                                    <div>本人信息（投保人）</div>
                                </div>
                                <div class="formList">
                                    <div class="left">姓名</div>
                                    <div class="right">{{selfName}}</div>
                                </div>
                                <div class="formList picker">
                                    <div class="left">证件类型</div>
                                    <div class="right">{{selfCardType}}</div>
                                </div>
                                <div class="formList">
                                    <div class="left">证件号</div>
                                    <div class="right">{{selfCardNo}}</div>
                                </div>
                                <div class="formList" v-if="selfCardType != '身份证'">
                                    <div class="left">性别</div>
                                    <div class="right">{{selfSex}}</div>
                                </div>
                                <div class="formList" v-if="selfCardType != '身份证'">
                                    <div class="left">出生日期</div>
                                    <div class="right">{{selfBirth}}</div>
                                </div>
                                <div class="formList">
                                    <div class="left">手机号</div>
                                    <div class="right">{{selfPhone}}</div>
                                </div>
                                <div class="title">
                                    <div class="no">2</div>
                                    <div>保险种类</div>
                                </div>
                                <div class="title">
                                    <div class="no">2</div>
                                    <div>为谁投保（被保险人）</div>
                                </div>
                                <div class="other">
                                    <div class="title">被保险人1</div>
                                    <div class="kindlist">
                                        <div class="list" :class="{select: socialSecurity == 1}">有社保(含新农村)</div>
                                        <div class="list" :class="{select: socialSecurity == 0}">无社保</div>
                                    </div>
                                    <div class="formList picker">
                                        <div class="left">关系</div>
                                        <div class="right">{{relation}}</div>
                                    </div>
                                    <template v-if="relation != '本人'">
                                        <div class="formList">
                                            <div class="left">姓名</div>
                                            <div class="right">{{elseName || '请输入被保人中文姓名'}}</div>
                                        </div>
                                        <div class="formList picker">
                                            <div class="left">证件类型</div>
                                            <div class="right">{{elseCardType}}</div>
                                        </div>
                                        <div class="formList">
                                            <div class="left">证件号码</div>
                                            <div class="right">{{elseCardNo || '请输入证件号码'}}</div>
                                        </div>
                                        <div class="formList picker" v-if="elseCardType != '身份证'">
                                            <div class="left">性别</div>
                                            <div class="right">{{elseSex}}</div>
                                        </div>
                                        <div class="formList picker" v-if="elseCardType != '身份证'">
                                            <div class="left">出生日期</div>
                                            <div class="right">{{elseBirth || '请选择出生日期'}}</div>
                                        </div>
                                        <div class="formList">
                                            <div class="left">手机号</div>
                                            <div class="right">{{elsePhone || '请输入手机号码'}}</div>
                                        </div>
                                    </template>
                                    <div class="formList picker addperson">
                                        <div class="left">保费</div>
                                        <div class="right">
                                            <span class="price">{{total}}</span>元
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ruleList">
                            <van-checkbox class="checkBox" icon-size="14px" shape="square" v-model="readFlag">
                                我已确认
                            </van-checkbox>
                            <span class="lists">《投保须知》《保险条款》《投保声明》《免责事项》《隐私协议》</span>
                        </div>
                    </div>
                </div>
                <div class="btn">
                    <div class="left">
                        <div class="price" v-if="Number(totalMoney) > 0">
                            <span class="total" v-if="Number(totalMoney) > Number(premium)">{{totalMoney}}元</span><span class="num">{{premium}}</span>
                            <span>元/年</span>
                        </div>
                        <div class="price" v-else>
                            <span class="num">602</span>
                            <span>元/年起</span>
                        </div>
                        <div class="share">分享</div>
                    </div>
                    <div class="right">立即投保</div>
                </div>
            </div>
        </div>
        <div class="mask"></div>
        <video id="awesome" width="375" height="667" controls autoplay loop></video>
        <track-button @click="begin" :loading="loading"></track-button>
    </div>
</template>

<script>
import { replay } from '@/mixin/replay.js'
export default {
    name: 'fangai',
    mixins: [replay],
    data () {
        return {
            pageTitle: '富邦关爱e生.防癌医疗险',
            relation: '配偶'
        }
    }
}
</script>

<style lang="less" scoped>
    .home {
        width: 100%;
        min-height: 800px;
        .pages::-webkit-scrollbar {
            display: none;
        }
        .mask {
            width: 375px;
            height: 645px;
            opacity: 0;
            position: absolute;
            top: 0;
            left: 0;
        }
        #awesome {
            float: right;
        }
        .pages {
            float: left;
            width: 375px;
            height: 645px;
            font-size: 14px;
            background-color: #F7F7F7;
            border: 1px solid #000;
            .page::-webkit-scrollbar {
                display: none;
            }
            .box {
                position: relative;
                height: 100%;
                .pageTitle {
                    height: 44px;
                    text-align: center;
                    line-height: 44px;
                    font-size: 16px;
                    background-color: #ffffff;
                }
                .page {
                    height: calc(100% - 94px);
                    overflow-y: auto;
                    position: relative;
                    .test {
                        position: absolute;
                        left: 0;
                        top: -50px;
                    }
                    img {
                        width: 100%;
                        display: block;
                    }
                    .serve {
                        margin: 9px 0;
                    }
                    .list {
                        background-color: #ffffff;
                        margin: 9px 0;
                        .tab {
                            display: flex;
                            justify-content: space-around;
                            height: 45px;
                            align-items: center;
                            margin-bottom: 13px;
                        }
                    }
                    .liucheng {
                        background-color: #ffffff;
                        .question {
                            padding: 15px 20px 7px;
                            .title {
                                font-size: 16px;
                                font-weight: bold;
                            }
                            .item {
                                font-size: 12px;
                                .left {
                                    display: flex;
                                    height: 45px;
                                    align-items: center;
                                    border-bottom: 1px solid #eee;
                                    .icon {
                                        width: 14px;
                                        height: 14px;
                                        text-align: center;
                                        line-height: 14px;
                                        background-color: #007BD9;
                                        border-radius: 50%;
                                        color: #ffffff;
                                        margin-right: 5px;
                                    }
                                }
                                .text {
                                    padding: 10px 0;
                                    line-height: 1.8;
                                }
                            }
                        }
                    }
                    .formTitle {
                        height: 52px;
                        padding: 0 20px;
                        line-height: 52px;
                        background-color: #ffffff;
                        margin: 9px 0;
                        font-size: 16px;
                        font-weight: bold;
                    }
                    .formContent {
                        padding: 0 15px;
                        .form {
                            background-color: #ffffff;
                            padding: 0 15px;
                            .title {
                                height: 55px;
                                font-weight: bold;
                                display: flex;
                                align-items: center;
                                .no {
                                    width: 17px;
                                    height: 17px;
                                    line-height: 17px;
                                    background-color: #007BD9;
                                    border-radius: 50%;
                                    text-align: center;
                                    color: #ffffff;
                                    margin-right: 15px;
                                    font-weight: normal;
                                }
                            }
                            .formList {
                                height: 50px;
                                border-bottom: 1px solid #eee;
                                display: flex;
                                align-items: center;
                                .left {
                                    width: 80px;
                                }
                                .right {
                                    .price {
                                        font-size: 20px;
                                        color: #ec8038;
                                    }
                                }
                            }
                            .picker {
                                justify-content: space-between;
                            }
                            .kindlist {
                                display: flex;
                                align-items: center;
                                .list {
                                    width: 120px;
                                    height: 34px;
                                    text-align: center;
                                    line-height: 34px;
                                    border-radius: 4px;
                                    border: 1px solid #aaaaaa;
                                    color: #aaaaaa;
                                    margin-right: 10px;
                                }
                                .select {
                                    border: 1px solid #007BD9;
                                    color: #007BD9;
                                }
                            }
                        }
                    }
                    .ruleList {
                        padding: 10px 30px;
                        font-size: 12px;
                        display: flex;
                        align-items: flex-start;
                        .checkBox {
                            width: 140px;
                        }
                        .lists {
                            color: #007BD9;
                        }
                    }
                }
                .btn {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 50px;
                    background-color: #ffffff;
                    border-top: 1px solid #eee;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .right {
                        width: 125px;
                        height: 100%;
                        line-height: 50px;
                        text-align: center;
                        font-size: 15px;
                        color: #ffffff;
                        background-color: #ec8038;
                    }
                    .left {
                        display: flex;
                        justify-content: space-between;
                        flex-grow: 1;
                        padding: 0 15px;
                        color: #999;
                        .price {
                            font-size: 12px;
                            .total {
                                text-decoration: line-through;
                                margin-right: 10px;
                            }
                            .num {
                                font-size: 20px;
                                color: #ec8038;
                                margin-right: 4px;
                                font-weight: bold;
                            }
                        }
                    }
                }
            }
        }
        .other {
            padding-bottom: 20px;
        }
    }
</style>
