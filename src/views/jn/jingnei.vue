<template>
  <div class="home">
    <div style="height:1px"></div>
    <div class="pages" ref="pages">
      <div class="box">
        <div class="pageTitle">{{pageTitle}}</div>
        <div class="page" ref="page">
          <div class="test">
            <img src="../../assets/jingnei/banner.png" mode="widthFix">
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
                <img src="../../assets/jingnei/product3.png" mode="widthFix">
                <img src="../../assets/jingnei/product1.png" mode="widthFix">
                <img src="../../assets/jingnei/product2.png" mode="widthFix">
              </div>
            </div>
            <div class="liucheng">
              <img src="../../assets/jingnei/lipei.png">
              <div class="question">
                <div class="title">常见问题</div>
                <div class="item">
                  <div class="left">
                    <div class="icon">Q</div>
                    <div>境内是怎么定义的？</div>
                  </div>
                  <div v-if="question0" class="text">A：境内是指中国大陆地区范围内，该地区不包括台湾、香港、澳门地区。</div>
                </div>
                <div class="item">
                  <div class="left">
                    <div class="icon">Q</div>
                    <div>托运行李丢失索赔需提供什么资料？</div>
                  </div>
                  <div v-if="question1" class="text">(一)保险单正本或其它保险凭证；(二)被保险人身份证明；(三)财物损失清单和购买发票；(四)航空公司出具的书面证明文件；(五)被保险人境内旅行的证明，如旅游费用收据、机票或车船票；(六)保险金申请人所能提供的与确认保险事故的性质、原因、损失程度等有关的其他证明和资料。</div>
                </div>
                <div class="item">
                  <div class="left">
                    <div class="icon">Q</div>
                    <div>什么是急性疾病？</div>
                  </div>
                  <div v-if="question2" class="text">A：是指被保险人在境内旅行期间发生以下的疾病或症状，且该疾病或症状不在原因除外范围内：(1)高热（成人达到38.5摄氏度或以上，小儿达到39摄氏度或以上）；(2)急性阑尾炎或剧烈呕吐或严重腹泻；(3)休克或昏迷；(4)高原反应；(5)癫痫发作；(6)严重喘息或呼吸困难；(7)急性心肌梗塞或心力衰竭或严重心律失常；(8)高血压危象、高血压脑病、脑血管意外；(9)非因意外伤害所导致的出血；(10)急性尿潴留；(11)食物中毒；(12)非因意外伤害所导致的、突发性的眼睛红肿、疼痛或视力障碍。</div>
                </div>
                <div class="item">
                  <div class="left">
                    <div class="icon">Q</div>
                    <div>旅游意外医疗如何理赔？</div>
                  </div>
                  <div v-if="question3" class="text">A：在旅行期间因意外事故或突发急性病到医院就医产生的医疗费用，请拨打4008-817-518转告诉富邦财产保险的客服人员您需要理赔，我们的客服会指导您将所需资料进行影像资料上传。</div>
                </div>
                <div class="item">
                  <div class="left">
                    <div class="icon">Q</div>
                    <div>如果需要更改出游天数该怎么处理？</div>
                  </div>
                  <div v-if="question4" class="text">A：请拨打富邦财险4008-817-518服务专线，会有专人指引您进行线下操作。</div>
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
                    <div class="formList">
                      <div class="left">旅游目的地</div>
                      <div class="right">{{destination || '请选择旅游目的地'}}</div>
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
              <span class="num">8</span>
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
  name: 'jingnei',
  mixins: [replay],
  data () {
    return {
      pageTitle: 'FUN心游境内旅平险',
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
            planOne: '',
            planTwo: '6万'
        },
        {
            title: '急性病导致身故',
            planOne: '',
            planTwo: '5万'
        },
        {
            title: '意外伤害医疗保险金',
            planOne: '2万',
            planTwo: '3万'
        },
        {
            title: '急性疾病医疗保险金',
            planOne: '1万',
            planTwo: '2万'
        },
        {
            title: '意外伤害住院日额补贴保险金',
            planOne: '',
            planTwo: '100元/天'
        },
        {
            title: '紧急医疗运送和送返',
            planOne: '',
            planTwo: '20万'
        },
        {
            title: '遗体或遗骨运送回居住地或就地安葬费用',
            planOne: '',
            planTwo: '10万'
        },
        {
            title: '亲属前往处理后事补偿',
            planOne: '',
            planTwo: '6500元'
        },
        {
            title: '航班延误保险金',
            planOne: '300元',
            planTwo: '600元'
        },
        {
            title: '航空托运行李丢失保险金',
            planOne: '3000元',
            planTwo: '4000元'
        },
        {
            title: '个人责任保险金',
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
            planOne: '1～90天',
            planTwo: '1～90天'
        }
      ],
      plan: '基础版',
      relation: '配偶'
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
