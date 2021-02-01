<template>
  <div class="home">
    <div style="height:1px"></div>
    <div class="pages" ref="pages">
      <div class="box" v-if="!healthyShow">
        <div class="pageTitle">{{pageTitle}}</div>
        <div class="page" ref="page">
          <div class="test">
            <img src="../../assets/baiwan/banner.png" mode="widthFix">
            <img src="../../assets/baiwan/plan.png" mode="widthFix" alt="">
            <img class="serve" src="../../assets/baiwan/serve.png" mode="widthFix">
            <img src="../../assets/baiwan/price.png" mode="widthFix">
            <div class="list">
              <div class="tab">
                <div class="tabItem">产品特色</div>
                <div class="tabItem">理赔说明</div>
                <div class="tabItem">我要投保</div>
              </div>
              <div class="imgList">
                <img src="../../assets/baiwan/p1.png" mode="widthFix">
                <img src="../../assets/baiwan/p2.png" mode="widthFix">
                <img src="../../assets/baiwan/p3.png" mode="widthFix">
                <img src="../../assets/baiwan/p4.png" mode="widthFix">
                <img src="../../assets/baiwan/p5.png" mode="widthFix">
                <img src="../../assets/baiwan/p6.png" mode="widthFix">
              </div>
            </div>
            <div class="liucheng">
              <img src="../../assets/baiwan/lipei.png">
              <div class="question">
                <div class="title">常见问题</div>
                <div class="item">
                  <div class="left">
                    <div class="icon">Q</div>
                    <div>有了医保，还需要购买百万医疗险吗?</div>
                  </div>
                  <div v-if="question0" class="text">很有必要。目前治疗重疾的费用从几十万到几百万不等，一般医保只能覆盖治疗费用约65%，且治疗重疾所需的自费项目（伽马刀、质子治疗）等往往又是医保所不覆盖的。而幸福e家百万医疗没有这些限制，不仅可以涵盖，是对医保最好地商业保险补充。</div>
                </div>
                <div class="item">
                  <div class="left">
                    <div class="icon">Q</div>
                    <div>我还年轻有必要购买幸福e家百万医疗保险吗?</div>
                  </div>
                  <div v-if="question1" class="text">青壮年时期生理机能处于最佳状态，得病的可能性相对较低，但也会面临意外风险；当步入中老年后，身体机能会急剧下降，患病几率增大，但那时的健康状况将不再符合投保条件。因此健康险还是要趁早买，一方面防范于未然，另一方面还能获得连续续保的资格，获得长期保障哦。</div>
                </div>
                <div class="item">
                  <div class="left">
                    <div class="icon">Q</div>
                    <div>怎么样才能投保家庭版？与个人版有何区别？</div>
                  </div>
                  <div v-if="question2" class="text">与个人版相比，保障内容不变，但家庭投保享受更保费折扣，2人投保9.5折，3-7人投保保费享受9折优惠。若投保家庭版，被保险人人数为2人及以上，是投保人本人，或与投保人有保险利益的父母、配偶、子女以及配偶父母,但不允许隔代投保。</div>
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
                <div class="kindlist">
                  <div class="list" :class="{select: insuranceType == 0}">个人版</div>
                  <div class="list" :class="{select: insuranceType == 1}">家庭版2-7人</div>
                </div>
                <div class="title">
                  <div class="no">3</div>
                  <div>为谁投保（被保险人）</div>
                </div>
                <div class="other" v-for="(item, index) in personList" :key="index">
                  <div class="title">被保险人{{index + 1}}</div>
                    <div class="kindlist">
                      <div class="list" :class="{select: item.socialSecurity == 1}">有社保(含新农村)</div>
                      <div class="list" :class="{select: item.socialSecurity == 0}">无社保</div>
                    </div>
                    <div class="formList picker">
                      <div class="left">关系</div>
                      <div class="right">{{item.relation}}</div>
                    </div>
                    <template v-if="item.relation != '本人'">
                      <div class="formList">
                      <div class="left">姓名</div>
                      <div class="right">{{item.elseName || '请输入被保人中文姓名'}}</div>
                    </div>
                    <div class="formList picker">
                      <div class="left">证件类型</div>
                      <div class="right">{{item.elseCardType}}</div>
                    </div>
                    <div class="formList">
                      <div class="left">证件号码</div>
                      <div class="right">{{item.elseCardNo || '请输入证件号码'}}</div>
                    </div>
                    <div class="formList picker" v-if="item.elseCardType != '身份证'">
                      <div class="left">性别</div>
                      <div class="right">{{item.elseSex}}</div>
                    </div>
                    <div class="formList picker" v-if="item.elseCardType != '身份证'">
                      <div class="left">出生日期</div>
                      <div class="right">{{item.elseBirth || '请选择出生日期'}}</div>
                    </div>
                    <div class="formList">
                      <div class="left">手机号</div>
                      <div class="right">{{item.elsePhone || '请输入手机号码'}}</div>
                    </div>
                  </template>
                  <div class="formList picker addperson">
                    <div class="left">保费</div>
                    <div class="right">
                      <span class="price">{{item.total}}</span>元
                    </div>
                  </div>
                </div>
                <div class="kindlist" v-if="insuranceType == 1">
                  <div class="list select">新增被保人</div>
                </div>
              </div>
            </div>
            <div class="ruleList">
              <van-checkbox class="checkBox" icon-size="14px" shape="square" v-model="readFlag">
                我已确认
              </van-checkbox>
              <span class="lists">《投保须知》《保险条款》《投保声明》《免责事项》《隐私协议》《高危职业表》</span>
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
              <span class="num">162</span>
              <span>元/年起</span>
            </div>
            <div class="share">分享</div>
          </div>
          <div class="right">立即投保</div>
        </div>
      </div>
      <div class="box" v-else>
        <div class="pageTitle">健康告知</div>
        <div class="tips">为了保证被保险人的保险权益在理赔时不受到影响，请如实完成健康告知</div>
        <div class="noticeBox" ref="notice">
          <div class="notice">
            <div class="border">投保人确认所有被保险人没有以下情况：</div>
            <div>1.过去2年内投保人身保险或健康保险时，是否被保险公司拒保、延期、加费或者附加条件承保？</div>
            <div>2.目前是否从事高危职业(详见高危职业表)？</div>
            <div>3.过去1年内是否有<text class="fontRed">除以下情况外</text>的健康检查结果异常（如血液、超声、影像、内镜、病理检查）？</div>
            <div>a) 轻度脂肪肝:腹部B超提示为轻/中度脂肪肝且肝功能正常；</div>
            <div>b) 血脂偏高:未经药物控制的情况下，甘油三脂﹤4mmol/L且总胆固醇﹤7mmol/L；</div>
            <div>c) 高/低血压： 收缩压 （高压） 90mmHg~160mmHg或舒张压（低压）60mmHg~100mmHg；</div>
            <div>d) 鼻炎、咽炎、慢性扁桃体炎、腺样体肥大；</div>
            <div>e) 病毒性感冒引起的血常规检查异常;</div>
            <div>f) 体重过重（BMI小于等于30），但无血糖、血压、血脂异常；</div>
            <div>g) 尿酸升高： 但血清尿酸小于550uml/l, 无痛风症状；</div>
            <div>h) 乙肝病毒携带者，但肝功能（丙氨酸转氨酶（ALT，俗称谷丙转氨酶）和天门冬氨酸转氨酶（AST，俗称谷草转氨酶）)及肝脾超声无异常；</div>
            <div>i) 经检查有胆囊结石，但肝功能（谷丙转氨酶、谷草转氨酶、谷氨酰转移酶、 碱性磷酸、 总胆红素）结果无异常<text class="fontRed">（注：胆囊结石及其并发症和胆囊炎引起的治疗，不承担赔付责任）</text>；</div>
            <div>j) 经B超提示为肾囊肿<text class="fontRed">（注：肾囊肿及其并发症引起的治疗，不承担赔付责任）</text>；</div>
            <div>k) 经B超提示少于2个、且最大直径小于5MM 的肝囊肿<text class="fontRed">（注：肝囊肿及其并发症引起的治疗，不承担赔付责任）</text>；</div>
            <div>l) 经胃镜检查提示为浅表性胃炎，但不包括萎缩性胃炎<text class="fontRed">（注：浅表性胃炎及其并发症引起的治疗，不承担赔付责任）</text>；</div>
            <div>m) B超提示为乳腺小叶增生、或乳腺结节（BI-RADS 分类1-2级）、无占位<text class="fontRed">（注：乳腺结节及其并发症引起的治疗，不承担赔付责任）</text>；</div>
            <div>4.过去2年是否曾<text class="fontRed">除以下原因外</text>导致住院或有医生提出进一步复查、治疗或手术建议？</div>
            <div>a) 分娩；</div>
            <div>b) 急性呼吸系统疾病(含肺炎、上呼吸道感染等)；</div>
            <div>c) 急性胃肠炎、急性阑尾炎；</div>
            <div>d) 胆囊结石已进行胆囊切除手术；</div>
            <div>e) 胆囊息肉已进行胆囊切除手术且病理结果为良性;</div>
            <div>f) 胃肠息肉≤1cm，已进行切除手术且病理结果为良性；</div>
            <div>g) 意外受伤引起的软组织损伤；</div>
            <div>h) 意外住院在5天以内且已痊愈，并无后遗症或器官缺损；</div>
            <div>i) 鼻炎。</div>
            <div>5.<text class="fontRed">目前或过往是否患有下列疾病或症状</text>：良/恶性肿瘤、白血病、II级及以上高血压（收缩压大于160mmHg，或舒张压大于100mmHg）、糖尿病或空腹血糖大於等於7mmol/L、冠心病/冠状动脉狭窄、心肌梗死、风湿性心脏病、心功能不全二级以上、脑梗死/脑出血/脑血管畸形、慢性肾炎、肾病综合征、肾萎缩、肾髓质囊性病肾功能不全、肾切除、肝炎、肝炎病毒携带者、肝硬化、再生障碍性贫血、系统性红斑狼疮、类风湿性关节炎、帕金森氏病、癫痫、精神病、肺结核、慢性阻塞性肺病、瘫痪、慢性萎缩性胃炎、慢性胆囊炎、胆管结石、硬化性胆管炎、传导性耳聋、椎间盘突出症、克罗恩病（节段性肠炎）、溃疡性结肠炎、先天性疾病、法定传染病（包含甲类及乙类）、肿瘤标记物或病理学检查异常、胃肠息肉（不含胃肠息肉≤1cm，已进行切除手术且病理结果为良性）、甲状腺结节、痛风？</div>
            <div>6.<text class="fontRed">过去1年内是否存在下列症状</text>：反复头痛、晕厥、胸痛、气急、紫绀、持续反复发热、抽搐、不明原因皮下出血点、咯血、反复呕吐、进食梗噎 感或吞咽困难、呕血、浮肿、腹痛、黄疸（新生儿黄疸且已治愈的除外）、便血、血尿、蛋白尿、不明原因消瘦（体重减轻5公斤以上）、职业病、酒精中毒、其他药品中毒、智能障碍、五官/脊柱/胸廓/四肢/手指/足趾缺损/畸形或功能障碍？</div>
            <div>7.2周岁以下被保险人是否存在以下情况：出生时体重低于2.5公斤、早产、窒息、发育迟缓、脑瘫？</div>
            <div>8.被保险人在投保前是否确诊感染新型冠状病毒或被确认疑似病例（以影像学诊断为准），或已在定点隔离，或者投保时体温超过37.2℃？</div>
            <div class="border"><text class="fontRed">所有被保险人以上事项均为“否”，则符合投保条件。</text>如有隐瞒或告知不实，影响保险公司承保决定的，所签发的保单视为无效，保险公司有权解除合同，并对合同解除前所发生的任何保险事故不承担任何责任。</div>
          </div>
          <div class="healthbtn">
            <div class="noAllow">部分符合条件</div>
            <div class="allow">全部符合条件</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mask"></div>
    <video id="awesome" width="375" height="667" controls autoplay loop></video>
    <track-button @click="begin" :loading="loading"></track-button>
  </div>
</template>

<script>
import { get } from '@/utils/jutils.js'
import { getUserInfo } from '@/api/api.js'
import html2canvas from 'html2canvas'
import Whammy from 'whammy'
// import { setTimeout, clearInterval } from 'timers'
export default {
  name: 'baiwan',
  data () {
    return {
      pageTitle: '幸福e家·百万医疗保险(升级版)',
      selfName: '边云',
      selfCardType: '身份证',
      selfCardNo: '130184197911244529',
      selfSex: '女',
      selfBirth: '1979-11-24',
      selfPhone: '18566688104',
      insuranceType: 0,
      personList: [
        {
          socialSecurity: 1,
          relation: '本人',
          elseName: '',
          elseCardType: '身份证',
          elseCardNo: '',
          elseSex: '',
          elseBirth: '',
          elsePhone: '',
          total: 0
        }
      ],
      personItem: {
        socialSecurity: 1,
        relation: '本人',
        elseName: '',
        elseCardType: '身份证',
        elseCardNo: '',
        elseSex: '',
        elseBirth: '',
        elsePhone: '',
        total: 0
      },
      readFlag: false,
      video: null,
      list: [],
      pages: null,
      saveCanvas: null,
      timer: null,
      question0: false,
      question1: false,
      question2: false,
      select: null,
      premium: 0,
      totalMoney: 0,
      loading: false,
      healthyShow: false,
      cardType: {
        '111': '身份证',
        '414': '护照',
        '511': '台胞证',
        '516': '港澳台居民证'
      },
      sexList: {
        '1': '男',
        '2': '女'
      }
    }
  },
  methods: {
    finalizeVideo () {
      const output = this.video.compile(false)
      console.log(output)
      const url = URL.createObjectURL(output)
      document.getElementById('awesome').src = url
      this.loading = false
    },
    createFrame () {
      html2canvas(this.$refs.pages, {
        allowTaint: true,
        useCORS: true,
        backgroundColor: null,
        imageTimeout: 0,
        removeContainer: true,
        foreignObjectRendering: false
      }).then(canvas => {
        this.video.add(canvas)
        this.saveCanvas = canvas
      })
    },
    createSaveFrame () {
      this.video.add(this.saveCanvas)
    },
    createVideos () {
      const createVideo = (index) => {
        clearInterval(this.timer)
        const item = this.list[index]
        if (item.type === 1) {
          this.select = this.healthyShow ? this.$refs.notice : this.$refs.page
          this.select.scrollTop = item.top
        } else if (item.type === 2 || item.type === 9 || item.type === 5) {
          if (item.numbers) {
            this.personList[item.numbers][item.inputParam] = item.inputValue
          } else {
            this[item.inputParam] = item.inputValue
          }
        } else if (item.type === 6) {
          this[item.inputParam] = item.isShow === 'true'
        } else if (item.type === 8) {
          this.personList.push(this.personItem)
        }
        this.createFrame()
        this.timer = setInterval(() => {
          this.createSaveFrame()
        }, 200)
        if (index < this.list.length - 1) {
          window.setTimeout(() => {
            createVideo(index + 1)
          }, item.time * 5)
        } else {
          console.log('生成结束' + new Date())
          window.clearInterval(this.timer)
          window.requestAnimationFrame(this.finalizeVideo)
        }
      }
      createVideo(1)
    },
    begin () {
      this.loading = true
      this.select = this.$refs.page
      this.createVideos()
    },
    async getInfo (params) {
      const { code, data } = await getUserInfo(params)
      console.log(code, data)
      if (code === 200) {
        this.selfName = data.name
        this.selfCardType = this.cardType[data.cardType]
        this.selfCardNo = data.cardNumber
        this.selfSex = this.sexList[data.sex]
        this.selfBirth = data.brithday
        this.selfPhone = data.phone
      }
    }
  },
  mounted () {
    const query = this.$route.query
    get(query.id, (list) => {
      this.list = list
    })
    const params = {
      id: query.userId
    }
    this.getInfo(params)
    this.video = new Whammy.Video(25)
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
        .tips {
          padding: 7px 15px;
          background-color: #e5e5e5;
        }
        .noticeBox {
          padding: 10px 15px 0;
          background-color: #ffffff;
          height: 479px;
          overflow-y: auto;
          .notice {
            padding: 10px;
            background-color: #F5F5F5;
            line-height: 25px;
            position: relative;
          }
        }
        .healthbtn {
          height: 44px;
          padding-top: 15px;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          justify-content: space-between;
          .noAllow, .allow {
            width: 50%;
            text-align: center;
            border-top: 1px solid #eeeeee;
            height: 44px;
            line-height: 44px;
          }
          .allow {
            background-color: #007BD9;
            color: #ffffff;
          }
        }
      }
    }
    .other {
      padding-bottom: 20px;
    }
  }
</style>
