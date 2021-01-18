<template>
  <div class="home">
    <div style="height:1px"></div>
    <div class="pages" ref="pages">
      <div class="box">
        <div class="pageTitle">{{pageTitle}}</div>
        <div class="page" ref="page">
          <div class="test">
            <img src="../../assets/chihuo/banner.png" mode="widthFix">
            <img src="../../assets/chihuo/plan.png" mode="widthFix" alt="">
            <div class="list">
              <div class="tab">
                <div class="tabItem">产品特色</div>
                <div class="tabItem">理赔说明</div>
                <div class="tabItem">我要投保</div>
              </div>
              <div class="imgList">
                <img src="../../assets/chihuo/p1.png" mode="widthFix">
                <img src="../../assets/chihuo/p2.png" mode="widthFix">
                <img src="../../assets/chihuo/p3.png" mode="widthFix">
              </div>
            </div>
            <div class="liucheng">
              <img src="../../assets/chihuo/lipei.png">
              <div class="question">
                <div class="title">常见问题</div>
                <div class="item">
                  <div class="left">
                    <div class="icon">Q</div>
                    <div>什么是急性肠胃炎？</div>
                  </div>
                  <div v-if="question0" class="text">A：急性肠胃炎是胃肠粘膜的急性炎症，由多种不同的原因，如细菌、病毒感染、毒素、化学品作用等引起的胃肠道急性、弥漫性炎症，临床表现主要为恶心、呕吐、腹泻、发热等。可分为急性胃炎、急性肠炎、急性胃肠炎三种类型。急性胃炎是由多种病因引起的急性胃粘膜炎症，临床上急性发病，常表现为上腹部症状;急性肠炎常与肠道感染、饮食不当或摄入过量不新鲜食物引起食物中毒、化学品和药物中毒、食物过敏有关。临床表现为腹泻、腹痛、腹胀伴不同程度恶心呕吐，严重时可导致脱水，甚至休克;急性肠胃炎则具有急性肠炎和胃炎两者的表现。</div>
                </div>
                <div class="item">
                  <div class="left">
                    <div class="icon">Q</div>
                    <div>急性肠胃炎门诊或住院理赔时须提供哪些材料？</div>
                  </div>
                  <template v-if="question1">
                    <div class="text">A：急性肠胃炎医疗费用保险金申请：</div>
                    <div class="text">1) 保险金理赔申请书;</div>
                    <div class="text">2) 保险单正本或其他保险凭证;</div>
                    <div class="text">3) 保险金申请人的身份证明或户籍证明;</div>
                    <div class="text">4) 医院出具的医疗证明和医疗费用原始凭证;</div>
                    <div class="text">5) 保险金申请人所能提供的与确认保险事故的性质、原因、伤害程度等有关的其他证明和资料。</div>
                  </template>
                </div>
                <div class="item">
                  <div class="left">
                    <div class="icon">Q</div>
                    <div>本保险对医院有什么要求？</div>
                  </div>
                  <template v-if="question2">
                    <div class="text">A：本保险合同约定的医院或认可的医疗机构是指符合下列所以条件的机构：</div>
                    <div class="text">1) 拥有合法经营执照;</div>
                    <div class="text">2) 设立的主要目的为向受伤者或患病者提供留院治疗和护理服务;</div>
                    <div class="text">3) 有合格的医生和护士提供全日二十四小时的医疗和护理服务;</div>
                    <div class="text">4) 非主要作为康复医院、诊所、护理、疗养、戒酒、戒毒或类似的医疗机构。若医疗机构处于中国境内（不包含港、澳、台地区），则医院必须是中华人民共和国和国卫生部医院等级分类中的二级或二级以上的医院或保险人认可的医疗机构。</div>
                  </template>
                </div>
              </div>
            </div>
            <div class="formTitle">填写保单信息</div>
            <div class="formContent">
              <div class="form">
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
                <div class="title">被保险人</div>
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
              <span class="num">20</span>
              <span>元/年</span>
            </div>
            <div class="share">分享</div>
          </div>
          <div class="right">立即投保</div>
        </div>
      </div>
    </div>
    <!-- <div class="mask"></div> -->
    <video id="awesome" width="375" height="667" controls autoplay loop></video>
    <track-button @click="begin" :loading="loading"></track-button>
  </div>
</template>

<script>
import { replay } from '@/mixin/replay.js'
export default {
  name: 'chihuo',
  mixins: [replay],
  data () {
    return {
      pageTitle: '吃货卫士健康保险定制版',
      plan: '计划一',
      relation: '本人'
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
      padding-bottom: 10px;
    }
    .unit {
      padding-bottom: 10px;
      justify-content: space-between;
      .left {
        display: flex;
      }
      .right {
        display: flex;
        align-items: center;
        font-weight: normal;
        text-align: center;
        line-height: 25px;
        .sup, .add {
          width: 25px;
          height: 25px;
          border: 1px solid #eee;
        }
        .sup {
          border-radius: 5px 0 0 5px;
        }
        .add {
          border-radius: 0 5px 5px 0;
        }
        .num {
          width: 35px;
          height: 25px;
          border: 1px solid #eee;
        }
      }
    }
  }
</style>
