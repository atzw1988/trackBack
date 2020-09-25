<template>
  <div class="ruleDetail">
    <div v-if="rule">{{rule}}</div>
    <div v-if="ruleS">{{ruleS}}</div>
    <div v-if="ruleD">{{ruleD}}</div>
  </div>
</template>

<script>
import { createRule } from '@/utils/util'
import { getRule } from '@/api/api'

export default {
  name: 'RuleDetail',
  props: {
    roadId: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      rule: '',
      ruleS: '',
      ruleD: ''
    }
  },
  mounted () {
    console.log(this.roadId)
    this.getRule()
  },
  methods: {
    // 获取车位的收费规则
    getRule () {
      const params = {
        roadId: this.roadId
      }
      getRule(params).then(res => {
        console.log(res)
        if (res.code === 1) {
          const standard = res.data.standard
          if (standard.length > 1) {
            this.createRuleD(standard)
            this.rule = ''
          } else {
            this.rule = createRule(standard[0], standard[0].detailsList)
            this.ruleS = ''
            this.ruleD = ''
          }
        }
      })
    },
    // 根据多条规则明细生成收费标准文档
    createRuleD (arr) {
      arr.forEach(item => {
        if (item.work === 1) {
          this.ruleS = '工作日：' + createRule(item, item.detailsList)
        }
        if (item.work === 2) {
          this.ruleD = '非工作日：' + createRule(item, item.detailsList)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.ruleDetail {
  text-align: justify;
}
</style>
