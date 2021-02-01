<template>
    <div class="home">
        <div style="height:1px"></div>
        <div class="pages" ref="pages">
            <div class="box">
                <div class="pageTitle">{{pageTitle}}</div>
                <div class="page" ref="page">
                    <div class="detail" v-for="(item, index) in policyNos" :key="index">
                        <div class="title">
                            <img src="../../assets/xubao/info.png" mode="widthFix">
                            <div>{{isRenew? '续保' : '保单'}}信息</div>
                        </div>
                        <div class="header">
                            <div class="name">{{item.riskName}}</div>
                        </div>
                        <div class="list">
                            <div class="item">
                                <div class="itemList">
                                    <div>投保人</div>
                                    <div class="value">{{item.appliInfo[0].appliName}}</div>
                                </div>
                                <div class="itemList">
                                    <div>证件号</div>
                                    <div class="value">{{item.appliInfo[0].idCode}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="list" v-for="(ele, no) in item.insuredInfoList" :key="no">
                            <div class="item">
                                <div class="itemList">
                                    <div>被保人{{no + 1}}</div>
                                    <div class="value">{{ele.insuredName}}</div>
                                </div>
                                <div class="itemList">
                                    <div>证件类型</div>
                                    <div class="value">{{idType[ele.idType]}}</div>
                                </div>
                                <div class="itemList">
                                    <div>证件号</div>
                                    <div class="value">{{ele.idCode}}</div>
                                </div>
                                <div class="itemList" v-if="ele.policyNo">
                                    <div>保单号</div>
                                    <div class="value">{{ele.policyNo}}</div>
                                </div>
                                <div class="itemList" v-if="ele.startDate">
                                    <div>生效日期</div>
                                    <div class="value">{{ele.startDate}}</div>
                                </div>
                                <div class="itemList" v-if="ele.endDate">
                                    <div>到期日期</div>
                                    <div class="value">{{ele.endDate}}</div>
                                </div>
                                <div class="itemList">
                                    <div>保费</div>
                                    <div class="value"><span class="trueMoney"
                                        v-if="ele.trueMoney && ele.trueMoney / 100 > ele.premium"
                                        >{{ele.trueMoney / 100}}</span><span class="number">{{ele.premium}}</span>元</div>
                                </div>
                            </div>
                        </div>
                        <div class="renewBtns">
                            <div class="renewBtn" v-if="item.canEdit">
                                <img class="icon" src="../../assets/xubao/edit.png">
                                <div>编辑</div>
                            </div>
                            <div class="renewBtn" v-if="item.riskCode =='2616'">
                                <img class="icon" src="../../assets/xubao/add.png">
                                <div>新增被保人</div>
                            </div>
                        </div>
                        <div class="list">
                            <div></div>
                            <div class="money">{{isRenew? '续保' : '保单'}}保费：<span
                                class="trueMoney"
                                v-if="item.money && item.money > item.premium"
                                >{{item.money}}</span><span class="number">{{item.premium}}</span>元</div>
                        </div>
                        <div class="plan">
                            <div>保障详情</div>
                            <img class="right" src="../../assets/xubao/left.png">
                        </div>
                    </div>
                </div>
                <div class="btn">
                    <div class="left">
                        <div class="price">
                            <span>合计：</span>
                            <span class="num">{{renewTotal}}</span>
                            <span>元</span>
                        </div>
                    </div>
                    <div class="right">续保缴费</div>
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
        name: 'jingwai',
        mixins: [replay],
        data () {
            return {
                pageTitle: '确认信息',
                policyNos: [
                    {
                        'policyNo': '826162021906988005474',
                        'handler1Code': '0003602',
                        'comCode': '0000021802',
                        'agentCode': null,
                        'agentName': null,
                        'channelType': '12',
                        'businessNature': '05',
                        'operateSite': '69',
                        'riskCode': '2616',
                        'riskName': '富邦幸福e家百万医疗险',
                        'appNum': '1',
                        'productCode': '26160111',
                        'productName': '有社保（51-55）',
                        'underwriteDate': '2021-01-21',
                        'startDate': '2020-02-06',
                        'endDate': '2021-02-05',
                        'sumAmount': '7000000.0',
                        'sumPremium': '840.0',
                        'achievementId': '2928',
                        'appliInfo': [
                            {
                                'appliName': '苏琼香',
                                'idCode': '350822199208094425',
                                'idType': '01',
                                'birthday': '1992-08-09',
                                'sex': '2',
                                'age': '28',
                                'telephone': '15060784170',
                                'mobile': '15060784170',
                                'email': null,
                                'address': null,
                                'zipcode': null,
                                'linkerName': null,
                                'linkerMobile': null,
                                'account': null,
                                'bank': null,
                                'taxcode': null,
                                'taxkind': null,
                                'taxaddress': null,
                                'occupationCode': null,
                                'idStartDate': '',
                                'idEndDate': ''
                            }
                        ],
                        'insuredInfoList': [
                            {
                                'insuredName': '水晶',
                                'insuredNameEn': null,
                                'idCode': '46644148',
                                'idType': '12',
                                'relation': '50',
                                'occupationCode': null,
                                'birthday': '1967-08-09',
                                'sex': '2',
                                'age': 53,
                                'telephone': null,
                                'mobile': '15060784170',
                                'email': null,
                                'address': null,
                                'zipcode': null,
                                'beway': null,
                                'department': null,
                                'studentNo': null,
                                'jobUnit': null,
                                'insuredFlag': null,
                                'linkerName': null,
                                'linkerMobile': null,
                                'idStartDate': null,
                                'idEndDate': null,
                                'beneficiaryList': [

                                ],
                                'policyNo': '826162021906988005474',
                                'fbcode': '0003602',
                                'operateCode': '0000262',
                                'appNum': '1',
                                'startDate': '2020-02-06',
                                'endDate': '2021-02-05',
                                'achievementId': 2829,
                                'operateSite': '69',
                                'comCode': '0000021802',
                                'productName': '有社保（51-55）',
                                'handler1Code': '0003602',
                                'personPass': true,
                                'noID': true,
                                'isSelfHold': 2,
                                'wfotherfee': 30,
                                'disrate': 0,
                                'rate': 100,
                                'agePass': null,
                                'socialSecurity': 1,
                                'insurePackageCode': '26160111',
                                'trueMoney': 120000,
                                'premium': 1200,
                                'untaxedPremium': 12000000
                            }
                        ],
                        'itemkindList': [
                            {
                                'kindcode': '2616001',
                                'kindName': '富邦财产保险有限公司个人与家庭医疗保险条款',
                                'itemCode': '0001',
                                'itemdetailName': '一般医疗保险责任，含住院医疗保险金、特殊门诊保障、日间手术医疗保险金和住院前后门急诊医疗保险金',
                                'currency': 'CNY',
                                'itemkindAmount': '3000000.0',
                                'itemkindPremium': '613.2'
                            },
                            {
                                'kindcode': '2616002',
                                'kindName': '富邦财产保险有限公司个人与家庭医疗保险条款',
                                'itemCode': '0002',
                                'itemdetailName': '提供100种重大疾病医疗保险责任，含重大疾病住院医疗保险金、重大疾病特殊门诊医疗保险金、重大疾病门诊手术医疗保险金和重大疾病住院前后门急诊医疗保险金',
                                'currency': 'CNY',
                                'itemkindAmount': '3000000.0',
                                'itemkindPremium': '181.3'
                            },
                            {
                                'kindcode': '2616003',
                                'kindName': '富邦财产保险有限公司附加扩展质子重离子医疗保险条款',
                                'itemCode': '0003',
                                'itemdetailName': '质子重离子医疗保险',
                                'currency': 'CNY',
                                'itemkindAmount': '1000000.0',
                                'itemkindPremium': '45.5'
                            }
                        ],
                        'addressList': null,
                        'carInfoList': null,
                        'noSelfNum': 1,
                        'canEdit': true,
                        'belong': {
                            'achievementId': 2829,
                            'isSelfHold': 2,
                            'time': '2021-02-05',
                            'operateSite': '69',
                            'operateCode': '0000262'
                        },
                        'money': 1200,
                        'premium': 1200
                    },
                    {
                        'policyNo': '826182021906370004045',
                        'handler1Code': '0000262',
                        'comCode': '0000021802',
                        'agentCode': 'P0000A369094',
                        'agentName': '黄少鹏',
                        'channelType': '05',
                        'businessNature': '01',
                        'operateSite': '63',
                        'riskCode': '2618',
                        'riskName': '富邦关爱e生.防癌医疗险',
                        'appNum': '1',
                        'productCode': '26180208',
                        'productName': '无社保（76-80）',
                        'underwriteDate': '2021-01-12',
                        'startDate': '2021-01-13',
                        'endDate': '2022-01-12',
                        'sumAmount': '4000000.0',
                        'sumPremium': '8320.0',
                        'achievementId': '2788',
                        'appliInfo': [
                            {
                                'appliName': '欧阳葭蕙',
                                'idCode': '350681199202102526',
                                'idType': '01',
                                'birthday': '1992-02-10',
                                'sex': '2',
                                'age': '28',
                                'telephone': '18060912392',
                                'mobile': '18060912392',
                                'email': null,
                                'address': null,
                                'zipcode': null,
                                'linkerName': null,
                                'linkerMobile': null,
                                'account': null,
                                'bank': null,
                                'taxcode': null,
                                'taxkind': null,
                                'taxaddress': null,
                                'occupationCode': null,
                                'idStartDate': '',
                                'idEndDate': ''
                            }
                        ],
                        'insuredInfoList': [
                            {
                                'insuredName': '花卉',
                                'insuredNameEn': null,
                                'idCode': '5948900',
                                'idType': '12',
                                'relation': '50',
                                'occupationCode': null,
                                'birthday': '1940-02-10',
                                'sex': '1',
                                'age': 80,
                                'telephone': null,
                                'mobile': '18060912392',
                                'email': null,
                                'address': null,
                                'zipcode': null,
                                'beway': null,
                                'department': null,
                                'studentNo': null,
                                'jobUnit': null,
                                'insuredFlag': null,
                                'linkerName': null,
                                'linkerMobile': null,
                                'idStartDate': null,
                                'idEndDate': null,
                                'beneficiaryList': [

                                ],
                                'policyNo': '826182021906370004045',
                                'fbcode': 'P0000A369094',
                                'operateCode': '0000262',
                                'appNum': '1',
                                'startDate': '2021-01-13',
                                'endDate': '2022-01-12',
                                'achievementId': 2788,
                                'operateSite': '63',
                                'comCode': '0000021802',
                                'productName': '无社保（76-80）',
                                'agentCode': 'P0000A369094',
                                'handler1Code': '0000262',
                                'isSelfHold': 2,
                                'personPass': true,
                                'noID': true,
                                'wfotherfee': 20,
                                'disrate': 20,
                                'rate': 100,
                                'agePass': null,
                                'socialSecurity': 2,
                                'insurePackageCode': '26180208',
                                'trueMoney': 832000,
                                'premium': 8320,
                                'untaxedPremium': 83200000
                            }
                        ],
                        'itemkindList': [
                            {
                                'kindcode': '2618001',
                                'kindName': '富邦财产保险有限公司个人癌症医疗保险条款',
                                'itemCode': '0001',
                                'itemdetailName': '癌症医疗保险金，含癌症确诊医疗费用、癌症住院医疗费用、癌症特殊门诊医疗保险金和癌症住院前后三十日(含)门急诊医疗费用',
                                'currency': 'CNY',
                                'itemkindAmount': '3000000.0',
                                'itemkindPremium': '8257.0'
                            },
                            {
                                'kindcode': '2618001',
                                'kindName': '富邦财产保险有限公司个人癌症医疗保险条款',
                                'itemCode': '0002',
                                'itemdetailName': '质子重离子医疗保险',
                                'currency': 'CNY',
                                'itemkindAmount': '1000000.0',
                                'itemkindPremium': '63.0'
                            }
                        ],
                        'addressList': null,
                        'carInfoList': null,
                        'noSelfNum': 1,
                        'canEdit': true,
                        'belong': {
                            'achievementId': 2788,
                            'isSelfHold': 2,
                            'time': '2022-01-12',
                            'operateSite': '63',
                            'operateCode': '0000262'
                        },
                        'money': 8320,
                        'premium': 8320
                    }
                ],
                isApplyVisa: false,
                customerNameEn: '',
                linkerName: '',
                linkerMobile: '',
                isAdd: false,
                isRenew: true
            }
        },
        computed: {
            renewTotal () {
                let total = 0
                this.policyNos.forEach(item => {
                    item.insuredInfoList.forEach(ele => {
                        if (ele.premium) {
                            total += ele.premium * 100
                        }
                    })
                })
                return parseInt(total) / 100
            }
        },
        methods: {
            showPlan () {
                console.log(1)
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
                    padding: 15px;
                    .detail {
                        margin-bottom: 10px;
                        padding: 15px;
                        background-color: #FFFFFF;
                        border-radius: 8px;
                        .title {
                            font-size: 16px;
                            font-weight: bold;
                            color: #333333;
                            display: flex;
                            align-items: center;
                            margin-bottom: 15px;
                            .icon {
                                width: 15px;
                                height: 16px;
                                display: block;
                                margin-right: 7px;
                            }
                        }
                        .header {
                            font-size: 10px;
                            color: #CCCCCC;
                            height: 60px;
                            line-height: 30px;
                            border-top: 1px solid #F7F7F7;
                            .name {
                                font-size: 18px;
                                color: #333333;
                                font-weight: bold;
                            }
                        }
                        .list {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            margin-bottom: 8px;
                            .value {
                                color: #333333;
                                .trueMoney {
                                    font-size: 11px;
                                    text-decoration: line-through;
                                    margin-right: 4px;
                                    color: #CCCCCC;
                                }
                                .number {
                                    color: #EC8038;
                                }
                            }
                            .item {
                                flex-grow: 1;
                                margin-top: 10px;
                                .itemList {
                                    display: flex;
                                    align-items: center;
                                    justify-content: space-between;
                                }
                            }
                            .icon {
                                width: 18px;
                                height: 18px;
                                display: block;
                                margin-left: 15px;
                            }
                            .money {
                                font-size: 12px;
                                margin-top: 8px;
                                .trueMoney {
                                    text-decoration: line-through;
                                    margin-right: 4px;
                                }
                                .number {
                                    font-size: 19px;
                                    color: #EC8038;
                                    font-weight: bold;
                                }
                            }
                        }
                        .renewBtns {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            padding: 10px 0 20px;
                            .renewBtn {
                                width: 145px;
                                height: 40px;
                                border-radius: 4px;
                                font-size: 14px;
                                color: #007BD9;
                                background-color: #F6FBFF;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                .icon {
                                    display: block;
                                    width: 12px;
                                    height: 12px;
                                    margin-right: 7px;
                                }
                            }
                        }
                        .plan {
                            height: 40px;
                            background-color: #F9F9F9;
                            border-radius: 4px;
                            display: flex;
                            align-items: center;
                            padding: 0 15px;
                            justify-content: space-between;
                            color: #333333;
                            margin-top: 20px;
                            .right {
                                width: 10px;
                                height: 10px;
                                display: block;
                            }
                        }
                    }
                }
                .btn {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 44px;
                    background-color: #ffffff;
                    border-top: 1px solid #eee;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .right {
                        width: 130px;
                        height: 100%;
                        line-height: 44px;
                        text-align: center;
                        font-size: 16px;
                        font-weight: bold;
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
