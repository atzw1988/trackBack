<template>
  <div class="home">
    <div style="height:1px"></div>
    <div class="pages" ref="pages">
      <div class="box">
        <div class="pageTitle">{{pageTitle}}</div>
        <div class="page" ref="page">
          <div class="test">
            <img src="../../assets/jingwai/banner.png" mode="widthFix">
            <div class="plan">
              <div class="planTitle">
                <div class="left">保障计划</div>
                <div class="right">查看详情</div>
              </div>
              <div class="planList">
                <div class="item" :class="{active: planOne}">基础版</div>
                <div class="item" :class="{active: !planOne}">升级版</div>
              </div>
              <template v-for="(item, index) in planList">
                <div class="detailList" :key="index" v-if="index < maxSHow">
                  <div class="left">{{item.title}}</div>
                  <div class="right">{{planOne? item.planOne : item.planTwo}}</div>
                </div>
              </template>
              <div class="more">
                <div class="showMore">{{moreText}}</div>
              </div>
            </div>
            <div class="list">
              <div class="tab">
                <div class="tabItem">产品特色</div>
                <div class="tabItem">理赔说明</div>
                <div class="tabItem">我要投保</div>
              </div>
              <div class="imgList">
                <img src="../../assets/jingwai/product1.png" mode="widthFix">
                <img src="../../assets/jingwai/product2.png" mode="widthFix">
                <img src="../../assets/jingwai/product3.png" mode="widthFix">
                <img src="../../assets/jingwai/product4.png" mode="widthFix">
              </div>
            </div>
            <div class="liucheng">
              <img src="../../assets/jingnei/lipei.png">
              <div class="question">
                <div class="title">常见问题</div>
                <div class="item">
                  <div class="left">
                    <div class="icon">Q</div>
                    <div>境外是怎么定义的？</div>
                  </div>
                  <div v-if="question0" class="text">A：境外是指中国大陆以外的国家和地区，该地区包括台湾、香港、澳门地区。</div>
                </div>
                <div class="item">
                  <div class="left">
                    <div class="icon">Q</div>
                    <div>什么是急性病？</div>
                  </div>
                  <div v-if="question1" class="text">A：是指被保险人在保险生效之前未曾接受治疗或诊断，不包括既往疾病、慢性病、精神病、精神分裂、艾滋病、性传播疾病、遗传性疾病、先天性疾病或缺陷、先天性畸形、牙齿治疗（但因意外伤害事故导致的必须进行的牙科门诊治疗不在此限）、预防性手术等非必须紧急治疗的手术、器官移植。</div>
                </div>
                <div class="item">
                  <div class="left">
                    <div class="icon">Q</div>
                    <div>如去多个国家，该如何选择目的地？</div>
                  </div>
                  <div v-if="question2" class="text">A：投保境外旅游保险后，在全世界各国家和地区（除保单列明的交战及危险地带，包含但不限于阿富汗、伊拉克、中非共和国、南苏丹等交战及危险地带）均可享受保障。填写目的地国家时只需填写主目的地国家或主签国即可，无需选择全部目的地国家。</div>
                </div>
                <div class="item">
                  <div class="left">
                    <div class="icon">Q</div>
                    <div>若在海外遇到紧难事故要如何处理及提供什么信息？</div>
                  </div>
                  <div v-if="question3" class="text">（1）请拨打sos救援电话，境内：4008-817-518 ; 境外：+886-4008-106-662\n（2）提供救援中心以下信息：\n－保户姓名\n－保户身份证号码、台胞证或护照号码\n－保户所在地\n－联络电话</div>
                </div>
                <div class="item">
                  <div class="left">
                    <div class="icon">Q</div>
                    <div>若在旅途中发生意外，未通知援助中心自行处理完后，是否能联系援助中心予以报销？</div>
                  </div>
                  <div v-if="question4" class="text">A：全球旅行医疗救援服务是专为紧急事故安排，不应视作费用报销。对于未经援助中心事先书面认可的和/或未经援助中心安排的紧急医疗救援而产生的费用将不予报销。</div>
                </div>
                <div class="item">
                  <div class="left">
                    <div class="icon">Q</div>
                    <div>援助中心的医疗救援服务与当地120服务有何区别？</div>
                  </div>
                  <div v-if="question5" class="text">A：“120”的职能是在短距离、短时间内将病人从出事现场送至第一救助点（急救站、诊所、医院等）即完成服务，但”120”不负责判断该救助点是否对病人最为合适以及后续情况如何。120是急救车调遣中心，不提供医疗咨询和建议等服务。此外，”120”是本地化的服务。当保户在国外时，”120”便无能为力。</div>
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
                  <div>为谁投保（被保险人）</div>
                </div>
                <div class="other">
                  <div class="titleList">被保险人</div>
                    <div class="formList picker">
                      <div class="left">投保计划</div>
                      <div class="right">{{plan}}</div>
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
                    <div class="formList picker">
                      <div class="left">办理申根签证</div>
                      <div class="right">
                        <van-checkbox class="checkBox" icon-size="14px" shape="square" v-model="isApplyVisa" />
                      </div>
                    </div>
                    <div class="formList">
                      <div class="left">英文姓名</div>
                      <div class="right">{{customerNameEn || '请输入英文姓名'}}</div>
                    </div>
                    <div class="formList" v-if="isApplyVisa">
                      <div class="left">紧急联系人</div>
                      <div class="right">{{linkerName || '请输入紧急联系人'}}</div>
                    </div>
                    <div class="formList" v-if="isApplyVisa">
                      <div class="left">紧急联系人电话</div>
                      <div class="right">{{linkerMobile || '请输入紧急联系人电话'}}</div>
                    </div>
                    <div class="formList picker">
                      <div class="left">旅游目的地</div>
                      <div class="right">{{destination || '请选择旅游目的地'}}</div>
                    </div>
                    <div class="formList picker addPrice" v-if="isAdd">
                      <div class="left"></div>
                      <div class="right">带*号表示加费国家，加费100%</div>
                    </div>
                    <div class="formList picker">
                      <div class="left">保障期限</div>
                      <div class="right">{{limitTimeValue || '请选择保障期限'}}</div>
                    </div>
                    <div class="formList picker">
                      <div class="left">保单生效日期</div>
                      <div class="right">{{effectTime || '请选择保单生效日期'}}</div>
                    </div>
                    <div class="formList picker">
                      <div class="left">保单终止日期</div>
                      <div class="right">{{overdueTime}}</div>
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
              <span class="num">34</span>
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
  name: 'jingwai',
  mixins: [replay],
  data () {
    return {
      pageTitle: 'FUN心游境外旅平险',
      planLists: [
        {
            title: '旅行意外身故或伤残',
            planOne: '30万',
            planTwo: '50万'
        },
        {
            title: '公共交通工具意外身故或伤残',
            planOne: '30万',
            planTwo: '50万'
        },
        {
            title: '高风险运动意外身故或伤残',
            planOne: '6万',
            planTwo: '10万'
        },
        {
            title: '急性病导致身故',
            planOne: '5万',
            planTwo: '15万'
        },
        {
            title: '意外医疗/急性病医疗',
            planOne: '30万',
            planTwo: '35万'
        },
        {
            title: '紧急医疗运送和送返',
            planOne: '30万',
            planTwo: '40万'
        },
        {
            title: '遗体或遗骨运送回国或就地安葬费用',
            planOne: '10万',
            planTwo: '10万'
        },
        {
            title: '亲属前往处理后事补偿',
            planOne: '6500元',
            planTwo: '6500元'
        },
        {
            title: '亲属慰问探访补偿',
            planOne: '1万',
            planTwo: '1万'
        },
        {
            title: '旅行航班延误',
            planOne: '600元',
            planTwo: '1200元'
        },
        {
            title: '航空托运行李延误',
            planOne: '1000元',
            planTwo: '2000元'
        },
        {
            title: '行李和随身物品损失',
            planOne: '',
            planTwo: '2000元'
        },
        {
            title: '个人金钱损失',
            planOne: '1000元',
            planTwo: '1500元'
        },
        {
            title: '旅行证件遗失',
            planOne: '2000元',
            planTwo: '4000元'
        },
        {
            title: '旅程取消或缩短',
            planOne: '',
            planTwo: '5000元'
        },
        {
            title: '劫持事故慰问',
            planOne: '1.2万',
            planTwo: '2.4万'
        },
        {
            title: '个人责任',
            planOne: '20万',
            planTwo: '50万'
        },
        {
            title: '投保年龄',
            planOne: '1-70周岁',
            planTwo: '1-70周岁'
        },
        {
            title: '保障期限',
            planOne: '1天～1年',
            planTwo: '1天～1年'
        }
      ],
      relation: '配偶',
      plan: '基础版',
      isApplyVisa: false,
      customerNameEn: '',
      linkerName: '',
      linkerMobile: '',
      isAdd: false
    }
  },
  watch: {
    showMore (newVal) {
      if (newVal) {
        this.maxSHow = 100
        this.moreText = '收起保障详情'
      } else {
        this.maxSHow = 5
        this.moreText = '更多保障详情'
      }
    }
  },
  computed: {
    planOne () {
      return this.plan === '基础版'
    },
    planList () {
      const list = this.planLists.filter(item => {
        if (this.plan === '基础版') {
          return item.planOne
        } else {
          return item
        }
      })
      return list
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
          .plan {
            background-color: #ffffff;
            padding: 0 24px;
            .planTitle, .planList, .detailList {
              display: flex;
              justify-content: space-between;
              align-items: center
            }
            .planTitle {
              height: 52px;
              font-size: 16px;
              .left {
                font-weight: bold;
              }
              .right {
                color: #007bd9;
              }
            }
            .planList {
              padding: 13px 13px 9px;
              .item {
                width: 95px;
                height: 32px;
                border-radius: 32px;
                border: 1px solid #EEE;
                text-align: center;
                line-height: 32px;
                color: #999;
              }
              .active {
                background-color: #34db8d;
                color: #ffffff;
              }
            }
            .detailList {
              height: 42px;
              border-bottom: 0.5px solid #f1f1f1;
            }
            .more {
              height: 42px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #007BD9;
            }
          }
          img {
            width: 100%;
            display: block;
          }
          .list {
            background-color: #ffffff;
            margin:0 0 9px;
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
                  text-align: justify;
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
              .titleList {
                font-weight: bold;
              }
              .formList {
                height: 50px;
                border-bottom: 1px solid #eee;
                display: flex;
                align-items: center;
                .left {
                  width: 100px;
                }
                .right {
                  .price {
                    font-size: 20px;
                    color: #ec8038;
                  }
                }
              }
              .addPrice {
                color: red;
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
              width: 120px;
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
