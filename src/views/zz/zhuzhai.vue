<template>
  <div class="home">
    <div style="height:1px"></div>
    <div class="pages" ref="pages">
      <div class="box">
        <div class="pageTitle">{{pageTitle}}</div>
        <div class="page" ref="page">
          <div class="test">
            <img src="../../assets/zhuzhai/banner.png" mode="widthFix">
            <img src="../../assets/zhuzhai/plan.png" mode="widthFix" alt="">
            <div class="list">
              <div class="tab">
                <div class="tabItem">产品特色</div>
                <div class="tabItem">理赔说明</div>
                <div class="tabItem">我要投保</div>
              </div>
              <div class="imgList">
                <img src="../../assets/zhuzhai/p1.png" mode="widthFix">
                <img src="../../assets/zhuzhai/p2.png" mode="widthFix">
                <img src="../../assets/zhuzhai/p3.png" mode="widthFix">
              </div>
            </div>
            <div class="liucheng">
              <img src="../../assets/jiaotong/lipei.png">
              <div class="question">
                <div class="title">常见问题</div>
                <div class="item">
                  <div class="left">
                    <div class="icon">Q</div>
                    <div>室内附属设备包含哪些设备？</div>
                  </div>
                  <div v-if="question0" class="text">包含固定装置的水暖、气暖、卫生、供水管道、煤气及供电设备、厨房配套设备。</div>
                </div>
                <div class="item">
                  <div class="left">
                    <div class="icon">Q</div>
                    <div>室内财产包含哪些财产？</div>
                  </div>
                  <div v-if="question1" class="text">
                    <div>1、室内装潢；</div>
                    <div>2、家具及其它生活用具；</div>
                    <div>3、家用电器和文体娱乐用品；</div>
                    <div>4、衣物和床上用品。</div>
                  </div>
                </div>
                <div class="item">
                  <div class="left">
                    <div class="icon">Q</div>
                    <div>对投保的房屋有限制吗？</div>
                  </div>
                  <div v-if="question2" class="text">所投保房屋建筑结构要为钢结构；钢、钢筋混凝土结构；钢筋混凝土结构；钢或砖混合结构的房产，一般铁皮、木造、瓦造及营业用房屋不予承保；2.投保房屋必需是合法产权的房屋。</div>
                </div>
                <div class="item">
                  <div class="left">
                    <div class="icon">Q</div>
                    <div>哪些家庭财产不在本保险合同保险标的范围以内？</div>
                  </div>
                  <div v-if="question3" class="text">
                    <div>(一) 金银、珠宝、钻石及其制品、玉器、首饰、古币、古玩、字画、邮票、艺术品、稀有金属等珍贵财物；</div>
                    <div>(二) 货币、票证、有价证券、文件、书籍、帐册、图表、技术资料、电脑软件及资料、以及无法鉴定价值的财产；</div>
                    <div>(三) 日用消耗品（烟酒、食品、茶叶等）、各种交通工具、养殖及种植物、动物；</div>
                    <div>(四) 便携式通讯装置（平板电脑、手机）、笔、打火机、手表，各种磁带、磁盘、影音激光盘；</div>
                    <div>(五) 用于从事工商业生产（含成品、半成品）、经营活动的财产和出租用作工商业的房屋；</div>
                    <div>(六) 政府有关部门征用、占用的房屋，违章建筑、危险建筑、非法占用的财产、处于危险状态下的财产；</div>
                    <div>(七) 非钢结构，非钢、钢筋混凝土结构，非砖混合结构的房屋及存放在里面的财产；用芦席、稻草、油毛毡、麦杆、芦苇、竹竿、帆布、塑料布、纸板等为外墙、屋顶的简陋屋棚及柴房、禽畜棚、与保险房屋不成一体的厕所、围墙、无人居住的房屋以及存放在里面的财产；</div>
                    <div>(八) 其它不属于本保险条款所列明承保的家庭财产。</div>
                  </div>
                </div>
                <div class="item">
                  <div class="left">
                    <div class="icon">Q</div>
                    <div>18项风险保障包含哪些？</div>
                  </div>
                  <div v-if="question4" class="text">
                    <div>(一) 火灾、爆炸、雷击、台风、龙卷风、暴风、暴雨、洪水、雪灾、雹灾、冰凌、泥石流、崖崩、突发性滑坡、地面突然下陷；</div>
                    <div>(二) 飞行物体及其它空中运行物体坠落，外来不属于被保险人所有或使用的建筑物和其它固定物体的倒塌。</div>
                    <div>(三) 在发生保险事故时，为抢救保险标的或防止灾害蔓延，采取合理的、必要的措施而造成保险标的的损失；</div>
                    <div>(四) 保险事故发生后，被保险人为防止或者减少保险标的的损失所支付的必要的、合理的费用，由保险人承担。</div>
                  </div>
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
                  <div class="formList picker">
                    <div class="left">房屋结构</div>
                    <div class="right">{{houseType || '请选择'}}</div>
                  </div>
                  <div class="formList picker">
                    <div class="left">标的地址</div>
                    <div class="right">{{address || '请选择'}}</div>
                  </div>
                  <div class="formList">
                    <div class="left">详细地址</div>
                    <div class="right">{{detailAddress || '请输入'}}</div>
                  </div>
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
            <div class="price" v-if="Number(premium) > 0">
              <span class="num">{{premium}}</span>
              <span>元/年</span>
            </div>
            <div class="price" v-else>
              <span class="num">162</span>
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
  name: 'zhuzhai',
  mixins: [replay],
  data () {
    return {
      pageTitle: '住宅小区守护神·家庭财产保险',
      relation: '本人',
      houseType: '',
      address: '',
      detailAddress: ''
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
                  height: 40px;
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
            height: 50px;
            padding: 0 20px;
            line-height: 50px;
            background-color: #ffffff;
            margin: 9px 0 0;
            font-size: 16px;
            font-weight: bold;
          }
          .formContent {
            .form {
              background-color: #ffffff;
              padding: 0 15px;
              .title {
                height: 50px;
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
