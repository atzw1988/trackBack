<template>
  <div class="home">
    <div style="height:1px"></div>
    <div class="pages" ref="pages">
      <div class="box">
        <div class="pageTitle">{{pageTitle}}</div>
        <div class="page" ref="page">
          <div class="test">
            <img src="../../assets/jiaotong/banner.png" mode="widthFix">
            <img v-if="plan == '计划一'" src="../../assets/jiaotong/plan.png" mode="widthFix" alt="">
            <img v-if="plan == '计划二'" src="../../assets/jiaotong/plan.png" mode="widthFix" alt="">
            <img v-if="plan == '计划三'" src="../../assets/jiaotong/plan.png" mode="widthFix" alt="">
            <div class="list">
              <div class="tab">
                <div class="tabItem">产品特色</div>
                <div class="tabItem">理赔说明</div>
                <div class="tabItem">我要投保</div>
              </div>
              <div class="imgList">
                <img src="../../assets/jiaotong/p1.png" mode="widthFix">
                <img src="../../assets/jiaotong/p2.png" mode="widthFix">
              </div>
            </div>
            <div class="liucheng">
              <img src="../../assets/jiaotong/lipei.png">
              <div class="question">
                <div class="title">常见问题</div>
                <div class="item">
                  <div class="left">
                    <div class="icon">Q</div>
                    <div>本保险保障的交通事故包含哪些？</div>
                  </div>
                  <div v-if="question0" class="text">
                    <div>（1）被保险人搭乘或驾驶汽车期间遭受意外伤害事故，包含自驾车及搭乘友人车辆或搭乘出租车等，但不包含职业驾驶人执行驾驶职务期间；</div>
                    <div>（2）被保险人以乘客身份乘坐合法合规运营的交通工具而遭受意外伤害事故，包含有陆上交通工具（如火车、公交车、BRT快速公交、地铁、轻轨、动车等）、海上大众交通工具（如轮船、邮轮）、空中大众交通工具（如飞机）；</div>
                    <div>（3）被保险人非以驾驶人或乘客身份而遭受机动车碰撞及空中交通工具坠落所致的交通意外伤害事故（如以行人身份行走在道路上遭遇机动车碰撞等）。</div>
                  </div>
                </div>
                <div class="item">
                  <div class="left">
                    <div class="icon">Q</div>
                    <div>是否有职业类别限制？</div>
                  </div>
                  <div v-if="question1" class="text">交通守护意外保险没有职业限制，但是若作为职业驾驶人执行驾驶职务期间不在交通守护保障范围内，但其它未执行职务期间仍可享受保障（比如，出租车司机工作期间、货车司机工作期间均称之为职业驾驶人执行驾驶职务期间）</div>
                </div>
                <div class="item">
                  <div class="left">
                    <div class="icon">Q</div>
                    <div>富邦交通守护保险适合哪些人？</div>
                  </div>
                  <div v-if="question2" class="text">0~70周岁，身体健康、能正常工作或正常生活的人群都可购买富邦交通守护保险，每一被保险人最多限保5份，超出部分无效。</div>
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
                  <div class="title">被保险人1</div>
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
                  </template>
                </div>
                <div class="title unit">
                  <div class="left">
                    <div class="no">3</div>
                    <div>投保分数</div>
                  </div>
                  <div class="right">
                    <div class="sup">-</div>
                    <div class="num">{{unit}}</div>
                    <div class="add">+</div>
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
              <span class="num">88</span>
              <span>元/年</span>
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
  name: 'jiaotong',
  mixins: [replay],
  data () {
    return {
      pageTitle: '交通守护·意外伤害保险',
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
