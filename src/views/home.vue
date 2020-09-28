<template>
    <div></div>
</template>
<script>
import { Toast } from 'vant'
import Vue from 'vue'
import { ACCESS_TOKEN } from '@/store/mutation-types'
export default {
    data () {
        return {}
    },
    mounted () {
        const query = this.$route.query
        let pageName = query.pageName
        if (pageName) {
            Vue.ls.set(ACCESS_TOKEN, query.token)
            const list = ['stateFa', 'stateJn', 'stateJw', 'stateJt', 'stateZz']
            if (list.indexOf(pageName) > -1) pageName = 'state'
            this.$router.push({
                name: pageName,
                query: query
            })
        } else {
            Toast.fail('缺少参数')
        }
    }
}
</script>
<style lang="less" scoped>

</style>
